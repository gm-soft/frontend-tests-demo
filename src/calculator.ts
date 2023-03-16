export class Calculator {
    constructor(
        private readonly first: number){}

    add(second: number): number {
        return this.first + second;
    }

    subtract(second: number): number {
        return this.first - second;
    }

    multiply(second: number): number {
        return this.first * second;
    }

    divide(second: number): number {
        return this.first / second;
    }
}
