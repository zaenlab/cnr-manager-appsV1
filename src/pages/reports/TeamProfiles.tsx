import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Button } from "@/components/ui/button";
import { useNavigate } from "react-router-dom";
import { Separator } from "@/components/ui/separator";

const teamMembers = [
  {
    id: 1,
    name: "John Doe",
    position: "Manager Director",
    department: "Management",
    birthDate: "1980-05-15",
    bio: "20+ years experience in container repair industry. MBA from Harvard Business School.",
    avatar: "/avatars/john-doe.jpg",
  },
  {
    id: 2,
    name: "Jane Smith",
    position: "Department Head",
    department: "Operations",
    birthDate: "1985-08-22",
    bio: "Specializes in operational efficiency and team management. Certified Six Sigma Black Belt.",
    avatar: "/avatars/jane-smith.jpg",
  },
  {
    id: 3,
    name: "Robert Johnson",
    position: "Section Head",
    department: "Repair",
    birthDate: "1988-03-10",
    bio: "Expert in container structural repairs. Mechanical Engineering background.",
    avatar: "/avatars/robert-johnson.jpg",
  },
  {
    id: 4,
    name: "Michael Brown",
    position: "Technician",
    department: "Repair",
    birthDate: "1990-11-05",
    bio: "Specialized in welding and metal works. 5 years experience in container repair.",
    avatar: "/avatars/michael-brown.jpg",
  },
  {
    id: 5,
    name: "Sarah Wilson",
    position: "Technician",
    department: "Quality Control",
    birthDate: "1992-07-18",
    bio: "Certified quality inspector with attention to detail. Background in industrial engineering.",
    avatar: "/avatars/sarah-wilson.jpg",
  },
];

export const TeamProfiles = () => {
  const navigate = useNavigate();

  return (
    <div className="p-4 space-y-4">
      <div className="flex justify-between items-center">
        <h1 className="text-2xl font-bold">Team Profiles</h1>
        <Button variant="outline" onClick={() => navigate("/reports")}>
          Back to Reports
        </Button>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
        {teamMembers.map((member) => (
          <Card key={member.id} className="hover:shadow-lg transition-shadow">
            <CardHeader className="flex flex-row items-center space-x-4 space-y-0">
              <Avatar className="h-16 w-16">
                <AvatarImage src={member.avatar} />
                <AvatarFallback>{member.name.charAt(0)}</AvatarFallback>
              </Avatar>
              <div>
                <CardTitle>{member.name}</CardTitle>
                <p className="text-sm text-gray-500">{member.position}</p>
                <p className="text-xs text-gray-400">{member.department}</p>
              </div>
            </CardHeader>
            <CardContent className="space-y-2">
              <div className="flex justify-between text-sm">
                <span className="text-gray-500">Birth Date:</span>
                <span>{member.birthDate}</span>
              </div>
              <Separator />
              <p className="text-sm text-gray-700">{member.bio}</p>
            </CardContent>
          </Card>
        ))}
      </div>

      <div className="pt-4">
        <h2 className="text-xl font-semibold mb-4">Organization Structure</h2>
        <div className="bg-white dark:bg-gray-800 p-4 rounded-lg shadow">
          <div className="flex flex-col items-center">
            {/* Management Level */}
            <div className="mb-8 text-center">
              <div className="font-bold">Manager Director</div>
              <div className="text-sm text-gray-500">John Doe</div>
            </div>

            {/* Department Heads */}
            <div className="flex justify-center space-x-12 mb-6">
              <div className="text-center">
                <div className="font-bold">Operations</div>
                <div className="text-sm text-gray-500">Jane Smith</div>
              </div>
              <div className="text-center">
                <div className="font-bold">Quality</div>
                <div className="text-sm text-gray-500">Emily Davis</div>
              </div>
            </div>

            {/* Section Heads */}
            <div className="flex justify-center space-x-8 mb-4">
              <div className="text-center">
                <div className="font-medium">Repair</div>
                <div className="text-sm text-gray-500">Robert Johnson</div>
              </div>
              <div className="text-center">
                <div className="font-medium">Inspection</div>
                <div className="text-sm text-gray-500">David Wilson</div>
              </div>
            </div>

            {/* Technicians */}
            <div className="grid grid-cols-3 gap-4">
              {teamMembers
                .filter(m => m.position === "Technician")
                .map(tech => (
                  <div key={tech.id} className="text-center">
                    <div className="text-sm">{tech.name}</div>
                    <div className="text-xs text-gray-500">{tech.department}</div>
                  </div>
                ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};