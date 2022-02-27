import './Nav.scss';
import logo from '../../assets/logos/BrainFlix-logo.svg';

const Nav = () => {
    return (

        <nav className='nav'>
            <img className='nav__logo' src={logo} alt="brainflix logo" />
            <form>
                <input className='nav__search' type="text" placeholder='Search' />
            </form>
            <button>UPLOAD</button>
            <div className='nav__avatar'></div>
        </nav>
    );
};

export default Nav;