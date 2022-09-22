import { Response, Request } from 'express';
import { CreateSpecificationUseCase } from './CreateSpecificationUseCase';

class CreateSpecificationController {
    constructor(private createCategoryUseCase: CreateSpecificationUseCase) {
        this.handle = this.handle.bind(this);
    }

    handle(request: Request, response: Response): Response {
        const { name, description } = request.body;

        this.createCategoryUseCase.execute({ name, description });

        return response.status(201).send();
}};

export { CreateSpecificationController };