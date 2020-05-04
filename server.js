const express = require("express"); // CommonJS Modules
const server = express();

const lessons = [{
  id:1,
  name:'Introduction to HTTP APIs with Node and Express',
}];


server.get("/", (req, res) => {
  res.json({ api: "Up and running!" });
});

server.get("/api/lessons",(req, res) => {
  res.json(lessons);
})

server.post('/api/lessons', function(req,res){
  const lessonInformation = req.body;
  lessons.push(lessonInformation);
  res.status(201).json(lessonInformation);
})

server.listen(8000, () => console.log("\n== API is up ==\n"));