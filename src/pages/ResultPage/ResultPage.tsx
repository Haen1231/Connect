import React from 'react';

import { ReactComponent as SendLogo } from '.././../assets/sendResult.svg';
import ResultIcon from '../../assets/resultIcon.png';
import ResultIconBg from '../../assets/resultIconBg.png';
import Logo from '../../components/Logo/Logo';

import styles from './ResultPage.module.scss';

const ResultPage: React.FC = () => {
  const resultTitle = '스포츠 액셀러레이팅 프로그램 지원';
  const target = '창업 7년 미만 기업';
  const supportContent = [
    '1. 투자 유치 전문 보육',
    '2. 멘토링 및 컨설팅',
    '3. 사업화 지원금',
    '4. 초기/후속 투자 등',
  ];
  return (
    <div className={styles.wrapper}>
      <div className={styles.top}>
        <Logo />
        <div className={styles.title}>
          <span className={styles.subTitle}>나에게 필요한 정부 사업은</span>
          <span className={styles.resultTitle}>{resultTitle}</span>
        </div>
      </div>
      <div className={styles.contents}>
        <div className={styles.resultIcon}>
          <img src={ResultIcon} width="200px" height="200px" alt="icon" />
        </div>
        <div className={styles.subContents}>
          <div className={styles.contentBlock}>
            <span className={styles.blockTitle}>지원대상</span>
            <span className={styles.blockContents}>{target}</span>
          </div>
          <div className={styles.contentBlock}>
            <span className={styles.blockTitle}>지원내용</span>
            <div>
              {supportContent?.map((item) => (
                <span className={styles.blockContents} key={item}>
                  {item}
                </span>
              ))}
            </div>
          </div>
        </div>
        <div className={styles.sendResult}>
          <div>
            <SendLogo width="30px" height="30px" />
          </div>
          <span>
            대표님의 상황 분석이 끝났습니다.
            <br />
            결과를 받으시려면 카톡으로 메일주소를 남겨주세요.
          </span>
        </div>
      </div>
    </div>
  );
};

export default ResultPage;
