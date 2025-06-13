import { Button } from "@/components/ui/button";
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form";
import { Input } from "@/components/ui/input";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { Textarea } from "@/components/ui/textarea";
import { useForm } from "react-hook-form";
import { useNavigate } from "react-router-dom";
import { showSuccess } from "@/utils/toast";

export const AddContainer = () => {
  const navigate = useNavigate();

  const form = useForm({
    defaultValues: {
      number: "",
      size: "",
      type: "",
      owner: "",
      status: "Under Repair",
      repairTeam: "",
      notes: "",
    },
  });

  const onSubmit = (data: any) => {
    console.log("New container:", data);
    showSuccess("Container added successfully");
    navigate("/containers");
  };

  return (
    <div className="p-4 space-y-4">
      <div className="flex justify-between items-center">
        <h1 className="text-2xl font-bold">Add New Container</h1>
        <Button variant="outline" onClick={() => navigate("/containers")}>
          Cancel
        </Button>
      </div>

      <Form {...form}>
        <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-4">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            {/* Other form fields remain the same... */}

            <FormField
              control={form.control}
              name="repairTeam"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>Repair Team</FormLabel>
                  <Select onValueChange={field.onChange}>
                    <FormControl>
                      <SelectTrigger>
                        <SelectValue placeholder="Select team (optional)" />
                      </SelectTrigger>
                    </FormControl>
                    <SelectContent>
                      <SelectItem value="Team A">Team A</SelectItem>
                      <SelectItem value="Team B">Team B</SelectItem>
                      <SelectItem value="Team C">Team C</SelectItem>
                    </SelectContent>
                  </Select>
                  <FormMessage />
                </FormItem>
              )}
            />
          </div>

          {/* Rest of the form remains the same... */}
        </form>
      </Form>
    </div>
  );
};