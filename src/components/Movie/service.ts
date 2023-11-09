import * as Joi from 'joi';
import { Types } from 'mongoose';
import { IMovieService } from './interface';
import MovieModel, { IMovieModel, MovieSearch } from './model';
import MovieValidation from './validation';

/**
 * @export
 * @implements {IMovieModelService}
 */
const MovieService: IMovieService = {
    /**
     * @param {MovieSearch} movie
     * @returns {Promise < IMovieModel[] >}
     * @memberof MovieService
     */
    async findAll(param: MovieSearch): Promise < IMovieModel[] > {
        try {
            var searchPayload = {};
            if (param.title) {
                searchPayload = Object.assign({title: {$regex: new RegExp(param.title)}}, searchPayload)
            }
            if (param.genre) {
                searchPayload = Object.assign({genre: {$regex: new RegExp(param.genre)}}, searchPayload)
            }
            return await MovieModel.find(searchPayload);
        } catch (error) {
            throw new Error(error.message);
        }
    },

    /**
     * @param {string} id
     * @returns {Promise < IMovieModel >}
     * @memberof MovieService
     */
    async findOne(id: string): Promise < IMovieModel > {
        try {
            const validate: Joi.ValidationResult = MovieValidation.getMovie({
                id,
            });

            if (validate.error) {
                throw new Error(validate.error.message);
            }

            return await MovieModel.findOne({
                _id: new Types.ObjectId(id),
            });
        } catch (error) {
            throw new Error(error.message);
        }
    },

    /**
     * @param {IMovieModel} movie
     * @returns {Promise < IMovieModel >}
     * @memberof MovieService
     */
    async insert(body: IMovieModel): Promise < IMovieModel > {
        try {
            const validate: Joi.ValidationResult = MovieValidation.createMovie(body);
            if (validate.error) {
                throw new Error(validate.error.message);
            }

            const movie: IMovieModel = new MovieModel({
                title: body.title,
                genre: body.genre,
                rating: body.rating,
                streamingLink: body.streamingLink,
                releaseDate: new Date(body.releaseDate),
                createdAt: new Date(),
            });

            const query: IMovieModel = await MovieModel.findOne({
                title: body.title,
            });

            if (query) {
                throw new Error('This Movie already exists');
            }

            const saved: IMovieModel = await movie.save();

            return saved;
        } catch (error) {
            throw new Error(error.message);
        }
    },

    /**
     * @param {string} id
     * @returns {Promise < IMovieModel >}
     * @memberof MovieService
     */
    async remove(id: string): Promise < IMovieModel > {
        try {
            const validate: Joi.ValidationResult = MovieValidation.removeMovie({
                id,
            });

            if (validate.error) {
                throw new Error(validate.error.message);
            }

            const movie: IMovieModel = await MovieModel.findOneAndRemove({
                _id: new Types.ObjectId(id),
            });

            return movie;
        } catch (error) {
            throw new Error(error.message);
        }
    },

    /**
     * @param {string, IMovieModel} id, body
     * @returns {Promise < IMovieModel >}
     * @memberof MovieService
     */
    async update(id: string, body: IMovieModel): Promise < IMovieModel > {
        try {
            const validate: Joi.ValidationResult = MovieValidation.updateMovie(body);

            if (validate.error) {
                throw new Error(validate.error.message);
            }
            const query: IMovieModel = await MovieModel.findById(id);

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

            const saved: IMovieModel = await query.save();

            return saved;
        } catch (error) {
            throw new Error(error.message);
        }
    },
};

export default MovieService;
