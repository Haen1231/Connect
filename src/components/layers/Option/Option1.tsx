import React, { MouseEventHandler, useState } from 'react';

import cx from 'clsx';

import ItemDiv from './ItemDiv';
import styles from './Option1.module.scss';

export interface Props {
  Options: string[];
}

const Option1: React.FC<Props> = (Items) => {
  const numItem = Math.ceil(Items.Options.length / 2);

  return (
    <div className={styles.wrapper}>
      <div
        style={{
          overflowX: 'scroll',
          overflowY: 'hidden',
          width: numItem * 180,
        }}
      >
        {Items.Options?.map((item, i) => {
          return <ItemDiv value={item} mykey={i} key={i} styles={styles} />;
        })}
      </div>
    </div>
  );
};

export default Option1;
