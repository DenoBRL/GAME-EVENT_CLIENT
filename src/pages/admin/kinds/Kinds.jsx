import { useEffect, useState } from "react";
import Table from "react-bootstrap/Table";
import Button from "react-bootstrap/Button";
import axios from "axios";
import { Link } from 'react-router-dom';

const Kinds = () => {
    const [kinds, setKinds] = useState([]);

    // const token = localStorage.getItem("access_token");

    useEffect(() => {
        displayKinds();
    }, []);
    
    const displayKinds = async () => {
        await axios.get("http://127.0.0.1:8000/api/kinds",
            // {
            //     headers: {
            //         Authorization: `Bearer ${token}`,
            //     },
            // }
        ).then((res) => {
            setKinds(res.data);
        });
    };
    const deleteKind = (id) => {
        axios.delete(`http:/127.0.0.1:8000/api/kinds/${id}`,
            // {
            //     headers: {
            //         Authorization: `Bearer ${token}`,
            //     },
            // }
        ).then(displayKinds);
    };
    return (
        <div>
            <div className="container mt-5">
                <h1 className="text-dark">Liste des types</h1>
                <br />
                <Button variant="primary" href="/admin/kinds/add">Ajouter un nouveau type</Button>
                <br /><br />
                <Table striped bordered hover>
                    <thead>
                        <tr>
                            <th>Nom de la catégorie</th>
                            <th>Nom du type de jeu</th>
                            <th>Actions</th>
                        </tr>
                    </thead>
                    <tbody>
                        {kinds.map((kind) => (
                            <tr key={kind.id}>
                                <td>{kind.category.name_category}</td>
                                <td>{kind.name_kind}</td>
                                <td>
                                    <Link to={`/admin/kinds/edit/${kind.id}`} className='btn btn-success me-2'>
                                        Modifer
                                    </Link>
                                    <Button
                                        variant="danger"
                                        onClick={() => {
                                            deleteKind(kind.id);
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
export default Kinds;