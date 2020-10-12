import 'reflect-metadata'

const plane = {
    color: 'red'
}

// Define metadata on an object
Reflect.defineMetadata('note', 'hello', plane)

// Retrieve metadata from an abject
const note = Reflect.getMetadata('note', plane)
//console.log(note)

// Assign metadata to a property of an object
Reflect.defineMetadata('note', 'Hello!!', plane, 'color')
const propertyNote = Reflect.getMetadata('note', plane, 'color')
//console.log('Property note: ', propertyNote)

// Mark metadata on a class

@printMetadata
class Plane {
    color: string = 'red'

    @markMethod('This is metadata secret')
    fly(): void {
    console.log('The plane is flying')
    }
}

function markMethod(secretValue: string) {
    return function (target: any, key: string, desc: PropertyDescriptor) {
        Reflect.defineMetadata('secret', secretValue, target, key)
    }
}

function printMetadata(constructor: typeof Plane) {
    for(let key in constructor.prototype) {
        const secret = Reflect.getMetadata('secret', constructor.prototype, key)
        // console.log(secret)
    }
    }


// Express usage with decorators

@controller
class Plane {
    color: string = 'red'

    @get('/login')
    fly(): void {
    console.log('The plane is flying')
    }
}

function get(path: string) {
    return function (target: any, key: string, desc: PropertyDescriptor) {
        Reflect.defineMetadata('path', path, target, key)
    }
}

function controller(constructor: typeof Plane) {
    for(let key in constructor.prototype) {
        const path = Reflect.getMetadata('path', constructor.prototype, key)
        const middleware = Reflect.getMetadata('middleware', constructor.prototype, key)

        // router.get(path, middleware, constructor.prototype[key]) 
    }
}
