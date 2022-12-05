const Blog = require('../models/blog');

const index = async (req, res) => {
   try {
      const blogs = await Blog.find();
      res.render('pages/index', { title: 'Blog', blogs });
   } catch (error) {
      res.status(500).send(error);
   }
};

const create_post = async (req, res) => {
   const blog = new Blog(req.body);

   try {
      await blog.save();
      res.redirect('/');
   } catch (error) {
      res.status(500).send(error);
   }
};

const create_get = (req, res) =>
   res.render('pages/create', { title: 'Create' });

const edit = async (req, res) => {
   try {
      const blog = await Blog.findById(req.params.id);
      res.render('pages/edit', { title: 'Edit', blog });
   } catch (error) {
      res.status(404).render('pages/404', { title: '404' });
   }
};

const edit_post = async (req, res) => {
   try {
      await Blog.findOneAndUpdate({ _id: req.params.id }, req.body);
      res.redirect('/');
   } catch (error) {
      res.status(500).send(error);
   }
};

const detail = async (req, res) => {
   try {
      const blog = await Blog.findById(req.params.id);
      res.render('pages/details', { title: 'Details', blog });
   } catch (error) {
      res.status(404).render('pages/404', { title: '404' });
   }
};

const deleteBlog = async (req, res) => {
   try {
      await Blog.findByIdAndDelete(req.params.id);
      res.json({ redirect: '/' });
   } catch (error) {
      res.status(500).send(error);
   }
};

module.exports = {
   index,
   create_post,
   create_get,
   edit,
   edit_post,
   detail,
   deleteBlog,
};
