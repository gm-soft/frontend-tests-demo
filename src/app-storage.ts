export interface IEnvironment {
    ENVIRONMENT: string;
}

interface User {
    id: number;
    name: string;
}

export class AppStorage {
    private readonly _storage: Array<User> = [];

    constructor(private readonly env: IEnvironment){}

    seed(): void {

        if (this.env.ENVIRONMENT === 'Development') {
            this._storage.push({
                id: 1,
                name: 'John Doe',
            });
        }
    }

    count(): number {
        return this._storage.length;
    }
}