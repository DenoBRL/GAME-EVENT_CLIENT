import { Flex, Menu } from 'antd';
import logo from '../assets/logo.png';
import { FormOutlined, EditOutlined, UserOutlined, ProfileOutlined, LogoutOutlined, OrderedListOutlined, CarryOutOutlined } from '@ant-design/icons';

const UserSidebar = () => {
    return (
        <>
            <Flex align='center' justify='center'>
                <div className="logo">
                    <img src={logo} alt="logo" />
                </div>
            </Flex>

            <Menu
                theme="dark"
                mode="inline" 
                defaultSelectedKeys={['1']} 
                className='menu-bar'
                items={[
                    {
                    key: '1',
                    icon: <UserOutlined />,
                    label: 
                        <a href="/user">
                            Mon profil
                        </a>,
                    },
                    {
                    key: '2',
                    icon: <ProfileOutlined />,
                    label: 
                        <a href="/user/compte">
                            Mes informations
                        </a>,
                    },
                    {
                    key: '3',
                    icon: <OrderedListOutlined />,
                    label: 
                        <a href="/user/adresses">
                            Mes adresses
                        </a>,
                    },
                    {
                    key: '4',
                    icon: <CarryOutOutlined />,
                    label: 
                        <a href="/user/evenements">
                            Mes évènements
                        </a>,
                    },
                    {
                    key: '5',
                    icon: <EditOutlined />,
                    label: 
                        <a href="/user/commentaires">
                            Mes commentaires
                        </a>,
                    },
                    {
                    key: '6',
                    icon: <FormOutlined />,
                    label: 
                        <a href="/user/avis">
                            Mes avis
                        </a>,
                    },
                    {
                    key: '7',
                    icon: <LogoutOutlined />,
                    label: 
                        <a href="/logout">
                            Déconnexion
                        </a>,
                    },
                ]}
            />
        </>
    );
};

export default UserSidebar;