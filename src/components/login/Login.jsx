import './Login.css';
import '../../App.css';
import { Link } from 'react-router-dom';

import { IoIosMail } from "react-icons/io";
import { BsFillShieldLockFill } from "react-icons/bs";
import { AiOutlineSwapRight} from "react-icons/ai";

import video from '../assets/video.mp4';
import logo from '../assets/logo.png';

const Login = () => {
  return (
    <div className='loginPage flex'>
      <div className='container flex'>

        <div className='videoDiv'>
          <video src={video} autoPlay muted loop></video>

        <div className='textDiv'>
          <h2 className='title'>Page de connexion</h2>
        </div>  

        <div className='footerDiv flex'>
          <span className='text'>Vous n&apos;avez pas de compte ?</span>
          <Link to={'/register'}>
          <button className='btn'>Inscrivez-vous</button>
          </Link>
        </div>

        </div>

        <div className='formDiv flex'>
          <div className='headerDiv'>
            <img src={logo} alt="logo" />
            <h3>Bon retour parmis nous !</h3>
          </div>

          <form action="" className='form grid'>
            <span className='showMessage'>Connectez-vous pour nous rejoindre</span>
            <br />
            <div className='inputDiv'>
              <label htmlFor="email">Adresse mail</label>
              <div className='input flex'>
                <IoIosMail className="icon"/>
                <input type="email" id="email" placeholder="Saisissez votre adresse mail" required />
              </div>
            </div>

            <div className='inputDiv'>
              <label htmlFor="password">Mot de passe</label>
              <div className='input flex'>
                <BsFillShieldLockFill className="icon"/>
                <input type="password" id="password" placeholder="Saisissez votre mot de passe" required />
              </div>
            </div>
            <br />
            <button type="submit" className='btn flex'>
              <span>S&apos;inscrire</span>
              <AiOutlineSwapRight className="icon"/>
            </button>

            <span className='forgotPassword'>
              Vous avez oublié votre mot de passe ? <a href="">Cliquez ici</a>
            </span>

          </form>
        </div>
          
  
      </div>
    </div>
  )
}

export default Login
