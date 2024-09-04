import { useEffect, useState } from "react";
import PaginationCardEvents from '../../../components/admin/events/PaginationCardEvents.jsx';

function CardEvents() {
  const [events, setEvents] = useState([]);

  useEffect(() => {
      fetch('http://127.0.0.1:8000/api/events').then(
        response => response.json().then(data => {
          setEvents(data);
        })
      )
  }, [])

  return (
    <div>
      <PaginationCardEvents data={ events } />
    </div>
  );
}

export default CardEvents;