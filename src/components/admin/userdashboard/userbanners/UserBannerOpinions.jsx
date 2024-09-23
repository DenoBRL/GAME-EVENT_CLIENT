import { Card, Flex, Typography } from "antd"
import { Link } from 'react-router-dom';
import { useEffect, useState } from "react";
import axios from "axios";


const BannerOpinions = () => {
    const [opinions, setOpinions] = useState([]);
    

    const token = localStorage.getItem("access_token");

    useEffect(() => {
        displayOpinions();
    }, []);

    const displayOpinions = async () => {
        await axios.get('http://127.0.0.1:8000/api/opinions',
            {
                headers: {
                    Authorization: `Bearer ${token}`,
                },
            }
        ).then((res) => {
            setOpinions(res.data.data);
        });
    };
  return (
    <Card style={{ height: 325, padding: '20px' }}>
        <Flex vertical gap='30px'>
            <Flex vertical align='flex-start'>
                <Typography.Title level={2} strong>
                    Mes avis
                </Typography.Title>
                <Typography.Text type="primary">
                    <div key={opinions.id}>         
                        <p>Contenu de l&apos;avis : {opinions.content_opinion}</p>
                        <p>Note du site : {opinions.note_site}</p>
                    </div>
                </Typography.Text>
                
            </Flex>

            <Flex gap='large'>
                <Link to={`/opinions/edit/${opinions.id}`} className='btn btn-success me-2'>
                    Modifer
                </Link>
            </Flex>
        </Flex>
    </Card>

    
  );
};

export default BannerOpinions;