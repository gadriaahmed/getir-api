const express = require("express")
const routes = require("../routes/record.route")
const request  = require('supertest');
const bodyParser = require('body-parser');
const mockingoose = require('mockingoose');
const RecordsData = require('./records.mock');
const Record = require('../models/record.model');



const app = express();
app.use(bodyParser.json());
app.use(routes);

describe("Post /records", () => {
    it('Should be success',async () => {
        const data = {
            startDate:'2016-02-02',
            endDate:'2016-02-04',
            minCount:0,
            maxCount:3700
        }
        mockingoose.Record.toReturn(RecordsData, 'aggregate');

        const {body,status} = await request(app).post('/records').send(data);
        expect(status).toBe(200);
        expect(body).toEqual({
            code: 0,
            message: 'Success',
            records: RecordsData,
        });
    });
    it('Should return error for date validation',async () => {
        const dataWithWrongDate = {
            startDate:'2017-02-02',
            endDate:'2016-02-04',
            minCount:0,
            maxCount:10000000000
        }
         const res = await request(app).post('/records').send(dataWithWrongDate);
        expect(res.status).toBe(422);
        expect(res.body).toEqual({
            code: 2,
            msg: 'Check the format of start and end dates',
        });
    });

    it('Should return error for count validation',async () => {
        const dataWithWrongCount = {
            startDate:'2015-02-02',
            endDate:'2016-02-04',
            minCount:3,
            maxCount:2,
        }
        const {body,status} = await request(app).post('/records').send(dataWithWrongCount);
        expect(status).toBe(422);
        expect(body).toEqual({
            code: 2,
            msg: 'MinCount is greater than MaxCount',
        });
    })
})
