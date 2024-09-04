import { Component } from "react";
import Menu from "../../../components/admin/menu/Menu.jsx";
import CardOpinions from "../../../components/admin/opinions/CardOpinions.jsx"
import CardEvents from "../../../components/admin/events/CardEvents.jsx"
import logo from '../../../components/admin/assets/logo.png';
import Button from "react-bootstrap/esm/Button.js";
import Form from 'react-bootstrap/Form';
import Footer from "../../../components/admin/footer/Footer.jsx";

export class Home extends Component {
  render() {
    return (
      <div>
        <Menu />
        <div className="headerHomePage">
          <div className="containerHeaderHomePage">
            <h1 className="textTitleHeaderHomePage">
              Bienvenue sur
              <img
                alt="Logo"
                src={logo}
                className="logoHeaderHomePage"
              />
              !
            </h1>
            <h4 className='textHeaderHomePage'>
              Ici, vous trouverez tout ce dont vous avez besoin pour
              passer un bon moment de partage et de conviviamité !
            </h4>
            <div className="pt-5">
              <Button
                variant="warning"
                size="lg"
                href="/register"
              >
                Inscription
              </Button>
            </div>
          </div>
        </div>
        <div>
          <h2 className="text-dark">LES AVIS</h2>
          <CardOpinions />
        </div>
        <div className="middleHomePage">
          <div className="containerMiddleHomePage2">
            <h1 className="textTitleMiddleHomePage">
              LES ÉVÈNEMENTS
            </h1>
            <h4 className='textMiddleHomePage'>
              Trouvez l&apos;évènement qui vous donne envie, près de chez vous,
              en fonction de vos critères. Il y en aura pour tous les goûts
              alors n&apos;hésitez plus et lancez-vous dans l&apos;expérience de Game-Event !
            </h4>
            <Form className="searchMiddleHomePage m-auto">
              <Form.Control
                type="search"
                className="me-2"
                aria-label="Jeux"
              />
              <Button className='btnMiddleHomePage' variant="outline-warning">Recherche</Button>
            </Form>
            <CardEvents />
          </div>
        </div>
        <Footer />
      </div>
    );
  }
}
export default Home;