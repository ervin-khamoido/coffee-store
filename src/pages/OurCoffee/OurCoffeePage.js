import classes from './OurCoffee.module.scss';
import '../../index.scss';
import {NavbarLight} from '../../components/Navbar/NavbarLight';
import {NavbarDark} from '../../components/Navbar/NavbarDark';
import {Good} from '../../components/Good/Good';

import subtitleDarkLogo from '../../images/logo/Beans_logo_dark.svg';
import coffeeGirl from '../../images/coffee_girl.jpg';

import data from '../../database/db.json';
import { useState } from 'react';
import { useEffect } from 'react';
import { useCallback } from 'react';

export const OurCoffeePage = () => {
   const [goods, setGoods] = useState(data.coffee);
   const [searchValue, setSearchValue] = useState('');

   const editSearchValueHandler = useCallback(event => {
      if (event) {
         setSearchValue(event.target.value.toLowerCase());
      }
   }, []);

   const editFilterStatusHandler = useCallback(event => {
      if (event.target.classList.contains('filter-btns-item')) {
         let array = [];
         goods.forEach(item => {
            array.push(item.country)
         });

         if ((array.every(elem => elem === 'Brazil') && event.target.textContent === 'Brazil') ||
            (array.every(elem => elem === 'Kenya') && event.target.textContent === 'Kenya') ||
            (array.every(elem => elem === 'Columbia') && event.target.textContent === 'Columbia')) {
            setGoods(data.coffee);
         } else {
            if (event.target.textContent === 'Brazil') {
               setGoods(data.coffee.filter(item => item.country === 'Brazil'));
            } else if (event.target.textContent === 'Kenya') {
               setGoods(data.coffee.filter(item => item.country === 'Kenya'));
            } else if (event.target.textContent === 'Columbia') {
               setGoods(data.coffee.filter(item => item.country === 'Columbia'));
            }
         }
      }
   }, [goods]);

   const search = useCallback(() => {
      setGoods(data.coffee);
      if (searchValue !== '') {
         data.coffee.forEach(item=> {
            if (item.name.toLowerCase().search(searchValue) === -1) {
               item.isHide = true;
            } else {
               item.isHide = false;
            }
         });
      } else if (searchValue.length === 0) {
         data.coffee.forEach(item => {
            item.isHide = false;
         })
      }
   }, [searchValue]);

   // useEffect(() => {
   //    editSearchValueHandler();
   //    search();
   // }, [search, editSearchValueHandler])

   useEffect(() => {
      editSearchValueHandler();
      search();
   }, [searchValue, search, editSearchValueHandler])

   return (
      <>
         <div className={classes['Cover']}>
            <NavbarLight />
            <h1>Our Coffee</h1>
         </div>

         <div className={classes['About']}>
            <div className="container">
               <div className="row">
                  <div className="col-lg-4 offset-lg-2">
                     <div className={classes['CoffeeGirlWrapper']}>
                        <img src={coffeeGirl} alt="Coffee" />
                     </div>
                  </div>
                  <div className="col-lg-3">
                     <h2>About our beans</h2>
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
                  <div className={[classes['ControlbarSearch'], 'col-lg-4 offset-lg-2'].join(' ')}>
                     <div className={classes['SearchWrapper']}>
                        <label htmlFor="search-goods">Lookiing for</label>
                        <input 
                           type="text" 
                           value={searchValue}
                           name="good_name" 
                           id="search-goods" 
                           placeholder="start typing here..."
                           onChange={event => editSearchValueHandler(event)}
                        />
                     </div>
                  </div>
                  <div className={[classes['ControlbarFilter'], 'col-lg-4'].join(' ')}>
                     <div className={classes['FilterWrapper']}>
                        <label htmlFor="filter-goods">Or filter</label>
                        <ul className="filter-btns" onClick={editFilterStatusHandler}>
                           <li className="filter-btns-item">Brazil</li>
                           <li className="filter-btns-item">Kenya</li>
                           <li className="filter-btns-item">Columbia</li>
                        </ul>
                     </div>
                  </div>
               </div>
               <div className="row">
                     {goods.map((item, index) => {
                        let itemClasses = ['col-lg-3 offset-lg-1'];

                        if (item.isHide) {
                           itemClasses.push('hide');
                        }

                        if (searchValue === '') {
                           itemClasses = ['col-lg-3 offset-lg-1'];
                        }
                        
                        return (
                           <div 
                              key={`${index}-${Date.now}`} 
                              className={itemClasses.join(' ')}
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