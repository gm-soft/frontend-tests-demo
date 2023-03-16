export class SecretCatcherService {
    constructor(
        private someCondition = false) {}

    doSomeLogic(): void {
        // do some logic
        // ...
        // ...
        // probably, we change someCondition to true

        if (this.someCondition) {
            console.log('someCondition', this.someCondition);
            throw new Error('Logic error!');
        }
    }
}