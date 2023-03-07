import { dataBar } from '@/data/chart';
import { Paper, Typography } from '@mui/material';
import { BarChart, Bar, XAxis, YAxis, Tooltip, Legend, ResponsiveContainer } from 'recharts';

const ChartBar = () => {
    return (
        <Paper sx={{ p: 1 }}>
            <Typography component='h4' fontSize='14px' p={1}>المپیک سال دیگه</Typography>
            <ResponsiveContainer width="99%" height={500}>
                <BarChart
                    width={500}
                    height={300}
                    data={dataBar}
                    margin={{
                        top: 5,
                        right: 30,
                        left: 20,
                        bottom: 5,
                    }}
                    style={{ direction: 'ltr' }}
                >
                    <XAxis dataKey="name" dy={3} tick={true} axisLine={false}/>
                    <YAxis tick={false} axisLine={false}/>
                    <Tooltip cursor={false}/>
                    <Legend align='center' verticalAlign="top" />
                    <Bar dataKey="طلا" fill="#FFD700" />
                    <Bar dataKey="نقره" fill="#C0C0C0" />
                    <Bar dataKey="برنز" fill="#CD7F32" />
                </BarChart>
            </ResponsiveContainer>
        </Paper>
    );
}

export default ChartBar