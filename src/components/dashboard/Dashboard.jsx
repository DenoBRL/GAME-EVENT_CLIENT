import { Layout, Button, Flex } from 'antd';
import SidebarDashboard from '../dashboard/SidebarDashboard';
import CustomHeader from '../dashboard/HeaderDashboard';
import { useState } from 'react';
import { MenuUnfoldOutlined, MenuFoldOutlined } from '@ant-design/icons';
import MainContentDashboard from '../dashboard/MainContentDashboard';
import SideContentDashboard from '../dashboard/SideContentDashboard';


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