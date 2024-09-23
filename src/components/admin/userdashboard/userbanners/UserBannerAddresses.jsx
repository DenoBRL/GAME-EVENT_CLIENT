import { Card, Flex, Typography } from "antd"
import { Link } from 'react-router-dom';
import { useEffect, useState } from "react";
import axios from "axios";


const BannerAddresses = () => {
    const [addresses, setAddresses] = useState([]);
    const [user, setUser] = useState([]);

    const token = localStorage.getItem("access_token");

    useEffect(() => {
        displayAddresses();
        displayUser();
    }, []);

    const displayUser = async () => {
        await axios.get(`http://127.0.0.1:8000/api/currentuser`,
            {
                    headers: {
                        Authorization: `Bearer ${token}`,
                    },
            }
        ).then((res) => {
            setUser(res.data.data.user);
        });

    }

    const displayAddresses = async () => {
        await axios.get(`http://127.0.0.1:8000/api/useraddresses/${user.id}`,
            {
                headers: {
                    Authorization: `Bearer ${token}`,
                },
            }
        ).then((res) => {
            setAddresses(res.data);
            console.log(res.data);
        });
    };
  return (
    <Card style={{ height: 325, padding: '20px' }}>
        <Flex vertical gap='30px'>
            <Flex vertical align='flex-start'>
                <Typography.Title level={2} strong>
                    Mes adresses
                </Typography.Title>
                <Typography.Text type="primary">
                    <div key={addresses.id}>
                        <p>Adresse : {addresses.address}</p>
                        <p>Code postal : {addresses.postal_code}</p>
                        <p>Ville : {addresses.city}</p>
                    </div>
                </Typography.Text>
                
            </Flex>

            <Flex gap='large'>
                <Link to={`/addresses/edit/${addresses.id}`} className='btn btn-success me-2'>
                    Modifer
                </Link>
            </Flex>
        </Flex>
    </Card>

    
  );
};

export default BannerAddresses;