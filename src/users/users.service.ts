import { Injectable } from '@nestjs/common';

@Injectable()
export class UsersService {}

export interface User {
	id: number;
	name: string;
}

export const sampleUsers: User[] = [
	{ id: 1, name: 'Alice' },
	{ id: 2, name: 'Bob' },
];

export class UsersService {
	findAll(): User[] {
		return sampleUsers;
	}
}
