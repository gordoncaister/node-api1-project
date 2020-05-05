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
    users.forEach(x => {
      req.params.id == x.id && res.status(200).json({x})
    })
    res.status(404).json({errorMessage: "User not found"})
})


server.post('/api/users', (req,res)=>{
  const person = req.body;
  console.log(req)
  if(req.body == undefined){res.status(500).json({errorMessage:"Internal error"})}
  if( person.name && person.bio){
    users.push({ 
      id:shortid.generate(),
      name:person.name,
      bio:person.bio
     })
     .then(res.status(201).json(users))
     
  } else {
    res.status(400).json({errorMessage: "Please provide name and bio for the user." })
  } 
})


server.put("/api/users/:id",(req,res)=>{
  console.log(req.body)
  if(!req.body){
    res.status(400).json({errorMessage: "Please make a change to the user"})
  } else {
    if(req.body.bio && req.body.name && req.body) {
      const newUser = req.body
      users[users.indexOf(users.find(e => e.id == req.params.id))] = newUser
      res.status(201).json({newUser})
    }
  }
  res.status(500).json({errorMessage: "server error"})
})

server.delete("/api/users/:id",(req,res) => {
  if(users.indexOf(users.find)){
    console.log("match")
  }
})

server.listen(8000, () => console.log("\n== API is up ==\n"));