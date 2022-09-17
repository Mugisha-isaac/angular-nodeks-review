const express = require('express');
const cors = require('cors');

const app = express();

const db = require('./model');

// enabling feature to drop existing tables

db.sequelize.sync({force:true}).then(()=>{
    console.log('Dropping and re-syncing db');
})

const corsOptions = {
    origin:'http://locahost/8081'
}

app.use(cors(corsOptions));

app.use(express.json());
app.use(express.urlencoded({extended:true}));


// initial route

app.get("/",(req,res)=>{
    res.json({message:"Welcome to angular+nodejs review"})
});


// setting and listening to the port

const PORT = process.env.PORT || 8080;

app.listen(PORT,()=>{
    console.log(`server is running on port ${PORT}`);
})
