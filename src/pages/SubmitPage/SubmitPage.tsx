import React, { useState } from 'react';

import cx from 'clsx';
import { useLocation, useNavigate, useParams } from 'react-router-dom';

import checkOff from '../../assets/checkBoxOff.png';
import checkOn from '../../assets/checkBoxOn.png';
import next from '../../assets/next.png';
import prev from '../../assets/prev.png';
import IconButton from '../../components/Button/IconButton';
import Logo from '../../components/Logo/Logo';

import styles from './SubmitPage.module.scss';

const SubmitPage: React.FC = () => {
  const [isCheckOn, setIsCheckOn] = useState(false);
  const [isCheckOnLast, setIsCheckOnLast] = useState(false);
  const navigate = useNavigate();
  const count = 22;
  console.log(count);

  const handleCheckBox = () => {
    setIsCheckOn((prev) => !prev);
  };

  const handleCheckBoxLast = () => {
    setIsCheckOnLast((prev) => !prev);
  };

  const onClickButton = (change: number) => {
    const changePage = Number(count) + change;
    if (changePage > 0 && changePage < 23) {
      navigate(`/selects/${changePage}`);
    }
  };
  return (
    <div className={styles.wrapper}>
      <div className={styles.logoWrapper}>
        <Logo />
      </div>
      <div className={styles.contentWrapper}>
        <div className={styles.content}>
          <span className={styles.num}>Q22.</span>
          <div className={styles.question}>
            <span className={styles.title}>개인 정보 제공 동의 (필수)</span>
            <span className={styles.subtitle}>
              ※동의해주셔야 지원받을 수 있는 정부지원사업을 정리한 엑셀 파일을
              보내드릴 수 있습니다.
            </span>
            <div className={styles.checkbox}>
              <div onClick={handleCheckBox}>
                <img
                  src={isCheckOn ? checkOn : checkOff}
                  width="25px"
                  height="25px"
                  alt="checkbox"
                />
              </div>
              <span className={cx({ [styles.isCheckOn]: isCheckOn })}>
                동의합니다.
              </span>
            </div>
          </div>
          <div className={styles.question}>
            <span className={styles.title}>마케팅 활용 동의(선택)</span>
            <span className={styles.subtitle}>
              ※ 마케팅 활용 동의를 해주시면 정부지원사업 관련된 유용한 정보를
              보내드립니다.
            </span>
            <div className={styles.checkbox}>
              <div onClick={handleCheckBoxLast}>
                <img
                  src={isCheckOnLast ? checkOn : checkOff}
                  width="25px"
                  height="25px"
                  alt="checkbox"
                />
              </div>
              <span className={cx({ [styles.isCheckOn]: isCheckOnLast })}>
                동의합니다.
              </span>
            </div>
          </div>
        </div>
        <div className={styles.BtnWrapper}>
          <IconButton onClick={() => onClickButton(-1)} icon={prev} />
          <button className={styles.button}>테스트 제출하기</button>
          <IconButton onClick={() => onClickButton(1)} icon={next} />
        </div>
      </div>
    </div>
  );
};

export default SubmitPage;
