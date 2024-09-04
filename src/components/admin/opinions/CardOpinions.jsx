import { useEffect, useState } from "react";
import axios from "axios";
import ReactPaginate from 'react-paginate';
import Image from 'react-bootstrap/Image';

function BasicExample() {
  const [opinions, setOpinions] = useState([]);
  const [user, setUser] = useState([]);

  useEffect(() => {
    const getOpinions = async () => {
      await axios.get(`http://127.0.0.1:8000/api/opinions`).then((res) => {
        setOpinions(res.data.data);
      });
    };

    const getUser = async () => {
      await axios.get(`http://127.0.0.1:8000/api/users`).then((res) => {
        setUser(res.data);
      });
    };

    getOpinions();
    getUser();

  }, []);

  console.log(opinions);

  const handlePageClick = (data) => {
    console.log(data.selected)
  }

  return (
    <div>
      <div className="row m-2">
        {opinions.map((opinion) => {
          return (
            <div key={opinion.id} className="col-sm-6 col-md-4 v my-2">
              <div className="card shadow-sm w-100" style={{ minHeight: 255 }}>
                <div className="card-body">
                  <p>{opinion.note_site}</p>
                  <p>{opinion.content_opinion}</p>
                  <p>
                    <Image src={`http://127.0.0.1:8000/storage/uploads/${user.image_profile}`} rounded />
                    {opinion.user.pseudo}
                  </p>
                </div>
              </div>
            </div>
          );
        })}
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