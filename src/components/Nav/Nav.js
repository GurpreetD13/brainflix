import './Nav.scss';
import logo from '../../assets/logos/BrainFlix-logo.svg';

const Nav = () => {
    return (
        <nav className='nav'>
            <img className='nav__logo' src={logo} alt="BrainFlix logo" />
            <form>
                <input className='nav__search' type="text" placeholder='Search' />
                {/* <div className='nav__avatar avatar nav__avatar--mobile'></div> */}
            </form>
            <button className='nav__button'>UPLOAD</button>
            <div className='nav__avatar avatar nav__avatar--tablet'></div>
        </nav>
    );
};

export default Nav;