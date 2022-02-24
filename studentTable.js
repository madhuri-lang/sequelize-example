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


let student = sequelize.define('StudentTable',{
    Student_Id : Sequelize.INTEGER,
    Student_Name: Sequelize.STRING(20),
    Stream: Sequelize.STRING(20),
    Marks : Sequelize.INTEGER
},{
    timestamps: false,
    freezeTableName:true
});

// student.sync({force:true}).then( ()=>{
//     console.log("Table created successfully..");
// }).catch( (err)=>{
//     console.log("error is : "+err);
// });

// AND Operator
/*
const Op = Sequelize.Op;
student.findAll( {
    where:{
        [Op.and]:[{Stream:'CS'},{Marks:{[Op.gt]:75}}]
    },raw:true
}).then( (data)=>{
    console.log(data);
}).catch( (err)=>{
    console.log(err);
});*/




//drop table
student.drop().then(()=>{
    console.log("Table dropped");
});