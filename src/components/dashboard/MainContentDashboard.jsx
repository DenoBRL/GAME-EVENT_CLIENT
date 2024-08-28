import { Flex } from "antd"
import BannerEvents from "../dashboard/BannerEvents"
import BannerGames from "../dashboard/BannerGames"
import BannerUsers from "../dashboard/BannerUsers"
import BannerAddresses from "../dashboard/BannerAddresses"
import BannerComments from "../dashboard/BannerComments"

const MainContent = () => {
  return (
        <div style={{ flex: 1}}>
            <Flex vertical gap='2.3rem'>
              <BannerUsers />
              <BannerAddresses />
              <BannerEvents />
              <BannerGames />
              <BannerComments />
            </Flex>
        </div>
    
  );
};

export default MainContent;