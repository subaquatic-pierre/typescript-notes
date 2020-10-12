import 'reflect-metadata';

/**
 * @function
 * @param {string} method - Applies method to be used with the route to the handler
 * @param {string} path - Path to be used with route
 * @decorator Returns a decorator to be used for each path method on Controller Class 
 */
function bindMethod(method: string) {
    return function (path:string) {
        return function (target: any, key: string, desc: PropertyDescriptor) {
            Reflect.defineMetadata('method', method, target, key)
            Reflect.defineMetadata('path', path, target, key)
        }
    }
}

export const get = bindMethod('get')