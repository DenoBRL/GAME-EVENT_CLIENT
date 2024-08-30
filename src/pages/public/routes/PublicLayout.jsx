import { Outlet } from 'react-router-dom';

const PublicLayout = () => {
    return (
        <div className='PublicLayout'>
            <Outlet />
        </div>
    );
};

export default PublicLayout;
