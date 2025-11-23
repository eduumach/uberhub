import { Area, AreaChart, CartesianGrid, ResponsiveContainer, Tooltip, XAxis, YAxis } from "recharts";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";

const data = [
    { month: "Jan", startups: 180, members: 12000 },
    { month: "Fev", startups: 195, members: 13500 },
    { month: "Mar", startups: 210, members: 14200 },
    { month: "Abr", startups: 225, members: 15800 },
    { month: "Mai", startups: 240, members: 17500 },
    { month: "Jun", startups: 260, members: 19000 },
    { month: "Jul", startups: 277, members: 20500 },
];

export function EcosystemChart() {
    return (
        <ResponsiveContainer width="100%" height={300}>
            <AreaChart data={data} margin={{ top: 10, right: 10, left: 0, bottom: 0 }}>
                <defs>
                    <linearGradient id="colorStartups" x1="0" y1="0" x2="0" y2="1">
                        <stop offset="5%" stopColor="var(--primary)" stopOpacity={0.3} />
                        <stop offset="95%" stopColor="var(--primary)" stopOpacity={0} />
                    </linearGradient>
                    <linearGradient id="colorMembers" x1="0" y1="0" x2="0" y2="1">
                        <stop offset="5%" stopColor="#8884d8" stopOpacity={0.3} />
                        <stop offset="95%" stopColor="#8884d8" stopOpacity={0} />
                    </linearGradient>
                </defs>
                <XAxis
                    dataKey="month"
                    stroke="#888888"
                    fontSize={12}
                    tickLine={false}
                    axisLine={false}
                />
                <YAxis
                    stroke="#888888"
                    fontSize={12}
                    tickLine={false}
                    axisLine={false}
                    tickFormatter={(value) => `${value}`}
                />
                <Tooltip
                    contentStyle={{ backgroundColor: "var(--background)", borderRadius: "8px", border: "1px solid var(--border)" }}
                    labelStyle={{ color: "var(--foreground)" }}
                />
                <CartesianGrid strokeDasharray="3 3" vertical={false} stroke="var(--border)" />
                <Area
                    type="monotone"
                    dataKey="members"
                    stroke="#8884d8"
                    fillOpacity={1}
                    fill="url(#colorMembers)"
                    name="Membros"
                />
                <Area
                    type="monotone"
                    dataKey="startups"
                    stroke="var(--primary)"
                    fillOpacity={1}
                    fill="url(#colorStartups)"
                    name="Startups"
                />
            </AreaChart>
        </ResponsiveContainer>
    );
}
