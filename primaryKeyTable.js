const { Sequelize } = require("sequelize");
var dbConfig = require('./db.config');

// using db.config to connect with the db in mysql
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

// attributes of ProductSequelize table.
 let productTable = sequelize.define('ProductSequelize',{
     Product_ID : {
         primaryKey : true,
         type:Sequelize.INTEGER
     },
     ProductName : Sequelize.STRING (25),
     Description : Sequelize.STRING(50),
     cost: Sequelize.INTEGER

 },{
     timestamps:false,
     freezeTableName:true
 });

 // syncing and table creation 
 /*
 productTable.sync().then( ()=>{
     console.log("Table created successfully..");
 }).catch((err)=>{
      console.log("Error is "+err);
 }).finally( ()=>{
     sequelize.close();
 })
*/


 //Finding a record using primary key value
/*
 productTable.findByPk(102).then( (data)=>{
     console.log(data.dataValues);
 }).catch( (err)=>{
     console.log("Error is "+err);
 });

 */

 //finding all rows using findAll()
/*
productTable.findAll({raw:true}).then( (data)=>{
    console.log(data);
}).catch( (err)=>{
    console.error("Erroe is "+err);
});
 */

// where clause to select query
/*
productTable.findAll({where:{ProductName:'Mobile'} ,raw:true}).then( (data)=>{
    console.log(data);
}).catch( (err)=>{
    console.log("Error is : "+err);
});
*/

//display only selected columns 
/*
productTable.findAll({attributes:['ProductName','cost'], raw:true}).then( (data)=>{
    console.log(data);
}).catch( (err)=>{
    console.log(err);
});
*/

//display only selected columns using where clause
/*
productTable.findAll({attributes:['Description','cost'] , where:{Description:'TV'},raw:true}).then( (data)=>{
    console.log(data);
}).catch( (err)=>{
    console.log(err);
});
*/

// count of all records
/*
productTable.findAndCountAll().then( (data)=>{
    console.log("No of records are: "+data.count);
}).catch( (err)=>{
    console.log(err);
});
*/

// count of all records using where clause
/*
productTable.findAndCountAll({where:{ProductName:'Dishwasher'}}).then( (data)=>{
    console.log("No of records are: "+data.count);
}).catch( (err)=>{
    console.log(err);
});
*/

//sort using productname
/*
productTable.findAll({order:['ProductName'],raw:true}).then( (data)=>{
    console.log(data);
}).catch( (err)=>{
    console.log(err);
});
*/

//sort using productname in descending order
/*
productTable.findAll({order:[['ProductName','DESC']],raw:true}).then( (data)=>{
    console.log(data);
}).catch( (err)=>{
    console.log(err);
});
*/

// LIKE operation using operater symbols(Op)
/*
const Op= Sequelize.Op;
productTable.findAll({where:{ProductName:{ [Op.like]:'%Buds'}}, raw:true}).then( (data)=>{
    console.log(data);
}).catch( (err)=>{
    console.log("Erroe is: "+err);
});
*/

//Executing SQL Queries in Sequelize
/*
sequelize.query("SELECT * FROM `ProductSequelize` ",{type: sequelize.QueryTypes.SELECT}).then( (data)=>{
    console.log(data);
}).catch((err)=>{
    console.log(err);
})
*/

// OR condition to select
/*
const Op= Sequelize.Op;
productTable.findAll({
    where:{[Op.or]:[{ProductName:'Mobile'},{cost:72000}]} , 
    raw:true
}).then( (data)=>{
    console.log(data);
}).catch( (err)=>{
    console.log(err);
})
*/

//Insert a record into the table
/*
productTable.create({
    Product_ID: 105,
    ProductName:'Router',
    Description:'tp-link Routers',
    cost:5000
}).then( (data)=>{
    console.log("Record inserted Successfully..");
}).catch((err)=>{
    console.log("Error is: "+err);
});
*/

//insert record using build() and save()
/*
let productObj = productTable.build({ Product_ID: 106, ProductName:'Sports Watch', Description:'MI Sports Watch',cost:9900});
productObj.save();
*/

// Bulk insertion of records
/*
productTable.bulkCreate([
    {Product_ID:107 , ProductName:'Alexa',Description:'Alexa',cost:3500},
    {Product_ID:108 , ProductName:'5.1 Speakers',Description:'5.1 Sony home theatre system',cost:18000},
    {Product_ID:109 , ProductName:'Laptop',Description:'Lenovo Laptop',cost:62000},
    {Product_ID:110 , ProductName:'Dolby digital speakers',Description:'Dolby digital speakers',cost:10000}
]).then( (data)=>{
    console.log("Records inserted into the table bulkly..");
}).catch( (err)=>{
    console.log("Error is: "+err);
});
*/

//Update table
/*
productTable.update(
    {ProductName: 'Amazon Alexa'},
    {where:{ProductName:'Alexa'}}
).then( (data)=>{
    console.log("Record Updated successfully..");
}).catch( (err)=>{
    console.log(err);
})
*/

//Deleting a record
/*
productTable.destroy(
    {
        where:{ProductName:'Laptop'}
    }
).then( (data)=>{
    console.log("Record Deleted Successfully..");
}).catch( (err)=>{
    console.log(err);
})
*/
//Drop the table
productTable.drop().then( ()=>{
    console.log("Table Dropped..");
})