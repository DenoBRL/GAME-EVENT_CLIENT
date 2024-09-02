import { useEffect, useState } from "react";
import Card from 'react-bootstrap/Card';
import Col from 'react-bootstrap/Col';
import Image from 'react-bootstrap/Image';
import axios from "axios";
import ReactPaginate from 'react-paginate';

function BasicExample() {
  const [opinions, setOpinions] = useState([]);
  const [user, setUser] = useState([]);
  const handlePageClick = (data) => {
    console.log(data.selcted)
  }
  
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
    <div>
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