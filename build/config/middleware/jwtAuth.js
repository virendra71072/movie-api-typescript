"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.isAuthenticated = void 0;
const jwt = require("jsonwebtoken");
const http = require("http");
const server_1 = require("../server/server");
const error_1 = require("../error");
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
function isAuthenticated(req, res, next) {
    const token = req.headers['x-access-token'];
    if (token) {
        try {
            const user = jwt.verify(token.toString(), server_1.default.get('secret'));
            req.user = user;
            return next();
        }
        catch (error) {
            return next(new error_1.default(401, http.STATUS_CODES[401]));
        }
    }
    return next(new error_1.default(400, 'No token provided'));
}
exports.isAuthenticated = isAuthenticated;
//# sourceMappingURL=jwtAuth.js.map