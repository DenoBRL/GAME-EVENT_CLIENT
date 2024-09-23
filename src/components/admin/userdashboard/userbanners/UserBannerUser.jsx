import { Card, Flex, Typography } from "antd"
import { useEffect, useState } from "react";
import axios from "axios";
import { Link } from 'react-router-dom';


const BannerUsers = () => {
    const [user, setUser] = useState([]);

    const token = localStorage.getItem("access_token");

    useEffect(() => {
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

  return (
    <Card style={{ height: 450, padding: '20px' }}>
        <Flex vertical gap='30px'>
            <Flex vertical align='flex-start'>
                <Typography.Title level={2} strong>
                    Mes informations personnelles
                </Typography.Title>
                <Typography.Text type="primary">
                    <div key={user.id}>
                        <img
                            src={`http://127.0.0.1:8000/storage/uploads/${user.image_profile}`}
                            width="75px"
                        />
                        <p>Pseudo : {user.pseudo}</p>
                        <p>Nom : {user.surname}</p>
                        <p>Prénom : {user.name_user}</p>
                        <p>Date de naissance : {user.date_of_birth}</p>
                        <p>Email : {user.email}</p>
                    </div>
                </Typography.Text>
            </Flex>

            <Flex gap='large'>
                <Link to={`/users/edit/${user.id}`} className='btn btn-success me-2'>
                    Modifer
                </Link>

            </Flex>
        </Flex>
    </Card>

    
  );
};

export default BannerUsers;