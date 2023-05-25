interface Car {
    make: string;
    price?: number; // TS sees this as number | undefined -- so type narrowing is needed
    color: string;
}

function butOrNot(carList: Car[]) {
    for(let ii = 0; ii < carList.length; ii++) {
        let car = carList[ii];

        // type narrowing check needed before price is accessed
        if(car.price && car.price > 10000) return false;
    }

    return true;
}