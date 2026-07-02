// const express = require("express");

// // console.log(typeof express);

// const app = express();

// // console.log(typeof app);
// app.listen(4000,()=>{
//     console.log("Server is running on port 5000");
// });
// // app.listen(5000);
// // app.listen(5000);
// app.get("/",(req,res)=>{
//     res.send("hellow Express")
//     console.log("hellow Express")
// })


const express = require("express");

const app = express();

app.use(express.json());

const users = [
  { id: 1, name: "Romicha" },
  { id: 2, name: "Rahim" },
  { id: 3, name: "Karim" },
];

app.get("/", (req, res) => {
    console.log(req.method);
    console.log(req.url);

    res.send("Welcome to my server");
});

  app.get('/users',(req,res)=>{
    // res.send(users)
    //query parameter
    const {name} = req.query;
    if(name){
        const filteredUsers = users.filter((user)=>user.name.toLocaleLowerCase()=== name.toLocaleLowerCase());
        res.send(filteredUsers)
    }
  })

  app.get('/users/:id',(req,res)=>{
    const id = req.params.id;
    const user = users.find((user)=>user.id == id);
    if(user){
        res.send(user)
    } else{
        res.status(404).send({message:"User not found"})
    }
  })

  app.post('/users',(req,res)=>{
   console.log(req.body),
   res.send({"message": "User created sucessfully"})
  })

app.get('/about',(req,res)=>{
    res.send('This is about page')
})
app.get('/contact',(req,res)=>{
    res.send('This is contact page')
})
app.get('/services',(req,res)=>{
    res.send('This is services page')
})

app.listen(4000, () => {
    console.log("Server running...");
});