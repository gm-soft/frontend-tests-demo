import { expect } from 'chai';
import { AppStorage, IEnvironment } from '../src/app-storage';

describe('AppStorage', () => {

    it('should seed data in development', async () => {

        const env = {
            ENVIRONMENT: 'Development',
        } as IEnvironment;

        const target = new AppStorage(env);
        target.seed();
        expect(target.count()).to.equal(1);
    });
});