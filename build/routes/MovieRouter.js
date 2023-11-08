"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = require("express");
const components_1 = require("../components");
/**
 * @constant {express.Router}
 */
const router = (0, express_1.Router)();
/**
 * GET method route
 * @example http://localhost:PORT/v1/movies
 *
 * @swagger
 * /v1/movies:
 *   get:
 *     description: Get all stored movies in Database
 *     tags: ["movies"]
 *     security:
 *      - ApiKeyAuth: []
 *     responses:
 *       200:
 *         description: An array of movies
 *         content:
 *           application/json:
 *             schema:
 *               oneOf:
 *                - $ref: '#/components/schemas/Movies'
 *       default:
 *          description: unexpected error
 *          content:
 *            application/json:
 *              schema:
 *                $ref: '#/components/schemas/Error'
 */
router.get('/', components_1.MovieComponent.findAll);
/**
 * POST method route
 * @example http://localhost:PORT/v1/movies
 *
 * @swagger
 * /v1/movies:
 *   post:
 *      description: Create new Movie
 *      tags: ["movies"]
 *      security:
 *       - ApiKeyAuth: []
 *      requestBody:
 *        description: movie creation request body
 *        required: true
 *        content:
 *          application/json:
 *            schema:
 *              $ref: '#/components/schemas/MovieSchema'
 *            example:
 *              title: ABCD
 *              genre: Best movie in dance category
 *              rating: 1
 *              streamingLink: https://www.google.com/
 *              releaseDate: 2023-11-08
 *      responses:
 *        201:
 *          description: return created movie
 *          content:
 *            application/json:
 *              schema:
 *                oneOf:
 *                  - $ref: '#/components/schemas/MovieSchema'
 *        default:
 *          description: unexpected error
 *          content:
 *            application/json:
 *              schema:
 *                $ref: '#/components/schemas/Error'
 */
router.post('/', components_1.MovieComponent.create);
/**
 * PUT method route
 * @example http://localhost:PORT/v1/movies
 *
 * @swagger
 * /v1/movies:
 *   post:
 *      description: update Movie
 *      tags: ["movies"]
 *      security:
 *       - ApiKeyAuth: []
 *      requestBody:
 *        description: movie creation request body
 *        required: true
 *        content:
 *          application/json:
 *            schema:
 *              $ref: '#/components/schemas/MovieSchema'
 *            example:
 *              title: ABCD
 *              genre: Best movie in dance category
 *              rating: 1
 *              streamingLink: https://www.google.com/
 *              releaseDate: 2023-11-08
 *      responses:
 *        201:
 *          description: return created movie
 *          content:
 *            application/json:
 *              schema:
 *                oneOf:
 *                  - $ref: '#/components/schemas/MovieSchema'
 *        default:
 *          description: unexpected error
 *          content:
 *            application/json:
 *              schema:
 *                $ref: '#/components/schemas/Error'
 */
router.put('/:id', components_1.MovieComponent.update);
/**
 * GET method route
 * @example http://localhost:PORT/v1/movies/:id
 *
 * @swagger
 * /v1/movies/{id}:
 *  get:
 *    description: Get movie by movieId
 *    tags: ["movies"]
 *    security:
 *      - ApiKeyAuth: []
 *    parameters:
 *      - in: path
 *        name: id
 *        description: the unique movieId
 *        required: true
 *        schema:
 *          type: string
 *    responses:
 *      200:
 *        description: return movie by id
 *        content:
 *          application/json:
 *            schema:
 *              oneOf:
 *                - $ref: '#/components/schemas/MovieSchema'
 */
router.get('/:id', components_1.MovieComponent.findOne);
/**
 * DELETE method route
 * @example  http://localhost:PORT/v1/movies/:id
 *
 * @swagger
 * /v1/movies/{id}:
 *  delete:
 *    description: Delete movie by movieId
 *    tags: ["movies"]
 *    security:
 *      - ApiKeyAuth: []
 *    parameters:
 *      - in: path
 *        name: id
 *        description: the unique movieId
 *        required: true
 *        schema:
 *          type: string
 *    responses:
 *      200:
 *        description: return deleted movie
 *        content:
 *          application/json:
 *            schema:
 *              oneOf:
 *                - $ref: '#/components/schemas/MovieSchema'
 */
router.delete('/:id', components_1.MovieComponent.remove);
/**
 * @export {express.Router}
 */
exports.default = router;
//# sourceMappingURL=MovieRouter.js.map