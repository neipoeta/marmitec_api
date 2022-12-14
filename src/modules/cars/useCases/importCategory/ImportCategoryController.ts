import { Response, Request } from 'express';
import { ImportCategoryUseCase } from './ImportCategoryUseCase';



class ImportCategoryController {
    constructor(private importCategoryUseCase: ImportCategoryUseCase) {
        this.handle = this.handle.bind(this);
    }

    handle(request: Request, response: Response): Response {
        const { file } = request;
        this.importCategoryUseCase.execute(file);

        return response.status(201).send();
}};

export { ImportCategoryController };