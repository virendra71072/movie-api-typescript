import { NextFunction } from 'express';
import { Document, Schema } from 'mongoose';
import * as connections from '../../config/connection/connection';


/**
 * @export
 * @interface IMovieModel
 * @extends {Document}
 */
export interface IMovieModel extends Document {
    title: string;
    genre: string;
    rating: number;
    streamingLink: string
    releaseDate: Date;
    createdAt: Date;
}

/**
 * @export
 * @interface MovieSearch
 * @extends {Document}
 */
export interface MovieSearch extends Document {
    title: string;
    genre: string;
}

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
const MovieSchema: Schema = new Schema({
    title: {
        type: String,
        index: true
    },
    genre: {
        type: String,
        index: true
    },
    rating: Number,
    streamingLink: String,
    releaseDate: Date,
    createdAt: Date,
}, {
    collection: 'MovieModel',
    versionKey: false,
}).pre('save', async function (next: NextFunction): Promise < void > {
    const movie: IMovieModel = this; // tslint:disable-line

    next();
});

export default connections.db.model< IMovieModel >('MovieModel', MovieSchema);
