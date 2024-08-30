import { useEffect, useState } from "react";
import Card from 'react-bootstrap/Card';
import axios from "axios";

function BasicExample() {
  const [events, setEvents] = useState([]);
  
  useEffect(() => {
    displayEvents();
  }, []); // Sans les crochets ça tourne en boucle

  const displayEvents = async () => {
    await axios.get("http://127.0.0.1:8000/api/events").then((res) => {
      setEvents(res.data);
    });
  };

  return (
    <div className="containerOpinions">
    {events.map((event) => (
        <div key={event.id}>
    <Card className="row m-5">
      <Card.Body className="lg-3 m-2" style={{ width: '18rem' }}>
              <Card.Text>Évènement créé par : {event.user.pseudo}</Card.Text>
              <Card.Text>Jeu : {event.game.name_game}</Card.Text>
              <Card.Text>Places : {event.nb_players}</Card.Text>
              <Card.Text>Date : {event.date_event}</Card.Text>
              <Card.Text>Heure : {event.hour_event}</Card.Text>
              <Card.Text>
                Lieu : 
                    {event.address.address}
                    {event.address.postal_code}
                    {event.address.city}
              </Card.Text>   
      </Card.Body>
    </Card>
    </div>
    ))}
    </div>
  );
}

export default BasicExample;