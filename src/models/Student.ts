import mongoose from "mongoose";

const Schema = mongoose.Schema;

const studentSchema = new Schema({
    studentId: {
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
    yearOfStudy: {
        type: Number,
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
    phone: {
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
    AdmissionDate: {
        type: Date,
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
    },
    checkOutReason: {
        type: String,
        required: false,
    }
});

export default mongoose.model('Student', studentSchema);