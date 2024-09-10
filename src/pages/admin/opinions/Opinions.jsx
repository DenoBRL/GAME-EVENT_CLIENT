import { useEffect, useState } from "react";
import Table from "react-bootstrap/Table";
import Button from "react-bootstrap/Button";
import axios from "axios";
import { Link } from 'react-router-dom';

const Opinions = () => {
    const [opinions, setOpinions] = useState([]);

    // const token = localStorage.getItem("access_token");

    useEffect(() => {
        displayOpinions();
    }, []); // Sans les crochets ça tourne en boucle

    const displayOpinions = async () => {
        await axios.get("http://127.0.0.1:8000/api/opinions",
            // {
            //     headers: {
            //         Authorization: `Bearer ${token}`,
            //     },
            // }
        ).then((res) => {
            setOpinions(res.data.data);
        });
    };

    const deleteOpinion = (id) => {
        axios.delete(`http:/127.0.0.1:8000/api/opinions/${id}`,
            // {
            //     headers: {
            //         Authorization: `Bearer ${token}`,
            //     },
            // }
        ).then(displayOpinions);
    };

    return (
        <div>
            <div className="container mt-5">
                <h1 className="text-dark">Liste des avis</h1>
                <br />
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
                        {opinions.map((opinion) => (
                            <tr key={opinion.id}>
                                <td>{opinion.user.pseudo}</td>
                                <td>{opinion.content_opinion}</td>
                                <td>{opinion.note_site}</td>
                                <td>
                                    <Link to={`/admin/opinions/edit/${opinion.id}`} className='btn btn-success me-2'>
                                        Modifer
                                    </Link>
                                    <Button
                                        variant="danger"
                                        onClick={() => {
                                            deleteOpinion(opinion.id);
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
            </div>
        </div>
    );
};
export default Opinions;