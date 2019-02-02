const express = require('express')
const compression=require('compression');
const next = require('next')
const mongoose=require('mongoose')
var bodyParser = require('body-parser')
const routes=require('../routes');
const path=require('path');
//services
const authService=require('./services/auth')
const portfolioRoutes=require('./routes/portfolio')
const blogRoutes=require('./routes/blog');
const dev = process.env.NODE_ENV !== 'production'
const app = next({ dev })
const handle = routes.getRequestHandler(app);
const config=require('./config');

const robotsOptions={
  root: path.join(__dirname,"../static"),
  headers:{
    'Content-Type':'text/plain;charset=UTF-8'
  }
}
//Model declaration
const bookRoutes=require('./routes/book');
const secretData=[{
  title:'secretData 1',
  description:'plans how to build spaceship'
},
{
  title:'secretData 2',
  description:'My secret Password'
}
]
//Data base connection
mongoose.connect(config.DB_URI,{useNewUrlParser:true}).then(()=>{
  console.log("Mongodb connected successfully")
}).catch((err)=>{
  console.log("error in db connection",err);
})


app.prepare()
.then(() => {
  const server = express()
  //Compression middleware
  server.use(compression());
  //Body parser middleware
  server.use(bodyParser.json());
  //Middleware for book routes
  server.use("/api/v1/books",bookRoutes);
  //Middleware for portfolios
  server.use("/api/v1/portfolios",portfolioRoutes);
  //Middleware for blog routes
  server.use("/api/v1/blogs",blogRoutes);
  //only secret data
  server.get('/api/v1/secret',authService.checkJWT,(req,res)=>{
    return res.json(secretData);
  })
  //only for admin
  server.get('/api/v1/onlysiteowner',authService.checkJWT,authService.checkRole('admin'),(req,res)=>{
    return res.json(secretData);
  })

  //robot.txt
  server.get('/robots.txt',(req,res)=>{
    return res.status(200).sendFile('robots.txt',robotsOptions);
  })

  //all types of routes
  server.get('*', (req, res) => {
    return handle(req, res)
  })
  const PORT=process.env.PORT||3000
 // ERROR HANDLING IN AUTHORISATION
  server.use(function (err, req, res, next) {
    if (err.name === 'UnauthorizedError') {
      res.status(401).send({title:'unauthorized',detail:'unauthorized access'});
    }
  });
  server.use(handle).listen(PORT, (err) => {
    if (err) throw err
    console.log('> Ready on port '+PORT)
  })
})
.catch((ex) => {
  console.error(ex.stack)
  process.exit(1)
})