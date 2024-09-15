import React from 'react' ;
import styles from "./home.module.css" ;
import Navbar from './Navbar';
import Games from './Games';
import PressRelease from './PressRelease'
import { useTypewriter , Cursor } from 'react-simple-typewriter' ;
import { FaBeer } from "react-icons/fa";
import { CiLinkedin } from "react-icons/ci";
import { IoMdMail } from "react-icons/io";

function Home() {

    const [text] = useTypewriter({
        words: ['gaming get curious', 'you fell adrenaline', 'you feel awesome', 'you play game like pro '],
        loop: 0,
        onLoopDone: () => console.log(`loop completed after 3 runs.`)
      })


  return (
   <>  
       <div className={styles.container}>
       <Navbar/>
            <div className= {styles.bgImage}>
                <img src='../images/bg1.jpeg'></img>
            </div> 
            <div className={styles.hero}>``
                 <div className={styles.heroText}>
                    <div className={styles.heroText1}>Where</div>
                    <div className={styles.heroText2}>{text}</div>
                </div>
            </div>
        <div className={styles.aboutUsBox}> 
             
                   <div className={styles.aboutUsBoxHeading}>
                      <div className={styles.aboutUsBoxHeadingText}>ABOUT US</div>
                      <div className={styles.aboutUsBoxHeadingTextElab}>
                      QuriousBit is a game development company, based out of India, envisioning to disrupt casual puzzle genres with innovative core gameplay mechanics and deeper narratives. Our dream is to pin India on the global map of free-to-play casual mobile gaming industry.
                      </div>
                   </div>

                   <div className={styles.founders}>
                        <div className={styles.foundersText}>
                             OUR FOUNDERS
                        </div>
                        <div className={styles.foundersInfo}>
                               <div className={styles.foundersInfo1}>
                                    <div className={styles.founder1name}>
                                        Ramakrishna Reddy Y L
                                    </div>
                                    <div className={styles.founder1position}>
                                       Founder & CEO
                                    </div>
                                    <div className={styles.founder1descrip}>
                                    With a wealth of experience in Product Management, Ram has forged an impressive career within the casual gaming industry.
                                    </div>
                                    <div className={styles.founder1icons}>
                                       <div className={styles.founderLinkedinbox}><CiLinkedin className={styles.founderLinkedin}  /></div>
                                       <div className={styles.founderMailinbox}><IoMdMail className={styles.founderMail}  /></div>

                                    </div>
                               </div>
                               <div className={styles.foundersInfo2}>
                               <div className={styles.founder1name}>
                                           Shubham Joshi
                                    </div>
                                    <div className={styles.founder1position}>
                                          Founder & CTO
                                    </div>
                                    <div className={styles.founder1descrip}>
                                    With a strong engineering foundation, Shubham has led and developed high-impact solutions in the casual gaming industry.
                                    </div>
                                    <div className={styles.founder1icons}>
                                       <div className={styles.founderLinkedinbox}><CiLinkedin className={styles.founderLinkedin} /></div>
                                       <div className={styles.founderMailinbox}><IoMdMail className={styles.founderMail} /></div>

                                    </div>
                               </div>
                        </div>
                   </div>

                   {/* games */}
                    <Games />
                    
                   {/* Press Release */}
                  <PressRelease />           
        </div>

       </div>
   </>
  )
}

export default Home ;
