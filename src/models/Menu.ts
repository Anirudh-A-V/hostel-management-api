import mongoose from "mongoose";

const Schema = mongoose.Schema;

const menuSchema = new Schema({
    day: {
        type: String,
        required: true,
        unique: true
    },
    breakfastVeg: {
        type: Schema.Types.ObjectId,
        ref: 'Food',
        required: false,
    },
    lunchVeg: {
        type: Schema.Types.ObjectId,
        ref: 'Food',
        required: false,
    },
    snackVeg: {
        type: Schema.Types.ObjectId,
        ref: 'Snack',
        required: false,
    },
    dinnerVeg: {
        type: Schema.Types.ObjectId,
        ref: 'Food',
        required: false,
    },
    breakfastNonVeg: {
        type: Schema.Types.ObjectId,
        ref: 'Food',
        required: true
    },
    lunchNonVeg: {
        type: Schema.Types.ObjectId,
        ref: 'Food',
        required: true
    },
    snackNonVeg: {
        type: Schema.Types.ObjectId,
        ref: 'Snack',
        required: true
    },
    dinnerNonVeg: {
        type: Schema.Types.ObjectId,
        ref: 'Food',
        required: true
    },
});

export default mongoose.model('Menu', menuSchema);