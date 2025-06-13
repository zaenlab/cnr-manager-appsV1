import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";
import { useNavigate } from "react-router-dom";
import { useState } from "react";
import {
  DropdownMenu,
  DropdownMenuCheckboxItem,
  DropdownMenuContent,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import { ChevronDown } from "lucide-react";

const mockContainers = [
  {
    number: "MSKU123456",
    size: "20'",
    type: "Dry",
    owner: "PT. ABC",
    status: "Under Repair",
    repairTeam: "Team A",
    location: "Yard 1",
  },
  {
    number: "TGHU789012",
    size: "40'",
    type: "Reefer",
    owner: "PT. XYZ",
    status: "AV Passed",
    repairTeam: "Team B",
    location: "Yard 2",
  },
];

export const Containers = () => {
  const navigate = useNavigate();
  const [searchTerm, setSearchTerm] = useState("");
  const [statusFilter, setStatusFilter] = useState<string[]>([]);
  const [teamFilter, setTeamFilter] = useState<string[]>([]);

  const statusOptions = ["Under Repair", "Ready for AV", "AV Passed", "AV Failed"];
  const teamOptions = ["Team A", "Team B", "Team C"];

  const filteredContainers = mockContainers.filter((container) => {
    const matchesSearch = container.number.toLowerCase().includes(searchTerm.toLowerCase()) ||
      container.owner.toLowerCase().includes(searchTerm.toLowerCase());

    const matchesStatus = statusFilter.length === 0 || 
      statusFilter.includes(container.status);

    const matchesTeam = teamFilter.length === 0 ||
      teamFilter.includes(container.repairTeam);

    return matchesSearch && matchesStatus && matchesTeam;
  });

  return (
    <div className="p-4 space-y-4">
      <div className="flex justify-between items-center">
        <h1 className="text-2xl font-bold">Container Management</h1>
        <Button onClick={() => navigate("/containers/new")}>Add Container</Button>
      </div>

      <div className="flex flex-col md:flex-row gap-2">
        <Input
          placeholder="Search containers..."
          className="flex-1"
          value={searchTerm}
          onChange={(e) => setSearchTerm(e.target.value)}
        />
        
        <DropdownMenu>
          <DropdownMenuTrigger asChild>
            <Button variant="outline" className="flex items-center gap-1">
              Status <ChevronDown className="h-4 w-4" />
            </Button>
          </DropdownMenuTrigger>
          <DropdownMenuContent className="w-56">
            {statusOptions.map((status) => (
              <DropdownMenuCheckboxItem
                key={status}
                checked={statusFilter.includes(status)}
                onCheckedChange={(checked) => {
                  setStatusFilter(checked
                    ? [...statusFilter, status]
                    : statusFilter.filter((s) => s !== status)
                  );
                }}
              >
                {status}
              </DropdownMenuCheckboxItem>
            ))}
          </DropdownMenuContent>
        </DropdownMenu>

        <DropdownMenu>
          <DropdownMenuTrigger asChild>
            <Button variant="outline" className="flex items-center gap-1">
              Team <ChevronDown className="h-4 w-4" />
            </Button>
          </DropdownMenuTrigger>
          <DropdownMenuContent className="w-56">
            {teamOptions.map((team) => (
              <DropdownMenuCheckboxItem
                key={team}
                checked={teamFilter.includes(team)}
                onCheckedChange={(checked) => {
                  setTeamFilter(checked
                    ? [...teamFilter, team]
                    : teamFilter.filter((t) => t !== team)
                  );
                }}
              >
                {team}
              </DropdownMenuCheckboxItem>
            ))}
          </DropdownMenuContent>
        </DropdownMenu>
      </div>

      <div className="rounded-md border">
        <Table>
          <TableHeader>
            <TableRow>
              <TableHead>Container #</TableHead>
              <TableHead>Size/Type</TableHead>
              <TableHead>Owner</TableHead>
              <TableHead>Status</TableHead>
              <TableHead>Team</TableHead>
              <TableHead>Location</TableHead>
            </TableRow>
          </TableHeader>
          <TableBody>
            {filteredContainers.length > 0 ? (
              filteredContainers.map((container, index) => (
                <TableRow key={index}>
                  <TableCell>{container.number}</TableCell>
                  <TableCell>{container.size}/{container.type}</TableCell>
                  <TableCell>{container.owner}</TableCell>
                  <TableCell>
                    <span className={`px-2 py-1 rounded-full text-xs ${
                      container.status === "AV Passed" ? "bg-green-100 text-green-800" :
                      container.status === "Under Repair" ? "bg-yellow-100 text-yellow-800" :
                      container.status === "Ready for AV" ? "bg-blue-100 text-blue-800" :
                      "bg-red-100 text-red-800"
                    }`}>
                      {container.status}
                    </span>
                  </TableCell>
                  <TableCell>{container.repairTeam}</TableCell>
                  <TableCell>{container.location}</TableCell>
                </TableRow>
              ))
            ) : (
              <TableRow>
                <TableCell colSpan={6} className="text-center py-8">
                  No containers found matching your criteria
                </TableCell>
              </TableRow>
            )}
          </TableBody>
        </Table>
      </div>
    </div>
  );
};