import React, { MouseEventHandler } from 'react';

import styles from './Button.module.scss';

interface Props {
  onClick: MouseEventHandler<HTMLDivElement>;
  icon: string;
}

const IconButton: React.FC<Props> = ({ icon, onClick }) => (
  <div className={styles.wrapper} onClick={onClick}>
    <img src={icon} width="55px" height="55px" alt="nextImg" />
  </div>
);

export default IconButton;
