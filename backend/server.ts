import 'dotenv/config';
import Express = require('express');
import Cors = require('cors');


const app = Express();
const port = process.env.PORT || 5000;

app.use(Cors);
app.use(Express.json())

app.get('/' , (req , res) => {

    res.send("Hello from the backend")
})

app.listen(port , () => {

    console.log(`Server is running on http://localhost: ${port}`)
    
})