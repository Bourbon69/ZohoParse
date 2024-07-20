const express = require('express');
const axios = require('axios');

const app = express();

app.use(express.json());

app.get('/:mobile',  async(req, res) => {
   try {
    const {mobile} = req.params

    const {data} = await axios.get("https://www.zohoapis.in/crm/v2/functions/get_users_recipe_list/actions/execute?auth_type=apikey&zapikey=1003.15ad2c644dc062923f46f9ff3424587f.355c7a13098ec1b31c265153385f3941&mobile="+mobile)
    res.status(200).json({"output": data.details.output});
   } catch (error) {
    console.log(error)
   }
})


app.listen(3000, ()=>{
    console.log('Server is running on port 3000');
})
