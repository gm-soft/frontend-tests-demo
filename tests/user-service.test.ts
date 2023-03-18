import chai from 'chai';
import { expect } from 'chai';
import * as sinon from 'sinon';
import sinonChai from 'sinon-chai';
import axios from 'axios';
import { UserService } from '../src/user-service';

describe('UserService', () => {

    chai.use(sinonChai);

    let axiosGetStub: sinon.SinonStub;

    beforeEach(() => {
        axiosGetStub = sinon.stub(axios, 'get');
    });

    afterEach(() => {
        axiosGetStub.restore();
    });

    it('should fetch user data using axios', async () => {

        const userId = "random-uuid";
        const fakeData = { id: userId, name: 'John Doe' };
        axiosGetStub.resolves({ data: fakeData });

        const result = await new UserService().get(userId);

        // Assertion
        expect(axiosGetStub).to.have.been.calledOnceWith(`https://api.example.com/users/${userId}`);
        expect(result).to.equal(fakeData);
    });
});
