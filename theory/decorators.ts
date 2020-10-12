@classDecorator
class Boat {
    color: string = 'red'

    formatColor(): string {
    return `The color of the boat is ${this.color}`
    }
    
    
    pilot(@parameterDecorator speed?: string): void {
    if (speed === 'slow') {
        console.log('Broom broom')
        } else {
        console.log('The boat is fast')
        }
    }
    
    @testValue(5)
    randomNumber(): number {
        const num = Math.round(Math.random() * 10)
        return num
    }
}

function classDecorator (constructor: typeof Boat) {
    console.log(constructor)
    }

function parameterDecorator (target: any, key: string, index: number) {
    console.log('Target: ', target)
    console.log('key: ', key)
    console.log('Index', index)
    }

function testValue(val: number) {
    return function (target: any, key: string, desc: PropertyDescriptor): void {
        const method = desc.value
        if (method() >= val) {
            console.log('The value of the method is MORE THAN the decorator value')
        } else {
            console.log('The value of the method is LESS THAN the decorator value')
        }
    }
}

const boat = new Boat();
boat.randomNumber()
boat.pilot('slow')
