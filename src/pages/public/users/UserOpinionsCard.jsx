import { useEffect, useState } from "react";
import Button from 'react-bootstrap/Button';
import axios from "axios";
import { useParams } from "react-router-dom";
import { Link } from 'react-router-dom';
import Table from "react-bootstrap/Table";

function UserOpinions() {
    const [userOpinions, setUserOpinions] = useState([]);
    const { opinionid } = useParams();

    const token = localStorage.getItem("access_token");

    useEffect(() => {
        displayUserOpinions();
    }, []);

    const displayUserOpinions = async () => {
        await axios.get(`http://127.0.0.1:8000/api/opinions/${opinionid}`,
            {
                    headers: {
                        Authorization: `Bearer ${token}`,
                    },
            }
        ).then((res) => {
            setUserOpinions(res.data);
        });

    }

    const deleteUserOpinion = (id) => {
        axios.delete(`http:/127.0.0.1:8000/api/opinions/${id}`,
            {
                headers: {
                    Authorization: `Bearer ${token}`,
                },
            }
        ).then(displayUserOpinions);
    };

    return (
        <div>
            <div className="container mt-5">
                <Table striped bordered hover>
                    <thead>
                        <tr>
                            <th>Publication de l&apos;avis par</th>
                            <th>Contenu du commentaire</th>
                            <th>Note du site</th>
                            <th>Actions</th>
                        </tr>
                    </thead>
                    <tbody>
                            <tr key={userOpinions.id}>
                                <td>{userOpinions.user.pseudo}</td>
                                <td>{userOpinions.content_opinion}</td>
                                <td>{userOpinions.note_site}</td>
                                <td>
                                    <Link to={`/opinions/edit/${userOpinions.id}`} className='btn btn-success me-2'>
                                        Modifer
                                    </Link>
                                    <Button
                                        variant="danger"
                                        onClick={() => {
                                            deleteUserOpinion(userOpinions.id);
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
export default UserOpinions;
