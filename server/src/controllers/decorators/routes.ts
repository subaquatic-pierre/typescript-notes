import 'reflect-metadata';
import {MetadataKeys} from './MetadataKeys';
import {Methods} from './Methods';

/**
 * @function
 * @param {string} method - Applies method to be used with the route to the handler
 * @param {string} path - Path to be used with route
 * @decorator Returns a decorator to be used for each path method on Controller Class 
 */
function bindMethod(method: string) {
    return function (path:string) {
        return function (target: any, key: string, desc: PropertyDescriptor) {
            Reflect.defineMetadata(MetadataKeys.method, method, target, key)
            Reflect.defineMetadata(MetadataKeys.path, path, target, key)
        }
    }
}

export const get = bindMethod(Methods.get)
export const post = bindMethod(Methods.post)