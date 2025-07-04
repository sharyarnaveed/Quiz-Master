const { default: mongoose } = require("mongoose");
const { app } = require("./src/app.js");
const dotenv = require("dotenv");

const port=3000

dotenv.config({
    path: './.env'
  })

mongoose.connect('mongodb://localhost:27017/quizmaster',)

.then(()=> {
    console.log("database connected");
    
    app.listen(port,()=>
    {
        console.log(`Server running on port ${port}`)
    })
})
.catch(()=>console.log('error in connection'))

