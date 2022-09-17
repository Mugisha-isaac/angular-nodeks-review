module.exports = app=>{
   const tutorials = require("../controllers/controller");

   var router = require('express').Router();

   // create new tutorial
   router.post("/",tutorials.create);

   // retrieve all tutorials

   router.get("/",tutorials.findAll);

   // route to get all published tutorials

   router.get("/published",tutorials.findAllPublished);
}