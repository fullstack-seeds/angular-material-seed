export class ToppingRequest {
    constructor(
        public name: string,
        public description: string,
        public price: number,
        public icon: string
    ) {}
}

export class Topping extends ToppingRequest {
    constructor(
        public _id: string,
        name: string,
        description: string,
        price: number,
        icon: string
    ) {
        super(name, description, price, icon);
    }
}
