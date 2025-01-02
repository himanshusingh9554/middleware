const express = require('express');
const bodyParser = require('body-parser');

const app = express();

// Middleware to parse URL-encoded data
app.use(bodyParser.urlencoded({ extended: false }));

// Route to display the form
app.get('/add-product', (req, res) => {
  res.send(`
    <form action="/add-product" method="POST">
      <label for="productName">Product Name:</label>
      <input type="text" id="productName" name="productName" required><br>
      <label for="productSize">Product Size:</label>
      <input type="text" id="productSize" name="productSize" required><br>
      <button type="submit">Submit</button>
    </form>
  `);
});

// Route to handle form submission
app.post('/add-product', (req, res) => {
  const { productName, productSize } = req.body;
  console.log('Product Name:', productName);
  console.log('Product Size:', productSize);
  res.send('Form submitted successfully!');
});

// Start the server
const PORT = 3000;
app.listen(PORT, () => {
  console.log(`Server is running on http://localhost:${PORT}`);
});
