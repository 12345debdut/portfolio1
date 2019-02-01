import axios from 'axios'
import cookies from 'js-cookie';
import {getCookiesFromReq} from '../helpers/utils';
import { rejects } from 'assert';
const axiosInstance=axios.create({
    baseURL:'http://localhost:3000/api/v1',
    timeout:3000
})
const setAuthHeader=(req)=>{
    const token=req?getCookiesFromReq(req,'jwt'):cookies.getJSON('jwt');
    if(token)
    {
        return {headers:{'authorization':`Bearer ${token}`}};
    }
    else{
        return undefined;
    }
}
export const getSecretData=async(req)=>{
    const url=req?"/secret":"api/v1/secret";
    const res=await axiosInstance.get(`${url}`,setAuthHeader(req))
    .then((res)=>{return res.data}).catch((err)=>{
        console.warn("It is the error of axios"+err)
    })
    return res;
}
const rejectPromise=(reserror)=>{
    let error={}
    if(reserror && reserror.response && reserror.response.data)
    {
        error=reserror.response.data
    }
    else{
        error=reserror;
    }
}
export const getPortfolios=async(req)=>{
    return await axiosInstance.get('/portfolios',setAuthHeader(req))
    .then(response=>response.data).catch(err=>console.log("Hiii i am error"))
}

export const getPortfolioById=async(id)=>{
    return await axiosInstance.get(`/portfolios/${id}`)
    .then(response =>response.data)
}

export const createPortfolio=async(portfolioData)=>{
    return await axiosInstance.post('/portfolios',portfolioData,setAuthHeader())
    .then(response=>response.data)
    .catch((err)=>{return rejectPromise(err)})
}

export const updatePortfolio=async(portfolioData)=>{
    return await axiosInstance.patch(`/portfolios/${portfolioData._id}`,portfolioData,setAuthHeader())
    .then(response=>response.data)
    .catch((err)=>{return rejectPromise(err)})
}

export const deletePortfolio=(portfolioId)=>{
    return axiosInstance.delete(`/portfolios/${portfolioId}`,setAuthHeader())
    .then(response=>response.data);    
}

//------------------Blog Actions----------------->>>>>
export const getBlogs=async(req)=>{
    return await axiosInstance.get('/blogs').then(response=>response.data)
}

export const getBlogBySlug=async(slug)=>{
    return await axiosInstance.get(`/blogs/s/${slug}`).then(response=>response.data);
}

export const getUserBlogs=async(req)=>{
    return axiosInstance.get('/blogs/me',setAuthHeader(req)).then(response=>response.data)
}

export const createBlog=(blogData,lockId)=>{

    return axiosInstance.post(`/blogs?lockId=${lockId}`,blogData,setAuthHeader())
        .then(response=>response.data)
        .catch(err=>{return Promise.reject(err)})
}

export const updateBlog=(blogData,blogId)=>{
    return axiosInstance.patch(`/blogs/${blogId}`,blogData,setAuthHeader())
        .then(response=>response.data)
        .catch(err=>console.error(err))
}

export const getBlogById=(blogId)=>{
    console.log(blogId)
    return axiosInstance.get(`/blogs/${blogId}`).then(response=>response.data);
}

export const deleteBlog=(blogId)=>{
    return axiosInstance.delete(`/blogs/${blogId}`,setAuthHeader())
    .then(response=>response.data)
    .catch(err=>rejectPromise(err));
}