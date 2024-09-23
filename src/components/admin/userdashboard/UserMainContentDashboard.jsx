import { Flex } from "antd"
import UserBannerEvents from "../../../components/admin/userdashboard/userbanners/UserBannerEvents.jsx"
import UserBannerOpinions from "../../../components/admin/userdashboard/userbanners/UserBannerOpinions.jsx"
import UserBannerUsers from "../../../components/admin/userdashboard/userbanners/UserBannerUser.jsx"
import UserBannerAddresses from "../../../components/admin/userdashboard/userbanners/UserBannerAddresses.jsx"
import UserBannerComments from "../../../components/admin/userdashboard/userbanners/UserBannerComments.jsx"

const UserMainContent = () => {
  return (
    <div>
    <h1>Mon profil</h1>
        <div className='mt-5' style={{ flex: 1}}>
            <Flex vertical gap='2.3rem'>
              <UserBannerUsers />
              <UserBannerAddresses />
              <UserBannerEvents />
              <UserBannerOpinions />
              <UserBannerComments />
            </Flex>
        </div>
    </div>
  );
};

export default UserMainContent;