import express, { request } from "express";

const routerIndex = express.Router();


routerIndex.get('/', startpage);

function loggingRequestsAsMw(req,res,next){
    req.time = new Date(Date.now()).toString();
    console.log(req.method, req.hostname, req.path, req.time);
    next();
}

function startpage(req, res){
    console.log("startpage");
    res.render('index', {textIntro:"txt", xml:"xml"})
}

export {routerIndex, loggingRequestsAsMw}