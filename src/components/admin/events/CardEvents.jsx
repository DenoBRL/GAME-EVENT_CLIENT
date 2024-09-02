import { useEffect, useState } from "react";
import Card from 'react-bootstrap/Card';
import axios from "axios";
import ReactPaginate from 'react-paginate';

function BasicExample() {
  const [events, setEvents] = useState([]);
  const handlePageClick = (data) => {
    console.log(data.selcted)
  }
  
  useEffect(() => {
    displayEvents();
  }, []); // Sans les crochets ça tourne en boucle

  const displayEvents = async () => {
    await axios.get("http://127.0.0.1:8000/api/events").then((res) => {
      setEvents(res.data.data);
    });
  };

  return (
    <div>
    <div className="containerEvents">
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
    <ReactPaginate
      previousLabel={'Précédent'}
      nextLabel={'Suivant'}
      breakLabel={'...'}
      pageCount={20}
      marginPagesDisplayed={2}
      pageRangeDisplayed={3}
      onPageChange={(handlePageClick)}
      containerClassName={'pagination justify-content-center'}
      pageClassName={'page-item'}
      pageLinkClassName={'page-link'}
      previousClassName={'page-item'}
      previousLinkClassName={'page-link'}
      nextClassName={'page-item'}
      nextLinkClassName={'page-link'}
      breakClassName={'page-item'}
      breakLinkClassName={'page-link'}
      activeClassName={'active'}
    />
    </div>
  );
}

export default BasicExample;