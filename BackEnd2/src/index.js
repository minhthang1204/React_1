
// cơm - áo - gạo - tiền 
// express
// dung de khoi tao 1 cai server HTTP (GET POST PUT DELETE .... )

// mysql - connect vao database

// cors - de cac may ben ngoai co the truy cap 
// cross origin resource sharing - chinh sach cung nguon

// body parser 
// req.body (string) => bodyparser => object req.body.username

// optional morgan - log, winstion, daily-rotate-file
// cơm - áo - gạo - tiền
//------------------------------------------------------------------
const dotenv = require ('dotenv')
dotenv.config();
const express = require('express')
const cors = require('cors')
const bodyParser = require(bodyParser)
const app = express();

// config
app.use(cors())
app.use(bodyParser.json()) // JSON Java Script Object Notation
// app.use(bodyParser.) // www url encoded / form data => gui file

// router

// app.post('/student/class/:id',async (req,res)=>{
//     const classID = req.params.id;
//     const sql = 'SELECT * FROM student WHERE classId = ? ';
//     const resutl = await db.queryMulti(sql, [classID]);
//     res.send(resutl);
// })

// clear code
app.use('/student', studentRouter)
app.use('/class',classRouter)

// function: input -> output // 



// handle exception
// tryCatch middlewares
app.use('*',(req,res)=>{
    res.status(404).json({
        message: 'Page not found'
    })
});

const PORT = process.env.API_PORT;
app.listen(PORT, (err) => {
    if(err) console.log(err);
    console.log('Server start at '+ PORT)
}); // khoi dong server 