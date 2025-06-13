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
import { useNavigate, useParams } from "react-router-dom";
import { showSuccess } from "@/utils/toast";

// Mock data - in a real app this would come from an API
const mockContainers = [
  {
    id: 1,
    number: "MSKU123456",
    size: "20'",
    type: "Dry",
    owner: "PT. ABC",
    status: "Under Repair",
    repairTeam: "Team A",
    notes: "Needs paint work",
  },
  {
    id: 2,
    number: "TGHU789012",
    size: "40'",
    type: "Reefer",
    owner: "PT. XYZ",
    status: "AV Passed",
    repairTeam: "Team B",
    notes: "Completed all repairs",
  },
];

export const EditContainer = () => {
  const { id } = useParams();
  const navigate = useNavigate();
  const container = mockContainers.find(c => c.id === Number(id));

  const form = useForm({
    defaultValues: {
      number: container?.number || "",
      size: container?.size || "",
      type: container?.type || "",
      owner: container?.owner || "",
      status: container?.status || "Under Repair",
      repairTeam: container?.repairTeam || "",
      notes: container?.notes || "",
    },
  });

  const onSubmit = (data: any) => {
    console.log("Updated container:", data);
    showSuccess("Container updated successfully");
    navigate("/containers");
  };

  if (!container) {
    return (
      <div className="p-4">
        <p>Container not found</p>
        <Button onClick={() => navigate("/containers")} className="mt-4">
          Back to Containers
        </Button>
      </div>
    );
  }

  return (
    <div className="p-4 space-y-4">
      <div className="flex justify-between items-center">
        <h1 className="text-2xl font-bold">Edit Container</h1>
        <Button variant="outline" onClick={() => navigate("/containers")}>
          Cancel
        </Button>
      </div>

      <Form {...form}>
        <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-4">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <FormField
              control={form.control}
              name="number"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>Container Number *</FormLabel>
                  <FormControl>
                    <Input {...field} required />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />

            <FormField
              control={form.control}
              name="size"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>Size *</FormLabel>
                  <Select onValueChange={field.onChange} value={field.value} required>
                    <FormControl>
                      <SelectTrigger>
                        <SelectValue placeholder="Select size" />
                      </SelectTrigger>
                    </FormControl>
                    <SelectContent>
                      <SelectItem value="20'">20'</SelectItem>
                      <SelectItem value="40'">40'</SelectItem>
                      <SelectItem value="45'">45'</SelectItem>
                    </SelectContent>
                  </Select>
                  <FormMessage />
                </FormItem>
              )}
            />

            <FormField
              control={form.control}
              name="type"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>Type *</FormLabel>
                  <Select onValueChange={field.onChange} value={field.value} required>
                    <FormControl>
                      <SelectTrigger>
                        <SelectValue placeholder="Select type" />
                      </SelectTrigger>
                    </FormControl>
                    <SelectContent>
                      <SelectItem value="Dry">Dry</SelectItem>
                      <SelectItem value="Reefer">Reefer</SelectItem>
                      <SelectItem value="Open Top">Open Top</SelectItem>
                      <SelectItem value="Flat Rack">Flat Rack</SelectItem>
                    </SelectContent>
                  </Select>
                  <FormMessage />
                </FormItem>
              )}
            />

            <FormField
              control={form.control}
              name="owner"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>Owner *</FormLabel>
                  <FormControl>
                    <Input {...field} required />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />

            <FormField
              control={form.control}
              name="status"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>Status</FormLabel>
                  <Select onValueChange={field.onChange} value={field.value}>
                    <FormControl>
                      <SelectTrigger>
                        <SelectValue />
                      </SelectTrigger>
                    </FormControl>
                    <SelectContent>
                      <SelectItem value="Under Repair">Under Repair</SelectItem>
                      <SelectItem value="Ready for AV">Ready for AV</SelectItem>
                      <SelectItem value="AV Passed">AV Passed</SelectItem>
                      <SelectItem value="AV Failed">AV Failed</SelectItem>
                    </SelectContent>
                  </Select>
                  <FormMessage />
                </FormItem>
              )}
            />

            <FormField
              control={form.control}
              name="repairTeam"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>Repair Team</FormLabel>
                  <Select onValueChange={field.onChange} value={field.value}>
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

          <FormField
            control={form.control}
            name="notes"
            render={({ field }) => (
              <FormItem>
                <FormLabel>Notes</FormLabel>
                <FormControl>
                  <Textarea {...field} />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />

          <div className="flex justify-end">
            <Button type="submit">Save Changes</Button>
          </div>
        </form>
      </Form>
    </div>
  );
};