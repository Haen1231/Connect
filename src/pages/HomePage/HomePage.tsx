import React, { MouseEventHandler } from 'react';

import { useNavigate } from 'react-router-dom';

import { ReactComponent as ImgLogo } from '.././../assets/testlogo.svg';
import Logo from '../../components/Logo/Logo';

import styles from './HomePage.module.scss';

const HomePage: React.FC = () => {
  const navigate = useNavigate();
  const count = 1;

  const onClick: MouseEventHandler<HTMLElement> = () => {
    navigate(`/selects/${count}`);
  };
  return (
    <div className={styles.wrapper}>
      <div className={styles.top}>
        <Logo />
        <div className={styles.title}>
          <span className={styles.title1}>창업 지원 사업</span>
          <span className={styles.title2}>매칭 테스트</span>
          <span className={styles.subTitle}>
            나를 도와줄 정부 사업은 없을까?
          </span>
        </div>
      </div>
      <div className={styles.body}>
        <div className={styles.icon}>
          <ImgLogo width="84px" height="50px" />
        </div>
        <div className={styles.content}>
          <div className={styles.blocks}>
            <span>총 소모 시간은 5분 내외입니다.</span>
          </div>
          <div className={styles.blocks}>
            <span>
              본인의 정보를 최대한 정확하게 작성해야 도움되는 정부지원사업을
              추천받을 수 있습니다.
            </span>
          </div>
          <div className={styles.blocks}>
            <span>
              제가 필요해서 만든 서비스이며 여러분의 창업을 진심으로 응원합니다.
            </span>
          </div>
        </div>
        <div>
          <button className={styles.button} onClick={onClick}>
            테스트 시작하기
          </button>
        </div>
      </div>
    </div>
  );
};
export default HomePage;
