const { default: mongoose } = require('mongoose');

const Schema = mongoose.Schema;

const blogSchema = new Schema(
   {
      title: {
         type: String,
         require: true,
      },
      subtitle: {
         type: String,
      },
      body: {
         type: String,
         require: true,
      },
      author: {
         type: String,
         require: true,
      },
   },
   { timestamps: true }
);

const Blog = mongoose.model('Blog', blogSchema);

module.exports = Blog;
