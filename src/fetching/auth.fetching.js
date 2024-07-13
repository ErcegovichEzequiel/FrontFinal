
import { HTTP, URL } from "./http"

const ROUTE = '/api/auth'


export const login = async (usuario) => {
    try {
        const result = await HTTP.POST(URL.URL_API + ROUTE + '/login', usuario);
        if (!result.ok) {
            throw result;
        } else {
            localStorage.setItem('token', result.token);  // Almacena el token real recibido
        }
    } catch (error) {
        throw { message: error.message };
    }
};

export const register = async (usuario) => {
    try {
        console.log("Intentando registrar usuario:", usuario);
        const data = await HTTP.POST(URL.URL_API + ROUTE + '/register', usuario);

        if (!data.ok) {
            throw new Error(data.message || "Error en el registro");
        }

        return data;
    } catch (error) {
        console.error("Error en register:", error);
        throw { message: error.message };
    }
}

export const verificarToken = async () => {
    const token = localStorage.getItem('token');
    if (!token) {
        throw new Error('No se encontró el token en el almacenamiento local');
    }

    try {
        const response = await fetch('https://backend-mongodb-smoky.vercel.app/api/auth/verify-token', {
            method: 'GET',
            headers: {
                'Authorization': `Bearer ${token}`,
            },
        });

        if (!response.ok) {
            throw new Error(`Error HTTP: ${response.status}`);
        }
        console.log('Respuesta de verificación de token:', response);
        console.log("Holis" , token)


        const data = await response.json();
        console.log('Respuesta de verificación de token:', data);

        return data; // O el tratamiento que necesites hacer con la respuesta
    } catch (error) {
        console.error('Error verificando token:', error.message);
        throw error;
    }
};
