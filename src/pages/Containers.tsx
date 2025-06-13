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
import { ChevronDown, Pencil } from "lucide-react";

const initialContainers = [
  {
    id: 1,
    number: "MSKU123456",
    size: "20'",
    type: "Dry",
    owner: "PT. ABC",
    status: "Under Repair",
    repairTeam: "Team A",
    notes: "Needs paint work and door repair",
  },
  {
    id: 2,
    number: "TGHU789012",
    size: "40'",
    type: "Reefer",
    owner: "PT. XYZ",
    status: "AV Passed",
    repairTeam: "Team B",
    notes: "Completed all repairs, ready for delivery",
  },
];

export const Containers = () => {
  const navigate = useNavigate();
  const [searchTerm, setSearchTerm] = useState("");
  const [statusFilter, setStatusFilter] = useState<string[]>([]);
  const [teamFilter, setTeamFilter] = useState<string[]>([]);
  const [containers, setContainers] = useState(initialContainers);

  const statusOptions = ["Under Repair", "Ready for AV", "AV Passed", "AV Failed"];
  const teamOptions = ["Team A", "Team B", "Team C"];

  const filteredContainers = containers.filter((container) => {
    const matchesSearch = container.number.toLowerCase().includes(searchTerm.toLowerCase()) ||
      container.owner.toLowerCase().includes(searchTerm.toLowerCase()) ||
      container.notes.toLowerCase().includes(searchTerm.toLowerCase());

    const matchesStatus = statusFilter.length === 0 || 
      statusFilter.includes(container.status);

    const matchesTeam = teamFilter.length === 0 ||
      teamFilter.includes(container.repairTeam);

    return matchesSearch && matchesStatus && matchesTeam;
  });

  const handleEdit = (containerId: number) => {
    navigate(`/containers/edit/${containerId}`);
  };

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
            <TableRow className="bg-green-50">
              <TableHead className="text-green-800">Container #</TableHead>
              <TableHead className="text-green-800">Size/Type</TableHead>
              <TableHead className="text-green-800">Owner</TableHead>
              <TableHead className="text-green-800">Status</TableHead>
              <TableHead className="text-green-800">Notes</TableHead>
              <TableHead className="text-green-800">Actions</TableHead>
            </TableRow>
          </TableHeader>
          <TableBody>
            {filteredContainers.map((container) => (
              <TableRow key={container.id} className="bg-gray-50 hover:bg-gray-100">
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
                <TableCell className="max-w-xs truncate" title={container.notes}>
                  {container.notes}
                </TableCell>
                <TableCell>
                  <Button
                    variant="ghost"
                    size="sm"
                    onClick={() => handleEdit(container.id)}
                  >
                    <Pencil className="h-4 w-4" />
                  </Button>
                </TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </div>
    </div>
  );
};