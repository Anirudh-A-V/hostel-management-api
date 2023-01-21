import mongoose from "mongoose";

const Schema = mongoose.Schema;

const foodSchema = new Schema({
    name: {
        type: String,
        required: true,
        unique: true
    },
    description: {
        type: String,
        required: false,
    },
    price: {
        type: Number,
        required: true,
    },
    type: {
        type: String,
        required: true,
    },
    image: {
        type: String,
        required: false,
    }
});

export default mongoose.model('Food', foodSchema);
