import React from 'react' ;
import styles from "./Footer.module.css" ;
import { FaLocationDot } from "react-icons/fa6";
import { IoMail } from "react-icons/io5";

const Footer = () => {
  return (
    <>
       <div className={styles.footer}>
            <div className={styles.contact}>
                 <div className={styles.contactText}>
                    CONTACT US
                 </div>
            </div>
            <div className={styles.links}>
                <div className={styles.mail}>
                <IoMail className={styles.mailIcon} /> support@quriousbit.com
                 </div>
                <div className={styles.location}>
                <FaLocationDot className={styles.locationIcon} />108, First Floor, Block 9B, Raja Ritz Avenue Apartments, Near Hoodi Junction Metro Station, Hoodi, Bangalore - 560048
                </div>
                <div className={styles.privacy}>
                    <div className={styles.copyright}>Copyright © 2024 Quriousbit</div>
                    <div className={styles.privacyDetails}>
                           <div className={styles.policy}><a href='https://quriousbit.com/privacy-policy'>Privacy Policy</a></div>
                           <div className={styles.service}><a href='https://quriousbit.com/terms-of-service-2'>Terms of Service</a></div>
                    </div>

                </div>
            </div>


       </div>
    </>
  )
}

export default Footer
