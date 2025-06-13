import { Home, List, BarChart, Settings } from "lucide-react";
import { Link, useLocation } from "react-router-dom";

export const BottomNavigation = () => {
  const location = useLocation();
  
  const tabs = [
    { path: "/", icon: <Home size={20} />, label: "Home" },
    { path: "/containers", icon: <List size={20} />, label: "Containers" },
    { path: "/reports", icon: <BarChart size={20} />, label: "Reports" },
    { path: "/settings", icon: <Settings size={20} />, label: "Settings" },
  ];

  return (
    <div className="fixed bottom-0 left-0 right-0 bg-white dark:bg-gray-800 border-t border-gray-200 dark:border-gray-700 shadow-lg">
      <div className="flex justify-around items-center h-16">
        {tabs.map((tab) => (
          <Link
            key={tab.path}
            to={tab.path}
            className={`flex flex-col items-center justify-center w-full h-full ${
              location.pathname === tab.path || 
              (tab.path !== '/' && location.pathname.startsWith(tab.path))
                ? "text-blue-600 dark:text-blue-400" 
                : "text-gray-500 dark:text-gray-400"
            }`}
          >
            {tab.icon}
            <span className="text-xs mt-1">{tab.label}</span>
          </Link>
        ))}
      </div>
    </div>
  );
};