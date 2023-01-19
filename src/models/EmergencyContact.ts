import mongoose from "mongoose";

const Schema = mongoose.Schema;

const emergencyContactSchema = new Schema({
    studentId: {
        type: Schema.Types.ObjectId,
        ref: 'Student',
    },
    name: {
        type: String,
        required: true,
    },
    relationship: {
        type: String,
        required: true,
    },
    phone: {
        type: String,
        required: true,
    },
    additionalContact: {
        type: String,
        required: false,
    },
    email: {
        type: String,
        required: true,
    },
    address: {
        type: String,
        required: true,
    }
});

export default mongoose.model('EmergencyContact', emergencyContactSchema);