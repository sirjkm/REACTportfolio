import { Link } from 'react-router-dom'
import './index.scss'
import LogoJ from '../../assets/images/logo-j.png';

const Sidebar = () => (
    <div className='nav-bar'>
        <Link className='logo' to='/'>
            <img src={LogoJ} alt='logo' />
        </Link>
    </div>
)

export default Sidebar