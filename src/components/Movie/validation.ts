import * as Joi from 'joi';
import Validation from '../validation';
import { IMovieModel } from './model';

/**
 * @export
 * @class MovieValidation
 * @extends Validation
 */
class MovieValidation extends Validation {
    /**
     * Creates an instance of MovieValidation.
     * @memberof MovieValidation
     */
    constructor() {
        super();
    }

    /**
     * @param {IMovieModel} params
     * @returns {Joi.ValidationResult}
     * @memberof MovieValidation
     */
    createMovie(
        params: IMovieModel,
    ): Joi.ValidationResult {
        const schema: Joi.Schema = Joi.object().keys({
            title: Joi.string().required(),
            genre: Joi.string().required(),
            rating: Joi.number().required().max(10).min(0),
            streamingLink: Joi.string(),
            releaseDate: Joi.date().required(),
        });

        return schema.validate(params);
    }

    /**
     * @param {{ id: string }} body
     * @returns {Joi.ValidationResult<{ id: string }>}
     * @memberof MovieValidation
     */
    getMovie(
        body: {
            id: string
        },
    ): Joi.ValidationResult {
        const schema: Joi.Schema = Joi.object().keys({
            id: this.customJoi.objectId().required(),
        });

        return schema.validate(body);
    }

    /**
     * @param {{ id: string }} body
     * @returns {Joi.ValidationResult<{ id: string }>}
     * @memberof MovieValidation
     */
    removeMovie(
        body: {
            id: string
        },
    ): Joi.ValidationResult {
        const schema: Joi.Schema = Joi.object().keys({
            id: this.customJoi.objectId().required(),
        });

        return schema.validate(body);
    }

    /**
     * @param {{ id: string, userModel: IMovieModel }} body
     * @returns {Joi.ValidationResult<{ id: string }>}
     * @memberof MovieValidation
     */
    updateMovie(
        params: IMovieModel,
    ): Joi.ValidationResult {
        const schema: Joi.Schema = Joi.object().keys({
            title: Joi.string().required(),
            genre: Joi.string().required(),
            rating: Joi.number().required().max(10).min(0),
            streamingLink: Joi.string(),
            releaseDate: Joi.date().required(),
        });

        return schema.validate(params);
    }
}

export default new MovieValidation();
