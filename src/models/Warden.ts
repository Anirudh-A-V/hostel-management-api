import mongoose from "mongoose";

const Schema = mongoose.Schema;

const wardenSchema = new Schema({
    wardenId: {
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
    }
});

export default mongoose.model('Warden', wardenSchema);