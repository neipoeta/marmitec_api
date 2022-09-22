import { Router } from 'express';
import { categoriesRoutes } from './categories.routes';
import { specificationsRoutes } from './specifications.routes';

const router = Router();

router.use("/categories", categoriesRoutes )
router.use("/specifications", specificationsRoutes)

// router.get("/", (request, response) => {
//     return response.json({ message: "Hello World" });
// });

// router.post("/courses", (request, response) => {
//     const { name } = request.body;
    
//     return response.json({ curso: `${name}` });
// });
export { router };
