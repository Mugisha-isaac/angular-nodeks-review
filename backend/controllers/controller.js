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


    const tutorial = {
        title: req.body.title,
        description: req.body.description,
        published: req.body.published ? req.body.published: false 
    };

    // saving tutorial in database
    Tutorial.create(tutorial).then(data=>{
       res.send(data);
    }).catch(err=>{
        res.status(500).send({
         message: err.message || "Some error occurred while creating the tutorial"
        })
    })


}

// retrieving all tutorials from database

exports.findAll = (req,res)=>{

    const title = req.query.title;
    var condition = title ? {title:{[Op.like] : `%${title}%`}}: null;

    Tutorial.findAll({where: condition}).then(data=>{
        res.send(data);
    }).catch(err=>{
        res.status(500).send({
            message: err.message || "Some error occurred while retrieving tutorials from database"
        })
    })

}

// finding single tutorial with id

exports.findOne = (req,res)=>{
  const id = req.params.id;

  Tutorial.findByPk(id).then(data=>{
    if(data){
        res.send(data);
    }
    else{
        res.status(404).send({
            message: `Can not find tutorial with id=${id}`
        })
    }
  }).catch(err=>{
    res.status(500).send({
        message:`Error occurred while retrieving tutorial with id=${id}`
    })
  })
}

// updating single tutorial with id as request

exports.update = (req,res)=>{
    const id = req.params.id;

    Tutorial.update(req.body,{
        where:{id:id}
    }).then(num=>{
        if(num==1){
            res.send({
                message:"Tutorial was updated successfully"
            })
        }
        else{
            res.send({
                message: `Can not update tutorial with id=${id}. May be tutorial was not found or req.body was empty!`
            })
        }
    }).catch(err=>{
        res.status(500).send({
            message:`Error while updating tutorial with id=${id}`
        })
    })

}

// deleting a tutorial with id as a request

exports.delete = (req,res)=>{
   const id = req.params.id;
   Tutorial.destroy({
    where:{id:id}
   }).then(num=>{
    if(num==1){
        res.send({
            message:"Tutorial was successfully deleted."
        })
    }
    else{
        res.send({
            message:`Can not delete tutorial with id=${id}. May be tutorial was not found!`
        })
    }
   }).catch(err=>{
    res.status(500).send({
        message:`Can not delete tutorial with id=${id}`
    })
   })
}

// deleting all tutorials from database

exports.deleteAll = (req,res)=>{
   Tutorial.destroy({
    where:{},
    truncate:false
   }).then(nums=>{
    res.send({message:`${nums} tutorials were deleted successfully`})
   }).catch(err=>{
       res.status(500).send({
          message: err.message || "Some error occurred while removing all tutorials."
       })
   })
}

// finding all published tutorials

exports.findAllPublished = (req,res)=>{
    Tutorial.findAll({where:{published:true}}).then(data=>{
        res.send(data);
    }).catch(err=>{
        res.status(500).send({
            message: err.message || "Some error occurred while retrieving tutorials."
        })
    })
}