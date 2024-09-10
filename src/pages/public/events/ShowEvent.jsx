import { useEffect, useState } from "react";
import Button from 'react-bootstrap/Button';
// import Card from 'react-bootstrap/Card';
import axios from "axios";
// import CardBody from 'react-bootstrap/CardBody'
import { useParams } from "react-router-dom";
import Menu from "../../../components/admin/menu/Menu.jsx";

const ShowEventPage = () => {
    const [showEvent, setShowEvent] = useState([]);
    const { eventid } = useParams();
    console.log(eventid);

    useEffect(() => {
        if (eventid) {
        getSingleEvent();
        } else {
            console.log('id non fourni');
        }
        console.log('truc');
    }, [eventid]);
    
    const getSingleEvent = async () => {
        await axios.get(`http://127.0.0.1:8000/api/events/${eventid}`).then((res) => {
            setShowEvent(res.data);
            console.log(res.data);
        });

    }

    return (
        <div>
            <Menu />
                <div key={showEvent.id} className="bg-dark mt-4" style={{ width: '50rem' }}>
                    <div className="bg-dark">
                        {/* <p className="text-white">Évènement créé par : {showEvent.user}</p> */}
                        {/* <p className="text-white">Jeu : {showEvent.game.name_game}</p> */}
                        <p className="text-white">Places : {showEvent.event.nb_players}</p>
                        {/* <p className="text-white">Date : {showEvent.event.date_event}</p> */}
                        {/* <p className="text-white">Heure : {showEvent.event.hour_event}</p> */}
                        {/* <p className="text-white">
                            Lieu :
                            {showEvent.address.address}
                            {showEvent.address.postal_code}
                            {showEvent.address.city}
                        </p> */}
                    </div>
                </div>
            <Button variant="primary" href="/">Retour au site</Button>
        </div>
    );
}
export default ShowEventPage;
