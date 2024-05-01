//Solicitud para un solo usuario siguiendo lo solicitado en la interface

import { User } from '../interfaces/IPost';

export async function fetchUsers(): Promise<User | null> {
    try {
        const response = await fetch('https://dummyjson.com/user/1');
        
        if (!response.ok) {
            throw new Error('Failed to fetch user data');
        }

        const data: User = await response.json();
        return data;
    } catch (error) {
        console.error('Error fetching user data:', error);
        return null;
    }
}












/*
//Solicitud para un todos los usuarios siguiendo lo solicitado en la interface
import { User } from '../interfaces/IPost';

export async function fetchUsers(): Promise<User[]> {
    try {
        const response = await fetch('https://dummyjson.com/users');
        
        if (!response.ok) {
            throw new Error('Failed to fetch user data');
        }

        const rawData: { users: any[] } = await response.json();
        console.log('Datos brutos de la API:', rawData); 

        const users: User[] = rawData.users.map(user => ({
            id: user.id,
            firstName: user.firstName,
            ssn: user.ssn
        }));
        
        return users;
    } catch (error) {
        console.error('Error fetching user data:', error);
        return [];
    }
}
*/