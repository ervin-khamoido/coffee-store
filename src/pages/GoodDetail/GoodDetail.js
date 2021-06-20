import classes from './GoodDetail.module.scss';
import {NavbarLight} from '../../components/Navbar/NavbarLight';
import {NavbarDark} from '../../components/Navbar/NavbarDark';
import subtitleDarkLogo from '../../images/logo/Beans_logo_dark.svg';

import data from '../../database/db.json';

export const GoodDetail = (props) => {
   const goodId = props.match.params.id;

   return (
      <>
         <div className={classes['Cover']}>
            <NavbarLight />
            <h1>Our Coffee</h1>
         </div>

         <div className={classes['About']}>
            <div className="container">
               <div className="row">
                  <div className="col-lg-5 offset-2">
                     <div className={classes['CoffeeGoodWrapper']}>
                        <img src={data.coffee[goodId].url} alt="Coffee" />
                     </div>
                  </div>
                  <div className="col-lg-4">
                     <h2>About our beans</h2>
                     <div className={classes['SubtitleLogo']}>
                        <img src={subtitleDarkLogo} alt="Logo" />
                     </div>
                     <div className={classes['TextWrapper']}>
                        <p>
                           <span className="good-title">Counrty: </span> 
                           {data.coffee[goodId].country}
                        </p>
                        <p>
                           <span className="good-title">Description: </span> 
                           {data.coffee[goodId].description}
                        </p>
                        <p>
                           <span className="good-title">Price: </span> 
                           <span className={classes['GoodPrice']}>{data.coffee[goodId].price}</span>
                        </p>
                     </div>
                  </div>
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