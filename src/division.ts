export class Division {
    constructor(
        private readonly a: number,
        private readonly b: number) {}

    result(): number {

        if (this.a > 0) console.log('a is positive 0');
        if (this.a < 0) console.log('a is negative');

        if (this.b > 0) console.log('b is positive');
        if (this.b < 0) console.log('b is negative');

        if (this.b === 0) {
            console.log('b equals to zero, division by zero error');
            throw new Error('Division by zero!');
        }

        return this.a / this.b;
    }
}