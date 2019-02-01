const jwt=require('express-jwt')
const jwksRsa = require('jwks-rsa')


//MIDDLEWARE

exports.checkJWT=jwt({
    secret:jwksRsa.expressJwtSecret({
        cache: true,
        rateLimit:true,
        jwksRequestsPerMinute:50,
        jwksUri: 'https://debdutsaha.auth0.com/.well-known/jwks.json'
      }),
    audience:'2TLFjSYZgBOjK73a5EIoMTYVKsnR51py',
    issuer:'https://debdutsaha.auth0.com/',
    algorithms:['RS256']
})
exports.checkRole=(role)=>{
    return function(req,res,next){
        const user=req.user;
        if(user && user[`${process.env.NAMESPACE}/role`]===role)
        {
            next();
        }
        else{
            return res.status(401).send({title:'Not authorized',detail:'you are not authorized to access these data'})
        }
    }
}