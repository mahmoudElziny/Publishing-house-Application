import mongoose, {Schema, model} from "mongoose";


const authorSchema = new Schema(
    {
        name: {
            type: String,
            required: true,
            unique: true
        },
        bio: {
            type: String
        },
        birthDate: {
            type: Date
        },
        books: [Schema.Types.ObjectId] 
    },
    {timestamps: true , versionKey: false}
);

export default mongoose.models.Author || model('Author', authorSchema);
