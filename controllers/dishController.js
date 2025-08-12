const Dish = require('../models/Dish');
const User = require('../models/User');

exports.createDish = async (req, res) => {
    try {
        const { name } = req.body;

        const imageUrl = req.file.path;

        if (!name) {
            return res.status(400).json({
                message: "name is required",
                success: false,
            });
        }

        if (!req.file) {
            return res.status(400).json({
                message: "Image is required",
                success:false,
            })
        }

        const newDish = new Dish({
            name,
            image: imageUrl
        });

        await newDish.save();

        return res.status(201).json({
            message: "Dish created successfully",
            data: newDish,
            success: true
        });
            
    } catch (error) {
        console.error("Error creating Dish", error);
        return res.status(500).json({
            message: "Server error",
            error: error.message,
            success: false
        });
    }
};

exports.getAllDish = async (req, res) => {
    try {
        const dishes = await Dish.find();
        return res.status(200).json({
            message: "All dishes fetched successfully",
            data: dishes,
            success: true
        });

    } catch (error) {
        console.error("Error in getting Dish", error);
        return res.status(500).json({
            message: "Server error",
            error: error.message,
            success: false
        })
    }
};

exports.updateDish = async (req, res) => {
    try {
        const updatedData = { ...req.body };

        if (req.file) {
            updatedData.image = req.file.path;
        }

        const updateDish = await Dish.findByIdAndUpdate(
            req.params.id,
            updatedData,
            { new: true, runValidators: true }
        );
        if (!updateDish) {
            return res.status(404).json({
                message: "Dish not found",
                success: false
            })
        }
        return res.status(200).json({
            message: "Dish updated successfully",
            success: true,
            data: updateDish
        })
    } catch (error) {
        console.error("server in update dish", error);
        return res.status(500).json({
            message: "Server error",
            error: error.message,
            success: false
        })
    };
};

exports.deleteDish = async (req, res) => {
    try {
        const deleteDish = await Dish.findByIdAndDelete(req.body.id);
        if (!deleteDish) {
            return res.status(404).json({
                message: "Dish not found",
                success: false
            })
        }
        return res.status(200).json({
            message: "Dish deleted successfully",
            success: true
        })
    } catch (error) {
        console.error("server error", error);
        return res.status(500).json({
            message: "Server error",
            error: error.message,
            success:false
        })
    }
}