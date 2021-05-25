module.exports = (sequelize, DataTypes) => {
    let employee = sequelize.define('employee', {
        empName: {
            type: DataTypes.STRING(100)
        },
        empSalary: {
            type: DataTypes.INTEGER
        }
    });
    return employee;
};