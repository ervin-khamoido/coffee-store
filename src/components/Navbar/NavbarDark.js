import logoDark from '../../images/logo/Logo_black.svg';
import logoBeansDark from '../../images/logo/Beans_logo_dark.svg';
import {NavLink} from 'react-router-dom';
import classes from './Navbar.module.scss';

export const NavbarDark = () => {
   const cls = [classes['LinkContainer'], 'col-lg-2', 'nav-link'].join(' ');

   return (
      <div className={[classes['NavbarDark'], 'container'].join(' ')}>
         <div className={[classes['NavbarDarkWrapper'], 'row'].join(' ')}>
            <div className={[cls, 'offset-lg-3 col-lg-2'].join(' ')}>
               <NavLink to="/" className="nav-btn">
                  <img src={logoDark} alt="Logo" className="Logo" />
                  <span>Coffee house</span>
               </NavLink>
            </div>
            <div className={[cls, 'col-lg-2'].join(' ')}>
               <NavLink to="/coffee" className="nav-btn">Our coffee</NavLink>
            </div>
            <div className={[cls, 'col-lg-2'].join(' ')}>
               <NavLink to="/goods" className="nav-btn">For your pleasure</NavLink>
            </div>
         </div>
         <div className={classes['LogoBeansWrapper']}>
            <img src={logoBeansDark} alt="LogoBeans" />
         </div>
      </div>
   )
}