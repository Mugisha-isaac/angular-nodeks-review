module.exports = app=>{
   const tutorials = require("../controllers/controller");

   var router = require('express').Router();

   // create new tutorial
   router.post("/",tutorials.create);
}