import authorModel from "../../../DB/models/author.model.js";

export const createAuthor = async (req, res) => {
    try {
        const { name, bio, birthDate, books } = req.body;
        
        const author = {
            name,
            bio,
            birthDate,
            books
        } 

        const newAuthor = await authorModel.create(author);

        res.json({message:"Author created successfully", data: newAuthor});

    } catch (error) {
        console.log(error);
        res.json("somthing went wrong with creating new Author");
    }
}

export const getAllAuthors = async (req, res) => {
    try {
        const authors = await authorModel.find({});
        res.json({message: "All Authors", authors});

    } catch (error) {
        console.log(error);
        res.json("somthing went wrong with retrieving the authors");
    }
    
}

export const getAuthorById = async (req, res) => {
    try {
        const { _id } = req.params;
        const isAuthorExists = await authorModel.findById(_id).exec();

        if(isAuthorExists){
            return res.json({message:"the Author " , isAuthorExists});
        }
        
        return res.json({message:"can not find the author"});

    } catch (error) {
        console.log(error);
        res.json("somthing went wrong with retrieving the author");
    }
}

export const updateAuthorById = async (req, res) => {
    try {
        const { _id } = req.params;
        const { name, bio, birthDate, books } = req.body;

        if( name && bio && birthDate && books){
            const author = await authorModel.findByIdAndUpdate( _id, { name, bio, birthDate, books }, { new: true});
            if(author == null){
                return res.json({message:"can not find author with this ID", author});
            }else{
                return res.json({message:"author is updated", author});
            }
        }else{
            res.json({message: "initialize all fields"});
        }
    } catch (error) {
        console.log(error);
        res.json("something went wrong with updating the author");
    }
}

export const deleteAuthorById = async (req, res) => {
    try {
        const { _id } = req.params;

        const author = await authorModel.findByIdAndDelete( _id );

        if(author == null){
            return res.json("can not find author by this ID");
        }else{
            return res.json({message: "author is deleted" , author});
        }

    } catch (error) {
        console.log(error);
        res.json("something wrong with deleting this author");
    }
}