import mongoose from "mongoose";

const udhaarSchema = mongoose.Schema({
    name: String,
    mobile_number: String,
    description: String,
    total_amount: Number,
    entries: [{
        description: String,
        category: String,
        price: Number,
        date: String
    }]
});

const Udhaar = mongoose.model("Udhaar", udhaarSchema);

export default Udhaar;
