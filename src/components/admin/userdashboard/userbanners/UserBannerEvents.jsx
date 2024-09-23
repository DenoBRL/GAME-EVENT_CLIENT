import { Card, Flex, Typography } from "antd"
import { Link } from 'react-router-dom';
import { useEffect, useState } from "react";
import axios from "axios";


const UserBannerEvents = () => {
    const [events, setEvents] = useState([]);
    const [ setGame ] = useState([]);
    const [ setAddress ] = useState([]);

    const token = localStorage.getItem("access_token");

    useEffect(() => {
        displayEvents();
        displayGame();
        displayAddress();
    }, []);

    const displayEvents = async () => {
        await axios.get('http://127.0.0.1:8000/api/events',
            {
                headers: {
                    Authorization: `Bearer ${token}`,
                },
            }
        ).then((res) => {
            setEvents(res.data.data);
            console.log(res.data.data);
        });
    };

    const displayGame = async () => {
        await axios.get('http://127.0.0.1:8000/api/games',
            {
                headers: {
                    Authorization: `Bearer ${token}`,
                },
            }
        ).then((res) => {
            setGame(res.data.data);
            console.log(res.data.data);
        });
    };

    const displayAddress = async () => {
        await axios.get('http://127.0.0.1:8000/api/addresses',
            {
                headers: {
                    Authorization: `Bearer ${token}`,
                },
            }
        ).then((res) => {
            setAddress(res.data.data);
            console.log(res.data.data);
        });
    };

  return (
    <Card style={{ height: 325, padding: '20px' }}>
        <Flex vertical gap='30px'>
            <Flex vertical align='flex-start'>
                <Typography.Title level={2} strong>
                    Mes évènements
                </Typography.Title>
                <Typography.Text type="primary">
                    <div key={events.id}>         
                        <p>Jeux : {events.game.name_game}</p>
                        <p>Nombre de joueurs : {events.nb_players}</p>
                        <p>Nombre de places restantes : {events.place}</p>
                        <p>Date : {events.date_event}</p>
                        <p>Heure : {events.hour_event}</p>
                        <p>Adresse : {events.address.address}, {events.address.postal_code}, {events.address.city}</p>
                    </div>
                </Typography.Text>
                
            </Flex>

            <Flex gap='large'>
                <Link to={`/events/edit/${events.id}`} className='btn btn-success me-2'>
                    Modifer
                </Link>
            </Flex>
        </Flex>
    </Card>

    
  );
};

export default UserBannerEvents;