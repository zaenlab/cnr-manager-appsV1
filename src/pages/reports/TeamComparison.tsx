import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { useNavigate } from "react-router-dom";
import { BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, Legend, ResponsiveContainer } from "recharts";

const teamData = [
  { name: "Team A", repairs: 42, efficiency: 85 },
  { name: "Team B", repairs: 35, efficiency: 78 },
  { name: "Team C", repairs: 28, efficiency: 72 },
];

export const TeamComparison = () => {
  const navigate = useNavigate();

  return (
    <div className="p-4 space-y-4">
      <div className="flex justify-between items-center">
        <h1 className="text-2xl font-bold">Team Comparison</h1>
        <Button variant="outline" onClick={() => navigate("/reports")}>
          Back to Dashboard
        </Button>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
        <Card>
          <CardHeader>
            <CardTitle>Repairs by Team</CardTitle>
          </CardHeader>
          <CardContent className="h-80">
            <ResponsiveContainer width="100%" height="100%">
              <BarChart data={teamData}>
                <CartesianGrid strokeDasharray="3 3" />
                <XAxis dataKey="name" />
                <YAxis />
                <Tooltip />
                <Legend />
                <Bar dataKey="repairs" fill="#8884d8" name="Repairs Completed" />
              </BarChart>
            </ResponsiveContainer>
          </CardContent>
        </Card>

        <Card>
          <CardHeader>
            <CardTitle>Efficiency by Team</CardTitle>
          </CardHeader>
          <CardContent className="h-80">
            <ResponsiveContainer width="100%" height="100%">
              <BarChart data={teamData}>
                <CartesianGrid strokeDasharray="3 3" />
                <XAxis dataKey="name" />
                <YAxis />
                <Tooltip />
                <Legend />
                <Bar dataKey="efficiency" fill="#82ca9d" name="Efficiency %" />
              </BarChart>
            </ResponsiveContainer>
          </CardContent>
        </Card>
      </div>

      <Card>
        <CardHeader>
          <CardTitle>Team Performance Metrics</CardTitle>
        </CardHeader>
        <CardContent>
          <div className="overflow-x-auto">
            <table className="min-w-full divide-y divide-gray-200">
              <thead className="bg-gray-50">
                <tr>
                  <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Team</th>
                  <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Repairs Completed</th>
                  <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Efficiency</th>
                  <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Avg. Repair Time</th>
                </tr>
              </thead>
              <tbody className="bg-white divide-y divide-gray-200">
                <tr>
                  <td className="px-6 py-4 whitespace-nowrap text-sm font-medium text-gray-900">Team A</td>
                  <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">42</td>
                  <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">85%</td>
                  <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">2.1 days</td>
                </tr>
                <tr>
                  <td className="px-6 py-4 whitespace-nowrap text-sm font-medium text-gray-900">Team B</td>
                  <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">35</td>
                  <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">78%</td>
                  <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">2.4 days</td>
                </tr>
                <tr>
                  <td className="px-6 py-4 whitespace-nowrap text-sm font-medium text-gray-900">Team C</td>
                  <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">28</td>
                  <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">72%</td>
                  <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">2.8 days</td>
                </tr>
              </tbody>
            </table>
          </div>
        </CardContent>
      </Card>
    </div>
  );
};