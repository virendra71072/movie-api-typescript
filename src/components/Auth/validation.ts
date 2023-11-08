import * as Joi from 'joi';
import { IUserModel } from '../User/model';
import Validation from '../validation';

/**
 * @export
 * @class AuthValidation
 * @extends Validation
 */
class AuthValidation extends Validation {
    /**
     * Creates an instance of AuthValidation.
     * @memberof AuthValidation
     */
    constructor() {
        super();
    }

    /**
     * @param {IUserModel} params
     * @returns {Joi.ValidationResult}
     * @memberof UserValidation
     */
    createUser(
        params: IUserModel,
    ): Joi.ValidationResult {
        const schema: Joi.Schema = Joi.object().keys({
            password: Joi.string().required(),
            role: Joi.string().valid('USER', 'ADMIN').default('USER'),
            email: Joi.string().email({
                minDomainSegments: 2,
            }).required(),
        });

        return schema.validate(params);
    }

    /**
     * @param {IUserModel} params
     * @returns {Joi.ValidationResult}
     * @memberof UserValidation
     */
    getUser(
        params: IUserModel,
    ): Joi.ValidationResult {
        const schema: Joi.Schema = Joi.object().keys({
            response_type: Joi.string(),
            state: Joi.string(),
            role: Joi.string(),
            client_id: Joi.string(),
            password: Joi.string().required(),
            email: Joi.string().email({
                minDomainSegments: 2,
            }).required(),
        });

        return schema.validate(params);
    }
}

export default new AuthValidation();
