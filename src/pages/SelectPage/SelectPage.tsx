import React, { useState } from 'react';

import { useLocation, useNavigate, useParams } from 'react-router-dom';

import next from '../../assets/next.png';
import prev from '../../assets/prev.png';
import IconButton from '../../components/Button/IconButton';
import Option1 from '../../components/layers/Option/Option1';
import Option2 from '../../components/layers/Option/Option2';
import Option3 from '../../components/layers/Option/Option3';
import Question from '../../components/layers/Question/Question';
import Logo from '../../components/Logo/Logo';

import { questionList } from './data';
import styles from './SelectPage.module.scss';

const SelectPage: React.FC = () => {
  const { count } = useParams();
  const navigate = useNavigate();
  const index = Number(count) - 1;
  const width = {
    width: (Number(count) * 1050) / 22,
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
          <Question QuestItem={questionList[index]} />
          <div className={styles.contentOption}>
            {(() => {
              switch (questionList[index].componentNo) {
                case 1:
                  return <Option1 Options={questionList[index].option} />;
                case 2:
                  return <Option2 Options={questionList[index].option} />;
                case 3:
                  return <Option3 Options={questionList[index].option} />;
                case 4:
                  return <Option1 Options={questionList[index].option} />;
                default:
                  return null;
              }
            })()}
          </div>
        </div>
        <div className={styles.BtnWrapper}>
          <IconButton onClick={() => onClickButton(-1)} icon={prev} />
          <IconButton onClick={() => onClickButton(1)} icon={next} />
        </div>
        <div className={styles.progressWrapper}>
          <div className={styles.progressBar}>
            <div className={styles.nowState} style={width} />
          </div>
        </div>
      </div>
    </div>
  );
};

export default SelectPage;
