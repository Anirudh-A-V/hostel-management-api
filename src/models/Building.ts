import mongoose from "mongoose";

const Schema = mongoose.Schema;

const buildingSchema = new Schema({
    buildingId: {
        type: String,
        required: true,
        unique: true
    },
    name: {
        type: String,
        required: true,
    },
    hostel: {
        type: Schema.Types.ObjectId,
        ref: 'Hostel',
        required: true,
    },
    noOfFloors: {
        type: Number,
        required: true,
    },
    noOfRooms: {
        type: Number,
        required: true,
    },
    noofWashrooms: {
        type: Number,
        required: true,
    },
    noofBathrooms: {
        type: Number,
        required: true,
    }
});

export default mongoose.model('Building', buildingSchema);