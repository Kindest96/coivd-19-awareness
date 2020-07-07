import React, {useEffect, useState} from 'react';
import { Grid, Typography } from '@material-ui/core';
import { Line } from 'react-chartjs-2';
import { fetchAllData } from "../../API";
import styles from './Chart.module.css';


const Chart = ({id, country}) => {
  const [dailyData, setDailyData] = useState([]);

    useEffect(() => {
        const fetchAPI = async () => {
            setDailyData(await fetchAllData(country));
        }

        
        fetchAPI();
    }, [country]);

    // useEffect(()=> {
    //   const getData = async () => {
    //     setDailyData(await fetchAllData());
    //   }
    //   getData();
    //   // console.log(dailyData);
    // }, []);
  
  const lineChart = (dailyData.length ?
    (<Line
    data={{
      labels: dailyData.map(({ date }) => date),
      datasets: [
          {
            label: 'Confirmed',
            fill: true,
            lineTension: 0.1,
            backgroundColor: 'rgba(173, 255, 47, 0.4)',
            borderColor: 'rgba(173, 255, 47, 1)',
            borderCapStyle: 'butt',
            borderDash: [],
            borderDashOffset: 0.0,
            borderJoinStyle: 'miter',
            pointBorderColor: 'rgba(173, 255, 47, 1)',
            pointBackgroundColor: '#fff',
            pointBorderWidth: 1,
            pointHoverRadius: 5,
            pointHoverBackgroundColor: 'rgba(173, 255, 47, 1)',
            pointHoverBorderColor: 'rgba(220, 220, 220, 1)',
            pointHoverBorderWidth: 2,
            pointRadius: 1,
            pointHitRadius: 10,
            data: dailyData.map(({ confirmed }) => confirmed),
          }, {
            label: 'Deaths',
            fill: true,
            lineTension: 0.1,
            backgroundColor: 'rgba(255, 0, 0, 0.4)',
            borderColor: 'rgba(255, 0, 0, 1)',
            borderCapStyle: 'butt',
            borderDash: [],
            borderDashOffset: 0.0,
            borderJoinStyle: 'miter',
            pointBorderColor: 'rgba(255, 0, 0, 1)',
            pointBackgroundColor: '#fff',
            pointBorderWidth: 1,
            pointHoverRadius: 5,
            pointHoverBackgroundColor: 'rgba(255, 0, 0, 1)',
            pointHoverBorderColor: 'rgba(220, 220, 220, 1)',
            pointHoverBorderWidth: 2,
            pointRadius: 1,
            pointHitRadius: 10,
            data: dailyData.map(({ deaths }) => deaths),
          }, {
            label: 'Recovered',
            fill: true,
            lineTension: 0.1,
            backgroundColor: 'rgba(0, 128, 0, 0.4)',
            borderColor: 'rgba(0, 128, 0, 1)',
            borderCapStyle: 'butt',
            borderDash: [],
            borderDashOffset: 0.0,
            borderJoinStyle: 'miter',
            pointBorderColor: 'rgba(0, 128, 0, 1)',
            pointBackgroundColor: '#fff',
            pointBorderWidth: 1,
            pointHoverRadius: 5,
            pointHoverBackgroundColor: 'rgba(0, 128, 0, 1)',
            pointHoverBorderColor: 'rgba(220, 220, 220, 1)',
            pointHoverBorderWidth: 2,
            pointRadius: 1,
            pointHitRadius: 10,
            data: dailyData.map(({ recovered }) => recovered),
          },
        ]
      }}/>) :<Typography variant='h4'>Loading...</Typography>);
  
  return (
    <Grid id={id} container item direction='row' justify="center" alignItems="center">
      <Grid item className={styles.chart}>
        {lineChart}
      </Grid>
    </Grid>
    );
};

export default Chart;