import { useState, useEffect } from "react";
import Form from "react-bootstrap/Form";
import Button from "react-bootstrap/Button";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import axios from "axios";
import { useNavigate, useParams } from "react-router-dom";


const EditCategory = () => {
    const { category } = useParams()
    const navigate = useNavigate();
    const [name_category, setNameCategory] = useState("");
    const [validationError, setValidationError] = useState({});

    // const token = localStorage.getItem("access_token");

    useEffect(() => {
        getCategory()
    }, [])

    const getCategory = async () => {
        await axios
            .get(`http://127.0.0.1:8000/api/categories/${category}`,
                // {
                //     headers: {
                //         Authorization: `Bearer ${token}`,
                //     },
                // }
            )
            .then(res => {
                setNameCategory(res.data.name_category)
            })
            .catch(error => {
                console.log(error)
            })
    }
    
    const updateCategory = async (e) => {
        e.preventDefault();
        const formData = new FormData();
        formData.append('_method', 'PATCH');
        formData.append("name_category", name_category);
        await axios
            .post(`http://127.0.0.1:8000/api/categories/${category}`, formData,
                // {
                //     headers: {
                //         Authorization: `Bearer ${token}`,
                //     },
                // }
            )
            .then(navigate("/categories"))
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
                                <h4 className="card-title">Modifier la catégorie</h4>
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
                                    <Form onSubmit={updateCategory}>
                                        <Row>
                                            <Col>
                                                <Form.Group controlId="Name">
                                                    <Form.Label>Nom de la catégorie</Form.Label>
                                                    <Form.Control
                                                        type="text"
                                                        value={name_category}
                                                        onChange={(event) => {
                                                            setNameCategory(event.target.value);
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
                                            Modifier la catégorie
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
export default EditCategory;