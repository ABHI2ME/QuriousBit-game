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
                                 QuriousBit to utilise $2 million seed fundraise for hiring and developing tech infrastructure
                                 </div>
                                 <div className={styles.news1Link}>
                                    <a href='https://www.cnbctv18.com/startup/startup-fundraise-quriousbit-gaming-vahdam-india-tea-17898191.htm/'>Featured in CNBC</a>
                                 </div>
                             </div>
                             <div className={styles.founderNews1}>
                                 <div className={styles.news1Text}>
                                 Casual gaming studio QuriousBit bags $2 million funding from Lumikai, General Catalyst
                                 </div>
                                 <div className={styles.news1Link}>
                                    <a href='https://www.moneycontrol.com/news/business/startup/casual-gaming-studio-quriousbit-bags-2-million-funding-from-lumikai-general-catalyst-11437971.html/'>Featured in Moneycontrol</a>
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
