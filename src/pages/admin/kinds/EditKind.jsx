import { useState, useEffect } from "react";
import Form from "react-bootstrap/Form";
import Button from "react-bootstrap/Button";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import axios from "axios";
import { useNavigate, useParams } from "react-router-dom";


const EditKind = () => {
    const { kind } = useParams()
    const navigate = useNavigate();
    const [name_kind, setNameKind] = useState("");
    const [category_id, setCategoryId] = useState("");
    const [categories, setCategories] = useState([]);
    const [validationError, setValidationError] = useState({});

    // const token = localStorage.getItem("access_token");

    const handleChange = (event) => {
        setCategoryId(event.target.value);
    }

    useEffect(() => {
        getCategories()
    }, [])

    const getCategories = async () => {
        await axios
            .get(`http://127.0.0.1:8000/api/categories`,
                // {
                //     headers: {
                //         Authorization: `Bearer ${token}`,
                //     },
                // }
            )
            .then(res => {
                setCategories(res.data)
            })
            .catch(error => {
                console.log(error)
            })
    }
    
    const updateKind = async (e) => {
        e.preventDefault();
        const formData = new FormData();
        formData.append('_method', 'PATCH');
        formData.append("name_kind", name_kind);
        formData.append("category_id", category_id);
        await axios
            .post(`http://127.0.0.1:8000/api/kinds/${kind}`, formData,
                // {
                //     headers: {
                //         Authorization: `Bearer ${token}`,
                //     },
                // }
            )
            .then(navigate("/kinds"))
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
                                <h4 className="card-title">Modifier le type</h4>
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
                                    <Form onSubmit={updateKind}>
                                        <Row>
                                            <Col>
                                                <Form.Group controlId="category">
                                                    <Form.Label>Catégorie</Form.Label>
                                                    <Form.Select aria-label="Default select example"
                                                        onChange={handleChange}>
                                                        <option>Choisissez une catégorie</option>
                                                        {categories.map(category => (
                                                            <option
                                                                key={category.id}
                                                                value={category.id}>
                                                                {category.name_category}
                                                            </option>
                                                        ))}
                                                    </Form.Select>
                                                </Form.Group>
                                            </Col>
                                        </Row>
                                        <Row>
                                            <Col>
                                                <Form.Group controlId="name_kind">
                                                    <Form.Label>Nom de la catégorie</Form.Label>
                                                    <Form.Control
                                                        type="name"
                                                        value={name_kind}
                                                        onChange={(event) => {
                                                            setNameKind(event.target.value);
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
                                            Modifier le type
                                        </Button>
                                    </Form>
                                </div>
                            </div>
                        </div>
                        <br />
                        <Button variant="primary" href="/admin/kinds">Retour à la liste des types</Button>
                        <br /><br />
                        <Button variant="success" href="/">Retour au site</Button>
                    </div>
                </div>
            </div>
        </div>
    );
};
export default EditKind;