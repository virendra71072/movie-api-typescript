"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
Object.defineProperty(exports, "__esModule", { value: true });
const mongoose_1 = require("mongoose");
const connections = require("../../config/connection/connection");
/**
 * @swagger
 * components:
 *  schemas:
 *    MovieSchema:
 *      required:
 *        - title
 *        - genre
 *        - rating
 *        - streamingLink
 *      properties:
 *        id:
 *          type: string
 *        title:
 *          type: string
 *        genre:
 *          type: string
 *        rating:
 *          type: number
 *        streamingLink:
 *          type: string
 *        releaseDate:
 *          type: string
 *          format: date
 *        createdAt:
 *          type: string
 *          format: date
 *    movies:
 *      type: array
 *      items:
 *        $ref: '#/components/schemas/MovieSchema'
 */
const MovieSchema = new mongoose_1.Schema({
    title: String,
    genre: String,
    rating: Number,
    streamingLink: String,
    releaseDate: Date,
    createdAt: Date,
}, {
    collection: 'MovieModel',
    versionKey: false,
}).pre('save', function (next) {
    return __awaiter(this, void 0, void 0, function* () {
        const movie = this; // tslint:disable-line
        next();
    });
});
exports.default = connections.db.model('MovieModel', MovieSchema);
//# sourceMappingURL=model.js.map