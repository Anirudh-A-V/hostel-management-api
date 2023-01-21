import mongoose from "mongoose";

const Schema = mongoose.Schema;

const workerSchema = new Schema({
    workerId: {
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
    hostel: {
        type: Schema.Types.ObjectId,
        ref: 'Hostel',
    },
    phone: {
        type: String,
        required: true,
    },
    address: {
        type: String,
        required: true,
    },
    salary: {
        type: Number,
        required: true,
    },
    position: {
        type: String,
        required: true,
    },
    joinDate: {
        type: Date,
        required: true,
    },
    hasLeft: {
        type: Boolean,
        required: true,
        default: false
    },
    leaveDate: {
        type: Date,
        required: false,
    },
    leaveReason: {
        type: String,
        required: false,
    }
});

export default mongoose.model('Worker', workerSchema);