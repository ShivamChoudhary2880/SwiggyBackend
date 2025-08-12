const Grocery = require('../models/Grocery')

exports.createGrocery = async (req, res) => {
    try {

        const { name } = req.body;

        const imageUrl = req.file.path;

        if (!name) {
            return res.status(400).json({
                message: "name is required",
                success: false,
            });
        }

        if (!imageUrl) {
            return res.status(400).json({
                message: "Image is required",
                success: false,
            })
        }

        const newGrocery = new Grocery({
            name,
            image: imageUrl,
        });

        await newGrocery.save();

        return res.status(201).json({
            message: "Grocery create successfully",
            Data: newGrocery,
            success: true,
        });

    } catch (error) {
        console.error("Error in creating Grocery", error);
        return res.status(500).json({
            message: "Server error",
            error: error.message,
            success: false,
        });
    }
};

exports.getAllGrocery = async (req, res) => {
    try {
        const groceries = await Grocery.find();
        return res.status(200).json({
            message: "All groceries fetched successfully",
            data: groceries,
            success: true
        });

    } catch (error) {
        console.error("Error in getting grocery", error);
        return res.status(500).json({
            message: "Server error",
            error: error.message,
            success: false,
        })
    }
};

exports.updateGrocery = async (req, res) => {
    try {
        const updatedData = { ...req.body };

        if (req.file) {
            updatedData.Image = req.flle.path;
        }

        const updateGrocery = await Grocery.findByIdAndUpdate(
            req.params.id,
            updatedData,
            { new: true, runValidators: true }
        );
        if (!updateGrocery) {
            return res.status(404).json({
                message: "grocery not found",
                success: false,
            })
        }
        return res.status(200).json({
            message: "grocery updated successfully",
            success: true,
            data: updateGrocery,
        })
    } catch (error) {
        console.error("Error while updating the grocery", error);
        return res.status(500).json({
            message: "Server error",
            error: error.message,
            success: false
        })
    };
};