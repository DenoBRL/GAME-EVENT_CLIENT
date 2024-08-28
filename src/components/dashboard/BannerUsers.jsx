import { Button, Card, Flex, Typography } from "antd"


const BannerUsers = () => {
  return (
    <Card style={{ height: 260, padding: '20px' }}>
        <Flex vertical gap='30px'>
            <Flex vertical align='flex-start'>
                <Typography.Title level={2} strong>
                    Les utilisateurs
                </Typography.Title>
                <Typography.Text type="secondary">
                    Liste des derniers utilisateurs :
                </Typography.Text>
            </Flex>

            <Flex gap='large'>
                {/* <Button type='primary' size='large'>Voir plus</Button> */}
                <Button type='primary' size='large'>Liste des utilisateurs</Button>
            </Flex>
        </Flex>
    </Card>

    
  );
};

export default BannerUsers;