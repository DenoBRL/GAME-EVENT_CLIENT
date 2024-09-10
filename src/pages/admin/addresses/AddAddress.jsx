import { useState, useEffect } from "react";
import Form from "react-bootstrap/Form";
import Button from "react-bootstrap/Button";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import axios from "axios";
import { useNavigate } from "react-router-dom";

const AddEvent = () => {
    const navigate = useNavigate();
    const [user_id, setUserId] = useState("");
    const [users, setUsers] = useState([]);
    const [address, setAddress] = useState([]);
    const [postal_code, setPostalCode] = useState([]);
    const [city, setCity] = useState([]);
    const [validationError, setValidationError] = useState({});

    // const token = localStorage.getItem("access_token");

    const handleChange = (event) => {
        setUserId(event.target.value);

    }
    useEffect(() => {
        getUsers();
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

    const AddAddress = async (e) => {
        e.preventDefault();
        const formData = new FormData();
        formData.append("user_id", user_id);
        formData.append("address", address);
        formData.append("postal_code", postal_code);
        formData.append("city", city);
        await axios
            .post(`http://127.0.0.1:8000/api/addresses`, formData,
                // {
                //     headers: {
                //         Authorization: `Bearer ${token}`,
                //     },
                // }
            )
            .then(navigate("/addresses"))
            .catch(({ response }) => {
                if (response.status != 200) {
                    setValidationError(response.data);
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
                                <h4 className="card-title">Création d&apos;une nouvelle adresse</h4>
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
                                    <Form onSubmit={AddAddress}>
                                        <Row>
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
                                        </Row>
                                        <Row>
                                            <Col>
                                                <Form.Group controlId="address">
                                                    <Form.Label>Adresse</Form.Label>
                                                    <Form.Control
                                                        type="address"
                                                        value={address}
                                                        onChange={(event) => {
                                                            setAddress(event.target.value);
                                                        }}
                                                    />
                                                </Form.Group>
                                            </Col>
                                        </Row>
                                        <Row>
                                            <Col>
                                                <Form.Group controlId="postal_code">
                                                    <Form.Label>Code postal</Form.Label>
                                                    <Form.Control
                                                        type="postcode"
                                                        value={postal_code}
                                                        onChange={(event) => {
                                                            setPostalCode(event.target.value);
                                                        }}
                                                    />
                                                </Form.Group>
                                            </Col>
                                        </Row>
                                        <Row>
                                            <Col>
                                                <Form.Group controlId="city">
                                                    <Form.Label>Ville</Form.Label>
                                                    <Form.Control
                                                        type="city"
                                                        value={city}
                                                        onChange={(event) => {
                                                            setCity(event.target.value);
                                                        }}
                                                    />
                                                </Form.Group>
                                            </Col>
                                        </Row>
                                        <Button
                                            variant="primary"
                                            className="mt-4"
                                            block="block"
                                            type="submit"
                                        >
                                            Créer une nouvelle adresse
                                        </Button>
                                    </Form>
                                </div>
                            </div>
                        </div>
                        <br />
                        <Button variant="primary" href="/admin/addresses">Retour à la liste des adresses</Button>
                        <br /><br />
                        <Button variant="success" href="/">Retour au site</Button>
                    </div>
                </div>
            </div>
        </div>
    );
};
export default AddEvent;