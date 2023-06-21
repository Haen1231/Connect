import React, { useEffect, useState } from 'react';

import cx from 'clsx';
import { useLocation } from 'react-router-dom';

import { ReactComponent as WhiteLogo } from '.././../assets/LogoWhite.svg';
import { ReactComponent as ImgLogo } from '.././../assets/testlogo.svg';
import { ReactComponent as TitleLogo } from '../../assets/connecLogo.svg';
import { ReactComponent as WhiteTitleLogo } from '../../assets/connecLogoWhite.svg';

import styles from './Logo.module.scss';

const Logo: React.FC = () => {
  const [isWhite, setIsWhite] = useState(true);
  const location = useLocation();

  useEffect(() => {
    if (location.pathname === '/result') {
      setIsWhite(true);
    } else {
      setIsWhite(false);
    }
  }, [isWhite, location]);

  return (
    <div className={styles.wrapper}>
      <div>
        {isWhite ? (
          <>
            <div>
              <WhiteLogo width="30px" height="28px" />
            </div>
            <div>
              <WhiteTitleLogo width="125px" height="47px" />
            </div>
          </>
        ) : (
          <>
            <div>
              <ImgLogo width="30px" height="28px" />
            </div>
            <div>
              <TitleLogo width="125px" height="47px" />
            </div>
          </>
        )}
      </div>
    </div>
  );
};

export default Logo;
