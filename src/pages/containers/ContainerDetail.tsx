import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { useParams, useNavigate } from "react-router-dom";
import { ChevronLeft } from "lucide-react";
import { showError } from "@/utils/toast";

// Mock data - in real app would come from API
const mockContainers = [
  {
    id: "1",
    number: "MSKU123456",
    size: "20'",
    type: "Dry",
    owner: "PT. ABC",
    status: "Under Repair",
    repairTeam: "Team A",
    location: "Yard 1",
    notes: "Needs welding on left side panel. Estimated repair time: 2 days.",
    lastUpdated: "2023-11-15",
    defects: [
      { id: "1", type: "Structural", description: "Left side panel dent", severity: "Medium" },
      { id: "2", type: "Paint", description: "Scratches on front", severity: "Low" }
    ]
  },
  {
    id: "2",
    number: "TGHU789012",
    size: "40'",
    type: "Reefer",
    owner: "PT. XYZ",
    status: "AV Passed",
    repairTeam: "Team B",
    location: "Yard 2",
    notes: "Completed all repairs. Passed AV inspection.",
    lastUpdated: "2023-11-10",
    defects: []
  },
];

export const ContainerDetail = () => {
  const { id } = useParams();
  const navigate = useNavigate();
  
  const container = mockContainers.find(c => c.id === id);

  if (!container) {
    showError("Container not found");
    navigate("/containers");
    return null;
  }

  return (
    <div className="p-4 space-y-4">
      <Button 
        variant="outline" 
        onClick={() => navigate("/containers")}
        className="flex items-center gap-1"
      >
        <ChevronLeft className="h-4 w-4" />
        Back to Containers
      </Button>

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-4">
        <div className="lg:col-span-2 space-y-4">
          <Card>
            <CardHeader>
              <CardTitle>Container Details</CardTitle>
            </CardHeader>
            <CardContent className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <div className="space-y-2">
                <p className="text-sm text-muted-foreground">Container Number</p>
                <p className="font-medium">{container.number}</p>
              </div>
              <div className="space-y-2">
                <p className="text-sm text-muted-foreground">Size/Type</p>
                <p className="font-medium">{container.size} / {container.type}</p>
              </div>
              <div className="space-y-2">
                <p className="text-sm text-muted-foreground">Owner</p>
                <p className="font-medium">{container.owner}</p>
              </div>
              <div className="space-y-2">
                <p className="text-sm text-muted-foreground">Status</p>
                <p className="font-medium">
                  <span className={`px-2 py-1 rounded-full text-xs ${
                    container.status === "AV Passed" ? "bg-green-100 text-green-800" :
                    container.status === "Under Repair" ? "bg-yellow-100 text-yellow-800" :
                    container.status === "Ready for AV" ? "bg-blue-100 text-blue-800" :
                    "bg-red-100 text-red-800"
                  }`}>
                    {container.status}
                  </span>
                </p>
              </div>
              <div className="space-y-2">
                <p className="text-sm text-muted-foreground">Repair Team</p>
                <p className="font-medium">{container.repairTeam}</p>
              </div>
              <div className="space-y-2">
                <p className="text-sm text-muted-foreground">Location</p>
                <p className="font-medium">{container.location}</p>
              </div>
              <div className="space-y-2 md:col-span-2">
                <p className="text-sm text-muted-foreground">Notes</p>
                <p className="font-medium whitespace-pre-line">{container.notes}</p>
              </div>
            </CardContent>
          </Card>

          {container.defects.length > 0 && (
            <Card>
              <CardHeader>
                <CardTitle>Defects</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="border rounded-lg">
                  <table className="min-w-full divide-y divide-gray-200">
                    <thead className="bg-gray-50">
                      <tr>
                        <th className="px-4 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Type</th>
                        <th className="px-4 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Description</th>
                        <th className="px-4 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Severity</th>
                      </tr>
                    </thead>
                    <tbody className="bg-white divide-y divide-gray-200">
                      {container.defects.map((defect) => (
                        <tr key={defect.id}>
                          <td className="px-4 py-3 whitespace-nowrap text-sm font-medium text-gray-900">{defect.type}</td>
                          <td className="px-4 py-3 whitespace-nowrap text-sm text-gray-500">{defect.description}</td>
                          <td className="px-4 py-3 whitespace-nowrap text-sm text-gray-500">
                            <span className={`px-2 py-1 rounded-full text-xs ${
                              defect.severity === "High" ? "bg-red-100 text-red-800" :
                              defect.severity === "Medium" ? "bg-yellow-100 text-yellow-800" :
                              "bg-green-100 text-green-800"
                            }`}>
                              {defect.severity}
                            </span>
                          </td>
                        </tr>
                      ))}
                    </tbody>
                  </table>
                </div>
              </CardContent>
            </Card>
          )}
        </div>

        <div className="space-y-4">
          <Card>
            <CardHeader>
              <CardTitle>Actions</CardTitle>
            </CardHeader>
            <CardContent className="space-y-2">
              <Button 
                variant="outline" 
                className="w-full"
                onClick={() => navigate(`/containers/${container.id}/edit`)}
              >
                Edit Container
              </Button>
              <Button variant="outline" className="w-full">
                Add Defect Report
              </Button>
              <Button variant="outline" className="w-full">
                Update Status
              </Button>
            </CardContent>
          </Card>

          <Card>
            <CardHeader>
              <CardTitle>Repair History</CardTitle>
            </CardHeader>
            <CardContent>
              <div className="space-y-4">
                <div className="border-l-4 border-blue-500 pl-4 py-2">
                  <p className="text-sm font-medium">Repair Started</p>
                  <p className="text-xs text-muted-foreground">2023-11-10 by John Doe</p>
                </div>
                <div className="border-l-4 border-yellow-500 pl-4 py-2">
                  <p className="text-sm font-medium">Welding Completed</p>
                  <p className="text-xs text-muted-foreground">2023-11-12 by Jane Smith</p>
                </div>
                {container.status === "AV Passed" && (
                  <div className="border-l-4 border-green-500 pl-4 py-2">
                    <p className="text-sm font-medium">AV Inspection Passed</p>
                    <p className="text-xs text-muted-foreground">2023-11-14 by Inspector</p>
                  </div>
                )}
              </div>
            </CardContent>
          </Card>
        </div>
      </div>
    </div>
  );
};