function addAnything<T>(a:T, b:T): T {
    if (typeof a === "string") {
    const val = a.concat(b) 
    return val
    } else if (typeof a === "number") {
    return a + b
    }   
}

const addString = addAnything<string>("a","b")
    const addNum = addAnything<number>(2,4)

        console.log(addString)
        console.log(addNum)
