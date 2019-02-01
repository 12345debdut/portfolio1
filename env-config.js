const prod=process.env.NODE_ENV==='production';

module.exports={
    'process.env.BASE_URL':prod?'https://debdutsahaportfolio.herokuapp.com':'http://localhost:3000',
    'process.env.NAMESPACE':'https://debdutsahaportfolio.herokuapp.com',
    'process.env.CLIENT_ID':'2TLFjSYZgBOjK73a5EIoMTYVKsnR51py'
}