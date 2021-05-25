const express = require("express");
const bodyParser = require("body-parser");
const db = require("./models"); // import db from models/index.js
const app = express();

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));

// add new employee to database with POST method
app.post("/employee", (req, res) => {
    let newEmployee = {
        empName: req.body.empName,
        empSalary: Number(req.body.empSalary),
    };
    db.employee
        .create(newEmployee)
        .then((result) => res.status(200).send(result))
        .catch((err) => res.status(400).send(err));
});
app.get("/employee", (req, res) => {
    db.employee.findAll().then((result) => res.status(200).send(result));
});
app.put("/employee/:id", (req, res) => {
    db.employee
        .update({ name: req.body.name }, { where: { id: Number(req.params.id) } })
        .then(() => res.status(200).send(req.body));
});
app.delete("/employee/:id", (req, res) => {
    db.employee
        .destroy({ where: { id: Number(req.params.id) } })
        .then(() => res.send("employee deleted!"));
});
db.sequelize.sync().then(() => {
    app.listen(5000, () => {
        console.log("Server is running on port 5000...");
    });
});