// import '../../admin/login/LoginForm';
import '../../../../App.css';
import { Link } from 'react-router-dom';

// import { IoIosMail } from "react-icons/io";
// import { BsFillShieldLockFill } from "react-icons/bs";
import { AiOutlineSwapRight } from "react-icons/ai";
// import Button from "react-bootstrap/Button";
import Form from "react-bootstrap/Form";
import InputGroup from "react-bootstrap/InputGroup";
import { useEffect, useRef, useState } from "react";
import { useForm, Controller } from "react-hook-form";
import { useLocation, useNavigate } from "react-router-dom";
import axios from "axios";
import { AiOutlineEye, AiTwotoneEyeInvisible } from "react-icons/ai";


import video from '../../assets/video.mp4';
import logo from '../../assets/logo.png';

function LoginForm() {
  document.title = "GAME-EVENT/CONNEXION";

  // const [email, setEmail] = useState("");
  // const [password, setPassword] = useState("");

  const [errMessage, setErrMessage] = useState("");
  const [showPassword, setShowPassword] = useState(false);
  const {
    register,
    control,
    handleSubmit,
    watch,
    formState: { errors },
  } = useForm({ defaultValues: { email: "", password: "" } });

  const email = watch("email", "");
  const password = watch("password", "");
  const [toast, setShowToast] = useState(false);
  const [toastMessage, setToastMessage] = useState({});

  let navigate = useNavigate();
  let location = useLocation();
  let from = location.pathname || "/"; //travail sur la redirection

  let login = async () => {
    try {
      let formData = new FormData();
      formData.append("email", email);
      formData.append("password", password);
      let res = await axios.post("http://127.0.0.1:8000/api/login/", formData, {
        headers: { "Content-Type": "multipart/form-data" },
      });
      if (res.status === 200) {
        localStorage.setItem("access_token", res.data.data.access_token.token);

        navigate("/", { replace: true });
      }
    } catch (err) {}
  };

  const handleClickShowPassword = () => {
    if (showPassword) {
      setShowPassword(false);
    } else {
      setShowPassword(true);
    }
  };

  return (
    <div>
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

            <form onSubmit={handleSubmit(login)} className='form grid'>
              <span className='showMessage'>Connectez-vous pour nous rejoindre</span>
              <br />
              <Form.Group className="mb-3" controlId="formBasicEmail">
                <Form.Label>Adresse mail</Form.Label>
                <Form.Control
                  type="email"
                  placeholder="Saisissez votre adresse mail"
                  {...register("email", {
                    required: "Email obligatoire",
                  })}
                />
                {errors.email && (
                  <Form.Text className="text-danger">{errors.email.message}</Form.Text>
                )}
              </Form.Group>

              <Form.Group className="mb-3" controlId="formBasicPassword">
                <Form.Label>Mot de passe</Form.Label>
                <InputGroup>
                  <InputGroup.Text>
                    <i onClick={handleClickShowPassword}>
                      {showPassword ? <AiOutlineEye /> : <AiTwotoneEyeInvisible />}
                    </i>
                  </InputGroup.Text>
                  <Form.Control
                    type={showPassword ? "text" : "password"}
                    placeholder="Saisissez votre mot de passe"
                    {...register("password", {
                      required: "Mot de passe obligatoire",
                    })}
                  />
                </InputGroup>
                {errors.password && (
                  <Form.Text className="text-danger">
                    {errors.password.message}
                  </Form.Text>
                )}
              </Form.Group>
              <br />
              <button type="submit" className='btn flex'>
                <span>Se connecter</span>
                <AiOutlineSwapRight className="icon" />
              </button>

              <span className='forgotPassword'>
                Vous avez oublié votre mot de passe ? <a href="">Cliquez ici</a>
              </span>

            </form>
          </div>
        </div>
      </div>
    </div>
  )
}

export default LoginForm;
