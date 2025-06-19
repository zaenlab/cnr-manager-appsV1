import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { useNavigate } from "react-router-dom";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Mail, Phone, MapPin } from "lucide-react";

// Sample work activity images
const workActivities = [
  { id: 1, title: "Container Repair", image: "/work/repair1.jpg" },
  { id: 2, title: "Quality Inspection", image: "/work/inspection1.jpg" },
  { id: 3, title: "Team Meeting", image: "/work/meeting1.jpg" },
  { id: 4, title: "Equipment Maintenance", image: "/work/maintenance1.jpg" },
];

// Sample team members
const teamMembers = [
  {
    id: 1,
    name: "John Doe",
    position: "Manager Director",
    avatar: "/avatars/john-doe.jpg",
  },
  {
    id: 2,
    name: "Jane Smith",
    position: "Operations Head",
    avatar: "/avatars/jane-smith.jpg",
  },
  {
    id: 3,
    name: "Robert Johnson",
    position: "Repair Section Head",
    avatar: "/avatars/robert-johnson.jpg",
  },
];

const Index = () => {
  const navigate = useNavigate();

  return (
    <div className="p-4 space-y-8">
      {/* Hero Section */}
      <section className="text-center py-8">
        <h1 className="text-3xl font-bold mb-4">Container Repair Professionals</h1>
        <p className="text-lg text-gray-600 max-w-2xl mx-auto">
          Providing high-quality container repair services with a dedicated team of experts
        </p>
      </section>

      {/* Work Activities Gallery */}
      <section>
        <h2 className="text-2xl font-bold mb-6">Our Work Activities</h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
          {workActivities.map((activity) => (
            <Card key={activity.id} className="overflow-hidden">
              <img 
                src={activity.image} 
                alt={activity.title}
                className="w-full h-48 object-cover"
              />
              <div className="p-4">
                <h3 className="font-medium">{activity.title}</h3>
              </div>
            </Card>
          ))}
        </div>
      </section>

      {/* Company Structure */}
      <section>
        <h2 className="text-2xl font-bold mb-6">Company Structure</h2>
        <Card className="p-6">
          <div className="flex flex-col items-center">
            {/* Management Level */}
            <div className="mb-8 text-center">
              <Avatar className="h-16 w-16 mx-auto mb-2">
                <AvatarImage src="/avatars/john-doe.jpg" />
                <AvatarFallback>JD</AvatarFallback>
              </Avatar>
              <div className="font-bold">Manager Director</div>
              <div className="text-sm text-gray-500">John Doe</div>
            </div>

            {/* Department Heads */}
            <div className="flex justify-center space-x-12 mb-6">
              <div className="text-center">
                <Avatar className="h-14 w-14 mx-auto mb-2">
                  <AvatarImage src="/avatars/jane-smith.jpg" />
                  <AvatarFallback>JS</AvatarFallback>
                </Avatar>
                <div className="font-bold">Operations</div>
                <div className="text-sm text-gray-500">Jane Smith</div>
              </div>
              <div className="text-center">
                <Avatar className="h-14 w-14 mx-auto mb-2">
                  <AvatarImage src="/avatars/emily-davis.jpg" />
                  <AvatarFallback>ED</AvatarFallback>
                </Avatar>
                <div className="font-bold">Quality</div>
                <div className="text-sm text-gray-500">Emily Davis</div>
              </div>
            </div>

            {/* Section Heads */}
            <div className="flex justify-center space-x-8 mb-4">
              <div className="text-center">
                <Avatar className="h-12 w-12 mx-auto mb-2">
                  <AvatarImage src="/avatars/robert-johnson.jpg" />
                  <AvatarFallback>RJ</AvatarFallback>
                </Avatar>
                <div className="font-medium">Repair</div>
                <div className="text-sm text-gray-500">Robert Johnson</div>
              </div>
              <div className="text-center">
                <Avatar className="h-12 w-12 mx-auto mb-2">
                  <AvatarImage src="/avatars/david-wilson.jpg" />
                  <AvatarFallback>DW</AvatarFallback>
                </Avatar>
                <div className="font-medium">Inspection</div>
                <div className="text-sm text-gray-500">David Wilson</div>
              </div>
            </div>
          </div>
        </Card>
      </section>

      {/* Team Profiles */}
      <section>
        <h2 className="text-2xl font-bold mb-6">Our Team</h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
          {teamMembers.map((member) => (
            <Card key={member.id} className="p-4 flex items-center space-x-4">
              <Avatar>
                <AvatarImage src={member.avatar} />
                <AvatarFallback>{member.name.substring(0, 2)}</AvatarFallback>
              </Avatar>
              <div>
                <h3 className="font-medium">{member.name}</h3>
                <p className="text-sm text-gray-500">{member.position}</p>
                <Button 
                  variant="link" 
                  size="sm" 
                  className="p-0 h-auto"
                  onClick={() => navigate("/reports/profiles")}
                >
                  View Profile
                </Button>
              </div>
            </Card>
          ))}
        </div>
      </section>

      {/* Contact Information */}
      <section>
        <h2 className="text-2xl font-bold mb-6">Contact Us</h2>
        <Card className="p-6">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <div className="flex items-start space-x-4">
              <Mail className="h-6 w-6 mt-1 text-primary" />
              <div>
                <h3 className="font-medium">Email</h3>
                <p className="text-gray-600">info@containerrepair.com</p>
              </div>
            </div>
            <div className="flex items-start space-x-4">
              <Phone className="h-6 w-6 mt-1 text-primary" />
              <div>
                <h3 className="font-medium">Phone</h3>
                <p className="text-gray-600">+62 123 4567 890</p>
              </div>
            </div>
            <div className="flex items-start space-x-4">
              <MapPin className="h-6 w-6 mt-1 text-primary" />
              <div>
                <h3 className="font-medium">Address</h3>
                <p className="text-gray-600">Jl. Industri Raya No. 123, Jakarta</p>
              </div>
            </div>
          </div>
        </Card>
      </section>

      {/* Quick Links */}
      <div className="flex justify-center space-x-4 pt-4">
        <Button onClick={() => navigate("/containers")}>View Containers</Button>
        <Button variant="outline" onClick={() => navigate("/reports")}>
          View Reports
        </Button>
      </div>
    </div>
  );
};

export default Index;