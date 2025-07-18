const express = require("express");
const app = express();
const connectDB = require("./config/db");
const PORT = process.env.PORT || 3000;  
const userRouter = require("./routes/userRoutes");
const profileRoutes = require("./routes/profileRoutes");
const cookieParser = require("cookie-parser");
const uploadRoutes = require('./routes/uploadRouter');
const restaurantRoutes = require('./routes/restaurantRoutesr')
const cors = require('cors');

app.use(express.json());
app.use(cookieParser());

connectDB()

app.use(
    cors({
        origin: process.env.FRONT_END_URL,
        credentials: true,
    })
);

app.use("/v1/api/upload", uploadRoutes);
app.use("/v1/api", userRouter)
app.use("/v1/api/profile", profileRoutes); 
app.use('/v1/api/restaurant', restaurantRoutes);

app.use("/", (req, res) => {
    res.send("Backend is live now");
});

app.listen(PORT, () => {
    console.log(`Server is running on PORT ${PORT}`);
});