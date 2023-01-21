import mongoose from "mongoose";

const Schema = mongoose.Schema;

const menuSchema = new Schema({
    day: {
        type: String,
        required: true,
        unique: true
    },
    breakfast: {
        type: Schema.Types.ObjectId,
        ref: 'Food',
        required: true,
    },
    lunch: {
        type: Schema.Types.ObjectId,
        ref: 'Food',
        required: true,
    },
    snack: {
        type: Schema.Types.ObjectId,
        ref: 'Snack',
        required: true,
    },
    dinner: {
        type: Schema.Types.ObjectId,
        ref: 'Food',
        required: true,
    }
});

export default mongoose.model('Menu', menuSchema);