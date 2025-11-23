import { Cell, Pie, PieChart, ResponsiveContainer, Tooltip, Legend } from "recharts";

const data = [
    { name: "Agronegócio", value: 35, color: "#10b981" }, // green-500
    { name: "Finanças", value: 25, color: "#3b82f6" }, // blue-500
    { name: "Saúde", value: 20, color: "#f43f5e" }, // rose-500
    { name: "Educação", value: 15, color: "#f59e0b" }, // amber-500
    { name: "Outros", value: 5, color: "#8b5cf6" }, // violet-500
];

export function SectorChart() {
    return (
        <ResponsiveContainer width="100%" height={300}>
            <PieChart>
                <Pie
                    data={data}
                    cx="50%"
                    cy="50%"
                    innerRadius={60}
                    outerRadius={80}
                    paddingAngle={5}
                    dataKey="value"
                >
                    {data.map((entry, index) => (
                        <Cell key={`cell-${index}`} fill={entry.color} stroke="none" />
                    ))}
                </Pie>
                <Tooltip
                    contentStyle={{ backgroundColor: "var(--background)", borderRadius: "8px", border: "1px solid var(--border)" }}
                    itemStyle={{ color: "var(--foreground)" }}
                />
                <Legend verticalAlign="bottom" height={36} iconType="circle" />
            </PieChart>
        </ResponsiveContainer>
    );
}
