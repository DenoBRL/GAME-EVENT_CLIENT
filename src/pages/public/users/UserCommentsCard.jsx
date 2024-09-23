import { useEffect, useState } from "react";
import Button from 'react-bootstrap/Button';
import axios from "axios";
import { useParams } from "react-router-dom";
import { Link } from 'react-router-dom';
import Table from "react-bootstrap/Table";

function UserComments() {
    const [userComments, setUserComments] = useState([]);
    const { commentid } = useParams();

    const token = localStorage.getItem("access_token");

    useEffect(() => {
        displayUserComments();
    }, []);

    const displayUserComments = async () => {
        await axios.get(`http://127.0.0.1:8000/api/comments/${commentid}`,
            {
                    headers: {
                        Authorization: `Bearer ${token}`,
                    },
            }
        ).then((res) => {
            setUserComments(res.data);
        });

    }

    const deleteUserComment = (id) => {
        axios.delete(`http:/127.0.0.1:8000/api/comments/${id}`,
            {
                headers: {
                    Authorization: `Bearer ${token}`,
                },
            }
        ).then(displayUserComments);
    };

    return (
        <div>
            <div className="container mt-5">
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
                            <tr key={userComments.id}>
                                <td>{userComments.user.pseudo}</td>
                                <td>{userComments.event.id}</td>
                                <td>{userComments.content_comment}</td>
                                <td>{userComments.note_event}</td>
                                <td>
                                    <Link to={`/comments/edit/${userComments.id}`} className='btn btn-success me-2'>
                                        Modifer
                                    </Link>
                                    <Button
                                        variant="danger"
                                        onClick={() => {
                                            deleteUserComment(userComments.id);
                                        }}
                                    >
                                        Supprimer
                                    </Button>
                                </td>
                            </tr>
                    </tbody>
                </Table>
                <br />
                <Button variant="primary" href="/">Retour au site</Button>
                <br /><br />
            </div>
        </div>
    );
}
export default UserComments;
