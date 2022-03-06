const recordService = require('../services/record.service')
const recordController = {
    records: async (req,res) => {
        const {startDate,endDate,minCount,maxCount} = req.body;
        const data = await recordService.fetchAll(startDate,endDate,minCount,maxCount);
        res.send({
            code:0,
            message:'Success',
            records:data
        })
    }
}

module.exports = recordController