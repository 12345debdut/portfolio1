const express=require('express');
const router=express.Router();
const portfoliocntrl=require('../controllers/portfolio');
const authService=require('../services/auth')
router.get('',portfoliocntrl.getportfolio);
router.post('',
            authService.checkJWT,
            authService.checkRole('admin'),
            portfoliocntrl.saveportfolio);

router.get('/:id',portfoliocntrl.getportfolioById);
router.patch('/:id',
            authService.checkJWT,
            authService.checkRole('admin'),
            portfoliocntrl.updatePortfolio);
router.delete('/:id',
            authService.checkJWT,
            authService.checkRole('admin'),
            portfoliocntrl.deletePortfolioData);
module.exports=router;