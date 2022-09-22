import { Router } from 'express';
import { SpecificationsRepository } from '../modules/cars/repositories/implementations/SpecificationsRepository';
import { createCategoryController } from '../modules/cars/useCases/createCategory';

const specificationsRoutes = Router();

const specificationsRepository = SpecificationsRepository.getInstance();

specificationsRoutes.get("/", (request, response) => {
    const all = specificationsRepository.list();
    return response.json(all);
});

specificationsRoutes.post("/", (request, response) => {
    return createCategoryController.handle(request, response);
});

export { specificationsRoutes };