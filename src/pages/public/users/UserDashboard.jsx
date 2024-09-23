import { Layout, Flex } from 'antd';

import UserMainContentDashboard from '../../../components/admin/userdashboard/UserMainContentDashboard';
import UserSideContentDashboard from '../../../components/admin/userdashboard/UserSideContentDashboard';
// import { Outlet } from 'react-router-dom';

const UserDashboard = () => {
  return (
    <div>
      <Layout>
        <Flex gap='large'>
            <UserMainContentDashboard />
            <UserSideContentDashboard />
          </Flex>
      </Layout>
    </div>
  )
}

export default UserDashboard;