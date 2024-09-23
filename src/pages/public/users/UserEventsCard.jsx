import { useEffect, useState } from "react";
import Button from 'react-bootstrap/Button';
import axios from "axios";
import { useParams } from "react-router-dom";
import { Link } from 'react-router-dom';
import Table from "react-bootstrap/Table";

function UserEvents() {
    const [userEvents, setUserEvents] = useState([]);
    const { eventid } = useParams();

    const token = localStorage.getItem("access_token");

    useEffect(() => {
        displayUserEvents();
    }, []);

    const displayUserEvents = async () => {
        await axios.get(`http://127.0.0.1:8000/api/events/${eventid}`,
            {
                    headers: {
                        Authorization: `Bearer ${token}`,
                    },
            }
        ).then((res) => {
            setUserEvents(res.data);
        });

    }

    const deleteUserEvent = (id) => {
        axios.delete(`http:/127.0.0.1:8000/api/events/${id}`,
            {
                headers: {
                    Authorization: `Bearer ${token}`,
                },
            }
        ).then(displayUserEvents);
    };

    return (
        <div>
            <div className="container mt-5">
                <Table striped bordered hover>
                    <thead>
                        <tr>
                            <th>Évènement créé par</th>
                            <th>Jeu</th>
                            <th>Places</th>
                            <th>Date</th>
                            <th>Heure</th>
                            <th>Lieu</th>
                            <th>Actions</th>
                        </tr>
                    </thead>
                    <tbody>
                            <tr key={UserEvents.id}>
                                <td>{UserEvents.user.pseudo}</td>
                                <td>{UserEvents.game.name_game}</td>
                                <td>{UserEvents.nb_players}</td>
                                <td>{UserEvents.date_event}</td>
                                <td>{UserEvents.hour_event}</td>
                                <td>
                                    {UserEvents.address.address}
                                    {UserEvents.address.postal_code}
                                    {UserEvents.address.city}
                                </td>
                                <td>
                                    <Link to={`/events/edit/${UserEvents.id}`} className='btn btn-success me-2'>
                                        Modifer
                                    </Link>
                                    <Button
                                        variant="danger"
                                        onClick={() => {
                                            deleteUserEvent(userEvents.id);
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
export default UserEvents;
