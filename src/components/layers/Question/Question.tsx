import React from 'react';

import { QuestItem } from '../../../pages/SelectPage/data';

import styles from './Question.module.scss';

interface Props {
  QuestItem: QuestItem;
}

const Question: React.FC<Props> = ({ QuestItem }) => {
  return (
    <div className={styles.wrapper}>
      <span className={styles.num}>Q{QuestItem.id}.</span>
      <span className={styles.content}>{QuestItem.quest}</span>
    </div>
  );
};

export default Question;
