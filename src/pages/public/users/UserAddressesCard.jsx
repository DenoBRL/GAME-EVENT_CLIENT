import { useEffect, useState } from "react";
import Button from 'react-bootstrap/Button';
import axios from "axios";
import { useParams } from "react-router-dom";
import { Link } from 'react-router-dom';
import Table from "react-bootstrap/Table";

function UserAddress() {
    const [userAddress, setUserAddress] = useState([]);
    const { addressid } = useParams();

    // const token = localStorage.getItem("access_token");

    useEffect(() => {
        displayUserAddress();
    }, []);

    const displayUserAddress = async () => {
        await axios.get(`http://127.0.0.1:8000/api/addresses/${addressid}`,
            // {
            //         headers: {
            //             Authorization: `Bearer ${token}`,
            //         },
            // }
        ).then((res) => {
            setUserAddress(res.data);
        });

    }

    const deleteUserAddress = (id) => {
        axios.delete(`http:/127.0.0.1:8000/api/addresses/${id}`,
            // {
            //     headers: {
            //         Authorization: `Bearer ${token}`,
            //     },
            // }
        ).then(displayUserAddress);
    };

    return (
        <div>
            <div className="container mt-5">
                <Table striped bordered hover>
                    <thead>
                        <tr>
                            <th>Adresse</th>
                            <th>Code postal</th>
                            <th>Ville</th>
                            <th>Actions</th>
                        </tr>
                    </thead>
                    <tbody>
                            <tr key={UserAddress.id}>
                                <td>{UserAddress.address}</td>
                                <td>{UserAddress.postal_code}</td>
                                <td>{UserAddress.city}</td>
                                <td>
                                    <Link to={`/addresses/edit/${UserAddress.id}`} className='btn btn-success me-2'>
                                        Modifer
                                    </Link>
                                    <Button
                                        variant="danger"
                                        onClick={() => {
                                            deleteUserAddress(userAddress.id);
                                        }}
                                    >
                                        Supprimer
                                    </Button>
                                </td>
                            </tr>
                    </tbody>
                </Table>
                <br />
                <Button variant="primary" href="/">Retour au site</Button>
                <br /><br />
            </div>
        </div>
    );
}
export default UserAddress;
