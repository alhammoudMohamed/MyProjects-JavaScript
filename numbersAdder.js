const getNumber1 = function (callback) {
    setTimeout(() => callback(1), 1000);
};

const getNumber2 = () => new Promise(resolve => resolve(2));
const getNumber3 = () => new Promise(resolve => resolve(3));
const add = function () {
    getNumber1(async number => {
        const number1 = number;
        let number2;
        getNumber2().then(number => {
            number2 = number
        });
        const number3 = await getNumber3();
        console.log(number1 + number2 + number3);
    });
}
add();