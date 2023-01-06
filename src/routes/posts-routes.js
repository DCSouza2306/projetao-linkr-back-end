import { Router } from 'express';
import { getPosts, newPost } from '../controllers/posts-controller.js';
import { authValidation } from '../middlewares/auth.validation.middleware.js';
import { validateSchema } from '../middlewares/validate.schema.middleware.js';
import { postSchema } from '../models/posts-schema.js';

const router = Router();

router.post('/posts', validateSchema(postSchema), authValidation, newPost);

router.get('/posts', getPosts);

export default router;
