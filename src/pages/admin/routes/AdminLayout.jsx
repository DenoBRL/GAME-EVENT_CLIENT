import { Layout, Button } from 'antd';
import { useState } from 'react';
import { MenuUnfoldOutlined, MenuFoldOutlined } from '@ant-design/icons';

import SidebarDashboard from '../../../components/admin/dashboard/SidebarDashboard';
import CustomHeader from '../../../components/admin/dashboard/HeaderDashboard';

import { Outlet } from 'react-router-dom';


const { Sider, Header, Content } = Layout;
const AdminLayout = () => {
  const [collapsed, setCollapsed] = useState(false)
  return (
    <div>
      <Layout>
        <Sider
          theme="light" 
          triger={null} 
          collapsible c
          ollapsed={collapsed} 
          className="sider"
        >
          <SidebarDashboard />

          <Button 
            type='text' 
            icon={collapsed ? <MenuUnfoldOutlined /> : <MenuFoldOutlined />} 
            onClick={() => setCollapsed(!collapsed)}
            className='triger-btn'
          />
        </Sider>
        <Layout>
          <Header className='header'>
            <CustomHeader />
          </Header>
          <Content className='content'>
            <Outlet />
          </Content>
        </Layout>
      </Layout>
    </div>
  )
}

export default AdminLayout;