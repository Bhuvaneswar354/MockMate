import {
  ResponsiveContainer,
  BarChart,
  Bar,
  XAxis,
  YAxis,
  Tooltip,
  CartesianGrid,
} from "recharts";

const data = [
  { topic: "Arrays", progress: 90 },
  { topic: "Strings", progress: 80 },
  { topic: "Trees", progress: 60 },
  { topic: "Graphs", progress: 40 },
  { topic: "DP", progress: 20 },
];

function DSAChart() {
  return (
    <div className="bg-white/5 border border-white/10 rounded-3xl p-8">
      <h2 className="text-3xl font-bold mb-6 text-white">
        DSA Progress
      </h2>

      <ResponsiveContainer width="100%" height={300}>
        <BarChart data={data}>
          <CartesianGrid strokeDasharray="3 3" />
          <XAxis dataKey="topic" />
          <YAxis />
          <Tooltip />
          <Bar dataKey="progress" fill="#22c55e" />
        </BarChart>
      </ResponsiveContainer>
    </div>
  );
}

export default DSAChart;