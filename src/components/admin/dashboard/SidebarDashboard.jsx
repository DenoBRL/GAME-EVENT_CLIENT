import { Flex, Menu } from 'antd';
import logo from '../assets/logo.png';
import { UnorderedListOutlined, FormOutlined, EditOutlined, RedditOutlined, UserSwitchOutlined, UserOutlined, ProfileOutlined, LogoutOutlined, OrderedListOutlined, CarryOutOutlined, SettingOutlined } from '@ant-design/icons';

const Sidebar = () => {
    return (
        <>
            <Flex align='center' justify='center'>
                <div className="logo">
                    <img src={logo} alt="logo" />
                </div>
            </Flex>

            <Menu 
                mode="inline" 
                defaultSelectedKeys={['1']} 
                className='menu-bar'
                items={[
                    {
                    key: '1',
                    icon: <UserOutlined />,
                    label: 'Dashboard',
                    },
                    {
                    key: '2',
                    icon: <ProfileOutlined />,
                    label: 'Utilisateurs',
                    },
                    {
                    key: '7',
                    icon: <UserSwitchOutlined />,
                    label: 'Roles',
                    },
                    {
                    key: '3',
                    icon: <OrderedListOutlined />,
                    label: 'Adresses',
                    },
                    {
                    key: '4',
                    icon: <CarryOutOutlined />,
                    label: 'Évènements',
                    },
                    {
                    key: '8',
                    icon: <RedditOutlined />,
                    label: 'Jeux',
                    },
                    {
                    key: '11',
                    icon: <UnorderedListOutlined />,
                    label: 'Catégories',
                    },
                    {
                    key: '12',
                    icon: <UnorderedListOutlined />,
                    label: 'Types',
                    },
                    {
                    key: '9',
                    icon: <EditOutlined />,
                    label: 'Commentaires',
                    },
                    {
                    key: '10',
                    icon: <FormOutlined />,
                    label: 'Avis',
                    },
                    {
                    key: '5',
                    icon: <SettingOutlined />,
                    label: 'Paramètres',
                    },
                    {
                    key: '6',
                    icon: <LogoutOutlined />,
                    label: 'Déconnexion',
                    },
                    
                    
                    
                ]}
            />
        </>
    );
};

export default Sidebar;