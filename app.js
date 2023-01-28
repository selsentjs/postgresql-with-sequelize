const express = require('express');
const {Sequelize, sequelize} = require('./models');
const app = express()

app.use(express.json());

async function main(){
    await sequelize.sync()
}
main()
app.listen(3000, () => {
    console.log('server is running on port 3000')
})