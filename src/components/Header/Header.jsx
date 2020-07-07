import React from 'react';
import styles from './Header.module.css';
import { Typography, AppBar, Toolbar, Link } from "@material-ui/core";


const Header = () => {

    return (
        <AppBar position='sticky' variant='elevation' >
            <Toolbar variant='dense' style={{padding:'10px'}}>
            <Typography variant='h4' style={{paddingLeft:'24px'}}>
                    COVID-19 Awareness
            </Typography>
                <div style={{marginLeft:'auto'}}>
                <Link className={styles.nav} variant='h5' href='#' color="inherit">Home</Link>&nbsp;
                <Link className={styles.nav} variant='h5' href='#stats' color="inherit">Stats</Link>&nbsp;
                <Link className={styles.nav} variant='h5' href='#chart' color="inherit">Chart</Link>&nbsp;
                <Link className={styles.nav} variant='h5' href='#prevention' color="inherit">Prevention</Link>&nbsp;
                <Link className={styles.nav} variant='h5' href='#symptoms' color="inherit">Symptoms</Link>
                </div>
            </Toolbar>
        </AppBar>
    )
}

export default Header;