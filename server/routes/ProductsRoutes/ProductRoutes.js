import express from 'express'
import products from '../../modals/ProductsModal/ProductsModal.js';




const router = express.Router()

const myproducts = router.post('/products', async (req,res)=>{

//console.log(req.body);
const { 
  _id,
  title,
  subCategory,
  filters,
  availability,
  colors,
  selectedColor,
  sizes,
  selectedSize,
  seller,
  count,
  price,
specifications,
  description,
  sliders,
}  = req.body;


try {
  // Check if the user already exists in the database
  const existingProduct = await products.findOne({ $or: [{  _id:  _id }, { price: price }] });

  if (existingProduct) {
    // If the user already exists, send a message to the client
    return res.status(400).send({
      "status":"Unsucessfull",
      "message":"product already exists"
    });
  } else {
    // If the user does not exist, create a new user document and save it to the database
    const newUser = new products({ _id,
      title,
      subCategory,
      filters,
      availability,
      colors,
      selectedColor,
      sizes,
      selectedSize,
      seller,
      count,
      price,
    specifications,
      description,
      sliders, });
    await newUser.save();
    return res.status(200).send({
      "status":"sucessfull",
      "message":'product saved in Db'
    });
  }
} catch (error) {
  console.error(error);
  return res.status(500).send({
    "status":"Unsucessfull",
      "message":'There was a internal Server error please try later'
  });
}

  
})
const getAllproducts = router.get('/products', async (req,res)=>{
  //get all products
  try {
        const getProducts = await products.find();
                
        res.status(200).json(getProducts);
    } catch (error) {
        res.status(404).json({ message: error.message });
    }
})


const SingleProduct  = router.get('/products/:_id', async (req,res)=>{
  //get all products
  try {
        const getProducts = await products.findById(req.params._id);
                
        res.status(200).json(getProducts);
    } catch (error) {
        res.status(404).json({ message: error.message });
    }
}
)


export {
  myproducts,
  getAllproducts,
  SingleProduct
}



