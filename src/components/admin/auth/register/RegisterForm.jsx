import './RegisterForm.css';
import '../../../../App.css';
import { Link } from 'react-router-dom';

import { FaUserShield } from 'react-icons/fa';
import { BsFillShieldLockFill } from "react-icons/bs";
import { AiOutlineSwapRight } from "react-icons/ai";
import { FaRegImage } from "react-icons/fa6";

import video from '../../../../components/admin/assets/video.mp4';
import logo from '../../../../components/admin/assets/logo.png';

const Register = () => {
  return (
    <div>
      <div className='registerPage flex'>
        <div className='container flex'>

          <div className='videoDiv'>
            <video src={video} autoPlay muted loop></video>

            <div className='textDiv'>
              <h2 className='title'>Page d&apos;inscription</h2>
            </div>

            <div className='footerDiv flex'>
              <span className='text'>Vous avez déjà un compte ?</span>
              <Link to={'/login'}>
                <button className='btn'>Connectez-vous</button>
              </Link>
            </div>

          </div>

          <div className='formDiv flex'>
            <div className='headerDiv'>
              <img src={logo} alt="logo" />
              <h3>Bienvenue parmis nous !</h3>
            </div>

            <form action="" className='form grid'>
              <span className='showMessage'>Inscrivez-vous pour nous rejoindre</span>

              <div className='inputDiv'>
                <label htmlFor="surname">Nom</label>
                <div className='input flex'>
                  <FaUserShield className="icon" />
                  <input type="name" id="name" placeholder="Saisissez votre nom" required />
                </div>
              </div>

              <div className='inputDiv'>
                <label htmlFor="name_user">Prénom</label>
                <div className='input flex'>
                  <FaUserShield className="icon" />
                  <input type="name" id="name_user" placeholder="Saisissez votre prénom" required />
                </div>
              </div>

              <div className='inputDiv'>
                <label htmlFor="pseudo">Pseudo</label>
                <div className='input flex'>
                  <FaUserShield className="icon" />
                  <input type="name" id="pseudo" placeholder="Saisissez votre pseudo" required />
                </div>
              </div>

              <div className='inputDiv'>
                <label htmlFor="image_profile">Photo de profil</label>
                <div className='input flex'>
                  <FaRegImage className="icon" />
                  <input type="file" id="image_profile" placeholder="Choisissez votre photo de profil" required />
                </div>
              </div>

              <div className='inputDiv'>
                <label htmlFor="date_of_birth">Date de naissance</label>
                <div className='input flex'>
                  <FaUserShield className="icon" />
                  <input type="date" id="date_of_birth" placeholder="Saisissez votre date de naissance" required />
                </div>
              </div>

              <div className='inputDiv'>
                <label htmlFor="email">Adresse mail</label>
                <div className='input flex'>
                  <FaUserShield className="icon" />
                  <input type="email" id="email" placeholder="Saisissez votre adresse mail" required />
                </div>
              </div>

              <div className='inputDiv'>
                <label htmlFor="password">Mot de passe</label>
                <div className='input flex'>
                  <BsFillShieldLockFill className="icon" />
                  <input type="password" id="password" placeholder="Saisissez votre mot de passe" required />
                </div>
              </div>

              <button type="submit" className='btn flex'>
                <span>S&apos;inscrire</span>
                <AiOutlineSwapRight className="icon" />
              </button>

              <span className='forgotPassword'>
                Vous avez oublié votre mot de passe ? <a href="">Cliquez ici</a>
              </span>
            </form>
          </div>
        </div>
      </div>
      <br />
    </div>
  )
}

export default Register
