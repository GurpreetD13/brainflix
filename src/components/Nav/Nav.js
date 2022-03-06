import './Nav.scss';
import { NavLink } from 'react-router-dom';
import logo from '../../assets/logos/BrainFlix-logo.svg';

const Nav = () => {
    return (
        <nav className='nav'>
            <NavLink to='/'>
                <img className='nav__logo' src={logo} alt="BrainFlix logo" />
            </NavLink>
            <form>
                <input className='nav__search' type="text" placeholder='Search' />
                <div className='avatar nav__avatar nav__avatar--mobile'></div>
            </form>
            <NavLink to='/upload'>
                <button className='nav__button'>UPLOAD</button>
            </NavLink>
            <div className='avatar nav__avatar nav__avatar--tablet'></div>
        </nav>
    );
};

export default Nav;