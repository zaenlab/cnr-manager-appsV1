import { useContainers } from "@/hooks/useContainers";
// ... other imports

export const EditContainer = () => {
  const { containers, updateContainer } = useContainers();
  // ... rest of the component

  const onSubmit = (data: any) => {
    updateContainer({
      ...data,
      id: Number(id),
    });
    showSuccess("Container updated successfully");
    navigate("/containers");
  };

  // ... rest of the JSX
};