const { User } = require("./client");

app.use(express.json());
app.use(require("./client"));

app.listen(port, () => {
  // perform a database connection when server starts
  if(dbo) {
  console.log(`Server is running on port: ${port}`);
  }
});


//routes routes
app.post("/login",(req,res)=>{
  const {email,password} = req.body;
  User.findone({email:email},(err,user)=>{
      if(user){
         if(password == user.password){
             res.send({message:"login sucess",user:user})
         }else{
             res.send({message:"wrong credentials"})
         }
      }else{
          res.send("not register")
      }
  })
});
app.post("/register",(req,res)=>{
  console.log(req.body) 
  const {name,email,password} = req.body;
  User.findOne({email:email},(err,user)=>{
      if(user){
          res.send({message:"user already exist"})
      }else {
          const user = new User({name,email,password})
          user.save(err=>{
              if(err){
                  res.send(err)
              }else{
                  res.send({message:"sucessfull"})
              }
          })
      }
  })


}) 

app.listen(3000,()=>{
  console.log("started")
})




const express = require("express");
const recordRoutes = express.Router();

const Users = require('./models/user');

require("dotenv").config({ path: "config.env" });
//const dbo = require("./db");

recordRoutes.route("/").get( (req, res) => {
  res.send("Hello World");
});

//app.use(express.json());
//app.use(express.urlencoded({ extended: false }));
//app.use(cookieParser());

recordRoutes.route("/register").post(async (req, res) => {
  try {
    const { fullname, email, password } = req.body;
    const data = {
      fullname: fullname,
      email: email,
      password: password
    };
    const check = await Users.findOne({ email: email });
    if (check) {
      res.json("Exist");
    } else {
      res.json("notExist");
      await Users.insertMany([data]);
    }
  } catch (error) {
    res.status(400).send(error);
  }
});

recordRoutes.route("/login").post( async (req, res) => {
  try {
    const email = req.body.email;
    const password = req.body.password;
    const user = await Users.findOne({ email: email });
    if (user) {
      const isMatch = await bcryptjs.compare(password, user.password);
      if (isMatch) {
        const token = await user.generateToken();
        res.cookie("jwt", token, {
          expires: new Date(Date.now() + 86400000),
          httpOnly: true
        });
        res.json("Exist");
      } else {
        res.json("notExist");
      }
    } else {
      res.json("notExist");
    }
  } catch (error) {
    res.json("notExist");
  }
});

module.exports = recordRoutes;




/*register contrommer*/
exports.createUser = async (req, res) => {
  try {
    const user = new users(req.body);
    
    



    exports.loginUser = async (req, res) => {
      try {
        const { email, password } = req.body;
        const user = await users.findOne({ email });
        if (user) {
          if (user.password === password) {
            res.json("success");
          } else {
            res.json("Password incorrect");
          }
        } else {
          res.json("Record does not exist");
        }
      } catch (error) {
        res.status(500).json({ message: error.message });
      }
    }




    
