import { JsonDB, Config } from 'node-json-db';
var db = new JsonDB(new Config("database.json", true, true, '/'));
import express from 'express';
import bodyParser from 'body-parser';
import cors from 'cors';

const app = express();
const PORT = process.env.PORT || 3000;

// Middleware to parse JSON in the request body
app.use(bodyParser.json());
app.use(cors());

app.post('/validateUser', async (req, res) => {
    const requestData = req.body;
    var data = await db.getData('/Users')
    var flag = false;
    console.log(requestData)
    data.forEach((element) => {
        if (element.email == requestData.email && element.password == requestData.password) {
            flag = true;
        }
    });
    console.log("Validated", flag)
    res.json({ message: 'Validated User', data: flag });
});

app.post('/validateEmployee', async (req, res) => {
    const requestData = req.body;
    var data = await db.getData('/Employees')
    var flag = false;
    console.log(requestData)
    data.forEach((element) => {
        if (element.email == requestData.email && element.password == requestData.password) {
            flag = true;
        }
    });
    console.log("Validated", flag)
    res.json({ message: 'Validated User', data: flag });
});

app.post('/addEmployee', async (req, res) => {
    var flag = true;
    try{
        const requestData = req.body;
        var data = await db.getData('/Employees');
        data.push(requestData);
        db.push("/Employees", data, true)
        console.log("Added Users", requestData)
    } catch {
        console.error("Error");
        flag = false;
    }
    
    res.json({ message: 'Added User', data: flag });
});


app.post("/markAttendence", async(req, res) => {
    var flag = true;
    try{
        const requestData = req.body;
        var data = await db.getData('/Attendances/' + requestData.date);
        var j = {
            "email" : requestData.email,
            "time" : requestData.time
        }
        data.push(j);
        db.push('/Attendances/' + requestData.date, data, true)
        console.log("Attendence Marked", requestData)
    } catch {
        console.error("Error");
        flag = false;
    }
    
    res.json({ message: 'Attendence Marked', data: flag });
});

app.get("/getAttendence", async (req, res) => {
    const requestData = req.body;
    var data = await db.getData('/Attendances')
    res.json({ message: 'Attendence Data', data: data });
})

app.listen(PORT, () => {
    console.log(`Server is running on http://localhost:${PORT}`);
});

