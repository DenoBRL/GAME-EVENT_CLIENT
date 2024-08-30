import { Layout, Button, Flex } from 'antd';
import { useState } from 'react';
import { MenuUnfoldOutlined, MenuFoldOutlined } from '@ant-design/icons';

import SidebarDashboard from '../../../components/admin/dashboard/SidebarDashboard';
import CustomHeader from '../../../components/admin/dashboard/HeaderDashboard';
import MainContentDashboard from '../../../components/admin/dashboard/MainContentDashboard';
import SideContentDashboard from '../../../components/admin/dashboard/SideContentDashboard';


const { Sider, Header, Content } = Layout;
const Dashboard = () => {
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
            <Flex gap='large'>
              <MainContentDashboard />
              <SideContentDashboard />
            </Flex>
          </Content>
        </Layout>
  
      </Layout>
    </div>
  )
}

export default Dashboard