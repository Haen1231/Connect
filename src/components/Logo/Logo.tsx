import React, { useEffect, useState } from 'react';

import cx from 'clsx';
import { useLocation } from 'react-router-dom';

import { ReactComponent as ImgLogo } from '.././../assets/testlogo.svg';
import { ReactComponent as TitleLogo } from '../../assets/connecLogo.svg';

import styles from './Logo.module.scss';

const Logo: React.FC = () => {
  const [isHome, setIsHome] = useState(true);
  const location = useLocation();

  useEffect(() => {
    if (location.pathname === '/') {
      setIsHome(true);
    } else {
      setIsHome(false);
    }
    console.log(isHome);
  }, [isHome, location]);

  return (
    <div className={styles.wrapper}>
      <div>
        <ImgLogo
          className={cx({ [styles.isHome]: isHome })}
          width="30px"
          height="28px"
        />
      </div>
      <TitleLogo
        className={cx({ [styles.isHome]: isHome })}
        width="125px"
        height="47px"
      />
    </div>
  );
};

export default Logo;
