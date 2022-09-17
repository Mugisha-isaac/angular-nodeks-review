const db = require("../model");
const Tutorial = db.tutorials;
const Op = db.Sequelize.Op;

// creating and saving new tutorial

exports.create = (req,res)=>{

    // validating request

    if(!req.body.title){
        res.status(400).send({
            message:"Content can not empty!"
        });

        return;
    }

}

// retrieving all tutorials from database

exports.findAll = (req,res)=>{

}

// finding single tutorial with id

exports.findOne = (req,res)=>{

}

// updating single tutorial with id as request

exports.update = (req,res)=>{

}

// deleting a tutorial with id as a request

exports.delete = (req,res)=>{

}

// deleting all tutorials from database

exports.deleteAll = (req,res)=>{

}

// finding all published tutorials

exports.findAllPublished = (req,res)=>{

}