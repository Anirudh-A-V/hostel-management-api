import mongoose from "mongoose";

const Schema = mongoose.Schema;

const hostelSchema = new Schema({
    hostelId: {
        type: String,
        required: true,
        unique: true
    },
    name: {
        type: String,
        required: true,
        unique: true
    },
    type: {
        type: String,
        required: true,
    },
    address: {
        type: String,
        required: true,
    },
    pincode: {
        type: String,
        required: true,
    },
    contact: {
        type: String,
        required: true,
    },
    email: {
        type: String,
        required: true,
    },
    website: {
        type: String,
        required: false,
    },
    description: {
        type: String,
        required: false,
    }
});

export default mongoose.model('Hostel', hostelSchema);
