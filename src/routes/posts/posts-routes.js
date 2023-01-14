import { Router } from 'express';
import {
	getPosts,
	newPost,
	deletePost,
	updatePost,
} from '../../controllers/posts/posts-controller.js';
import { validateSchema } from '../../middlewares/validate-schema-middleware.js';
import { postSchema } from '../../models/posts-schema.js';
import { authValidation } from '../../middlewares/auth-validation-middleware.js';
import { postValidation } from '../../middlewares/post-validation-middleware.js';

const router = Router();

router.post('/posts', authValidation, validateSchema(postSchema), newPost);

router.get('/posts', getPosts);

router.delete('/posts/:id', authValidation, postValidation, deletePost);

router.patch('/posts/:id', authValidation, postValidation, updatePost);

export default router;
