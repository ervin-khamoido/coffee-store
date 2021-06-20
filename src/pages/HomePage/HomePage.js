import classes from './HomePage.module.scss';
import { NavLink } from 'react-router-dom';
import { Good } from '../../components/Good/Good';
import { NavbarLight } from '../../components/Navbar/NavbarLight';
import { NavbarDark } from '../../components/Navbar/NavbarDark';

import subtitleLightLogo from '../../images/logo/Beans_logo.svg';
import subtitleDarkLogo from '../../images/logo/Beans_logo_dark.svg';

import data from '../../database/db.json';

export const HomePage = () => {
   return (
      <>
         <div className={classes['Cover']}>
            <NavbarLight />
            
            <div className={[classes['CoverMainContent'], 'container'].join(' ')}>
               <div className="row">
                  <div className="col-lg-8 offset-lg-2">
                     <h1>Everything You Love About Coffee</h1>
                     <div>
                        <img src={subtitleLightLogo} alt="Logo" />
                     </div>
                     <div className={classes['CoverSubtitleText']}>
                        <p>We makes every day full of energy and taste</p>
                        <p>Want to try our beans?</p>
                     </div>
                     <button className={classes['CoverSubtitleBtn']}>
                        <NavLink to="/coffee" className="nav-btn">More</NavLink>
                     </button>
                  </div>
               </div>
            </div>
         </div>

         <div className={classes['About']}>
            <div className="container">
               <div className="row">
                  <div className={[classes['AboutTitle'], 'col-lg-2', 'offset-lg-5'].join(' ')}>
                     <h2>About Us</h2>
                     <div>
                        <img src={subtitleDarkLogo} alt="Logo" />
                     </div>
                  </div>
               </div>
               <div className="row">
                  <div className={[classes['AboutMainText'], 'col-lg-6', 'offset-lg-3'].join(' ')}>
                     <p>Extremity sweetness difficult behaviour he of. On disposal of as landlord horrible. Afraid at highly months do things on at. Situation recommend objection do intention so questions. As greatly removed calling pleased improve an. Last ask him cold feel met spot shy want. Children me laughing we prospect answered followed. At it went is song that held help face.</p>
                     <p>Now residence dashwoods she excellent you. Shade being under his bed her, Much read on as draw. Blessing for ignorant exercise any yourself unpacked. Pleasant horrible but confined day end marriage. Eagerness furniture set preserved far recommend. Did even but nor are most gave hope. Secure active living depend sonrepair day ladies now.</p>
                  </div>
               </div>
            </div>
         </div>

         <div className={classes['Best']}>
            <div className="container">
               <div className="row">
                  <h2>Our best</h2>
                  <div className={classes['GoodsContainer']}>
                     {data.bestsellers.map((item, index) => (
                        <Good
                           data={item}
                           key={`${index}-${Date.now}`}
                           index={index}
                        />
                     ))}
                  </div>
               </div>
            </div>
         </div>

         <div className={classes['Footer']}>
            <div className="container">
               <div className="row">
                  <div className="col-lg-12">
                     <NavbarDark dark='true' />
                  </div>
               </div>
            </div>
         </div>
      </>
   )
}