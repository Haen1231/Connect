import React, { MouseEventHandler, useState } from 'react';

import cx from 'clsx';

import ItemDiv from './ItemDiv';
import { Props } from './Option1';
import styles from './Option3.module.scss';

const Option3: React.FC<Props> = (Items) => {
  return (
    <div className={styles.wrapper}>
      <div>
        {Items.Options?.map((item, i) => {
          return <ItemDiv value={item} mykey={i} key={i} styles={styles} />;
        })}
      </div>
    </div>
  );
};
export default Option3;
