const express = require('express');
const mysql = require('mysql');

const appForEmp = express.Router();

var connection = mysql.createConnection(
    {
        host:'localhost',
        user:'root',
        password:'manager',
        database:'sdm'
    }
)

appForEmp.get("/", (request , response)=>
{
    var sql = `select * from Employee`;
    connection.query(sql , (error , result)=>
    {
        if(error == null)
        {
            var data = JSON.stringify(result);
            response.setHeader("Content-Type", "application/json");
            response.send(data);
        }
        else{
            response.setHeader("Content-Type", "application/json");
            response.send(error)
        }
    })
})


appForEmp.post("/", (request , response)=>
{
    var sql = `insert into Employee values('${request.body.id}','${request.body.ename}','${request.body.email}','${request.body.password}','${request.body.emp_id}','${request.body.dname}','${request.body.doj}')`;
    connection.query(sql , (error , result)=>
    {
        if(error == null)
        {
            var data = JSON.stringify(result);
            response.setHeader("Content-Type", "application/json");
            response.send(data);
        }
        else{
            response.setHeader("Content-Type", "application/json");
            response.send(error)
        }
    })
})

appForEmp.put("/:id", (request , response)=>
{
    var sql = `update Employee set ename='${request.body.ename}',email='${request.body.email}',password='${request.body.password}',emp_id='${request.body.emp_id}',dname='${request.body.dname}',doj='${request.body.doj}' where id='${request.params.id}'`;
    connection.query(sql , (error , result)=>
    {
        if(error == null)
        {
            var data = JSON.stringify(result);
            response.setHeader("Content-Type", "application/json");
            response.send(data);
        }
        else{
            response.setHeader("Content-Type", "application/json");
            response.send(error)
        }
    })
})

appForEmp.delete("/:id", (request , response)=>
{
    var sql = `delete from Employee where id='${request.params.id}'`;
    connection.query(sql , (error , result)=>
    {
        if(error == null)
        {
            var data = JSON.stringify(result);
            response.setHeader("Content-Type", "application/json");
            response.send(data);
        }
        else{
            response.setHeader("Content-Type", "application/json");
            response.send(error)
        }
    })
})

module.exports = appForEmp;