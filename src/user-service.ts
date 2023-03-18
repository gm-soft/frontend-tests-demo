import axios from 'axios';

export interface User {
    id: string;
    name: string;
}

export class UserService {
    async get(userId: string): Promise<User> {
        const response = await axios.get(`https://api.example.com/users/${userId}`);
        return response.data;
    }
}
