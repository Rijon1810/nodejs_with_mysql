var mysql = require('mysql');

var DatabaseConnectionConfig = {
    host: "localhost",
    user: "root",
    password: "",
    database: "school"
}

var con = mysql.createConnection(DatabaseConnectionConfig);


con.connect(function(err) {
    if (err) {
        console.log('Connection Fail');
    } else {
        console.log("connection success");
        /* InsertData(con); */
       /*  DeleteDataById(con); */
       /* UpdateData(con); */
       SelectData(con);
    }
});


function InsertData(con) {
    let SQLQuery = "INSERT INTO `students_list`(`name`, `roll`, `class`, `phone`, `city`) VALUES ('rijons','02','Ten1','89898','dhakas')"
    con.query(SQLQuery, function(error) {
        if (error) {
            console.log('Data insert fail');
        } else {
            console.log('Data insert success');
        }

    })

}


function DeleteDataById(con){
    let SQLQuery = "DELETE FROM `students_list` WHERE `id`='2'";
    con.query(SQLQuery, function(error){
        if (error) {
            console.log('Data Delete fail');
        } else {
            console.log('Data Delete success');
        }
    })
}


function UpdateData(con){
    let SQLQuery = "UPDATE `students_list` SET `phone`='111111',`city`='comilla' WHERE `id`='1'";
    con.query(SQLQuery, function(error){
        if (error) {
            console.log('Data Update fail');
        } else {
            console.log('Data Update success');
        }
    })
}

function SelectData(con){
    let SQLQuery = "SELECT * FROM `students_list` ";
    con.query(SQLQuery , function ( error, result){
        if(error){
            console.log("Data Seletct Fail");
        }
        else{
            console.log(result);
        }
    })
}