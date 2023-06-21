import React from 'react';

import { ReactComponent as SendLogo } from '.././../assets/sendResult.svg';
import whiteLogo, {
  ReactComponent as WhiteLogo,
} from '../../assets/LogoWhite.svg';
import Logo from '../../components/Logo/Logo';

import styles from './ResultPage.module.scss';

const ResultPage: React.FC = () => {
  const today: Date = new Date();
  const year = today.getFullYear();
  const resultContent = [
    '사업화 분야',
    'R&D 분야',
    '시설·공간·보육 분야',
    '멘토링·컨설팅 분야',
    '행사·네트워크 분야',
    '융자 분야',
    '인력 분야',
    '글로벌 분야',
  ];
  const resultArr = [1, 2, 3, 4, 1];
  const sum = resultArr.reduce((a, b) => a + b);

  return (
    <div className={styles.wrapper}>
      <div className={styles.top}>
        <Logo />
        <div className={styles.title}>
          <div className={styles.img}>
            <WhiteLogo width="70px" height="70px" />
          </div>
          <span className={styles.subTitle}>{year}년에</span>
          <span className={styles.subTitle}>
            <span className={styles.subTitle2}>
              지원 받을 수 있는 정부 사업
            </span>
            은
          </span>
          <span className={styles.resultTitle}>{sum}개입니다.</span>
        </div>
      </div>
      <div className={styles.contents}>
        <div className={styles.subContents}>
          <div className={styles.contentBlock}>
            <div>
              {resultContent?.map((item) => (
                <span className={styles.resultContents} key={item}>
                  {item}
                </span>
              ))}
            </div>
          </div>
          <div className={styles.contentBlock2}>
            <div>
              {resultArr?.map((item) => (
                <span className={styles.resultContents} key={item}>
                  {item}개
                </span>
              ))}
            </div>
          </div>
        </div>

        <div className={styles.sendResult}>
          <div className={styles.subSend}>
            <span>각 분야 별로 어떤 정부지원사업이 있는지</span>
            <span>자세하게 알고 싶다면 설문에 작성한 이메일을</span>
            <span>카카오톡으로 보내주세요.</span>
          </div>
          <div className={styles.kakao}>
            <div className={styles.kakaoImg}>
              <SendLogo width="70px" height="70px" />
            </div>
            <span>24시간 안에 세부 내용 파일을 보내드립니다.</span>
          </div>
          <div className={styles.note}>
            <div className={styles.noteTitle}>
              <span>※필독※</span>
            </div>
            <div className={styles.noteContents}>
              <span>각 정부지원사업에 대한 정보는</span>
              <span>‘2023년 창업지원사업 통합공고’를</span>
              <span>기준으로 제공됩니다.</span>
            </div>
            <div className={styles.noteContents}>
              <span>자세한 사업개요/지원내용/지원대상/모집 마감일에</span>
              <span>대해서는 지원자 모집을 담당하는 소관 부처나</span>
              <span>전담(주관)기관에 문의해주세요.</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ResultPage;
