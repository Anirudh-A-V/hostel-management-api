import mongoose from "mongoose";

const Schema = mongoose.Schema;

const guestSchema = new Schema({
    guestId: {
        type: String,
        required: true,
        unique: true
    },
    name: {
        type: String,
        required: true,
    },
    age: {
        type: Number,
        required: true,
    },
    gender: {
        type: String,
        required: true,
    },
    phone: {
        type: String,
        required: true,
    },
    address: {
        type: String,
        required: true,
    },
    email: {
        type: String,
        required: true,
    },
    hostel: {
        type: Schema.Types.ObjectId,
        ref: 'Hostel',
    },
    room: {
        type: Schema.Types.ObjectId,
        ref: 'Room',
    },
    Purpose: {
        type: String,
        required: false,
    },
    checkIn: {
        type: Date,
        required: true,
    },
    Duration: {
        type: Number,
        required: true,
    },
    hasCheckedOut: {
        type: Boolean,
        required: true,
        default: false
    },
    checkOut: {
        type: Date,
        required: false,
    }
});

export default mongoose.model('Guest', guestSchema);