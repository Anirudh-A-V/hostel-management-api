import mongoose from "mongoose";

const Schema = mongoose.Schema;

const roomSchema = new Schema({
    number: {
        type: String,
        required: true,
        unique: true
    },
    hostel: {
        type: Schema.Types.ObjectId,
        ref: 'Hostel',
    },
    type: {
        type: String,
        required: true,
    },
    description: {
        type: String,
        required: false,
    },
    price: {
        type: Number,
        required: true,
    },
    availability: {
        type: Boolean,
        required: true,
        default: true
    }
});

export default mongoose.model('Room', roomSchema);