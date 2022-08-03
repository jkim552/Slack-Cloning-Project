import React from 'react';
import { styled } from '@mui/material';
import styles from './Sidebar.module.css';
import FiberManualRecordIcon from '@mui/icons-material/FiberManualRecord';
import EditRoundedIcon from '@mui/icons-material/EditRounded';
import InsertCommentIcon from '@mui/icons-material/InsertComment';

const Sidebar = () => {
  return (
    <div className={styles.container}>
      <div className={styles.sidebarHeader}>
        <div className={styles.sidebarInfo}>
          <h2>SLACK CLONE</h2>
          <h3>
            <FiberManualRecordIcon />
            Junhee Kim
          </h3>
        </div>
        <EditRoundedIcon className={styles.editIcon} />
      </div>

      <InsertCommentIcon title='Thread' />
    </div>
  );
};

export default Sidebar;
