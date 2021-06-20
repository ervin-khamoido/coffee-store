import logoLight from '../../images/logo/Logo.svg';
import {NavLink} from 'react-router-dom';
import classes from './Navbar.module.scss';

export const NavbarLight = () => {
   const cls = [classes['LinkContainer'], 'col-lg-2', 'nav-link'].join(' ');

   return (
      <nav className="container">
         <div className="row">
            <div className={classes['NavbarLightWrapper']}>
               <div className={cls}>
                  <NavLink to="/" className="nav-btn">
                     <img src={logoLight} alt="Logo" className="logo-beans" />
                     <span>Coffee house</span>
                  </NavLink>
               </div>
               <div className={cls}>
                  <NavLink to="/coffee" className="nav-btn">Our coffee</NavLink>
               </div>
               <div className={cls}>
                  <NavLink to="/goods" className="nav-btn">For your pleasure</NavLink>
               </div>
            </div>
         </div>
      </nav>
   )
}