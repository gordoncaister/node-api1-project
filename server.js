const express = require("express");
const server = express();
const shortid = require("shortid")

const users = [{
  id:shortid.generate(),
  name:'Jane Doe',
  bio:'Not Tarzans Wife, another Jane'
}];

server.get("/api/users", (req,res)=>{
    !users ? 
        res.status(500).json({errorMessage: "Database error"})  :
        res.status(200).json(users)
})

server.get("/api/users/:id", (req,res)=> {
    
})


server.post('/api/users', function(req,res){
  const person = req.body;
  console.log("req" ,req)
  if( person.name && person.bio){
    users.push({ 
      id:shortid.generate(),
      name:person.name,
      bio:person.bio
     })
     .then(res.status(201).json(users))
     .catch(res.status(500).json({errorMessage:"Database error"}));  
  } else {
    res.status(400).json({errorMessage: "Please provide name and bio for the user." })
  }
  
})



server.listen(8000, () => console.log("\n== API is up ==\n"));