import { useEffect, useState } from "react";
import Table from "react-bootstrap/Table";
import Button from "react-bootstrap/Button";
import axios from "axios";
import { Link } from 'react-router-dom';

const Comments = () => {
    const [comments, setComments] = useState([]);

    // const token = localStorage.getItem("access_token");

    useEffect(() => {
        displayComments();
    }, []); // Sans les crochets ça tourne en boucle

    const displayComments = async () => {
        await axios.get("http://127.0.0.1:8000/api/comments",
            // {
            //     headers: {
            //         Authorization: `Bearer ${token}`,
            //     },
            // }
        ).then((res) => {
            setComments(res.data);
        });
    };

    const deleteComment = (id) => {
        axios.delete(`http:/127.0.0.1:8000/api/comments/${id}`,
            // {
            //     headers: {
            //         Authorization: `Bearer ${token}`,
            //     },
            // }
        ).then(displayComments);
    };

    return (
        <div>
            <div className="container mt-5">
                <h1 className="text-dark">Liste des commentaires</h1>
                <br />
                <Table striped bordered hover>
                    <thead>
                        <tr>
                            <th>Publication du commentaire par</th>
                            <th>Évènement concerné par le commentaire</th>
                            <th>Contenu du commentaire</th>
                            <th>Note de l&apos;évènement</th>
                            <th>Actions</th>
                        </tr>
                    </thead>
                    <tbody>
                        {comments.map((comment) => (
                            <tr key={comment.id}>
                                <td>{comment.user.pseudo}</td>
                                <td>{comment.event.id}</td>
                                <td>{comment.content_comment}</td>
                                <td>{comment.note_event}</td>
                                <td>
                                    <Link to={`/admin/comments/edit/${comment.id}`} className='btn btn-success me-2'>
                                        Modifer
                                    </Link>
                                    <Button
                                        variant="danger"
                                        onClick={() => {
                                            deleteComment(comment.id);
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
            </div>
        </div>
    );
};
export default Comments;