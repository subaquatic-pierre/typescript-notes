import 'reflect-metadata';
import express from 'express';

const router = express.Router()

function bindMethod(method: string) {
    return function (path:string) {
        return function (target: any, key: string, desc: PropertyDescriptor) {
            Reflect.defineMetadata('method', method, target, key)
            Reflect.defineMetadata('path', path, target, key)
        }
    }
}

export function controller () {
    return function (target: Function) {
        for (let key in target.prototype) {
            const routeHandler = target.prototype[key]

            const path = Reflect.getMetadata('path', target.prototype[key])
            const method = Reflect.getMetadata('method', target.prototype[key])
            const middleware = Reflect.getMetadata('middleware', target.prototype[key])

            // Only apply handlers to methods with path metadata
            if (path) {
                // Check method metadata
                switch(method) {
                    case('get') : {
                        router.get(path, middleware, routeHandler)
                    }
                }
            }
        }
    }
}

export const get = bindMethod('get')
export {router}