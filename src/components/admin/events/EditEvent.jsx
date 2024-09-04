import { useState, useEffect } from "react";
import Form from "react-bootstrap/Form";
import Button from "react-bootstrap/Button";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import axios from "axios";
import { useNavigate, useParams } from "react-router-dom";
// import Menu from "../../../components/Menu";

const EditEvent = () => {
    const { event } = useParams()
    const navigate = useNavigate();
    const [user_id, setUserId] = useState("");
    const [users, setUsers] = useState([]);
    const [game_id, setGameId] = useState("");
    const [games, setGames] = useState([]);
    const [nb_players, setNbPlayers] = useState([]);
    const [date_event, setDateEvent] = useState([]);
    const [hour_event, setHourEvent] = useState([]);
    const [address_id, setAddressId] = useState("");
    const [addresses, setAddresses] = useState([]);
    const [validationError, setValidationError] = useState({});

    // const token = localStorage.getItem("access_token");

    const handleChange = (event) => {
        setUserId(event.target.value);
        setGameId(event.target.value);
        setAddressId(event.target.value);
    }

    useEffect(() => {
        getUsers();
        getGames();
        getAddresses();
    }, [])

    const getUsers = async () => {
        await axios.get('http://127.0.0.1:8000/api/users',
            // {
            //     headers: {
            //         Authorization: `Bearer ${token}`,
            //     },
            // }
        ).then(res => {
            setUsers(res.data)
        })
    }

    const getGames = async () => {
        await axios.get('http://127.0.0.1:8000/api/games',
            // {
            //     headers: {
            //         Authorization: `Bearer ${token}`,
            //     },
            // }
        ).then(res => {
            setGames(res.data)
        })
    }

    const getAddresses = async () => {
        await axios.get('http://127.0.0.1:8000/api/address',
            // {
            //     headers: {
            //         Authorization: `Bearer ${token}`,
            //     },
            // }
        ).then(res => {
            setAddresses(res.data)
        })
    }

    const updateEvent = async (e) => {
        e.preventDefault();
        const formData = new FormData();
        formData.append('_method', 'PATCH');
        formData.append("user_id", user_id);
        formData.append("game_id", game_id);
        formData.append("nb_players", nb_players);
        formData.append("date_event", date_event);
        formData.append("hour_event", hour_event);
        formData.append("address_id", address_id);
        await axios
            .post(`http://127.0.0.1:8000/api/events/${event}`, formData,
                // {
                //     headers: {
                //         Authorization: `Bearer ${token}`,
                //     },
                // }
            )
            .then(navigate("/events"))
            .catch(({ response }) => {
                if (response.status === 422) {
                    setValidationError(response.data.errors);
                }
            });
    };
    return (
        <div>
            {/* <Menu /> */}
            <div className="container mt-5">
                <div className="row justify-content-center">
                    <div className="col-12 col-sm-12 col-md-6">
                        <div className="card">
                            <div className="card-body">
                                <h4 className="card-title">Modifier l&apos;évènement</h4>
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
                                    <Form onSubmit={updateEvent}>
                                        <Row>
                                            <Col>
                                                <Form.Group controlId="pseudo">
                                                    <Form.Label>Pseudo</Form.Label>
                                                    <Form.Select aria-label="Default select example"
                                                        onChange={handleChange}>
                                                        <option>Choisissez un lieu</option>
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
                                        </Row>
                                        <Row>
                                            <Col>
                                                <Form.Group controlId="name_game">
                                                    <Form.Label>Jeu</Form.Label>
                                                    <Form.Select aria-label="Default select example"
                                                        onChange={handleChange}>
                                                        {games.map(game => (
                                                            <option
                                                                key={game.id}
                                                                value={game.id}>
                                                                {game.Name_game}
                                                            </option>
                                                        ))}
                                                    </Form.Select>
                                                </Form.Group>
                                            </Col>
                                        </Row>
                                        <Row>
                                            <Col>
                                                <Form.Group controlId="nb_players">
                                                    <Form.Label>Nombre de joueurs</Form.Label>
                                                    <Form.Control
                                                        type="number"
                                                        value={nb_players}
                                                        onChange={(event) => {
                                                            setNbPlayers(event.target.value);
                                                        }}
                                                    />
                                                </Form.Group>
                                            </Col>
                                        </Row>
                                        <Row>
                                            <Col>
                                                <Form.Group controlId="date_event">
                                                    <Form.Label>Date</Form.Label>
                                                    <Form.Control
                                                        type="date"
                                                        value={date_event}
                                                        onChange={(event) => {
                                                            setDateEvent(event.target.value);
                                                        }}
                                                    />
                                                </Form.Group>
                                            </Col>
                                        </Row>
                                        <Row>
                                            <Col>
                                                <Form.Group controlId="hour_event">
                                                    <Form.Label>Heure</Form.Label>
                                                    <Form.Control
                                                        type="time"
                                                        value={hour_event}
                                                        onChange={(event) => {
                                                            setHourEvent(event.target.value);
                                                        }}
                                                    />
                                                </Form.Group>
                                            </Col>
                                        </Row>
                                        <Row>
                                            <Col>
                                                <Form.Group controlId="address">
                                                    <Form.Label>Adresse</Form.Label>
                                                    <Form.Select aria-label="Default select example"
                                                        onChange={handleChange}>
                                                        <option>Choisissez une adresse</option>
                                                        {addresses.map(address => (
                                                            <option
                                                                key={address.id}
                                                                value={address.id}>
                                                                {address.address}
                                                                {address.postal_code}
                                                                {address.city}
                                                            </option>
                                                        ))}
                                                    </Form.Select>
                                                </Form.Group>
                                            </Col>
                                        </Row>
                                        <Button
                                            variant="dark"
                                            className="mt-2"
                                            block="block"
                                            type="submit"
                                        >
                                            Modifier l&apos;évènement
                                        </Button>
                                    </Form>
                                </div>
                            </div>
                        </div>
                        <br />
                        <Button variant="primary" href="/admin/events">Retour à la liste des évènements</Button>
                        <br /><br />
                        <Button variant="success" href="/">Retour au site</Button>
                    </div>
                </div>
            </div>
        </div>
    );
};
export default EditEvent;