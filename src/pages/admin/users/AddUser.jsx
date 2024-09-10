import { useState } from "react";
import Form from "react-bootstrap/Form";
import Button from "react-bootstrap/Button";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import axios from "axios";
import { useNavigate } from "react-router-dom";

const AddUser = () => {
    const navigate = useNavigate();
    const [image_profile, setImageProfile] = useState([]);
    const [pseudo, setPseudo] = useState([]);
    const [surname, setSurname] = useState([]);
    const [name_user, setNameUser] = useState([]);
    const [date_of_birth, setDateOfBirth] = useState([]);
    // const [address_id, SetAddressId] = useState("");
    // const [addresses, SetAddresses] = useState([]);
    const [email, setEmail] = useState([]);
    const [password, setPassword] = useState("");
    const [validationError, setValidationError] = useState({});

    // const token = localStorage.getItem("access_token");

    const changeHandler = (event) => {
        setImageProfile(event.target.files[0]);
    };

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

    const AddUser = async (e) => {
        e.preventDefault();
        const formData = new FormData();
        formData.append("image_profile", image_profile);
        formData.append("pseudo", pseudo);
        formData.append("surname", surname);
        formData.append("name_user", name_user);
        formData.append("date_of_birth", date_of_birth);
        // formData.append("address_id", address_id); 
        formData.append("email", email);
        formData.append("password", password);
        await axios
            .post(`http://127.0.0.1:8000/api/users`, formData,
                // {
                //     headers: {
                //         Authorization: `Bearer ${token}`,
                //     },
                // }
            )
            .then(navigate("/users"))
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
                                <h4 className="card-title">Création d&apos;un nouvel utilisateur</h4>
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
                                    <Form onSubmit={AddUser}>
                                        <Row>
                                            <Col>
                                                <Form.Group controlId="image_profile" className="mb-3">
                                                    <Form.Label>Photo de profil</Form.Label>
                                                    <Form.Control type="file" onChange={changeHandler} />
                                                </Form.Group>
                                            </Col>
                                        </Row>
                                        <Row>
                                            <Col>
                                                <Form.Group controlId="pseudo">
                                                    <Form.Label>Pseudo</Form.Label>
                                                    <Form.Control
                                                        type="name"
                                                        value={pseudo}
                                                        onChange={(event) => {
                                                            setPseudo(event.target.value);
                                                        }}
                                                    />
                                                </Form.Group>
                                            </Col>
                                        </Row>
                                        <Row>
                                            <Col>
                                                <Form.Group controlId="surname">
                                                    <Form.Label>Nom</Form.Label>
                                                    <Form.Control
                                                        type="lastName"
                                                        value={surname}
                                                        onChange={(event) => {
                                                            setSurname(event.target.value);
                                                        }}
                                                    />
                                                </Form.Group>
                                            </Col>
                                        </Row>
                                        <Row>
                                            <Col>
                                                <Form.Group controlId="name">
                                                    <Form.Label>Prénom</Form.Label>
                                                    <Form.Control
                                                        type="firstName"
                                                        value={name_user}
                                                        onChange={(event) => {
                                                            setNameUser(event.target.value);
                                                        }}
                                                    />
                                                </Form.Group>
                                            </Col>
                                        </Row>
                                        <Row>
                                            <Col>
                                                <Form.Group controlId="date_of_birth">
                                                    <Form.Label>Date de naissance</Form.Label>
                                                    <Form.Control
                                                        type="date"
                                                        value={date_of_birth}
                                                        onChange={(event) => {
                                                            setDateOfBirth(event.target.value);
                                                        }}
                                                    />
                                                </Form.Group>
                                            </Col>
                                        </Row>
                                        {/* <Row>
                                            <Col>
                                                <Form.Group controlId="address">
                                                    <Form.Label>Adresses</Form.Label>
                                                    <Form.Select aria-label="Default select example"
                                                        onChange={handleChange}>
                                                        <option>Choisissez une addresse</option>
                                                        {addresses.map(place => (
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
                                        </Row> */}
                                        <Row>
                                            <Col>
                                                <Form.Group controlId="email">
                                                    <Form.Label>Email</Form.Label>
                                                    <Form.Control
                                                        type="email"
                                                        value={email}
                                                        onChange={(event) => {
                                                            setEmail(event.target.value);
                                                        }}
                                                    />
                                                </Form.Group>
                                            </Col>
                                        </Row>
                                        <Row>
                                            <Col>
                                                <Form.Group controlId="password">
                                                    <Form.Label>Mot de passe</Form.Label>
                                                    <Form.Control
                                                        type="password"
                                                        value={password}
                                                        onChange={(event) => {
                                                            setPassword(event.target.value);
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
                                            Créer un nouvel utilisateur
                                        </Button>
                                    </Form>
                                </div>
                            </div>
                        </div>
                        <br />
                        <Button variant="primary" href="/admin/users">Retour à la liste des utilisateurs</Button>
                        <br /><br />
                        <Button variant="success" href="/">Retour au site</Button>
                    </div>
                </div>
            </div>
        </div>
    );
};
export default AddUser;