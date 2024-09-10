import { useState, useEffect } from "react";
import Form from "react-bootstrap/Form";
import Button from "react-bootstrap/Button";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import axios from "axios";
import { useNavigate, useParams } from "react-router-dom";

const EditUser = () => {
    const { user } = useParams()
    const navigate = useNavigate();
    const [image_profile, setImageProfile] = useState([]);
    const [pseudo, setPseudo] = useState([]);
    const [surname, setSurname] = useState([]);
    const [name_user, setNameUser] = useState([]);
    const [date_of_birth, setDateOfBirth] = useState([]);
    // const [address_id, SetAddressId] = useState("");
    // const [addresses, SetAddresses] = useState([]);
    // const [role_id, setRoleId] = useState("");
    // const [roles, setRoles] = useState([]);
    const [email, setEmail] = useState([]);
    const [password, setPassword] = useState("");
    const [validationError, setValidationError] = useState({});

    // const token = localStorage.getItem("access_token");

    const changeHandler = (event) => {
        setImageProfile(event.target.files[0]);
    };

    useEffect(() => {
        getUser()
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

    const getUser = async () => {
        await axios
            .get(`http://127.0.0.1:8000/api/users/${user}`,
                // {
                //     headers: {
                //         Authorization: `Bearer ${token}`,
                //     },
                // }
            )
            .then(res => {
                setImageProfile(res.data.image_profile)
                setPseudo(res.data.pseudo)
                setSurname(res.data.surname)
                setNameUser(res.data.name_user)
                setDateOfBirth(res.data.date_of_birth)
                // setAddresses(res.data.address.address)
                // setRoles(res.data.role.name_role)
                setEmail(res.data.email)
                setPassword(res.data.password)
            })
            .catch(error => {
                console.log(error)
            })
    }

    const updateUser = async (e) => {
        e.preventDefault();
        const formData = new FormData();
        formData.append('_method', 'PATCH');
        formData.append("image_profile", image_profile);
        formData.append("pseudo", pseudo);
        formData.append("surname", surname);
        formData.append("name_user", name_user);
        formData.append("date_of_birth", date_of_birth);
        // formData.append("address_id", address_id);
        // formData.append("role_id", role_id); 
        formData.append("email", email);
        formData.append("password", password);
        await axios
            .post(`http://127.0.0.1:8000/api/users/${user}`, formData,
                // {
                //     headers: {
                //         Authorization: `Bearer ${token}`,
                //     },
                // }
            )
            .then(navigate("/users"))
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
                                <h4 className="card-title">Modifier l&apos;utilisateur</h4>
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
                                    <Form onSubmit={updateUser}>
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
                                        {/* <Row>
                                            <Col>
                                                <Form.Group controlId="address">
                                                    <Form.Label>Rôle</Form.Label>
                                                    <Form.Select aria-label="Default select example"
                                                        onChange={handleChange}>
                                                        <option>Rôle</option>
                                                        {roles.map(role => (
                                                            <option
                                                                key={role.id}
                                                                value={role.id}>
                                                                {role.name_role}
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
                                        <br />
                                        <Button
                                            variant="primary"
                                            className="mt-2"
                                            block="block"
                                            type="submit"
                                        >
                                            Modifier l&apos;utilisateur
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
export default EditUser;