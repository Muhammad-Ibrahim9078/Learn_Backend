import mongoose from "mongoose";

const userSchema = mongoose.Schema(
    {
        userName: {
            type: String,
            required: true,
            unique: true,
        },
        password: String,
        role: {
            type: String,
            required: true,
            enum: ["admin", "customer"],
        },
        address: {
            type: String,
            default: null,
        },
    },
    {
        collection: "IB_Dev",
        timestamps: true
    }
);


const UserModal = mongoose.model("User", userSchema);
export default UserModal;