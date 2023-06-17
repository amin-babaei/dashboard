import { Box, Paper, Typography } from '@mui/material';
import { memo, useEffect, useState } from 'react';
import { LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip, Legend, ResponsiveContainer } from 'recharts';

const ChartLine = () => {
  const [bitcoinData, setBitcoinData] = useState([]);
  const fetchBitcoinData = async () => {
    const response = await fetch('https://api.coingecko.com/api/v3/coins/bitcoin/market_chart?vs_currency=usd&days=30&interval=daily');
    const data = await response.json();
    return data.prices.map(([timestamp, price]: [string | Date, number]) => ({ timestamp, price }));
  };
  useEffect(() => {
    const fetchData = async () => {
      const data = await fetchBitcoinData();
      setBitcoinData(data);
    };

    fetchData();
  }, []);
  const CustomizedTooltip = memo((props: any) => {
    if (props.payload.length > 0) {
        let dollarString = new Intl.NumberFormat("en-US",{
          style: 'currency',
          currency: 'USD',
          minimumFractionDigits: 3,
        });
        const data = props.payload[0];
        return (
            <Box component='div' bgcolor="#4a4a4a" color='#fefefe' padding='2px 20px' borderRadius='5px' fontSize='14px'>
                <p>{dollarString.format(data.payload.price)}</p>
            </Box>
        );
    }
    return null;
});
  return (
    <Paper sx={{ p: 1 }}>
      <Typography component='h4' fontSize='14px' p={1}>قیمت بیتکوین (1 ماه اخیر)</Typography>
      <ResponsiveContainer width="99%" height={500}>
        <LineChart
          data={bitcoinData}
          style={{ direction: 'ltr' }}
          margin={{
            top: 5,
            right: 30,
            bottom: 15,
          }}
        >
          <CartesianGrid strokeDasharray="3 3" />
          <XAxis dataKey="timestamp" dy={10} tickFormatter={(timestamp) => new Date(timestamp).toLocaleDateString('fa-IR')} fontSize={13}/>
          <YAxis />
          <Tooltip content={<CustomizedTooltip/>}/>
          <Legend layout="horizontal" verticalAlign="top" align="center"/>
          <Line type="monotone" dataKey="price" stroke="#8884d8" activeDot={{ r: 8 }} name='قیمت (دلار)'/>
        </LineChart>
      </ResponsiveContainer>
    </Paper>
  );
}

export default ChartLine