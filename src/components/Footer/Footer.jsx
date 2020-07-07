import React from 'react';
import CssBaseline from '@material-ui/core/CssBaseline';
import Typography from '@material-ui/core/Typography';
import { makeStyles } from '@material-ui/core/styles';
import Container from '@material-ui/core/Container';
import Link from '@material-ui/core/Link';

const useStyles = makeStyles((theme) => ({
  root: {
    display: 'flex',
    flexDirection: 'column',
  },
  main: {
    marginTop: theme.spacing(8),
    marginBottom: theme.spacing(2),
  },
  footer: {
    padding: theme.spacing(3, 2),
    marginTop: 'auto',
    backgroundColor:
      theme.palette.type === 'light' ? theme.palette.grey[200] : theme.palette.grey[800],
  },
}));

const Footer = () => {
  const classes = useStyles();

  return (
    <div className={classes.root}>
      <footer className={classes.footer}>
        <Container maxWidth="sm">
          <Typography variant="body1">Made by <Link color="inherit" href="https://github.com/Kindest96/coivd-19-awareness" target='_blank'>Asif Nawaz</Link></Typography>
          <Typography variant="body2" color="textSecondary">{'Copyright © '}<Link color="inherit" href="http://covid19_awareness.surge.sh/" target='_blank'>Your Website</Link>{' '}{new Date().getFullYear()}{'.'}</Typography>
              </Container>
      </footer>
    </div>
  );
}

export default Footer;