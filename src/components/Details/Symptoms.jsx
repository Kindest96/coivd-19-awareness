import React from 'react';
import styles from './Details.module.css';
import { Grid, Typography, Link, ListItemText, List, Table, TableContainer, TableCell, TableRow, TableBody, TableHead, Paper } from '@material-ui/core';

const Symptoms = ({id}) => {
    function createData(symptoms, cold, flu, allergies, covid19) {
        return { symptoms, cold, flu, allergies, covid19 };
      }
      
    const rows = [
        createData('Fever', 'Rare', 'High (100-102 F), Can last 3-4 days', 'Never', 'Common'),
        createData('Headache', 'Rare', 'Intense', 'Uncommon', 'Can be present'),
        createData('General aches, pains', 'Slight', 'Usual, often severe', 'Never', 'Can be present'),
        createData('Fatigue, weakness', 'Mild', 'Intense, can last up to 2-3 weeks', 'Sometimes', 'Can be present'),
        createData('Extreme exhaustion', 'Never', 'Usual (starts early)', 'Never', 'Can be present'),
        createData('Stuffy/runny nose', 'Common', 'Sometimes', 'Common', 'Has been reported'),
        createData('Sneezing', 'Usual', 'Sometimes', 'Usual', 'Has been reported'),
        createData('Sore throat', 'Common', 'Common', 'Sometimes', 'Has been reported'),
        createData('Cough', 'Mild to moderate', 'Common, can become severe', 'Sometimes', 'Common'),
        createData('Shortness of breath', 'Rare', 'Rare', 'Rare, except for those with allergic asthma', 'In more serious infections'),
        createData('Loss of smell and taste', 'Sometimes', 'Sometimes', 'Never', 'Has been reported'),
        createData('Diarrhea', 'Never', 'Sometimes in children', 'Never', 'Has been reported'),
      ];

    return (
        <Grid id={id} className={styles.border} container item component={Paper} direction='row' justify="center" alignItems="center">
        <Grid className={styles.items} item>
          <Typography variant='h3' align='center'>
            SYMPTOMS
          </Typography>
          <br />
                <Typography variant='h6'>
                    Symptoms of COVID-19 can be similar to a bad cold or the flu as stated by <Link href='https://www.webmd.com/lung/coronavirus' target='_blank'>WebMD</Link>. Your doctor will suspect COVID-19 if:
                </Typography>
                <hr />
                <List>
                    <ListItemText>
                        You have a fever and a cough.
                    </ListItemText>
                    <ListItemText>
                        You live in an area with the virus or have traveled to places where it has spread.
                    </ListItemText>
                </List>
                
          <TableContainer component={Paper} style={{ paddingTop:'25px'}}>
                    <Table size='small' aria-label="simple table">
                        <TableHead>
                            <TableRow>
                                <TableCell align="center" colSpan={5} style={{ paddingTop:'10px'}}>
                                Cold vs. Flu vs. Allergies vs. COVID-19
                                </TableCell>
                            </TableRow>
                            <TableRow>
                                <TableCell>Symptoms</TableCell>
                                <TableCell align="right">Cold</TableCell>
                                <TableCell align="right">Flu</TableCell>
                                <TableCell align="right">Allergies</TableCell>
                                <TableCell align="right">COVID-19<br />(can range from moderate to severe)</TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {rows.map((row) => (
            <TableRow key={row.symptoms}>
              <TableCell component="th" scope="row">
                {row.symptoms}
              </TableCell>
              <TableCell align="right">{row.flu}</TableCell>
              <TableCell align="right">{row.cold}</TableCell>
              <TableCell align="right">{row.allergies}</TableCell>
              <TableCell align="right">{row.covid19}</TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </TableContainer>
            </Grid>
        </Grid>
    );
};

export default Symptoms;