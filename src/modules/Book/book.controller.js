import bookModel from '../../../DB/models/book.model.js' 


export const createBook = async (req, res) => {
    try {
        const { title, content, author, publishedDate } = req.body;
        
        const book = {
            title,
            content,
            author,
            publishedDate
        } 

        const newBook = await bookModel.create(book);

        res.json({message:"Book created successfully", data: newBook});

    } catch (error) {
        console.log(error);
        res.json("somthing went wrong with creating new book");
    }
}

export const getAllBooks = async (req, res) => {
    try {

        const books = await bookModel.find({});
        res.json({message: "All Books", books});

    } catch (error) {
        console.log(error);
        res.json("somthing went wrong with retrieving the books");
    }
    
}

export const getBookById = async (req, res) => {
    try {
        const { _id } = req.params;
        const isBookExits = await bookModel.findById(_id).exec();

        if(isBookExits){
            return res.json({message:"the book " , isBookExits});
        }
        
        return res.json({message:"can not find the book"});

    } catch (error) {
        console.log(error);
        res.json("somthing went wrong with retrieving the book");
    }
}

export const updateBookById = async (req, res) => {
    try {
        const { _id } = req.params;
        const { title, content, author, publishedDate } = req.body;

        if(title && content && author && publishedDate){
            const book = await bookModel.findByIdAndUpdate( _id, { title, content, author, publishedDate }, { new: true});
            if(book == null){
                return res.json({message:"can not find book with this ID", book});
            }else{
                return res.json({message:"book is updated", book});
            }
        }else{
            res.json({message: "initialize all fields"});
        }
    } catch (error) {
        console.log(error);
        res.json("something went wrong with updating the book");
    }
}

export const deleteBookById = async (req, res) => {
    try {
        const { _id } = req.params;

        const book = await bookModel.findByIdAndDelete( _id );

        if(book == null){
            return res.json("can not find book by this ID");
        }else{
            return res.json({message: "book is deleted" , book});
        }

    } catch (error) {
        console.log(error);
        res.json("something wrong with deleting this book");
    }
}