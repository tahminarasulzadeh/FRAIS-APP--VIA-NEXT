require('dotenv').config();
const express = require('express');
const mongoose = require('mongoose');
const bodyParser = require('body-parser');
const cors = require('cors');
const multer = require('multer');
const path = require('path');

const app = express();
const PORT = process.env.PORT || 5001;

// Middleware
app.use(bodyParser.json());
app.use(cors());

// MongoDB Connection
mongoose
  .connect(process.env.MONGO_URI, { useNewUrlParser: true, useUnifiedTopology: true })
  .then(() => console.log('Connected to MongoDB'))
  .catch((err) => console.error(err));

// Serve static files from the "uploads" directory
app.use('/uploads', express.static(path.join(__dirname, 'uploads')));

// Multer setup for file uploads
const storage = multer.diskStorage({
  destination: 'uploads/',
  filename: (req, file, cb) => cb(null, `${Date.now()}-${file.originalname}`),
});
const upload = multer({ storage });

// Mongoose Schemas
const ProductSchema = new mongoose.Schema({
  name: String,
  description: String,
  category: String,
  price: Number,
  image: String, // Path to the uploaded image
});



const Product = mongoose.model('Product', ProductSchema);

app.get('/api/products', async(req, res) => {
    const products = await Product.find();
    res.json(products)
})


app.post('/api/products', upload.single('image'), async (req, res) => {
  const { name, description, category, price } = req.body;
  const image = req.file ? `/uploads/${req.file.filename}` : null;
  const newProduct = new Product({ name, description, category, price, image });
  await newProduct.save();
  res.status(201).json({ message: 'Product created', product: newProduct });
});

// Start server
app.listen(PORT, () => console.log(`Server running on http://localhost:${PORT}`));
