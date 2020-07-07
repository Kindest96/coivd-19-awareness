import React from 'react'
import banner from './Banner.png';
import styles from './Banner.module.css'
import { Grid } from '@material-ui/core';

const Banner = () => {
    return (
        <Grid className={styles.container} item>
            <img className={styles.banner} src={banner} alt='Banner' />
        </Grid>
    );
}

export default Banner;