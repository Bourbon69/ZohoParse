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

app.post('/sendrecipe', async (req, res) => {
  try {
    const { data } = req.body;

    const parsedData = JSON.parse(data);

    const recipe_id = parsedData.recipe_id;
    const activation_id = parsedData.activation_id;

    res.status(200).json({ recipe_id: recipe_id, activation_id: activation_id });
  } catch (error) {
    console.log(error);
    res.status(500).json({ error: "An error occurred" });
  }
});



app.listen(3000, ()=>{
    console.log('Server is running on port 3000');
})
