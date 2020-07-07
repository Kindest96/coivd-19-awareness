import React from 'react'
import { Grid, Paper, Typography, Fade } from '@material-ui/core';
import csx from 'classnames';
import CountUp from 'react-countup';
import styles from './Stats.module.css';
// import { fetchData } from '../../API'

const Stats = ({id, data: {recovered, infected, deaths} , country}) => {
    // const [recovered, setRecovered] = useState(0)
    // const [infected, setInfected] = useState(0)
    // const [deaths, setDeaths] = useState(0)

    // useEffect(()=> {
    //     async function getData(){
    //         const { deaths, recovered, infected } = await fetchData();
    //         setDeaths(deaths);
    //         setInfected(infected);
    //         setRecovered(recovered);
    //     }
    //     getData();
    //   },[]);
    if (!infected) {
        recovered = infected = deaths = 0;
    }

    return (
        <Grid id={id} container item direction='column' justify="center" alignItems="center" className={styles.border}>
            <Grid item style={{ padding: '40px 20px 0px' }}>
                    <Typography variant='h2'>
                    {country ? country : 'Global'}
                </Typography>
            </Grid>

        <Grid container item direction='row' justify="center" alignItems="center" spacing={4} style={{padding: '40px 20px'}}>
            <Grid item sx={12}>
            <Paper elevation={5} className={csx(styles.paper, styles.recovered)}>
                <Typography variant='h3'>
                        Recovered
                </Typography>
                <Typography variant='h5'>
                            <CountUp start={0} end={recovered} duration={3} separator="," preserveValue={true}/>
                    </Typography>
            </Paper>
            </Grid>
            <Grid item sx={12}>
            <Paper elevation={5} className={csx(styles.paper, styles.infected)}>
                <Typography variant='h3'>
                        Infected
                </Typography>
                <Typography variant='h5'>
                <CountUp start={0} end={infected} duration={3} separator="," preserveValue={true}/>
                    </Typography>
            </Paper>
            </Grid>
            <Grid item sx={12}>
            <Paper elevation={5} className={csx(styles.paper, styles.deaths)}>
                <Typography variant='h3'>
                        Deaths
                </Typography>
                        <Typography variant='h5'>
                            <CountUp start={0} end={deaths} duration={3} separator="," preserveValue={true}/>
                    </Typography>
            </Paper>
            </Grid>
            </Grid>
            </Grid>
    )
}

export default Stats;