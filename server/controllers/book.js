const Book=require("../models/book");

exports.getBookData=(req,res)=>{
    Book.find({},(err,allbooks)=>{
      if(err){
        return res.status(422).send(err)
      }
      return res.json(allbooks);
    })
  };

exports.saveBookData=(req,res)=>{
    const BookData=req.body;
    const book=new Book(BookData);
    book.save((err,createdBook)=>{
      if(err){
        return res.status(422).send(err);
      }
      return res.json(createdBook);
    });
  };

exports.deleteBookData=(req,res)=>{
    const bookId=req.params.id;
    Book.deleteOne({_id:bookId},(err,deletedBook)=>{
      if(err)
      {
        return res.status(422).send(err)
      }
      return res.json(deletedBook);
    })
  };

exports.updateBook=(req,res)=>{
    const bookId=req.params.id;
    const bookData=req.body;
    Book.findById(bookId,(err,foundBook)=>{
      if(err)
      {
        return res.status(422).send(err);
      }
      foundBook.set(bookData);
      foundBook.save((err,savedBook)=>{
        if(err)
        {
          res.status(422).send(err)
        }
        else{
          return res.json(savedBook);
        }
      })
    })
  };