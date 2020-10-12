import 'reflect-metadata';


function bindMethod(method: string) {
    return function (path:string) {
        return function (target: any, key: string, desc: PropertyDescriptor) {
            Reflect.defineMetadata('method', method, target, key)
            Reflect.defineMetadata('path', path, target, key)
        }
    }
}

export const get = bindMethod('get')