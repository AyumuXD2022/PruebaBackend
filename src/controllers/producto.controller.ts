import logger from "../../lib/logger"
import IProducto from "../interface/producto.interface"
import IResponse from "../interface/response.interface"
import Producto from "../models/producto.model"

export class ProductoController {
    saveProducto(product: IProducto): Promise<IResponse> {
        logger.info(`creating ${product}`)
        return new Promise ((resolve, reject) => {
            if (!product) {
                return reject ({ ok: false, message: 'datos incorrectos', response: null, code:400 })
            }
            Producto.create(product).then((res: any) => {
                logger.info(`${product} creado exitosamente`)
                return resolve({ ok: true, message: 'producto creado con exito', response: res, code: 201})
                }).catch((err: any) => {
                logger.error(err)
                return reject({ ok: false, message: 'Error del servidor', response: err, code:500 })
            })
        })
    }


    getAllForRegExp(value: string): Promise<IResponse> {
        const regexp = new RegExp(value, 'i');

        return new Promise(async(resolve, reject) => {
            try {
                const result: any = await Producto.find({ name: regexp })
                if ( result.length < 1 ) {
                    return reject({ok: false, message: 'producto no encontrado', response: null, code: 404})
                }

                return resolve({ ok: true, message: 'Producto encontrado', response: result, code: 200 })
            }catch(e) {
                return reject({ ok: false, message: 'Error del servidor', response: e, code:500 })
            }
        })
    }

    surgeryProducto(category: string): Promise<IResponse> {
        return new Promise(async(resolve, reject) => {
            try {
                const result: any = await Producto.find({ category: category })
                if ( result.length < 1 ) {
                    return reject({ok: false, message: 'producto no encontrado', response: null, code: 404})
                }
                const suggestion = result.slice(0, 2)
                
                return resolve({ ok: true, message: 'Producto encontrado', response: suggestion, code: 200 })
            }catch(e) {
                return reject({ ok: false, message: 'Error del servidor', response: e, code:500 })
            }
        })
    }
}