import { useEffect, useState } from "react";
import Table from "react-bootstrap/Table";
import Button from "react-bootstrap/Button";
import axios from "axios";
import { Link } from 'react-router-dom';

const Users = () => {
    const [users, setUsers] = useState([]);

    // const token = localStorage.getItem("access_token");

    useEffect(() => {
        displayUsers();
    }, []); // Sans les crochets ça tourne en boucle

    const displayUsers = async () => {
        await axios.get("http://127.0.0.1:8000/api/users",
            // {
            //     headers: {
            //         Authorization: `Bearer ${token}`,
            //     },
            // }
        ).then((res) => {
            setUsers(res.data);
        });
    };

    const deleteUser = (id) => {
        axios.delete(`http:/127.0.0.1:8000/api/users/${id}`,
            // {
            //     headers: {
            //         Authorization: `Bearer ${token}`,
            //     },
            // }
        ).then(displayUsers);
    };

    return (
        <div>
            <div className="container mt-5">
                <h1 className="text-dark">Liste des utilisateurs</h1>
                <br />
                <Button variant="primary" href="/admin/users/add">Ajouter un nouvel utilisateur</Button>
                <br /><br />
                <Table striped bordered hover>
                    <thead>
                        <tr>
                            <th>Photo de profil</th>
                            <th>Pseudo</th>
                            <th>Nom</th>
                            <th>Prénom</th>
                            <th>Date de naissance</th>
                            {/* <th>Adresses</th> */}
                            <th>Email</th>
                            <th>Mot de passe</th>
                            <th>Rôle</th>
                            <th>Actions</th>
                        </tr>
                    </thead>
                    <tbody>
                        {users.map((user) => (
                            <tr key={user.id}>
                                <td>
                                    <img
                                        src={`http://127.0.0.1:8000/storage/uploads/${user.image_profile}`}
                                        width="75px"
                                    />
                                </td>
                                <td>{user.pseudo}</td>
                                <td>{user.surname}</td>
                                <td>{user.name_user}</td>
                                <td>{user.date_of_birth}</td>
                                {/* <td>{user.address.address}</td> */}
                                <td>{user.email}</td>
                                <td>{user.password}</td>
                                <td>{user.role.name_role}</td>
                                <td>
                                    <Link to={`/admin/users/edit/${user.id}`} className='btn btn-success me-2'>
                                        Modifer
                                    </Link>
                                    <Button
                                        variant="danger"
                                        onClick={() => {
                                            deleteUser(user.id);
                                        }}
                                    >
                                        Supprimer
                                    </Button>
                                </td>
                            </tr>
                        ))}
                    </tbody>
                </Table>
                <br />
                <Button variant="primary" href="/">Retour au site</Button>
                <br /><br />
            </div>
        </div>
    );
};
export default Users;