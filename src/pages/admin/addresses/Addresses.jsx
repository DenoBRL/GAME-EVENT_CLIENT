import { useEffect, useState } from "react";
import Table from "react-bootstrap/Table";
import Button from "react-bootstrap/Button";
import axios from "axios";
import { Link } from 'react-router-dom';

const Addresses = () => {
    const [addresses, setAddresses] = useState([]);

    // const token = localStorage.getItem("access_token");

    useEffect(() => {
        displayAddresses();
    }, []); // Sans les crochets ça tourne en boucle

    const displayAddresses = async () => {
        await axios.get('http://127.0.0.1:8000/api/addresses',
            // {
            //     headers: {
            //         Authorization: `Bearer ${token}`,
            //     },
            // }
        ).then((res) => {
            setAddresses(res.data);
        });
    };

    const deleteEvent = (id) => {
        axios.delete(`http://127.0.0.1:8000/api/addresses/${id}`,
            // {
            //     headers: {
            //         Authorization: `Bearer ${token}`,
            //     },
            // }
        ).then(displayAddresses);
    };

    return (
        <div>
            <div className="container mt-5">
                <h1 className="text-dark">Liste des adressess</h1>
                <br />
                <Button variant="primary" href="/admin/addresses/add">Ajouter une nouvelle adresse</Button>
                <br /><br />
                <Table striped bordered hover>
                    <thead>
                        <tr>
                            <th>Adresse concernant l&apos;utilisateur</th>
                            <th>Adresse</th>
                            <th>Code postal</th>
                            <th>Ville</th>
                            <th>Actions</th>
                        </tr>
                    </thead>
                    <tbody>
                        {addresses.map((address) => (
                            <tr key={address.id}>
                                <td>{address.user.pseudo}</td>
                                <td>{address.address}</td>
                                <td>{address.postal_code}</td>
                                <td>{address.city}</td>
                                <td>
                                    <Link to={`/admin/addresses/edit/${address.id}`} className='btn btn-success me-2'>
                                        Modifer
                                    </Link>
                                    <Button
                                        variant="danger"
                                        onClick={() => {
                                            deleteEvent(address.id);
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
export default Addresses;