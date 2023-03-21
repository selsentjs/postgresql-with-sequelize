const express = require('express')

const {sequelize} = require('./models');
const Product = require('./models/product');

const app = express();

app.use(express.json())

app.get('/', (req,res) => {
    res.send('welcome')
})
app.post('/product', async(req,res) => {
    const {name, quantity, department} = req.body
    try{
      
        const product = await Product.create(req.body)
        console.log('Product1:', product)
        return res.status(200).json(product)
    }catch(err){
        return res.status(500).json(err)
    }
})
// async function main(){
//     await sequelize.sync({ alter: true })
// }
// main()

app.listen(3000, async() => {
    console.log('server is running on port 3000')
    await sequelize.sync({force: true}) 
   
})