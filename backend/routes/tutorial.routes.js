module.exports = app=>{
   const tutorials = require("../controllers/controller");

   var router = require('express').Router();

   // create new tutorial
   router.post("/",tutorials.create);

   // retrieve all tutorials

   router.get("/",tutorials.findAll);

   // route to get all published tutorials

   router.get("/published",tutorials.findAllPublished);

   // Retrieving a single tutorial with id

   router.get("/:id", tutorials.findOne);

   // updating a tutorial by id

   router.put("/:id",tutorials.update);

   // deleting a tutorial with id

   router.delete("/:id",tutorials.delete);

   // deleting all tutorials

   router.delete("/",tutorials.deleteAll);

   app.use('/api/tutorials', router);
}