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

// Initial mock data
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
  const [containers, setContainers] = useState(initialContainers);
  const navigate = useNavigate();
  const [searchTerm, setSearchTerm] = useState("");
  const [statusFilter, setStatusFilter] = useState<string[]>([]);
  const [teamFilter, setTeamFilter] = useState<string[]>([]);

  const statusOptions = ["Under Repair", "Ready for AV", "AV Passed", "AV Failed"];
  const teamOptions = ["Team A", "Team B", "Team C"];

  // Function to update container data
  const updateContainer = (updatedContainer: typeof initialContainers[0]) => {
    setContainers(prevContainers =>
      prevContainers.map(container =>
        container.id === updatedContainer.id ? updatedContainer : container
      )
    );
  };

  // Function to add new container
  const addContainer = (newContainer: typeof initialContainers[0]) => {
    setContainers(prevContainers => [...prevContainers, newContainer]);
  };

  // Function to delete container
  const deleteContainer = (id: number) => {
    setContainers(prevContainers =>
      prevContainers.filter(container => container.id !== id)
    );
  };

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
      {/* ... (rest of the JSX remains the same) */}
    </div>
  );
};