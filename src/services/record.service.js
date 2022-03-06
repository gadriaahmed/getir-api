const Record = require('../models/record.model');

const recordService = {
    fetchAll: async (startDate,endDate,minCount,maxCount) => {
        const filter = {
            $and: [
                {createdAt : {$gt:new Date(startDate),$lt:new Date(endDate)}},
                {totalCount: {$gt:minCount,$lt:maxCount}}
            ]
        };
        return Record.aggregate([
            {
                $project: {
                    key:1,
                    createdAt: 1,
                    totalCount: {
                        $sum: '$counts'
                    }
                }
            },
            {
                $match:filter
            }
        ]).then((records)=>{
            return records;
        })
    }
}

module.exports = recordService;