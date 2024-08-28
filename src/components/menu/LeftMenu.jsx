import { Menu } from "antd";

const LeftMenu = ({ mode }) => {
  return (
    <Menu mode={mode}>
      <Menu.Item key="home">
        <a href='/'>Accueil</a>
      </Menu.Item>
      <Menu.Item key="login">
        <a href='/login'>Connexion</a>
      </Menu.Item>
      <Menu.Item key="register">
        <a href='/register'>Inscription</a>
      </Menu.Item>
      {/* <Menu.Item key="contact">Contact Us</Menu.Item> */}
    </Menu>
  );
};

export default LeftMenu;