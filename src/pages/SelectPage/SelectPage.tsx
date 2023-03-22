import React, { useState } from 'react';

import { useLocation, useNavigate, useParams } from 'react-router-dom';

import next from '../../assets/next.png';
import prev from '../../assets/prev.png';
import IconButton from '../../components/Button/IconButton';
import Question from '../../components/layers/Question/Question';
import Logo from '../../components/Logo/Logo';

import { questionList } from './data';
import styles from './SelectPage.module.scss';

const SelectPage: React.FC = () => {
  const { count } = useParams();
  const navigate = useNavigate();

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
          <Question QuestItem={questionList[Number(count) - 1]} />
        </div>
        <div className={styles.BtnWrapper}>
          <IconButton onClick={() => onClickButton(-1)} icon={prev} />
          <IconButton onClick={() => onClickButton(1)} icon={next} />
        </div>
        <div>
          <div>progress bar</div>
        </div>
      </div>
    </div>
  );
};

export default SelectPage;
