const express = require('express');
const cors = require('cors');

const app = express();

const db = require('./model');

// enabling feature to drop existing tables

db.sequelize.sync({force:true}).then(()=>{
    console.log('Dropping and re-syncing db');
})


app.use(cors());

app.use(express.json());
app.use(express.urlencoded({extended:true}));


// initial route

app.get("/",(req,res)=>{
    res.json({message:"Welcome to angular+nodejs review"})
});

require("./routes/tutorial.routes")(app);


// setting and listening to the port

const PORT = process.env.PORT || 8080;

app.listen(PORT,()=>{
    console.log(`server is running on port ${PORT}`);
})
