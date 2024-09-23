import { useEffect, useState } from "react";
import Button from 'react-bootstrap/Button';
import axios from "axios";
import { Link } from 'react-router-dom';
import Table from "react-bootstrap/Table";

function User() {
    const [user, setUser] = useState([]);

    const token = localStorage.getItem("access_token");

    useEffect(() => {
        displayUser();
    }, []);

    const displayUser = async () => {
        await axios.get(`http://127.0.0.1:8000/api/currentuser`,
            {
                    headers: {
                        Authorization: `Bearer ${token}`,
                    },
            }
        ).then((res) => {
            setUser(res.data.data.user);
        });

    }

    const deleteUser = (id) => {
        axios.delete(`http:/127.0.0.1:8000/api/users/${id}`,
            {
                headers: {
                    Authorization: `Bearer ${token}`,
                },
            }
        ).then(displayUser);
    };

    return (
        <div>
            <div className="container mt-5">
                <h1 className="text-dark">Mes informations utilisateurs</h1>
                <br />
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
                            <th>Actions</th>
                        </tr>
                    </thead>
                    <tbody>
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
                                <td>
                                    <Link to={`/users/edit/${user.id}`} className='btn btn-success me-2'>
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
                    </tbody>
                </Table>
            </div>
        </div>
    );
}
export default User;
