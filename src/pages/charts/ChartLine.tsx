import { DataLine } from '@/data/chart';
import { Paper, Typography } from '@mui/material';
import { LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip, Legend, ResponsiveContainer } from 'recharts';

const ChartLine = () => {

  return (
    <Paper sx={{ p: 1 }}>
      <Typography component='h4' fontSize='14px' p={1}>نرخ تورم (%)</Typography>
      <ResponsiveContainer width="99%" height={500}>
        <LineChart data={DataLine} style={{ direction: 'ltr' }}>
          <CartesianGrid strokeDasharray="3 3" />
          <XAxis dataKey="name" padding={{ left: 30, right: 30 }} />
          <YAxis />
          <Tooltip />
          <Legend />
          <Line type="monotone" dataKey="ایران" stroke="#eb6e60" />
          <Line type="monotone" dataKey="آمریکا" stroke="#139ad4" />
        </LineChart>
      </ResponsiveContainer>
    </Paper>
  );
}

export default ChartLine