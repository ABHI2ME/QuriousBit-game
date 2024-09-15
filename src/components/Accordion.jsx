import React, { useState } from 'react';
import { FaChevronDown, FaChevronUp } from 'react-icons/fa';
import styles from './accordion.module.css';

const Accordion = ({ title, content }) => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleAccordion = () => {
    setIsOpen(!isOpen);
  };

  return (
    <div className={`${styles.accordion} ${isOpen ? styles.open : ''}`}>
      <div className={styles.accordionHeader} onClick={toggleAccordion}>
        <h2 className={styles.text}>{title}</h2>
        <div className={styles.icons}>
          {isOpen ? <FaChevronUp className={styles.iconArrow} /> : <FaChevronDown className={styles.iconArrow} />}
        </div>
      </div>
      {/* Add open class to the accordion content */}
      <div className={`${styles.accordionContent} ${isOpen ? styles.open : ''}`}>
        <div className={styles.contentDetails}>
          <p>{content}</p>
        </div>
      </div>
    </div>
  );
};

export default Accordion;
