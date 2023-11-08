"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const Joi = require("joi");
const validation_1 = require("../validation");
/**
 * @export
 * @class MovieValidation
 * @extends Validation
 */
class MovieValidation extends validation_1.default {
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
    createMovie(params) {
        const schema = Joi.object().keys({
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
    getMovie(body) {
        const schema = Joi.object().keys({
            id: this.customJoi.objectId().required(),
        });
        return schema.validate(body);
    }
    /**
     * @param {{ id: string }} body
     * @returns {Joi.ValidationResult<{ id: string }>}
     * @memberof MovieValidation
     */
    removeMovie(body) {
        const schema = Joi.object().keys({
            id: this.customJoi.objectId().required(),
        });
        return schema.validate(body);
    }
    /**
     * @param {{ id: string, userModel: IMovieModel }} body
     * @returns {Joi.ValidationResult<{ id: string }>}
     * @memberof MovieValidation
     */
    updateMovie(params) {
        const schema = Joi.object().keys({
            title: Joi.string().required(),
            genre: Joi.string().required(),
            rating: Joi.number().required().max(10).min(0),
            streamingLink: Joi.string(),
            releaseDate: Joi.date().required(),
        });
        return schema.validate(params);
    }
}
exports.default = new MovieValidation();
//# sourceMappingURL=validation.js.map