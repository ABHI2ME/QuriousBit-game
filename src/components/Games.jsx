import React from 'react' ;
import styles from './games.module.css' ;
import { FaRegDotCircle } from "react-icons/fa";

const Games = () => {
  return (
   <>
        <div className={styles.games}>
             <div className={styles.gamesHeading}>
                  <div className={styles.gamesHeadingText}>
                      Choose Your Games 
                  </div>
             </div>
             {/* games mobile section */}
             <div className={styles.gamesContiner}>
                  
                  <div className={styles.gamesMobileBox}>
                       
                            <div className={styles.gamesMobile}>
                                   <div className={styles.gamesMobileWrapper}>
                                             <img src='../images/bg2.png' alt='image' />
                                             <img src='../images/bg3.png' alt="Slide 1" />
                                             <img src='../images/bg4.png' alt="Slide 2" />
                                             <img src='../images/bg5.png' alt="Slide 3" />
                                             <img src='../images/bg6.png' alt="Slide 4" />
                                   </div>
                                   <div className={styles.gamesMobileBottom}>
                                        <div className={styles.gamesMobileBottomLine}>
                                        <FaRegDotCircle style={{color:"black" , marginTop:"0.3rem"  , height:"3.4rem"}} />
                                        </div>
                                   </div>
                            </div>
                     
                  </div>  
                 {/* games Mobile section details  */}
                  <div className={styles.gamesDetails}>
                          <div className={styles.gamesDetailsDiv}>
                               <div className={styles.gamesDetailsImg}>
                                  <img src='../images/gamesDescription.png' className={styles.gamesDetailsImgage}></img>
                               </div>
                               <div className={styles.gamesDetailsHeading}>
                               Block Blitz - Block Puzzle Game
                               </div>
                               <div className={styles.gamesDetailsDescript}>
                               Love Block games? Enjoy IQ Challenging Puzzles? Fan of Sudoku, Tetris, Jigsaw, or Just love a good puzzle? , then Block Blitz is designed for you!
                               </div>
                               <div className={styles.gamesDetailsButton}>
                               <a 
                                   href="https://play.google.com/store/apps/details?id=com.quriousbit.jumbotileblast&hl=en&pli=1"
                                   target="_blank"  // Opens the link in a new tab
                                   rel="noopener noreferrer"  // Security best practice
                                   className={styles.gamesDetailsBtn} // Apply your button styles to the anchor
                                   >
                                   <img src='../images/playstore.png' alt='playstore' className={styles.playstationBtn} />
                                   Get it on Google Play
                               </a>
                               </div>
                          </div>
                  </div>
            </div>






        </div>
   </>
  )
}

export default Games
