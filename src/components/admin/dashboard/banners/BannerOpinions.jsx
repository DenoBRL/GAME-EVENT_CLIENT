import { Button, Card, Flex, Typography } from 'antd';

const BannerOpinions = () => {
    return (
        <div>
            <Card style={{ height: 260, padding: '20px' }}>
                <Flex vertical gap='30px'>
                    <Flex vertical align='flex-start'>
                        <Typography.Title level={4} strong>
                            Les avis
                        </Typography.Title>
                        <Typography.Text type="secondary">
                            Liste des derniers avis :
                        </Typography.Text>
                    </Flex>
                
                    <Flex gap='large'>
                        {/* <Button type='primary' size='large'>Voir plus</Button> */}
                        <Button type='primary' size='large'>Liste des avis</Button>
                    </Flex>
                </Flex>
            </Card>
        </div>
    );
};

export default BannerOpinions;