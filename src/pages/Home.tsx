import { Box, Grid, Paper, Typography } from '@mui/material'
import { LineChart, Line, XAxis, YAxis, Label, ResponsiveContainer } from 'recharts';
import SALE from '../assets/sale.png'
const Home = () => {
    function createData(time: string, amount?: number) {
        return { time, amount };
    }

    const data = [
        createData('00:00', 0),
        createData('05:00', 300),
        createData('10:00', 600),
        createData('15:00', 800),
        createData('20:00', 1500),
        createData('24:00', 2000),
    ];
    return (
        <Grid container spacing={3}>
            <Grid item xs={12} md={8} lg={9}>
                <Paper sx={{
                    p: 1,
                    display: 'flex',
                    flexDirection: 'column',
                    height: 300,
                    direction:'ltr'
                }}>
                    <Typography component='h4' fontSize='14px'>فروش امروز</Typography>
                    <br />
                    <ResponsiveContainer width="95%" height={200}>
                        <LineChart
                            data={data}
                            margin={{
                                top: 16,
                                right: 16,
                                bottom: 0,
                                left: 10,
                            }}
                            
                            style={{direction: 'ltr'}}
                        >
                            <XAxis
                                dataKey="time"
                                stroke="#139ad4"
                                dy={10}
                            />
                            <YAxis
                                stroke="#139ad4"
                            >
                                <Label
                                    angle={270}
                                    position="left"
                                    style={{
                                        textAnchor: 'middle',
                                    }}
                                >
                                    فروش (تومان)
                                </Label>
                            </YAxis>
                            <Line
                                type="monotone"
                                dataKey="amount"
                                stroke="#139ad4"
                                dot={false}
                            />
                        </LineChart>
                    </ResponsiveContainer>
                </Paper>

            </Grid>
            <Grid item xs={12} md={3}>
                <Paper
                    sx={{
                        display: 'flex',
                        flexDirection: 'column',
                        alignItems: 'center',
                        justifyContent: 'space-around',
                        height: 300,
                    }}
                >
                    <Box component="img"
                        sx={{
                            height: 120,
                            width: 120,
                        }} src={SALE}></Box>
                    <Typography margin={2} fontWeight='bold'>
                        {new Intl.NumberFormat('en-US', {
                            style: 'currency',
                            currency: 'IRR'
                        }).format(150000000).replace("IRR", "تومان")}
                    </Typography>
                    <Typography color='gray'>خرید و فروش</Typography>
                </Paper>
            </Grid>
        </Grid>
    )
}

export default Home