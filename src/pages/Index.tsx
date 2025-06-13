import { MadeWithDyad } from "@/components/made-with-dyad";
import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { useNavigate } from "react-router-dom";

const Index = () => {
  const navigate = useNavigate();

  return (
    <div className="p-4 space-y-4">
      <Card className="p-6 rounded-lg shadow-sm">
        <h1 className="text-2xl font-bold text-gray-800 dark:text-white mb-4">
          Container Repair App
        </h1>
        <p className="text-gray-600 dark:text-gray-300 mb-6">
          Manage container repairs and track team performance
        </p>
        <div className="space-y-3">
          <Button 
            className="w-full justify-start"
            onClick={() => navigate("/containers")}
          >
            View Containers
          </Button>
          <Button 
            variant="outline"
            className="w-full justify-start"
            onClick={() => navigate("/reports")}
          >
            View Reports
          </Button>
        </div>
      </Card>
      <MadeWithDyad />
    </div>
  );
};

export default Index;