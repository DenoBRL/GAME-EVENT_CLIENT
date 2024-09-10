import { useEffect, useState } from "react";
import Table from "react-bootstrap/Table";
import Button from "react-bootstrap/Button";
import axios from "axios";
import { Link } from 'react-router-dom';

const Categories = () => {
    const [categories, setCategories] = useState([]);

    // const token = localStorage.getItem("access_token");

    useEffect(() => {
        displayCategories();
    }, []);
    
    const displayCategories = async () => {
        await axios.get("http://127.0.0.1:8000/api/categories",
            // {
            //     headers: {
            //         Authorization: `Bearer ${token}`,
            //     },
            // }
        ).then((res) => {
            setCategories(res.data);
        });
    };
    const deleteCategory = (id) => {
        axios.delete(`http:/127.0.0.1:8000/api/categories/${id}`,
            // {
            //     headers: {
            //         Authorization: `Bearer ${token}`,
            //     },
            // }
        ).then(displayCategories);
    };
    return (
        <div>
            <div className="container mt-5">
                <h1 className="text-dark">Liste des catégories</h1>
                <br />
                <Button variant="primary" href="/admin/categories/add">Ajouter une nouvelle catégorie</Button>
                <br /><br />
                <Table striped bordered hover>
                    <thead>
                        <tr>
                            <th>Nom de la catégorie</th>
                            <th>Actions</th>
                        </tr>
                    </thead>
                    <tbody>
                        {categories.map((category) => (
                            <tr key={category.id}>
                                <td>{category.name_category}</td>
                                <td>
                                    <Link to={`/admin/categories/edit/${category.id}`} className='btn btn-success me-2'>
                                        Modifer
                                    </Link>
                                    <Button
                                        variant="danger"
                                        onClick={() => {
                                            deleteCategory(category.id);
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
export default Categories;