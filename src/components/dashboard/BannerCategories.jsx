import { Button, Card, Flex, Typography } from 'antd';

const BannerCategories = () => {
    return (
        <div>
            <Card style={{ height: 260, padding: '20px' }}>
                <Flex vertical gap='30px'>
                    <Flex vertical align='flex-start'>
                        <Typography.Title level={4} strong>
                            Les catégories
                        </Typography.Title>
                        <Typography.Text type="secondary">
                            Liste des catégories :
                        </Typography.Text>
                    </Flex>
                
                    <Flex gap='large'>
                        {/* <Button type='primary' size='large'>Voir plus</Button> */}
                        <Button type='primary' size='large'>Liste des catégories</Button>
                    </Flex>
                </Flex>
            </Card>
        </div>
    );
};

export default BannerCategories;