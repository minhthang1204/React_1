const StudentSevices = require('../Services/Student')


const getStudentByClassID = async (req,res)=>{
  const classID = req.params.id;
  const result = await StudentSevices(classID)
  res.send(result);
}
const getAllClass = async (req,res) => {
  const { result } = await StudentSevices.getAllClass();
  res.send({ result });
};

const getStudent = async(req, res)=> {
  const idStudent = req.params.id;
  const { data } = await userService.getStudent(idStudent)
  res.send({ data })
}
module.exports = {
  getStudentByClassID,
  getAllClass,
  getStudent
};
