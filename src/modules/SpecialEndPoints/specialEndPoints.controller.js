import bookModel from "../../../DB/models/book.model.js";
import authorModel from "../../../DB/models/author.model.js";
import { ObjectId } from 'mongodb';



export const retrievingAllBooksAndAuthors = async (req, res) => {
    try {
        const books = await bookModel.aggregate([{
            $lookup: {
                from: "authors",
                localField: "author",
                foreignField: "_id",
                as: "authorData"
            }
        }]);

        res.json({message: "all books and auhors", books});

    } catch (error) {
        console.log(error);
        res.json("something went wrong with retrieving all Books and Authors");
    }
}

export const filterBooksByTitleOrAuthor = async (req, res) => {
    try {
        const { title, author} = req.body;

        if(title || author){
            const books = await bookModel.find({ $or:[{title},{author}]}).exec();
            return res.json({message:"books :", books});
        }else{
            res.json({message:"enter title or authorID"});
        }

    } catch (error) {
        console.log(error);
        res.json("something went wrong with retrieving books");
    }
}

export const filterAuthorsByNameOrBio = async (req, res) => {
    try {
        const { name, bio} = req.body;

        if(name || bio){
            const authors = await authorModel.find({ $or:[{name},{bio}]}).exec();
            return res.json({message:"authors :", authors});
        }else{
            res.json({message:"enter name or bio"});
        }

    } catch (error) {
        console.log(error);
        res.json("something went wrong with retrieving authors");
    }
}

export const retrievingAuthorAndHisBooks = async (req, res) => {
    try {
        const { name, _id } = req.body;
        if(name || _id){
            const author = await authorModel.aggregate([
            { $match: {$or: [ { name },{_id: new ObjectId(_id)} ]}},
            {$lookup:{
                    from:"books",
                    localField: "books",
                    foreignField: "_id",
                    as: "his books",
                }
            }]);
    
            return res.json({message: "author with his books", author});
        }else{
            return res.json({message: "Enter name or author ID"});
        }
        

    } catch (error) {
        console.log(error);
        res.json("something went wrong with retrieving the Author");
    }
}

