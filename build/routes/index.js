"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.init = void 0;
const express = require("express");
const http = require("http");
const path = require("path");
const swaggerJSDoc = require("swagger-jsdoc");
const swaggerUi = require("swagger-ui-express");
const jwtConfig = require("../config/middleware/jwtAuth");
const AuthRouter_1 = require("./AuthRouter");
const MovieRouter_1 = require("./MovieRouter");
const swaggerDef = require('../../swaggerDef');
/**
 * @export
 * @param {express.Application} app
 */
function init(app) {
    const router = express.Router();
    /**
     * @description
     *  Forwards any requests to the /v1/movies URI to our MovieRouter
     *  Also, check if user authenticated
     * @constructs
     */
    app.use('/v1/movies', jwtConfig.isAuthenticated, MovieRouter_1.default);
    /**
     * @description Forwards any requests to the /auth URI to our AuthRouter
     * @constructs
     */
    app.use('/auth', AuthRouter_1.default);
    /**
     * @description
     *  If swagger.json file exists in root folder, shows swagger api description
     *  else send commands, how to get swagger.json file
     * @constructs
     */
    app.use('/docs', swaggerUi.serve, swaggerUi.setup(swaggerJSDoc({
        swaggerDefinition: swaggerDef,
        apis: [path.join(__dirname, '../../src/**/**/*.ts')],
    })));
    /**
     * @description No results returned mean the object is not found
     * @constructs
     */
    app.use((req, res) => {
        res.status(404).send(http.STATUS_CODES[404]);
    });
    /**
     * @constructs all routes
     */
    app.use(router);
}
exports.init = init;
//# sourceMappingURL=index.js.map