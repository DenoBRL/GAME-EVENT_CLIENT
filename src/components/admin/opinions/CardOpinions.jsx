import { useEffect, useState } from "react";
import Card from 'react-bootstrap/Card';
import Col from 'react-bootstrap/Col';
import Image from 'react-bootstrap/Image';
import axios from "axios";

function BasicExample() {
  const [opinions, setOpinions] = useState([]);
  const [user, setUser] = useState([]);
  
  useEffect(() => {
    displayOpinions();
    displayUser();
  }, []); // Sans les crochets ça tourne en boucle

  const displayOpinions = async () => {
    await axios.get("http://127.0.0.1:8000/api/opinions").then((res) => {
      setOpinions(res.data);
    });
  };

  const displayUser = async () => {
    await axios.get("http://127.0.0.1:8000/api/users").then((res) => {
      setUser(res.data);
    });
  };

  return (
    <div className="containerOpinions">
    {opinions.map((opinion) => (
        <div key={opinion.id}>
    <Card className="row m-5">
      <Card.Body className="lg-3 m-2" style={{ width: '18rem' }}>
              <Card.Text>{opinion.note_site}</Card.Text>
              <Card.Text>{opinion.content_opinion}</Card.Text>
              <Card.Text>
                <Col xs={6} md={4}>
                  <Image src={`http://127.0.0.1:8000/storage/uploads/${user.image_profile}`} rounded />
                </Col>
                  {opinion.user.pseudo}
              </Card.Text>    
      </Card.Body>
    </Card>
    </div>
    ))}
    </div>
  );
}

export default BasicExample;