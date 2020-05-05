const express = require("express");
const server = express();
const shortid = require("shortid")

const users = [{
  id:shortid.generate(),
  name:'Jane Doe',
  bio:'Not Tarzans Wife, another Jane'
}];

server.get("/api/users", (req,res)=>{
    res.status(200).json(users)
})

server.get("/api/users/:id", (req,res)=> {
    
})


server.post('/api/users', function(req,res){
  const person = req.body;
  console.log("req" ,req)
  if( person.name && person.bio){
    res.status(201).json(users)
    users.push({ 
      id:shortid.generate(),
      name:person.name,
      bio:person.bio
     });  
  } else {
    res.status(400).json({errorMessage: "Please provide name and bio for the user." })
  }
  
})

server.listen(8000, () => console.log("\n== API is up ==\n"));