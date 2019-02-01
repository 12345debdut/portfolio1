const express=require('express');
const router=express.Router();
const blogcntrl=require('../controllers/blog');
const authService=require('../services/auth')

router.get('',blogcntrl.getBlogs);
router.get('/me',
            authService.checkJWT,
            authService.checkRole('admin'),
            blogcntrl.getUserBlogs);
router.get('/:id',blogcntrl.getBlogById);
router.get('/s/:slug',blogcntrl.getBlogBySlug);
router.post('',
            authService.checkJWT,
            authService.checkRole('admin'),
            blogcntrl.createBlog);
router.patch('/:id',
            authService.checkJWT,
            authService.checkRole('admin'),
            blogcntrl.updateBlog);
router.delete('/:id',
            authService.checkJWT,
            authService.checkRole('admin'),
            blogcntrl.deleteBlog);
module.exports=router;