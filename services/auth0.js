import auth0 from 'auth0-js';
import Cookies from 'js-cookie';
import jwt from 'jsonwebtoken';
import axios from 'axios';
import {getCookiesFromReq} from '../helpers/utils';
const CLIENT_ID=process.env.CLIENT_ID;
class Auth0 {
  
    constructor(){
        this.auth0 = new auth0.WebAuth({
            domain: 'debdutsaha.auth0.com',
            clientID:CLIENT_ID,
            redirectUri: `${process.env.BASE_URL}/callback`,
            responseType: 'token id_token',
            scope: 'openid profile'
          });
          this.login=this.login.bind(this);
          this.handleAuthentication=this.handleAuthentication.bind(this);
          this.setSession=this.setSession.bind(this);
          this.logout=this.logout.bind(this)
    }

  login() {
    this.auth0.authorize();
  }
  handleAuthentication() {
    return new Promise((resolve,reject)=>{
        this.auth0.parseHash((err, authResult) => {
            if (authResult && authResult.accessToken && authResult.idToken) {
              this.setSession(authResult);
              resolve()
            } else if (err) {
              reject()
              console.log(err);
              alert(`Error: ${err.error}. Check the console for further details.`);
            }
          });
    })  
  }
  setSession(authResult) {
    // Set the time that the access token will expire at
    Cookies.set('jwt',authResult.idToken)
    // navigate to the home route
  }
  logout(){
    Cookies.remove('jwt')
    this.auth0.logout({
        clientID:CLIENT_ID,
        returnTo:process.env.BASE_URL
    })
  }
//verify jwt web token

async verifyToken(token){
  if(token){
    const decodedToken=jwt.decode(token,{complete:true});
    if(decodedToken==undefined)
    {
      return undefined;
    }
    const jwks=await this.getJWKS();
    const jwk=jwks.keys[0];
    //Build Certificate
    let cert=jwk.x5c[0];
    cert=cert.match(/.{1,64}/g).join('\n');
    cert=`-----BEGIN CERTIFICATE-----\n${cert}\n-----END CERTIFICATE-----\n`;
    if(jwk.kid===decodedToken.header.kid)
    {
      try{
        const verifiedToken=jwt.verify(token,cert);
        const expiresAt=verifiedToken.exp*1000;
        return (verifiedToken && new Date().getTime()<expiresAt)?verifiedToken:undefined;
      }catch(err){
        return undefined;
      }
    }
  }
  return undefined;
}
//signing our jwt token
getJWKS=async()=>{
  const res= await axios.get("https://debdutsaha.auth0.com/.well-known/jwks.json")
  const jwks=res.data
  return jwks;
}

  async clientAuth(){
    const token=Cookies.getJSON('jwt')
    const verifiedToken=await this.verifyToken(token);
    return verifiedToken;
  }
  async serverAuth(req){
      const token=await getCookiesFromReq(req,'jwt');
      const verifiedToken=await this.verifyToken(token);
      return verifiedToken;
}
}

const auth0Client= new Auth0()
export default auth0Client;