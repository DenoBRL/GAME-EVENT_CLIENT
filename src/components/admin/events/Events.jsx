import { useEffect, useState } from "react";
import Table from "react-bootstrap/Table";
import Button from "react-bootstrap/Button";
// import Menu from "../../../components/Menu";
import axios from "axios";
import { Link } from 'react-router-dom';

const Events = () => {
    const [events, setEvents] = useState([]);

    // const token = localStorage.getItem("access_token");

    useEffect(() => {
        displayEvents();
    }, []); // Sans les crochets ça tourne en boucle

    const displayEvents = async () => {
        await axios.get('http://127.0.0.1:8000/api/events',
            // {
            //     headers: {
            //         Authorization: `Bearer ${token}`,
            //     },
            // }
        ).then((res) => {
            setEvents(res.data.data);
        });
    };

    const deleteEvent = (id) => {
        axios.delete(`http://127.0.0.1:8000/api/events/${id}`,
            // {
            //     headers: {
            //         Authorization: `Bearer ${token}`,
            //     },
            // }
        ).then(displayEvents);
    };

    return (
        <div>
            {/* <Menu /> */}
            <div className="container mt-5">
                <h1 className="text-white">Liste des articles</h1>
                <br />
                <Button variant="primary" href="/admin/events/add">Ajouter un nouvel évènement</Button>
                <br /><br />
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
                        {events.map((event) => (
                            <tr key={event.id}>
                                <td>{event.user.pseudo}</td>
                                <td>{event.game.name_game}</td>
                                <td>{event.nb_players}</td>
                                <td>{event.date_event}</td>
                                <td>{event.hour_event}</td>
                                <td>
                                    {event.address.address}
                                    {event.address.postal_code}
                                    {event.address.city}
                                </td>
                                <td>
                                    <Link to={`/admin/events/edit/${event.id}`} className='btn btn-success me-2'>
                                        Modifer
                                    </Link>
                                    <Button
                                        variant="danger"
                                        onClick={() => {
                                            deleteEvent(event.id);
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
export default Events;