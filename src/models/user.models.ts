import { Schema, model } from 'mongoose';

const userSchema = new Schema(
    {
        name: {
            type: String,
            required: [true, 'Name is required'],
            trim: true,
            minlength: [2, 'Name must be at least 2 characters long'],
            maxlength: [50, 'Name must be less than 50 characters'],
        },
        email: {
            type: String,
            trim: true,
            unique: true,
            required: [true, 'Email is required'],
            // Simple regex for email validation
            match: [/\S+@\S+\.\S+/, 'Email is invalid'],
        },
        password: {
            type: String,
            required: [true, 'Password is required'],
            minlength: [8, 'Password must be at least 8 characters long'],
        },
    },
    {
        // Adds createdAt and updatedAt fields automatically
        timestamps: true,
    },
);

const UserModel = model('user', userSchema);

export { UserModel };
