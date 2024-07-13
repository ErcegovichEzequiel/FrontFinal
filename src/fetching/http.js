export const HTTP = {
    GET: async (url, headers) => {
        try {
            const response = await fetch(url, {
                method: 'GET',
                headers: headers
                
            });
            console.log("esto es el responce del get papu" , response)
            if (!response.ok) {
                throw new Error(`Error HTTP: ${response.status}`);
            }

            return response.json(); // Devolver la respuesta parseada como JSON
        } catch (error) {
            console.error("Error en HTTP GET:", error);
            throw error; // Lanzar el error para que sea manejado por la función que llamó a HTTP.GET
        }
    },


    POST: async (url, body) => {
        const response = await fetch(url, {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(body)
        });
        return response.json();
    },
    PUT: async (url, body) => {
        try {
            const response = await fetch(url, {
                method: 'PUT',
                headers: {
                    'Content-Type': 'application/json'
                },
                body: JSON.stringify(body)
            });

            if (!response.ok) {
                throw new Error(`Error HTTP: ${response.status}`);
            }

            return response.json();
        } catch (error) {
            console.error("Error en HTTP PUT:", error);
            throw error;
        }
    },
    DELETE: async (url, body) => {
        try {
            const response = await fetch(url, {
                method: 'DELETE',
                headers: {
                    'Content-Type': 'application/json'
                },
                body: JSON.stringify(body)
            });

            if (!response.ok) {
                throw new Error(`Error HTTP: ${response.status}`);
            }

            return response.json();
        } catch (error) {
            console.error("Error en HTTP DELETE:", error);
            throw error;
        }
    }
};

export const URL = {
    URL_API: 'https://backend-mongodb-smoky.vercel.app'
}











