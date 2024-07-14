
import React, { useState, useEffect } from 'react';
import Navbar from '../../Components/Navbar'
import Footer from '../../Components/Footer'
import '../../Styles/Global.css'
import '../../Styles/Desarrollador.css'
import { getAllUsers, register, deleteUser, updateUser, verificarToken } from '../../src/fetching/auth.fetching';



const UsuarioDesarrollador = () => {
    const [userName, setUserName] = useState('');
    const [users, setUsers] = useState([]);
    const [newUser, setNewUser] = useState({ nombre: '', email: '', password: '' });
    const [editUser, setEditUser] = useState({ id: '', nombre: '', email: '', password: '' });

    useEffect(() => {
        const fetchUserName = async () => {
            try {
                const response = await verificarToken();
                setUserName(response.user.nombre);
            } catch (error) {
                console.error('Error fetching user name:', error);
            }
        };

        fetchUserName();
    }, []);

    const handleAddUser = async () => {
        try {
            await register(newUser);
            setNewUser({ nombre: '', email: '', password: '' });
            fetchAllUsers(); // Refresh user list
        } catch (error) {
            console.error('Error adding user:', error);
        }
    };

    const handleDeleteUser = async (userId) => {
        try {
            await deleteUser(userId);
            fetchAllUsers(); // Refresh user list
        } catch (error) {
            console.error('Error deleting user:', error);
        }
    };

    const handleUpdateUser = async () => {
        try {
            await updateUser(editUser.id, editUser);
            setEditUser({ id: '', nombre: '', email: '', password: '' });
            fetchAllUsers(); // Refresh user list
        } catch (error) {
            console.error('Error updating user:', error);
        }
    };

    const fetchAllUsers = async () => {
        try {
            const usersList = await getAllUsers();
            setUsers(usersList);
        } catch (error) {
            console.error('Error fetching all users:', error);
        }
    };

    return (
        <div>
            <h1>Bienvenido {userName}</h1>

            <div>
                <h2>Agregar Usuario</h2>
                <input
                    type="text"
                    placeholder="Nombre"
                    value={newUser.nombre}
                    onChange={(e) => setNewUser({ ...newUser, nombre: e.target.value })}
                />
                <input
                    type="email"
                    placeholder="Email"
                    value={newUser.email}
                    onChange={(e) => setNewUser({ ...newUser, email: e.target.value })}
                />
                <input
                    type="password"
                    placeholder="Password"
                    value={newUser.password}
                    onChange={(e) => setNewUser({ ...newUser, password: e.target.value })}
                />
                <button onClick={handleAddUser}>Agregar Usuario</button>
            </div>

            <div>
                <h2>Editar Usuario</h2>
                <input
                    type="text"
                    placeholder="ID"
                    value={editUser.id}
                    onChange={(e) => setEditUser({ ...editUser, id: e.target.value })}
                />
                <input
                    type="text"
                    placeholder="Nombre"
                    value={editUser.nombre}
                    onChange={(e) => setEditUser({ ...editUser, nombre: e.target.value })}
                />
                <input
                    type="email"
                    placeholder="Email"
                    value={editUser.email}
                    onChange={(e) => setEditUser({ ...editUser, email: e.target.value })}
                />
                <input
                    type="password"
                    placeholder="Password"
                    value={editUser.password}
                    onChange={(e) => setEditUser({ ...editUser, password: e.target.value })}
                />
                <button onClick={handleUpdateUser}>Actualizar Usuario</button>
            </div>

            <div>
                <h2>Eliminar Usuario</h2>
                <input
                    type="text"
                    placeholder="ID del usuario a eliminar"
                    onChange={(e) => handleDeleteUser(e.target.value)}
                />
            </div>

            <div>
                <h2>Traer Todos los Usuarios</h2>
                <button onClick={fetchAllUsers}>Mostrar Usuarios</button>
                <div>
                    {users.map(user => (
                        <div key={user.id}>
                            <p>ID: {user.id}</p>
                            <p>Nombre: {user.nombre}</p>
                            <p>Email: {user.email}</p>
                        </div>
                    ))}
                </div>
            </div>
        </div>
    );
};

export default UsuarioDesarrollador;

