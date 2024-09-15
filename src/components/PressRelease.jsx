import React from 'react' ;
import styles from "./pressRelease.module.css" ;

const PressRelease = () => {
  return (
     <>
       <div className={styles.press}>
             <div className={styles.heading}>
                  <div className={styles.headingText}>
                      PRESS RELEASE
                  </div>
                  <div className={styles.founders}>
                       <div className={styles.foundersImg}>
                        <img src='../images/founders.png'  className={styles.foundersImage}/>
                       </div>
                       <div className={styles.foundersNews}>
                             <div className={styles.founderNews1}>
                                 <div className={styles.news1Text}>
                                 QuriousBit bags $2 million funding from Lumikai to develop casual mobile Games
                                 </div>
                                 <div className={styles.news1Link}>
                                    <a href='https://inc42.com/buzz/quriousbit-bags-funding-from-lumikai-to-develop-casual-mobile-games/'>Featured in INC42</a>
                                 </div>
                             </div>
                             <div className={styles.founderNews1}>
                                 <div className={styles.news1Text}>
                                 QuriousBit bags $2 million funding from Lumikai to develop casual mobile Games
                                 </div>
                                 <div className={styles.news1Link}>
                                    <a href='https://inc42.com/buzz/quriousbit-bags-funding-from-lumikai-to-develop-casual-mobile-games/'>Featured in INC42</a>
                                 </div>
                             </div>
                             <div className={styles.founderNews1}>
                                 <div className={styles.news1Text}>
                                 QuriousBit bags $2 million funding from Lumikai to develop casual mobile Games
                                 </div>
                                 <div className={styles.news1Link}>
                                    <a href='https://inc42.com/buzz/quriousbit-bags-funding-from-lumikai-to-develop-casual-mobile-games/'>Featured in INC42</a>
                                 </div>
                             </div>
                             
                       </div>
                  </div>
             </div>
       </div>
     
     </>
  )
}

export default PressRelease ;
