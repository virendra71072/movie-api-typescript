import { NextFunction, Request, Response } from 'express';
import HttpError from '../error';

interface UserAUth {
    email: string,
    role: string,
    _id: string,
}

interface RequestWithUser extends Request {
    user: UserAUth;
}

/**
 *
 * @param {RequestWithUser} req
 * @param {Response} res
 * @param {NextFunction} next
 * @returns {void}
 * @swagger
 *  components:
 *   securitySchemes:
 *     ApiKeyAuth:
 *       type: apiKey
 *       in: header
 *       name: x-access-token
 */
export function adminRoleCheck(req: RequestWithUser, res: Response, next: NextFunction): void {
    if (req.user.role === 'ADMIN') {
        return next();
    }
    return next(res.status(400).json({"msg":"Invalid Admin Role"}));
    // return next(new HttpError(400, 'Invalid Admin Role'));
}
