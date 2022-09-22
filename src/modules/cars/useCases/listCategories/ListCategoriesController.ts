import { Response, Request } from 'express';
import { ListCategoriesUseCase } from './ListCategoriesUseCase';

class ListCategoriesController {
    constructor(private listCategoriesUseCase: ListCategoriesUseCase) {
        this.handle = this.handle.bind(this);
    }

    handle(request: Request, response: Response): Response {
        const all = this.listCategoriesUseCase.execute();

        return response.json(all);
}};

export { ListCategoriesController };