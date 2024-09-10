import { useEffect, useState } from "react";
import Table from "react-bootstrap/Table";
import Button from "react-bootstrap/Button";
import axios from "axios";
import { Link } from 'react-router-dom';
// import { useParams } from 'react-router-dom';

const Games = () => {
    const [games, setGames] = useState([]);
    // const [kind, setKind] = useState([]);
    // const { kindid } = useParams();
    // const [category, setCategory] = useState([]);
    // const { categoryid } = useParams();

    // const token = localStorage.getItem("access_token");

    useEffect(() => {
        displayGames();
        // getKind();
        // getCategory();
    }, []);

    const displayGames = async () => {
        await axios.get("http://127.0.0.1:8000/api/games",
            // {
            //     headers: {
            //         Authorization: `Bearer ${token}`,
            //     },
            // }
        ).then((res) => {
            setGames(res.data);
        });
    };

    const deleteGame = (id) => {
        axios.delete(`http:/127.0.0.1:8000/api/games/${id}`,
            // {
            //     headers: {
            //         Authorization: `Bearer ${token}`,
            //     },
            // }
        ).then(displayGames);
    };

    // const getKind = async () => {
    //     await axios.get(`http://127.0.0.1:8000/api/kinds/${kindid}`,
    //         // {
    //         //     headers: {
    //         //         Authorization: `Bearer ${token}`,
    //         //     },
    //         // }
    //     ).then(res => {
    //         setKind(res.data)
    //     })
    // }

    // const getCategory = async () => {
    //     await axios.get(`http://127.0.0.1:8000/api/categories/${categoryid}`,
    //         // {
    //         //     headers: {
    //         //         Authorization: `Bearer ${token}`,
    //         //     },
    //         // }
    //     ).then(res => {
    //         setCategory(res.data)
    //     })
    // }

    return (
        <div>
            <div className="container mt-5">
                <h1 className="text-dark">Liste des jeux</h1>
                <br />
                <Button variant="primary" href="/admin/games/add">Ajouter un nouveau jeu</Button>
                <br /><br />
                <Table striped bordered hover>
                    <thead>
                        <tr>
                            <th>Photo du jeu</th>
                            <th>Nom du jeu</th>
                            <th>Description du jeu</th>
                            {/* <th>Categorie</th>
                            <th>Type</th> */}
                            <th>Actions</th>
                        </tr>
                    </thead>
                    <tbody>
                        {games.map((game) => (
                            <tr key={game.id}>
                                <td>
                                    <img
                                        src={`http://127.0.0.1:8000/storage/uploads/${game.image_game}`}
                                        width="75px"
                                    />
                                </td>
                                <td>{game.name_game}</td>
                                <td>{game.description_game}</td>
                                <td>
                                    <Link to={`/admin/games/edit/${game.id}`} className='btn btn-success me-2'>
                                        Modifer
                                    </Link>
                                    <Button
                                        variant="danger"
                                        onClick={() => {
                                            deleteGame(game.id);
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
export default Games;