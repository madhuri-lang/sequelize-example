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

let emp = sequelize.define('EmployeeTable',{
    Emp_Id :{
        primaryKey:true,
        type: Sequelize.INTEGER
    } ,
    Emp_Name: Sequelize.STRING(30),
    Dept: Sequelize.STRING(20),
    Designation: Sequelize.STRING(20)
},
{
    timestamps:false,
    freezeTableName: true
});
// Table creation using sync
/*
emp.sync({force:true}).then( ()=>{
    console.log("Table created ..");
}).catch( (err)=>{
    console.log("error is: "+err);
})
*/


// find all records
/*
emp.findAll({raw:true}).then( (data)=>{
    console.log(data);
}).catch( (err)=>{
    console.log("Error is:"+err);
})
*/



// Find record By PrimaryKey
/*
emp.findByPk(102).then( (data)=>{
    console.log(data.dataValues);
}).catch( (err)=>{
    console.log(err);
});
*/


//Where Clause
/*
emp.findAll( { where:{Emp_Name:'Madhuri'} , raw:true}).then( (data)=>{
    console.log(data);
}).catch( (err)=>{
    console.log(err);
})
*/

// Display only selected attributes
/*
 emp.findAll( {attributes:['Emp_Name','Dept'] , raw:true}).then( (data)=>{
     console.log(data);
 }).catch( (err)=>{
     console.log(err);
 })
*/

// Display employees working in IT Dept
/*
emp.findAll( {attributes:['Emp_Name'] ,where:{Dept:'IT'}, raw:true}).then( (data)=>{
    console.log(data);
}).catch( (err)=>{
    console.log(err);
})
*/

//Count of employees in employee table
/*
emp.findAndCountAll().then( (data)=>{
    console.log("No of Employees are: "+data.count);
}).catch( (err)=>{
    console.log(err);
})
*/

//Sort records based on Names
/*
emp.findAll({order:['Emp_Name'] , raw:true}).then( (data)=>{
    console.log(data);
}).catch( (err)=>{
    console.log(err);
})
*/

// Like Operator
/*
const Op = Sequelize.Op;
emp.findAll( {where:{Designation: {[Op.like]:'FullStack%'}} , raw:true}).then( (data)=>{
    console.log(data);
}).catch( (err)=>{
    console.log(err);
});
*/
//

//select query 
/*
sequelize.query("SELECT * FROM `EmployeeTable`", {type:sequelize.QueryTypes.SELECT}).then( (data)=>{
    console.log(data);
});
*/
/*
emp.create({
    Emp_Id: 105,
    Emp_Name:'ThejaReddy',
    Dept: 'HR',
    Designation:'HR'
}).then( (data)=>{
    console.log("Record Created..");
}).catch( (err)=>{
    console.log(err);
});
*/

//insert record using build() and save()
/*
let empObj = emp.build({Emp_Id:106,Emp_Name:'Sreeja',Dept:'Consulting',Designation:'Consultant Trainee'});
empObj.save();

*/


// Bulk insertion of records
/*
emp.bulkCreate(
    [
    {Emp_Id:107 , Emp_Name:'Deepthi',Dept:'QA',Designation:'QA'},
    {Emp_Id:108 , Emp_Name:'Jaya Prasanna',Dept:'QA',Designation:'QA Trainee'}
    ]
).then( (data)=>{
    console.log("Bulk Records Inserted..");
}).catch( (err)=>{
    console.log(err);
})
*/

// Update Operation
/*
emp.update( 
    {Emp_Name:'Madhuri Vakkala'}, {where:{Emp_Name:'Madhuri'}}
    ).then( (data)=>{
        console.log("Updated Successfully...");
    }).catch( (err)=>{
        console.log(err);
    })
*/

//Delete a record
/*
emp.destroy(
    {
    where:{Emp_Name:'Bhavana'}
    }
) .then( ()=>{
    console.log("Record Deleted Successfully");
}).catch( (err)=>{
    console.log(err);
});
emp.findAll({raw:true}).then((data)=>{
    console.log(data);
}).catch ((err) => {
    console.error("Error"+err);
});
*/



// tables JOIN
sequelize.query("select ProductOrders.Description,Customer.CustName from ProductOrders INNER JOIN Customer  ON ProductOrders.ID=Customer.ID;",
 {type:sequelize.QueryTypes.SELECT}).then(  (data)=> {
        console.log(data);
 }).catch( (err)=>{
     console.error(err);
 });