import { Card, Flex, Typography } from "antd"
import { Link } from 'react-router-dom';
import { useEffect, useState } from "react";
import axios from "axios";


const BannerComments = () => {
    const [comments, setComments] = useState([]);
    

    const token = localStorage.getItem("access_token");

    useEffect(() => {
        displayComments();
    }, []);

    const displayComments = async () => {
        await axios.get('http://127.0.0.1:8000/api/comments',
            {
                headers: {
                    Authorization: `Bearer ${token}`,
                },
            }
        ).then((res) => {
            setComments(res.data.data);
            console.log(res.data.data);
        });
    };
  return (
    <Card style={{ height: 325, padding: '20px' }}>
        <Flex vertical gap='30px'>
            <Flex vertical align='flex-start'>
                <Typography.Title level={2} strong>
                    Mes commentaires
                </Typography.Title>
                <Typography.Text type="primary">
                    <div key={comments.id}>
                        {/* <p>Évènement concerné : {comments.event.id}</p>          */}
                        <p>Contenu du commentaire : {comments.content_comment}</p>
                        <p>Note du l&apos;évènement : {comments.note_event}</p>
                    </div>
                </Typography.Text>
                
            </Flex>

            <Flex gap='large'>
                <Link to={`/comments/edit/${comments.id}`} className='btn btn-success me-2'>
                    Modifer
                </Link>
            </Flex>
        </Flex>
    </Card>

    
  );
};

export default BannerComments;