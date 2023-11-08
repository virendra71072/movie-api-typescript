import { NextFunction, Request, Response } from 'express';
import { HttpError } from '../../config/error';
import { IMovieModel } from './model';
import MovieService from './service';

/**
 * @export
 * @param {Request} req
 * @param {Response} res
 * @param {NextFunction} next
 * @returns {Promise < void >}
 */
export async function findAll(req: Request, res: Response, next: NextFunction): Promise < void > {
    try {
        const movies: IMovieModel[] = await MovieService.findAll();

        res.status(200).json(movies);
    } catch (error) {
        next(new HttpError(error.message.status, error.message));
    }
}

/**
 * @export
 * @param {Request} req
 * @param {Response} res
 * @param {NextFunction} next
 * @returns {Promise < void >}
 */
export async function findOne(req: Request, res: Response, next: NextFunction): Promise < void > {
    try {
        const movie: IMovieModel = await MovieService.findOne(req.params.id);

        res.status(200).json(movie);
    } catch (error) {
        next(new HttpError(error.message.status, error.message));
    }
}

/**
 * @export
 * @param {Request} req
 * @param {Response} res
 * @param {NextFunction} next
 * @returns {Promise < void >}
 */
export async function create(req: Request, res: Response, next: NextFunction): Promise < void > {
    try {
        const movie: IMovieModel = await MovieService.insert(req.body);

        res.status(201).json(movie);
    } catch (error) {
        next(new HttpError(error.message.status, error.message));
    }
}

/**
 * @export
 * @param {Request} req
 * @param {Response} res
 * @param {NextFunction} next
 * @returns {Promise < void >}
 */
export async function remove(req: Request, res: Response, next: NextFunction): Promise < void > {
    try {
        const movie: IMovieModel = await MovieService.remove(req.params.id);

        if (movie) {
            res.status(200).json(movie);
        } else {
            res.status(500).json({status:0, description: "Movie now found"});
        }

    } catch (error) {
        next(new HttpError(error.message.status, error.message));
    }
}

/**
 * @export
 * @param {Request} req
 * @param {Response} res
 * @param {NextFunction} next
 * @returns {Promise < void >}
 */
export async function update(req: Request, res: Response, next: NextFunction): Promise < void > {
    try {
        const movie: IMovieModel = await MovieService.update(req.params.id, req.body);

        if (movie) {
            res.status(200).json(movie);
        } else {
            res.status(500).json({status:0, description: "Movie not found"});
        }

    } catch (error) {
        next(new HttpError(error.message.status, error.message));
    }
}
