const ControllerTypeJob = require('../Controllers/TypeJob')
const InternalServerError = require('../Responses/Messages/InternalServerError')
const Success = require('../Responses/Messages/Success')
const TypeJob = new ControllerTypeJob()
const getTypeJobs = async  (req, res ) => {
  try {
    let typeJob = await TypeJob.getTypeJobs()
    

 
  Success(req, res, typeJob, 'ok')
  } catch (exception) {
    res.send({message: exception.message})
  }
  
}

const postTypeJob = async (req, res ) => {
  try {
    let typeJob = await TypeJob.postTypeJob(req.body)
  
 
  Success(req, res, typeJob, 'Insertado correctamente')
} catch (exception) {
  res.send({message: exception.message})
}
}

module.exports = {
  getTypeJobs,
  postTypeJob
}