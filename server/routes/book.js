const express=require('express');
const router=express.Router();
const bookCtnl=require('../controllers/book');
router.post('',bookCtnl.saveBookData);
  
  router.get('',bookCtnl.getBookData);
  router.patch('/:id',bookCtnl.updateBook)
  router.delete('/:id',bookCtnl.deleteBookData)
  module.exports=router;