//#region IMPORTS
import express from "express"
import fs from "fs"
import https from "https"
import * as dotenv from "dotenv";
import path from "path";
import { fileURLToPath } from "url";

// import {index3, router2 } from "./routes/routes_get.mjs"
// import * as routes_get from "./routes/routes_get.mjs"
// import routerRouter from "./routes/router_dog.js";
// import users from './public/users.json' assert {type: "json"};
//#endregion imports

//#region DEFINITIONS
const port = 3000;
const app = express();
const router = express.Router();
const __filename = fileURLToPath(import.meta.url); //C:\web\first-project\server.mjs 
const __dirname = path.dirname(__filename); //C:\web\first-project
app.use(express.json()); // for json
app.use(express.urlencoded({ extended: true })); // for form data
app.use(express.static('public')); //url/file.img abrufbar, wenn im public folder

// app.engine('html', require('ejs').renderFile);
app.set("view engine", "ejs");
// app.set("views", __dirname);
// require('dotenv').config();
dotenv.config();
//#endregion definitions


//#region MIDDLEWARE

//#endregion MIDDLEWARE

//#region GET
app.get('/', (req, res) => {
    res.send('Hello, World! '+new Date().toUTCString());
});
//#endregion GET




//#region HTTPS-WEBSERVER
// const httpsServer = https.createServer({
//     key: fs.readFileSync('privateKey.key'),
//     cert: fs.readFileSync('certificate.crt'),
//   }, app);

// var privateKey  = fs.readFileSync('sslcert/privateKey.key', 'utf8');
// var certificate = fs.readFileSync('sslcert/certificate.crt', 'utf8');

// var credentials = {key: privateKey, cert: certificate};

/* const credentials = {
    key: fs.readFileSync('sslcert/privateKey.key'),
    cert: fs.readFileSync('sslcert/certificate.crt')
  };
*/

//set NODE_OPTIONS=--openssl-legacy-provider in cmd in VS;read magic wiki
const credentials = {
    pfx: fs.readFileSync(path.join(__dirname,'sslcert', 'STAR_researchstudio_at.pfx'))
  };
  
  const portHTTPS = process.env.PORTHTTPS || 443
  const httpsServer = https.createServer(credentials, app);
  
  // const port = process.env.PORT || 3000
  // app.listen(port, ()=>{
  //   console.log(`browse this url: localhost:${port}`);  
  // });
  
  //443 used: check tomcat http://localhost:8080/ 
  httpsServer.listen(portHTTPS, (err) => {
    if(err){
      console.log("Error: ", err);
      console.log(new Date().toISOString()+` https server could not start on port: ${portHTTPS}`);
    }else{
      console.log(new Date().toISOString()+` https server running on port: ${portHTTPS}`);
      console.log(new Date().toISOString()+` call: https://ispacevmXX.researchstudio.at or https://localhost/`);
      console.log(new Date().toISOString()+` maybe stop local Tomcat`);
    }
  });
  //#endregion
  