const express = require('express');
const mongoose = require('mongoose');
const blogRoutes = require('./routes/blogRoutes');

const app = express();
const port = 3000;

app.set('view engine', 'ejs');
app.use(express.urlencoded({ extended: true }));

const dbURI =
   'mongodb+srv://zwel:zwel@cluster0.zjx4uph.mongodb.net/node_blog?retryWrites=true&w=majority';

//connect to cluster
mongoose
   .connect(dbURI, {
      useNewUrlParser: true,
      useUnifiedTopology: true,
   })
   .then(() => {
      app.listen(port, () => console.log(`server listening on port: ${port}`));
   })
   .catch((err) => console.log(err));

//blog routes
app.use(blogRoutes);

app.get('/about', (req, res) => res.render('pages/about', { title: 'About' }));

// 404 page
app.use((req, res) => res.status(404).render('pages/404', { title: '404' }));
