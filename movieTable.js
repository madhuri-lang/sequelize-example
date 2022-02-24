var Sequelize = require('sequelize');
var dbConfig = require('./db.config');

var sequelize = new Sequelize(dbConfig.DB , dbConfig.USER ,dbConfig.PASSWORD,
{
  host: dbConfig.HOST,
  dialect: dbConfig.dialect,
  pool : {
      min: dbConfig.pool.min,
      max : dbConfig.pool.max,
      acquire : dbConfig.pool.acquire,
      idle : dbConfig.pool.idle
  }
});

let movie = sequelize.define('MovieTable',{
    Movie_Id :{
        primaryKey:true,
        type: Sequelize.INTEGER
    } ,
    Movie_Name: Sequelize.STRING(30),
    Genre: Sequelize.STRING(20),
    Language: Sequelize.STRING(20),
    Cast : Sequelize.STRING(30)
},
{
    timestamps:false,
    freezeTableName: true
});
// Table creation using sync
/*
movie.sync().then( ()=>{
    console.log("Table created without force:true...");
}).catch( (err)=>{
    console.log("error is: "+err);
})

*/

// find all records

movie.findAll().then( (data)=>{
    console.log(data);
}).catch( (err)=>{
    console.log("Error is:"+err);
})
