import { useContainers } from "@/hooks/useContainers";
// ... other imports

export const AddContainer = () => {
  const { addContainer } = useContainers();
  // ... rest of the component

  const onSubmit = (data: any) => {
    const newContainer = {
      ...data,
      id: Date.now(), // Generate unique ID
    };
    addContainer(newContainer);
    showSuccess("Container added successfully");
    navigate("/containers");
  };

  // ... rest of the JSX
};