module.exports = {
    HOST : "localhost",
    USER :"root",
    PASSWORD : "Madhuri@1217",
    DB:"MTXdb",
    dialect : "mysql",
    pool:{
        max:5,
        min:0,
        acquire:30000,
        idle:10000
    }
};