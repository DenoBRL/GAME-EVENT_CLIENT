import { useState, useEffect } from "react";
import Form from "react-bootstrap/Form";
import Button from "react-bootstrap/Button";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import axios from "axios";
import { useNavigate, useParams } from "react-router-dom";

const EditGame = () => {
    const { game } = useParams()
    const navigate = useNavigate();
    const [image_game, setImageGame] = useState([]);
    const [name_game, setNameGame] = useState([]);
    const [description_game, setDescriptionGame] = useState([]);
    const [validationError, setValidationError] = useState({});

    // const token = localStorage.getItem("access_token");

    const changeHandler = (event) => {
        setImageGame(event.target.files[0]);
    };

    useEffect(() => {
        getGame();
    }, [])
    
    // const handleChange = (event) => {
    //     setAddressId(event.target.value);
    // }
    // useEffect(() => {
    //     getAddresses()
    // }, [])

    // const getAddresses = async () => {
    //     await axios.get('http://127.0.0.1:8000/api/addresses',
    //         {
    //             headers: {
    //                 Authorization: `Bearer ${token}`,
    //             },
    //         }
    //     ).then(res => {
    //         setAddresses(res.data)
    //     })
    // }

    // const handleChange = (event) => {
    //     setRoleId(event.target.value);
    // }
    // useEffect(() => {
    //     getRoles()
    // }, [])

    // const getRoles = async () => {
    //     await axios.get('http://127.0.0.1:8000/api/roles',
    //         // {
    //         //     headers: {
    //         //         Authorization: `Bearer ${token}`,
    //         //     },
    //         // }
    //     ).then(res => {
    //         setRoles(res.data)
    //     })
    // }

    const getGame = async () => {
        await axios
            .get(`http://127.0.0.1:8000/api/games/${game}`,
                // {
                //     headers: {
                //         Authorization: `Bearer ${token}`,
                //     },
                // }
            )
            .then(res => {
                setImageGame(res.data.image_profile)
                setNameGame(res.data.pseudo)
                setDescriptionGame(res.data.surname)
            })
            .catch(error => {
                console.log(error)
            })
    }

    const updateGame = async (e) => {
        e.preventDefault();
        const formData = new FormData();
        formData.append('_method', 'PATCH');
        formData.append("image_game", image_game);
        formData.append("name_game", name_game);
        formData.append("description_game", description_game);
        await axios
            .post(`http://127.0.0.1:8000/api/games/${game}`, formData,
                // {
                //     headers: {
                //         Authorization: `Bearer ${token}`,
                //     },
                // }
            )
            .then(navigate("/games"))
            .catch(({ response }) => {
                if (response.status === 422) {
                    setValidationError(response.data.errors);
                }
            });
    };
    return (
        <div>
            <div className="container mt-5">
                <div className="row justify-content-center">
                    <div className="col-12 col-sm-12 col-md-6">
                        <div className="card">
                            <div className="card-body">
                                <h4 className="card-title">Modifier le jeu</h4>
                                <hr />
                                <div className="form-wrapper">
                                    {Object.keys(validationError).length > 0 && (
                                        <div className="row">
                                            <div className="col-12">
                                                <div className="alert alert-danger">
                                                    <ul className="mb-0">
                                                        {Object.entries(validationError).map(
                                                            ([key, value]) => (
                                                                <li key={key}>{value}</li>
                                                            )
                                                        )}
                                                    </ul>
                                                </div>
                                            </div>
                                        </div>
                                    )}
                                    <Form onSubmit={updateGame}>
                                        {/* <Row>
                                            <Col>
                                                <Form.Group controlId="pseudo">
                                                    <Form.Label>Pseudo</Form.Label>
                                                    <Form.Select aria-label="Default select example"
                                                        onChange={handleChange}>
                                                        <option>Votre pseudo</option>
                                                        {users.map(user => (
                                                            <option
                                                                key={user.id}
                                                                value={user.id}>
                                                                {user.pseudo}
                                                            </option>
                                                        ))}
                                                    </Form.Select>
                                                </Form.Group>
                                            </Col>
                                        </Row> */}
                                        {/* <Row>
                                            <Col>
                                                <Form.Group controlId="name_game">
                                                    <Form.Label>Jeu</Form.Label>
                                                    <Form.Select aria-label="Default select example"
                                                        onChange={handleChange}>
                                                        <option>Votre jeu</option>
                                                        {games.map(game => (
                                                            <option
                                                                key={game.id}
                                                                value={game.id}>
                                                                {game.name_game}
                                                            </option>
                                                        ))}
                                                    </Form.Select>
                                                </Form.Group>
                                            </Col>
                                        </Row> */}
                                        <Row>
                                            <Col>
                                                <Form.Group controlId="image_game" className="mb-3">
                                                    <Form.Label>Photo du jeu</Form.Label>
                                                    <Form.Control type="file" onChange={changeHandler} />
                                                </Form.Group>
                                            </Col>
                                        </Row>
                                        <Row>
                                            <Col>
                                                <Form.Group controlId="name_game">
                                                    <Form.Label>Nom du jeu</Form.Label>
                                                    <Form.Control
                                                        type="name"
                                                        value={name_game}
                                                        onChange={(event) => {
                                                            setNameGame(event.target.value);
                                                        }}
                                                    />
                                                </Form.Group>
                                            </Col>
                                        </Row>
                                        <Row>
                                            <Col>
                                                <Form.Group controlId="description_game">
                                                    <Form.Label>Description du jeu</Form.Label>
                                                    <Form.Control
                                                        type="text"
                                                        value={description_game}
                                                        onChange={(event) => {
                                                            setDescriptionGame(event.target.value);
                                                        }}
                                                    />
                                                </Form.Group>
                                            </Col>
                                        </Row>
                                        <br />
                                        <Button
                                            variant="primary"
                                            className="mt-2"
                                            block="block"
                                            type="submit"
                                        >
                                            Modifier le jeu
                                        </Button>
                                    </Form>
                                </div>
                            </div>
                        </div>
                        <br />
                        <Button variant="primary" href="/admin/users">Retour à la liste des jeux</Button>
                        <br /><br />
                        <Button variant="success" href="/">Retour au site</Button>
                    </div>
                </div>
            </div>
        </div>
    );
};
export default EditGame;