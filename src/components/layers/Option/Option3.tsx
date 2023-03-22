import React, { MouseEventHandler, useState } from 'react';

import cx from 'clsx';

import ItemDiv from './ItemDiv';
import { Props } from './Option1';
import styles from './Option3.module.scss';

const Option3: React.FC<Props> = (Items) => {
  let idx = 0;
  return (
    <div className={styles.wrapper}>
      <div>
        {Items.Options?.map((item) => {
          ++idx;
          return <ItemDiv value={item} mykey={idx} key={idx} styles={styles} />;
        })}
      </div>
    </div>
  );
};
export default Option3;
