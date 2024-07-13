import Udhaar from "../model/udhaar.model.js";

export const getUdhaar = async (req, res) => {
    try {
        const udhaar = await Udhaar.find().exec(); // Ensure to await the query result
        res.status(200).json(udhaar);
    } catch (error) {
        console.log("Error:", error);
        res.status(500).json({ error: error.message }); // Send an error response with message
    }
};
