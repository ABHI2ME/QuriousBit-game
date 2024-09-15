import React  , {useState} from 'react' ;
import Accordion from './Accordion' ;
import { FaChevronDown, FaChevronUp } from 'react-icons/fa'; 
import styles from "./carrers.module.css" ;


const Carrers = () => {
       

        const [isOpen, setIsOpen] = useState(false);
      
        const toggleAccordion = () => {
          setIsOpen(!isOpen);
        }; 

  return (
   <>
       <div className={styles.carrers}>
            <div className={styles.heading}>
               CAREERS
            </div>
            <div className={styles.accordionBox}>
                  <div className={styles.accordion1}>
                     <Accordion 
                        title="1. Game Designer (Bangalore - 5 Years)" 
                        content="React is a JavaScript library for building user interfaces." 
                      />
                  </div>
                  <div className={styles.accordion1}>
                        <Accordion 
                        title="2. Marketing Manager (Bangalore - 5 Years)" 
                        content="React is declarative, efficient, and flexible." 
                        /> 
                  </div>
                  <div className={styles.accordion1}>
                        <Accordion 
                        title="3. HR Manager (Bangalore - 5 Years)" 
                        content="React creates a virtual DOM to efficiently update the UI when data changes." 
                        />
                  </div>
                  <div className={styles.accordion1}>
                        <Accordion 
                        title="4. Finance Manager Manager (Bangalore - 5 Years)" 
                        content="React creates a virtual DOM to efficiently update the UI when data changes." 
                        />
                  </div>
                    
                    
                    
            </div>
       </div>
   </>
  )
}

export default Carrers
