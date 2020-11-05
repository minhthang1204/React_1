// service
const db = require('../utils/db')

const getAllClass = async () =>{
  const sql = 'SELECT * FROM class'
  const result = await db.queryMulti(sql);
  return result;
}
const getStudentByClassID = async (classID) =>{
  const sql = 'SELECT * FROM student WHERE classId = ? ';
  const result = await db.queryMulti(sql, [classID]);
  return result
}
const getStudent = async (idStudent)=>{
  const sql=`
  select *
  from student
  where idStudent = ?; 
  `
  const result = await db.queryOne(sql,idStudent)
  return result
}

module.exports ={
  getStudentByClassID,
  getAllClass,
  getStudent
}