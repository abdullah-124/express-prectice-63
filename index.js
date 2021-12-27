const express = require("express");
const cors = require('cors');
const app = express();
const port = 5000;

app.use(cors( ))
app.use(express.json())

app.get("/", (req, res) => {
  res.send("<h1>hello form 2nd node  wow node mon you are sooo great</h1> ");
});
const users = [
  { id: 1, name: "shabnur", email: "shabnur@gmail.com" },
  { id: 2, name: "moushumi", email: "moushumi@gmail.com" },
  { id: 3, name: "apu bishas", email: "apu@gmail.com" },
  { id: 4, name: "shabana", email: "shabana@gmail.com" },
  { id: 5, name: "putul", email: "putul@gmail.com" },
];
app.get('/users', (req, res) =>{
    const search = req.query.search
    if(search){
       const searchResult =  users.filter(user => user.name.toLocaleLowerCase().includes(search));
       res.send(searchResult)
    }
    else{
        res.send(users)
    }
})
app.get("/user/:id", (req, res) => {
    const id = req.params.id;
    const user = users[id]
  res.send(user);
});
app.get('/fruits/fazli', (req, res)=>{
    res.send('yammi yammi tok fazli')
})
app.listen(port, () => {
  console.log("this is localhost", port);
});

// method post 
app.post('/users', (req,res)=>{
  const newUser = req.body;
  newUser.id = users.length + 1;  
  console.log('hitted in post methods', req.body)
  // res.send('i come form inside the post methods')
  res.json(newUser)
})
