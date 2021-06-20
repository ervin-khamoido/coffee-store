import classes from './PleasurePage.module.scss';
import '../../index.scss'
import {NavbarLight} from '../../components/Navbar/NavbarLight';
import {NavbarDark} from '../../components/Navbar/NavbarDark';
import {Good} from '../../components/Good/Good';

import subtitleDarkLogo from '../../images/logo/Beans_logo_dark.svg';
import cupOfCoffee from '../../images/cup_of_coffee.jpg';

import data from '../../database/db.json';


export const PleasurePage = () => {
   return (
      <>
         <div className={classes['Cover']}>
            <NavbarLight />
            <h1>For your pleasure</h1>
         </div>

         <div className={classes['About']}>
            <div className="container">
               <div className="row">
                  <div className="col-lg-4 offset-lg-2">
                     <div className={classes['CoffeeGirlWrapper']}>
                        <img src={cupOfCoffee} alt="Coffee" />
                     </div>
                  </div>
                  <div className="col-lg-3">
                     <h2>About our goods</h2>
                     <div className={classes['SubtitleLogo']}>
                        <img src={subtitleDarkLogo} alt="Logo" />
                     </div>
                     <div className={classes['TextWrapper']}>
                        <p>Extremity sweetness difficult behaviour he of. On disposal of as landlord horrible.</p>
                        <p>Afraid at highly months do things on at. Situation recommend objection do intention so questions.</p>
                        <p>As greatly removed calling pleased improve an. Last ask him cold feel met spot shy want. Children me laughing we prospect answered followed. At it went is song that held help face.</p>
                     </div>
                  </div>
               </div>
            </div>
         </div>

         <div className={classes['Goods']}>
            <div className="container">
               <div className="row">
                     {data.coffee.map((item, index) => {
                        return (
                           <div 
                              key={`${index}-${Date.now}`} 
                              className={[classes['GoodItem'], 'col-lg-3 offset-lg-1'].join(' ')}
                              style={{marginBottom: '30px'}}
                           >
                              <Good
                                 data={item}
                                 goodStyle='saturated'
                                 className={classes['GoodItem']}
                                 index={index}
                              />
                           </div>
                        )
                     }
                     )}
               </div>
            </div>
         </div>

         <footer className={classes['Footer']}>
            <div className="container">
               <div className="row">
                  <div className="col-lg-12">
                     <NavbarDark />
                  </div>
               </div>
            </div>
         </footer>
      </>
   )
}