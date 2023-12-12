// app/chartComponent/page.tsx
import { BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, Legend } from 'recharts';
import { Button } from '@/components/ui/button';
//import { styled } from '@stitches/react';

/* const ChartContainer = styled('div', {
  width: '300px',
  height: '300px',
  borderRadius: '50%',
  display: 'flex',
  flexDirection: 'column',
  alignItems: 'center',
  justifyContent: 'center',
  boxShadow: '0px 0px 10px rgba(0, 0, 0, 0.1)',
}); */

const ChartComponent = () => {
  const data = [
    // Sample data for the chart
    { name: 'Page A', uv: 400, pv: 2400, amt: 2400 },
    // Add more data as needed
  ];

  return (
    <div className='w-[300px] h-[300px] border border-r-2 flex flex-col items-center justify-center shadow-xl border-x-gray-700 '>
      <div className=' rounded-md border border-r-2 border-gray-600'>
        <BarChart width={150} height={150} data={data}>
          <CartesianGrid strokeDasharray="3 3" />
          <XAxis dataKey="Time(months)" />
          <YAxis dataKey="Weight(lbs)"/>
          <Tooltip />
          <Legend />
          <Bar dataKey="pv" fill="#8884d8" />
          <Bar dataKey="uv" fill="#82ca9d" />
        </BarChart>
        <Button>Send me to </Button>
        </div>
      <h1>Your Chart Title</h1>
    </div>
  );
};

export default ChartComponent;