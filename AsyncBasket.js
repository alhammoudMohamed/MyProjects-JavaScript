class Basket {
    constructor() {
        this.obj = [];
    }
    //this is with promise only
    putPromise(product) {
        return new Promise(resolve => resolve(product)).then(result => this.obj.push(result));
    }

    //this is the put method in async await but commented out becuase I used the promise before!
    //     async put(product) {

    //             const theAsync = await this.putPromise(product);
    //             this.obj.push(theAsync);
    //             console.log(theAsync);
    // }
    getPromise() {
        return new Promise(resolve => resolve(this.obj));
    }
    async get() {
        const getAsync = await this.getPromise();
        console.log(getAsync);
    }
}
const basket = new Basket();
basket.putPromise("Apple");
basket.putPromise("Orange")
basket.get();