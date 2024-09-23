import { Flex, Menu } from 'antd';
import logo from '../assets/logo.png';
import { UnorderedListOutlined, FormOutlined, EditOutlined, RedditOutlined, UserOutlined, ProfileOutlined, LogoutOutlined, OrderedListOutlined, CarryOutOutlined } from '@ant-design/icons';

const Sidebar = () => {
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
                        <a href="/admin">
                            Dashboard
                        </a>,
                    },
                    {
                    key: '2',
                    icon: <ProfileOutlined />,
                    label: 
                        <a href="/admin/users">
                            Utilisateurs
                        </a>,
                    },
                    // {
                    // key: '12',
                    // icon: <UserSwitchOutlined />,
                    // label: 
                    //     <a href="/admin/roles">
                    //         Rôles
                    //     </a>,
                    // },
                    {
                    key: '3',
                    icon: <OrderedListOutlined />,
                    label: 
                        <a href="/admin/addresses">
                            Adresses
                        </a>,
                    },
                    {
                    key: '4',
                    icon: <CarryOutOutlined />,
                    label: 
                        <a href="/admin/events">
                            Évènements
                        </a>,
                    },
                    {
                    key: '5',
                    icon: <RedditOutlined />,
                    label: 
                        <a href="/admin/games">
                            Jeux
                        </a>,
                    },
                    {
                    key: '6',
                    icon: <UnorderedListOutlined />,
                    label: 
                        <a href="/admin/categories">
                            Jeux/Catégories
                        </a>,
                    },
                    {
                    key: '7',
                    icon: <UnorderedListOutlined />,
                    label: 
                        <a href="/admin/kinds">
                            Jeux/Types
                        </a>,
                    },
                    {
                    key: '8',
                    icon: <EditOutlined />,
                    label: 
                        <a href="/admin/comments">
                            Commentaires
                        </a>,
                    },
                    {
                    key: '9',
                    icon: <FormOutlined />,
                    label: 
                        <a href="/admin/opinions">
                            Avis
                        </a>,
                    },
                    // {
                    // key: '11',
                    // icon: <SettingOutlined />,
                    // label: 'Paramètres',
                    // },
                    {
                    key: '10',
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

export default Sidebar;