import express from 'express';
import { gettAllBlogs,addBlog, updateBlog, getByID, deleteBlog, getByUserId } from '../controllers/blogs-controller';
const blogRouter = express.Router();

blogRouter.get("/allblog", gettAllBlogs)

blogRouter.post("/add", addBlog)

blogRouter.put("/update/:id", updateBlog)

blogRouter.get("/:id", getByID)

blogRouter.delete("/:id", deleteBlog )

blogRouter.get("/user/:id",getByUserId )

export default blogRouter;