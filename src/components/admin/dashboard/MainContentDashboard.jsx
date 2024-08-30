import { Flex } from "antd"
import BannerEvents from "../dashboard/banners/BannerEvents"
import BannerGames from "../dashboard/banners/BannerGames"
import BannerUsers from "../dashboard/banners/BannerUsers"
import BannerAddresses from "../dashboard/banners/BannerAddresses"
import BannerComments from "../dashboard/banners/BannerComments"

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