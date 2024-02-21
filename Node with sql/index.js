const { faker } = require('@faker-js/faker');
const mysql = require('mysql2');
const express = require('express');
const app = express();
const path = require("path");
const methodOverride = require("method-override");

app.use(methodOverride("_method"));
app.use(express.urlencoded({extended:true}));

app.set("view engine", "ejs");
app.set("views", path.join(__dirname,"/views"));
// create the connection
const connection = mysql.createConnection({
  host: 'localhost',
  user: 'root',
  database: 'test',
  password: 'Arifa123',
});

let getRandomUser = () =>{
  return [
     faker.string.uuid(),
  faker.internet.userName(),
   faker.internet.email(),
     faker.internet.password(),
];
}

//route
app.get("/", (req,res) => {
  let q = 'SELECT COUNT(*) FROM USER';
  try{
  connection.query(q,(err, result) => {
    if (err) throw err;
    let count = (result[0]["COUNT(*)"]);
    res.render("home.ejs", {count});
});
}
catch(err){
  console.log(err);
  res.send("some error in DB");
}
});

//ROUTE 2
app.get("/user",(req,res) => {
  let q = 'SELECT * FROM USER';

  try{
    connection.query(q, (err, users) => {
      if (err) throw err;
     res.render("showusers.ejs",{users});
  });
  }

  catch(err){
    console.log(err);
    res.send("some error in DB");
  }
});

//Edit Route
app.get("/user/:id/edit",(req,res) =>{
  let {id} = req.params;
  let q = `SELECT * FROM USER WHERE ID = '${id}' `;
  try{
    connection.query(q,(err, result) => {
      if (err) throw err;
      let user = result[0];
      //console.log(result);
      res.render("edit.ejs", {user});
  });
  }
  catch(err){
    console.log(err);
    res.send("some error in DB");
  }
  });

  //Update Route
  app.patch("/user/:id", (req, res) => {
    let {id} = req.params;
    let{password: formPass, username: newUsername} = req.body;
    let q = `SELECT * FROM USER WHERE ID = '${id}'`;
    try{
      connection.query(q, (err, result)=>{
        if(err) throw err;
        let user = result[0];
        if(formPass != user.Password){
          console.log(formPass);
          console.log(user.Password);
          res.send("wrong password");
        }
         else{
          let q2 = `update user SET username = '${newUsername}' WHERE ID = '${id}'`;
          connection.query(q2, (err, result)=>{
            if(err) throw err;
            res.redirect("/user");
          });
        }
      });
    }
    catch(err){
      console.log(err);
      res.send("some error in DB");
    }

  });

//start server;
app.listen("8080", () =>{
  console.log("server is listening port 8080");

});
