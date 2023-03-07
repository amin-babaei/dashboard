import { dataPi } from "@/data/chart";
import { Box, Paper, Typography } from "@mui/material";
import { memo } from "react";
import { Cell, PieChart, Pie, Tooltip, PieLabelRenderProps, ResponsiveContainer, Legend } from "recharts";

const COLORS = [
    "#1099e8",
    "#9b7653",
];

const RADIAN = Math.PI / 180;
const textStyles: React.CSSProperties = { fontWeight: "bold", direction: 'ltr' };
const RenderCustomizedLabel = (
    props: PieLabelRenderProps
) => {
    const iRadius = Number(props.innerRadius) || 0;
    const oRadius = Number(props.outerRadius) || 0;
    const mAngle = Number(props.midAngle) || 0;
    const chartX = Number(props.cx) || 0;
    const chartY = Number(props.cy) || 0;
    const percentage = Number(props.percent) || 0;

    const radius = iRadius + (oRadius - iRadius) * 0.3;
    const x = chartX + radius * Math.cos(-mAngle * RADIAN);
    const y = chartY + radius * Math.sin(-mAngle * RADIAN);

    return (
        <text
            x={x}
            y={y}
            fill="white"
            textAnchor={x > chartX ? "start" : "end"}
            dominantBaseline="central"
            style={textStyles}
        >
            {`${(percentage * 100).toFixed(0)}%`}
        </text>
    );
};

const CustomizedTooltip = memo((props: any) => {
    if (props.payload.length > 0) {
        const data = props.payload[0];
        return (
            <Box component='div' bgcolor="#4a4a4a" color='#fefefe' padding='2px 20px' borderRadius='5px' fontSize='14px'>
                <p>{data.name}</p>
                <p>{data.value / 10}%</p>
            </Box>
        );
    }
    return null;
});

const ChartPi = () => {
    return (
        <Paper>
            <Typography component='h4' fontSize='14px' p={1}>تشکیل دهندگان زمین</Typography>
            <ResponsiveContainer width="99%" height={400}>
                <PieChart>
                    <Tooltip content={<CustomizedTooltip />} />
                    <Legend verticalAlign="middle" height={36}/>
                    <Pie
                        dataKey="value"
                        data={dataPi}
                        cx='50%'
                        cy='50%'
                        labelLine={false}
                        label={RenderCustomizedLabel}
                        innerRadius={80}
                        style={{ direction: 'ltr' }}
                    >
                        {dataPi.map((entry, index) => (
                            <Cell fill={COLORS[index % COLORS.length]} key={`cell-${index}`}/>
                        ))}
                    </Pie>
                </PieChart>
            </ResponsiveContainer>
        </Paper>
    );
};

export default ChartPi