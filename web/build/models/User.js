export class User {
    constructor(data) {
        this.data = data;
    }
    get(propName) {
        return this.data[propName];
    }
    set(updateData) {
        const newData = Object.assign(Object.assign({}, this.data), updateData);
        this.data = newData;
    }
}
