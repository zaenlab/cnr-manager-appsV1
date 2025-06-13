import { useState } from "react";

export const useContainers = () => {
  const [containers, setContainers] = useState([
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
  ]);

  const addContainer = (newContainer: typeof containers[0]) => {
    setContainers(prev => [...prev, newContainer]);
  };

  const updateContainer = (updatedContainer: typeof containers[0]) => {
    setContainers(prev =>
      prev.map(container =>
        container.id === updatedContainer.id ? updatedContainer : container
      )
    );
  };

  const deleteContainer = (id: number) => {
    setContainers(prev => prev.filter(container => container.id !== id));
  };

  return {
    containers,
    addContainer,
    updateContainer,
    deleteContainer,
  };
};