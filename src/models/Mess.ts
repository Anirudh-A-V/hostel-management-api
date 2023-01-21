import mongoose from "mongoose";

const Schema = mongoose.Schema;

const messSchema = new Schema({
    messId: {
        type: String,
        required: true,
        unique: true
    },
    hostelId: {
        type: Schema.Types.ObjectId,
        ref: 'Hostel',
        required: true,
    },
    menu : {
        type: [Schema.Types.ObjectId],
        ref: 'Menu',
        required: true,
    },
    name: {
        type: String,
        required: true,
        unique: true
    },
    type: {
        type: String,
        required: true,
    }
});

export default mongoose.model('Mess', messSchema);