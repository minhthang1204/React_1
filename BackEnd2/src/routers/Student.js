const studentRouter = express.Router();
const controller = require('../controllers/Question')


studentRouter.get('/class',controller.getAllClass)
studentRouter.get('/class/:id',controller.getStudentByClassID)
studentRouter.get('/student/:id',controller.getStudent)



module.exports = {
    studentRouter
};