export class User {

    private deletedAt: Date | null = null

    constructor(
        public readonly email: string,
        private isEmailVerified = false,
        ) {}

    verify(): void {
        if (this.isEmailVerified) {
            throw new Error('Email already verified');
        }

        this.isEmailVerified = true;
    }

    isVerified(): boolean {
        return !this.isDeleted() && this.isEmailVerified;
    }

    isSocialEmail(): boolean {
        return this.email.endsWith('@facebook.com') ||
               this.email.endsWith('@gmail.com');
    }

    delete(): void {
        if (this.deletedAt != null) {
            throw new Error('User is already removed');
        }

        this.deletedAt = new Date();
    }

    isDeleted(): boolean {
        return this.deletedAt != null;
    }
}