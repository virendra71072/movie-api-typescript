import { IMovieModel } from './model';

/**
 * @export
 * @interface IMovieService
 */
export interface IMovieService {

    /**
     * @returns {Promise<IMovieModel[]>}
     * @memberof IMovieService
     */
    findAll(): Promise<IMovieModel[]>;

    /**
     * @param {string} code
     * @returns {Promise<IMovieModel>}
     * @memberof IMovieService
     */
    findOne(code: string): Promise<IMovieModel>;

    /**
     * @param {IMovieModel} userModel
     * @returns {Promise<IMovieModel>}
     * @memberof IMovieService
     */
    insert(userModel: IMovieModel): Promise<IMovieModel>;

    /**
     * @param {string} id
     * @returns {Promise<IMovieModel>}
     * @memberof IMovieService
     */
    remove(id: string): Promise<IMovieModel>;

    /**
     * @param {string, IMovieModel} id, userModel
     * @returns {Promise<IMovieModel>}
     * @memberof IMovieService
     */
    update(id: string, userModel: IMovieModel): Promise<IMovieModel>;
}
