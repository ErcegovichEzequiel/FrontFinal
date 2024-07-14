// import { HTTP, URL } from "./http"

// const ROUTE = '/api/auth'

// export const login = async (usuario) => {
//     try {
//         const result = await HTTP.POST(URL.URL_API + ROUTE + '/login', usuario);
//         if (!result.ok) {
//             throw result;
//         } else {
//             localStorage.setItem('token', result.token);
//         }
//     } catch (error) {
//         throw { message: error.message };
//     }
// };

// export const register = async (usuario) => {
//     try {
//         const data = await HTTP.POST(URL.URL_API + ROUTE + '/register', usuario);

//         if (!data.ok) {
//             throw new Error(data.message || "Error en el registro");
//         }
//         return data;
//     } catch (error) {
//         console.error("Error en register:", error);
//         throw { message: error.message };
//     }
// }

// export const verificarToken = async () => {
//     const token = localStorage.getItem('token');
//     if (!token) {
//         throw new Error('No se encontró el token en el almacenamiento local');
//     }

//     try {
//         const response = await fetch(URL.URL_API + ROUTE + '/verify-token', {
//             method: 'GET',
//             headers: {
//                 'Authorization': `Bearer ${token}`,
//             },
//         });

//         if (!response.ok) {
//             throw new Error(`Error HTTP: ${response.status}`);
//         }
//         const data = await response.json();
//         return data;
//     } catch (error) {
//         console.error('Error verificando token:', error.message);
//         throw error;
//     }
// };


// auth.fetching.js

import { HTTP, URL } from "./http";

const ROUTE = '/api/auth';

 export const login = async (usuario) => {
     try {
         const result = await HTTP.POST(URL.URL_API + ROUTE + '/login', usuario);
         if (!result.ok) {
             throw result;
         } else {
             localStorage.setItem('token', result.token);
         }
     } catch (error) {
         throw { message: error.message };
     }
 };

export const register = async (usuario) => {
    try {
        const result = await HTTP.POST(URL.URL_API + ROUTE + '/register', usuario);
        if (!result.ok) {
            throw result;
        }
    }
    catch (error) {
        throw { message: error.message };
    }
};

export const verificarToken = async () => { 
    try {
        const token = localStorage.getItem('token'); 
        if (!token) {
            throw { status: 401, message: 'Token no encontrado' };
        }
        const response = await HTTP.GET(URL.URL_API + ROUTE + '/verifyToken', { Authorization: `Bearer ${token}` });
        return response;
    } catch (error) {
        throw { status: error.status || 500, message: error.message || 'Error interno del servidor' };
    }
};

export const getAllUsers = async () => {
    try {
        const response = await HTTP.GET(URL.URL_API + ROUTE + '/users');
        if (!response.ok) {
            throw response;
        }
        return response.users;
    } catch (error) {
        throw { status: error.status || 500, message: error.message || 'Error interno del servidor' };
    }
};

export const deleteUser = async (userId) => {
    try {
        const response = await HTTP.DELETE(URL.URL_API + ROUTE + `/${userId}`);
        if (!response.ok) {
            throw response;
        }
    } catch (error) {
        throw { status: error.status || 500, message: error.message || 'Error interno del servidor' };
    }
};

export const updateUser = async (userId, newUserData) => {
    try {
        const response = await HTTP.PUT(URL.URL_API + ROUTE + `/${userId}`, newUserData);
        if (!response.ok) {
            throw response;
        }
        return response.user;
    } catch (error) {
        throw { status: error.status || 500, message: error.message || 'Error interno del servidor' };
    }
};

