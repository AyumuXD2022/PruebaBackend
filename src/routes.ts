import { Router, Request, Response } from "express";
import logger from "../lib/logger";
import { ProductoController } from './controllers/producto.controller';


const routes = Router();

const productoService = new ProductoController();


routes.post('/registro', async(req: Request, res: Response) => {
    const body = req.body

    try {
        const response = await productoService.saveProducto(body)
        return res.status(response.code).json(response)
    } catch(err: any) {
        return res.status(err.code ? err.code : 500).json(err)
    }
})

routes.get('/regexp', async(req: Request, res: Response) => {
    const value: any = req.query.reg

    try {
        const response = await productoService.getAllForRegExp(value)
        return res.status(response.code).json(response)
    }catch(err:any) {
        return res.status(err.code ? err.code : 500).json(err)
    }
})


routes.get('/:category', async( req: Request, res: Response ) => {
    const category: any = req.params.category

    try {
        const response = await productoService.surgeryProducto(category)
        return res.status(response.code).json(response)
    }catch(err: any) {
        return res.status(err.code ? err.code : 500).json(err)
    } 
})

export default routes;
