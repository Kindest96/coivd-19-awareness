import React from 'react'
import styles from './Details.module.css';
import { Grid, Typography, Link, List, ListItemText, Paper } from '@material-ui/core';

const Prevention = ({id}) => {
    return (
        <Grid id={id} className={styles.border} container item component={Paper} direction='row' justify="center" alignItems="center">
            <Grid className={styles.items} item>
                <Typography variant='h3' align='center'>
                    PREVENTION
                </Typography>
                <br />
                <Typography variant='h6'>
                    To prevent further spread of infection COVID-19, <Link href='https://www.who.int/health-topics/coronavirus#tab=tab_2' target='_blank'>World Health Organization</Link> composed the following guidelines:
                </Typography>
                <hr />
                <List >
                    <ListItemText>
                        Wash your hands regularly with soap and water, or clean them with alcohol-based hand rub.
                    </ListItemText>
                    <ListItemText>
                        Maintain at least 1 metre distance between you and people coughing or sneezing.
                    </ListItemText>
                    <ListItemText>
                        Avoid touching your face.
                    </ListItemText>
                    <ListItemText>
                        Cover your mouth and nose when coughing or sneezing.
                    </ListItemText>
                    <ListItemText>
                        Stay home if you feel unwell.
                    </ListItemText>
                    <ListItemText>
                        Refrain from smoking and other activities that weaken the lungs.
                    </ListItemText>
                    <ListItemText>
                        Practice physical distancing by avoiding unnecessary travel and staying away from large groups of people.
                    </ListItemText>
                </List>
            </Grid>
        </Grid>
    )
}

export default Prevention;