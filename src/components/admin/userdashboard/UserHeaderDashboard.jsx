import { Avatar, Flex, Typography } from 'antd';
import Search from 'antd/es/transfer/search';
import { MessageTwoTone, NotificationTwoTone, UserOutlined } from '@ant-design/icons';

const UserCustomHeader = () => {
  return (
    <Flex align='center' justify='space-between'>
        <Typography.Title level={3} type="primary">
            Mon profil
        </Typography.Title>

        <Flex align='center' gap='3rem'>
            <Search placeholder='Recherche' allowClear />

        <Flex align='center' gap='10px'>
            <MessageTwoTone className='header-icon' />
            <NotificationTwoTone className='header-icon' />
            <Avatar 
                style={{ 
                    backgroundColor: '#519de7',
                    color: '#fff',
                }} 
                icon={<UserOutlined />} />
        </Flex>  
        </Flex>
    </Flex>
  )
}

export default UserCustomHeader;