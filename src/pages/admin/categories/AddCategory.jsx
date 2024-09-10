import { useState } from "react";
import Form from "react-bootstrap/Form";
import Button from "react-bootstrap/Button";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import axios from "axios";
import { useNavigate } from "react-router-dom";

const AddCategory = () => {
    const navigate = useNavigate();
    const [name_category, setNameCategory] = useState("");
    const [validationError, setValidationError] = useState({});

    // const token = localStorage.getItem("access_token");

    const AddCategory = async (e) => {
        e.preventDefault();
        const formData = new FormData();
        formData.append("name_category", name_category);
        await axios
            .post(`http://127.0.0.1:8000/api/categories`, formData,
                // {
                //     headers: {
                //         Authorization: `Bearer ${token}`,
                //     },
                // }
            )
            .then(navigate("/categories"))
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
                                <h4 className="card-title">Création d&apos;une nouvelle catégorie</h4>
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
                                    <Form onSubmit={AddCategory}>
                                        <Row>
                                            <Col>
                                                <Form.Group controlId="title">
                                                    <Form.Label>Nom de la catégorie</Form.Label>
                                                    <Form.Control
                                                        type="name"
                                                        value={name_category}
                                                        onChange={(event) => {
                                                            setNameCategory(event.target.value);
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
                                            Créer une nouvelle catégorie
                                        </Button>
                                    </Form>
                                </div>
                            </div>
                        </div>
                        <br />
                        <Button variant="primary" href="/admin/categories">Retour à la liste des catégories</Button>
                        <br /><br />
                        <Button variant="success" href="/">Retour au site</Button>
                    </div>
                </div>
            </div>
        </div>
    );
};
export default AddCategory;