import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { useNavigate } from "react-router-dom";
import { BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, Legend, ResponsiveContainer } from "recharts";

const data = [
  { name: "Jan", containers: 12, repairs: 8 },
  { name: "Feb", containers: 19, repairs: 12 },
  { name: "Mar", containers: 15, repairs: 9 },
  { name: "Apr", containers: 21, repairs: 14 },
  { name: "May", containers: 18, repairs: 11 },
  { name: "Jun", containers: 24, repairs: 16 },
];

export const Dashboard = () => {
  const navigate = useNavigate();

  return (
    <div className="p-4 space-y-4">
      <div className="flex justify-between items-center">
        <h1 className="text-2xl font-bold">Repair Dashboard</h1>
        <Button variant="outline" onClick={() => navigate("/reports/teams")}>
          View Team Comparison
        </Button>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
        <Card>
          <CardHeader>
            <CardTitle>Total Containers</CardTitle>
          </CardHeader>
          <CardContent>
            <p className="text-3xl font-bold">109</p>
          </CardContent>
        </Card>

        <Card>
          <CardHeader>
            <CardTitle>Under Repair</CardTitle>
          </CardHeader>
          <CardContent>
            <p className="text-3xl font-bold">24</p>
          </CardContent>
        </Card>

        <Card>
          <CardHeader>
            <CardTitle>Ready for AV</CardTitle>
          </CardHeader>
          <CardContent>
            <p className="text-3xl font-bold">15</p>
          </CardContent>
        </Card>
      </div>

      <Card>
        <CardHeader>
          <CardTitle>Monthly Repairs</CardTitle>
        </CardHeader>
        <CardContent className="h-80">
          <ResponsiveContainer width="100%" height="100%">
            <BarChart data={data}>
              <CartesianGrid strokeDasharray="3 3" />
              <XAxis dataKey="name" />
              <YAxis />
              <Tooltip />
              <Legend />
              <Bar dataKey="containers" fill="#8884d8" name="Containers" />
              <Bar dataKey="repairs" fill="#82ca9d" name="Repairs Completed" />
            </BarChart>
          </ResponsiveContainer>
        </CardContent>
      </Card>
    </div>
  );
};