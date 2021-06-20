import { useHistory } from 'react-router';
import classes from './Good.module.scss';

export const Good = ({data, goodStyle, index}) => {
   const history = useHistory();
   let cls = classes['GoodContainer'];

   const detailHandler = () => {
      history.push(`/details/${index}`);
   }
   
   if (goodStyle === 'saturated') {
      cls = classes['GoodContainerSaturated'];
   }

   return (
      <div className={cls} onClick={() => detailHandler()}>
         <div className={classes['GoodBody']}>
            <div className={classes['GoodImage']}>
               <img src={data.url} alt={data.name} />
            </div>
            <div className={classes['GoodInfo']}>
               <p className="good-title">{data.name}</p>
               <p className="good-producing-country">{data.country}</p>
               <p className={classes['GoodPrice']}>{data.price}</p>
            </div>
         </div>
      </div>
   )
}