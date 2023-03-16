export class Email {
    private static emailRegex = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;

    private readonly email: string;

    constructor(email: string | null) {
        if (email == null || email === '') {
            throw new Error('Email cannot be null');
        }

        this.email = email;
    }

    get(): string {
        if (Email.emailRegex.test(this.email)) {
            return this.email;
        }

        throw new Error('Invalid email');
    }
}