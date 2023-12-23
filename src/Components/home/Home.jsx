import { useNavigate } from 'react-router-dom';

import styles from './Home.module.css'
const Home = () => {
   return (
         <div className={styles['hero-text']}>
            <h1 className={styles['header']}>TunedTreasures</h1>
            <p className={styles['lower-text']}><span>Share and Upgrade Your Cars</span></p>
         </div>
   );
};

export default Home;
