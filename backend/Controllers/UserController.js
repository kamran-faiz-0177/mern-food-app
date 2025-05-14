const UserModel = require("../Models/UserModel");
const bcrypt = require("bcrypt");

const Signup = async (req, res) => {
    try {
        const { name, email, password } = req.body;

        const existingUser = await UserModel.findOne({ email });
        if (existingUser) {
            return res.status(409).json({
                message: 'User already exists. Please sign in.',
            });
        }

        const hashedPassword = await bcrypt.hash(password, 10);
        const newUser = new UserModel({ name, email, password: hashedPassword });
        await newUser.save();

        res.status(201).json({
            message: 'User created successfully. Please sign in.',
            success: true,
        });
    } catch (error) {
        res.status(500).json({
            message: 'Internal server error. Failed to sign up.',
            error: error.message,
        });
    }
};

const Signin = async (req, res) => {
    try {
        const { email, password } = req.body;

        const existingUser = await UserModel.findOne({ email });
        if (!existingUser) {
            return res.status(404).json({
                message: 'User does not exist. Please sign up.',
            });
        }

        const isPasswordCorrect = await bcrypt.compare(password, existingUser.password);
        if (!isPasswordCorrect) {
            return res.status(401).json({
                message: 'Email or password is incorrect.',
            });
        }

        return res.status(200).json({
            message: 'Signed in successfully.',
            success: true,
        });
    } catch (error) {
        return res.status(500).json({
            message: 'Internal server error. Failed to sign in.',
            error: error.message,
        });
    }
};


module.exports = { Signup, Signin };