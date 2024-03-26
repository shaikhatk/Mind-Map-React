import {
  BarChart,
  Bar,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  Legend,
} from "recharts";

export default function PhaseDetails({ phaseData }) {
  const chartWidth = Math.max(250, phaseData.length * 40);
  return (
    <BarChart
      width={chartWidth}
      height={250}
      data={phaseData}
      margin={{
        top: 5,
        right: 30,
        left: 20,
        bottom: 5,
      }}
      barSize={10}
      style={{ zIndex: 100 }}
    >
      <XAxis
        dataKey="name"
        fontSize={10}
        scale="point"
        padding={{ left: 10, right: 10 }}
        margin={{ bottom: 10 }}
      />
      <YAxis />
      <Tooltip />
      <Legend />
      <CartesianGrid strokeDasharray="3 3" />
      <Bar dataKey="value" fill="#8884d8" background={{ fill: "#eee" }} />
    </BarChart>
  );
}
