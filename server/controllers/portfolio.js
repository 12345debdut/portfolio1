const Portfolio=require('../models/portfolio');
exports.getportfolio=(req,res)=>{
Portfolio.find({})
          .sort({'startDate':1})
          .exec((err,allportfolio)=>{
            if(err){
              return res.status(422).send(err)
            }
            return res.json(allportfolio);
          })
  };

exports.saveportfolio=(req,res)=>{
    const PortfolioData=req.body;
    const portfolio=new Portfolio(PortfolioData);
    const userId=req.user && req.user.sub;
    portfolio.userId=userId;
    portfolio.save((err,createdPortfolio)=>{
      if(err){
        console.log(err);
        return res.status(422).send(err);
      }
      return res.json(createdPortfolio);
    });
  };

  exports.deletePortfolioData=(req,res)=>{
    const portfolioId=req.params.id;
    Portfolio.deleteOne({_id:portfolioId},(err,deletedPortfolio)=>{
      if(err)
      {
        return res.status(422).send(err)
      }
      return res.json({deleted:'success'});
    })
  };
exports.getportfolioById=(req,res)=>{
  const portfolioId=req.params.id;
  Portfolio.findById(portfolioId)
            .select('-__v')
            .exec((err,foundPortfolio)=>{
              if(err){
                return res.status(422).send(err)
              }
              return res.json(foundPortfolio);
            })
}
exports.updatePortfolio=(req,res)=>{
  console.log("Hiii");
    const portfolioId=req.params.id;
    const portfolioData=req.body;
    Portfolio.findById(portfolioId,(err,foundPortfolio)=>{
      if(err)
      {
        return res.status(422).send(err);
      }
      foundPortfolio.set(portfolioData);
      foundPortfolio.save((err,savedPortfolio)=>{
        if(err)
        {
          res.status(422).send(err)
        }
        else{
          return res.json(savedPortfolio);
        }
      })
    })
  };