import { Flex } from 'antd';
import BannerRoles from "./BannerRoles"
import BannerKinds from "./BannerKinds"
import BannerCategories from "./BannerCategories"
import BannerOpinions from "./BannerOpinions"

const SideContent = () => {
  return (
    <Flex vertical gap='2.3rem' style={{ width: 350 }}>
      <BannerRoles />
      <BannerKinds />
      <BannerCategories />
      <BannerOpinions />
    </Flex>
  )
}

export default SideContent