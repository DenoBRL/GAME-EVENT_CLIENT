import { useEffect, useState } from "react";
// import Card from 'react-bootstrap/Card';
import axios from "axios";
import ReactPaginate from 'react-paginate';
import Button from 'react-bootstrap/Button'
import { Link } from "react-router-dom";

function BasicExample() {
  const [events, setEvents] = useState([]);

  useEffect(() => {
    const getEvents = async () => {
      await axios.get(`http://127.0.0.1:8000/api/events`).then((res) => {
        setEvents(res.data.data);
      });
      
  };

  getEvents();

}, []);

  console.log(events);

  // const fetchEvents = async (currentPage) => {
  //   const res = await fetch(
  //     `http://127.0.0.1:8000/api/events?page=${currentPage}&_limit=6`
  //   );
  //   const data = await res.json();
  //   return data;
  // };

  const handlePageClick = (data) => {
    console.log(data.selected);

    // let currentPage = data.selected + 1
  }

  return (
    <div className="container row m-2 d-flex justify-content-center m-auto w-100">
      {events.map((event) => {
        return (
          <div key={event.id} className="col-sm-6 col-md-4 v my-2">
            <div className="card shadow-sm w-100" style={{ minHeight: 255 }}>
              <div className="card-body">
                <p>Évènement créé par : {event.user.pseudo}</p>
                <p>Jeu : {event.game.name_game}</p>
                <p>Nombre de joueurs : {event.nb_players}</p>
                <p>Places : {event.place}</p>
                <p>Date : {event.date_event}</p>
                <p>Heure : {event.hour_event}</p>
                <p>
                  Lieu : 
                    {event.address.address}
                    {event.address.postal_code}
                    {event.address.city}
                </p>
                <Link to={`/event/${event.id}`}>
                  <Button variant="primary">Voir l&apos;évènement</Button>
                </Link>
              </div>
            </div>
          </div>
        );
      })}
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