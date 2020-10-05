class ArrayOfNumbers {
    constructor(public data: number[]){}
    
    get(index:number):number {
    return this.data[index]
    }

}

class ArrayOfAnything<T> {
    constructor(public data:T[]) {}

    get(index: number):T {
    return this.data[index]
    }
}

const stringArray = new ArrayOfAnything(['a','b','c'])

console.log(stringArray.get(1))

const printAnything = <T>(data: T[]): void => {
    for (let item of data){
        console.log(item)
    }
}

printAnything([1,2,3,4,5])
