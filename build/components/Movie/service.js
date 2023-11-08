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
const model_1 = require("./model");
const validation_1 = require("./validation");
/**
 * @export
 * @implements {IMovieModelService}
 */
const MovieService = {
    /**
     * @returns {Promise < IMovieModel[] >}
     * @memberof MovieService
     */
    findAll() {
        return __awaiter(this, void 0, void 0, function* () {
            try {
                return yield model_1.default.find({});
            }
            catch (error) {
                throw new Error(error.message);
            }
        });
    },
    /**
     * @param {string} id
     * @returns {Promise < IMovieModel >}
     * @memberof MovieService
     */
    findOne(id) {
        return __awaiter(this, void 0, void 0, function* () {
            try {
                const validate = validation_1.default.getMovie({
                    id,
                });
                if (validate.error) {
                    throw new Error(validate.error.message);
                }
                return yield model_1.default.findOne({
                    _id: new mongoose_1.Types.ObjectId(id),
                });
            }
            catch (error) {
                throw new Error(error.message);
            }
        });
    },
    /**
     * @param {IMovieModel} movie
     * @returns {Promise < IMovieModel >}
     * @memberof MovieService
     */
    insert(body) {
        return __awaiter(this, void 0, void 0, function* () {
            try {
                const validate = validation_1.default.createMovie(body);
                if (validate.error) {
                    throw new Error(validate.error.message);
                }
                const movie = new model_1.default({
                    title: body.title,
                    genre: body.genre,
                    rating: body.rating,
                    streamingLink: body.streamingLink,
                    releaseDate: new Date(body.releaseDate),
                    createdAt: new Date(),
                });
                const query = yield model_1.default.findOne({
                    title: body.title,
                });
                if (query) {
                    throw new Error('This Movie already exists');
                }
                const saved = yield movie.save();
                return saved;
            }
            catch (error) {
                throw new Error(error.message);
            }
        });
    },
    /**
     * @param {string} id
     * @returns {Promise < IMovieModel >}
     * @memberof MovieService
     */
    remove(id) {
        return __awaiter(this, void 0, void 0, function* () {
            try {
                const validate = validation_1.default.removeMovie({
                    id,
                });
                if (validate.error) {
                    throw new Error(validate.error.message);
                }
                const movie = yield model_1.default.findOneAndRemove({
                    _id: new mongoose_1.Types.ObjectId(id),
                });
                return movie;
            }
            catch (error) {
                throw new Error(error.message);
            }
        });
    },
    /**
     * @param {string, IMovieModel} id, body
     * @returns {Promise < IMovieModel >}
     * @memberof MovieService
     */
    update(id, body) {
        return __awaiter(this, void 0, void 0, function* () {
            try {
                const validate = validation_1.default.updateMovie(body);
                if (validate.error) {
                    throw new Error(validate.error.message);
                }
                const query = yield model_1.default.findById(id);
                if (!query) {
                    throw new Error('Invalid movie Id');
                }
                if (body.title) {
                    query.title = body.title;
                }
                if (body.rating) {
                    query.rating = body.rating;
                }
                if (body.genre) {
                    query.genre = body.genre;
                }
                const saved = yield query.save();
                return saved;
            }
            catch (error) {
                throw new Error(error.message);
            }
        });
    },
};
exports.default = MovieService;
//# sourceMappingURL=service.js.map