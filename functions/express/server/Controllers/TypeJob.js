const TypeJob = require('../../../../backing/services/mongo/Models/TypeJob')
const apiMessage = require('../Responses/Messages/ApiMessage')

class TypeJobs {
  async getTypeJobs () {
    let types = await TypeJob.find({}).exec()
    
    return types
  }

  async postTypeJob (body) {
   let typeJob = new TypeJob(body)
   let result = await typeJob.save()
  return result
  }
}

module.exports =  TypeJobs