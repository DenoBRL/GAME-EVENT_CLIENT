import { Button, Card, Flex, Typography } from "antd"


const BannerGames = () => {
  return (
    <Card style={{ height: 260, padding: '20px' }}>
        <Flex vertical gap='30px'>
            <Flex vertical align='flex-start'>
                <Typography.Title level={2} strong>
                    Les jeux
                </Typography.Title>
                <Typography.Text type="secondary">
                    Liste des jeux populaires :
                </Typography.Text>
            </Flex>

            <Flex gap='large'>
                {/* <Button type='primary' size='large'>Voir plus</Button> */}
                <Button type='primary' size='large'>Liste des jeux</Button>
            </Flex>
        </Flex>
    </Card>

    
  );
};

export default BannerGames;