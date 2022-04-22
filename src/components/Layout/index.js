import { Outlet } from 'react-router-dom';
import Sidebar from '../sidebar';
import './index.scss';

const Layout = () => {
    return (
        <div className='App'>
            <Sidebar />
            <div className='page'>
                <span className='tags top-tags'>&lt;body&gt;</span>
                <Outlet />
            </div>
        </div>
    )
}

export default Layout