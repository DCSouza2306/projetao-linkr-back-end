import joi from 'joi';

export const postSchema = joi.object({
	link: joi.string().required(),
	content: joi.string().required(),
});
