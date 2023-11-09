import { IMovieModel, MovieSearch } from './model';

/**
 * @export
 * @interface IMovieService
 */
export interface IMovieService {

    /**
     * @param {MovieSearch} movieModel
     * @returns {Promise<IMovieModel[]>}
     * @memberof IMovieService
     */
    findAll(movieModel: MovieSearch): Promise<IMovieModel[]>;

    /**
     * @param {string} code
     * @returns {Promise<IMovieModel>}
     * @memberof IMovieService
     */
    findOne(code: string): Promise<IMovieModel>;

    /**
     * @param {IMovieModel} movieModel
     * @returns {Promise<IMovieModel>}
     * @memberof IMovieService
     */
    insert(movieModel: IMovieModel): Promise<IMovieModel>;

    /**
     * @param {string} id
     * @returns {Promise<IMovieModel>}
     * @memberof IMovieService
     */
    remove(id: string): Promise<IMovieModel>;

    /**
     * @param {string, IMovieModel} id, movieModel
     * @returns {Promise<IMovieModel>}
     * @memberof IMovieService
     */
    update(id: string, movieModel: IMovieModel): Promise<IMovieModel>;
}
