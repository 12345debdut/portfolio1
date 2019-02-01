export const getCookiesFromReq=(req,cookie)=>{
    if(req.headers.cookie){
        const tokenCookie=req.headers.cookie.split(';').find(c=>c.trim().startsWith(`${cookie}=`));
        if(!tokenCookie){
            return undefined
          }
          return tokenCookie.split('=')[1];
    }
    else{
        return undefined;
    }
}
export const shortenText=(text,maxlength)=> {
	if(text && text.length>maxlength){
		return `${text.substring(0,maxlength)}....`;
	}
	return text;
}