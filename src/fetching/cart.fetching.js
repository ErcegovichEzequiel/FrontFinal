import { HTTP, URL } from "./http"

const ROUTE = '/api/carts'

// Obtener todos los productos del carrito
const getCartItems = async () => {
    try {
        const response = await HTTP.GET(URL.URL_API + ROUTE)
        if (!response || !response.result || !response.result.items) {
            throw new Error("La respuesta no contiene productos en el carrito")
        }
        return response.result.items
    } catch (error) {
        console.error("Error en getCartItems:", error)
        throw error
    }
}


 const addToCart = async (productData) => {
     try {
         const response = await HTTP.POST(URL.URL_API + ROUTE, productData);
         console.log('Solicitud:', productData); // Imprime los datos enviados
         console.log('Respuesta:', response);   // Imprime la respuesta del servidor
         if (!response || !response.result || !response.result.producto) {
             throw new Error("No se pudo agregar el producto al carrito");
         }
         console.log(response.result.productos);
         return response.result.productos;
     } catch (error) {
         console.error("Error en addToCart:", error);
         throw error;
     }
 };

// Eliminar un producto del carrito por su ID (productId)
const deleteCartItem = async (productId) => {
    try {
        const response = await HTTP.DELETE(URL.URL_API + `${ROUTE}/${productId}`)
        if (!response || !response.result || response.result.message !== 'Producto eliminado del carrito') {
            throw new Error("No se pudo eliminar el producto del carrito")
        }
        return response.result.message
    } catch (error) {
        console.error("Error en deleteCartItem:", error)
        throw error
    }
}

// Finalizar la compra y vaciar el carrito
const checkout = async () => {
    try {
        const response = await HTTP.DELETE(URL.URL_API + ROUTE)
        if (!response || !response.result || response.result.message !== 'Carrito vaciado') {
            throw new Error("No se pudo vaciar el carrito")
        }
        return response.result.message
    } catch (error) {
        console.error("Error en checkout:", error)
        throw error
    }
}

export { getCartItems, addToCart, deleteCartItem, checkout }
