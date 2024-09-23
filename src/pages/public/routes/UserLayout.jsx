import { Layout, Button } from 'antd';
import { useState } from 'react';
import { MenuUnfoldOutlined, MenuFoldOutlined } from '@ant-design/icons';

import UserSidebarDashboard from '../../../components/admin/userdashboard/UserSidebarDashboard';
// import UserCustomHeader from '../../../components/admin/userdashboard/UserHeaderDashboard';

import { Outlet } from 'react-router-dom';

import Menu from "../../../components/admin/menu/Menu.jsx";
import Footer from "../../../components/admin/footer/Footer.jsx";

const { Sider, Content } = Layout;
const UserLayout = () => {
  const [collapsed, setCollapsed] = useState(false)
  return (
    <div>
      <Menu />
      <Layout>
        <Sider
          theme="dark" 
          triger={null} 
          collapsible c
          ollapsed={collapsed} 
          className="sider"
        >
          <UserSidebarDashboard />

          <Button 
            type='text' 
            icon={collapsed ? <MenuUnfoldOutlined /> : <MenuFoldOutlined />} 
            onClick={() => setCollapsed(!collapsed)}
            className='triger-btn'
          />
        </Sider>
        <Layout>
          {/* <Header className='header'>
            <UserCustomHeader />
          </Header> */}
          <Content className='content'>
            <Outlet />
          </Content>
        </Layout>
      </Layout>
      <Footer />
    </div>
  )
}

export default UserLayout;