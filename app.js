const express = require("express");
const app = express();
const connectDB = require("./config/db");
const PORT = process.env.PORT || 3000;  
const userRouter = require("./routes/userRoutes");
const profileRoutes = require("./routes/profileRoutes");
const cookieParser = require("cookie-parser");

app.use(express.json());
app.use(cookieParser());

connectDB()
app.use("/v1/api", userRouter)
app.use("/v1/api/profile", profileRoutes); 

app.listen(PORT, () => {
    console.log(`Server is running on PORT ${PORT}`);
});