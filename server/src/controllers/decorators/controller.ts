import { AppRouter } from '../../AppRouter';
import {MetadataKeys} from './MetadataKeys';
import { Methods } from './Methods';
import {validateBody} from './bodyValidator'
import {validateAuth} from './auth';

const router = AppRouter.getInstance()

/**
 * @decorator
 * Decorator from route controller class
 * Applies the path, middleware and route handler to each route
 * after looping through all routes with a path
 */

export function controller () {
    return function (target: Function) {
        for (let key in target.prototype) {
            const routeHandler = target.prototype[key]

            const path = Reflect.getMetadata(MetadataKeys.path, target.prototype, key)
            const method: Methods = Reflect.getMetadata(MetadataKeys.method, target.prototype, key)

            // Get middleware array
            const middlewares = Reflect.getMetadata(MetadataKeys.middleware, target.prototype, key) || []

            const keys = Reflect.getMetadata(MetadataKeys.validator, target.prototype, key)
            if(keys){
                middlewares.push(validateBody(keys))
            }
            
            const auth = Reflect.getMetadata(MetadataKeys.auth, target.prototype, key)
            if(auth) {
                middlewares.push(validateAuth())
            }

            // Only apply handlers to methods with path metadata
            if (path) {
                router[method](path, ...middlewares, routeHandler)
            }
        }
    }
}

export {router} 
