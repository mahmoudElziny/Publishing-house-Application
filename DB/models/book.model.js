import mongoose, { model, Types, Schema } from "mongoose";

const bookSchema = new Schema(
    {
        title: {
            type: String,
            required: true
        },
        content: {
            type: String,
            required: true
        } ,
        author: {
            type: Schema.Types.ObjectId,
            ref: "Author",
            required: true
        },
        publishedDate: {
            type: Date,
            default: Date.now()
        }
    },
    {timestamps: true, versionKey: false}
);

export default mongoose.models.Book || model('Book', bookSchema);

