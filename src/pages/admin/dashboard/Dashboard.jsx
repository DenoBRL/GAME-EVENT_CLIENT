import { Layout, Flex } from 'antd';

import MainContentDashboard from '../../../components/admin/dashboard/MainContentDashboard';
import SideContentDashboard from '../../../components/admin/dashboard/SideContentDashboard';
// import { Outlet } from 'react-router-dom';

const Dashboard = () => {
  return (
    <div>
      <Layout>
        <Flex gap='large'>
            <MainContentDashboard />
            <SideContentDashboard />
          </Flex>
      </Layout>
    </div>
  )
}

export default Dashboard;