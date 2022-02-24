
var Sequelize = require('sequelize');
var dbConfig = require('./db.config');


var sequelize = new Sequelize(dbConfig.DB , dbConfig.USER ,dbConfig.PASSWORD,{
    host:dbConfig.HOST,
    dialect:dbConfig.dialect,
    pool:{
        min:dbConfig.pool.min,
        max:dbConfig.pool.max,
        acquire:dbConfig.pool.acquire,
        idle:dbConfig.pool.idle
    }
});


let userSequelize = sequelize.define('UserSequelize',{
    UserId:Sequelize.STRING(25),
    password:Sequelize.STRING(25),
    Role:Sequelize.STRING
},{
    timestamps:false
    // freezeTableName:true
});

userSequelize.sync({force:true}).then( ()=>{
    console.log("Table created successfully..");
}).finally( ()=>{
    sequelize.close();
})