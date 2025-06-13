import { Button } from "@/components/ui/button";
import {
  Form,
  FormControl,
  FormDescription,
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
import { Switch } from "@/components/ui/switch";
import { useForm } from "react-hook-form";
import { showSuccess } from "@/utils/toast";
import { useTheme } from "@/components/theme-provider";

const Settings = () => {
  const { theme, setTheme } = useTheme();
  const form = useForm({
    defaultValues: {
      companyName: "Container Repair Inc.",
      notificationsEnabled: true,
      notificationSound: "chime",
      language: "en",
      timezone: "UTC",
      themePreference: theme,
    },
  });

  const onSubmit = (data: any) => {
    setTheme(data.themePreference);
    showSuccess("Settings saved successfully");
  };

  return (
    <div className="p-4 space-y-6">
      <h1 className="text-2xl font-bold">Settings</h1>
      
      <Form {...form}>
        <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-6">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {/* Company Information */}
            <FormField
              control={form.control}
              name="companyName"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>Company Name</FormLabel>
                  <FormControl>
                    <Input {...field} />
                  </FormControl>
                  <FormDescription>
                    This will be displayed in reports and emails
                  </FormDescription>
                  <FormMessage />
                </FormItem>
              )}
            />

            {/* Theme Preference */}
            <FormField
              control={form.control}
              name="themePreference"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>Theme</FormLabel>
                  <Select onValueChange={field.onChange} defaultValue={field.value}>
                    <FormControl>
                      <SelectTrigger>
                        <SelectValue placeholder="Select theme" />
                      </SelectTrigger>
                    </FormControl>
                    <SelectContent>
                      <SelectItem value="light">Light</SelectItem>
                      <SelectItem value="dark">Dark</SelectItem>
                    </SelectContent>
                  </Select>
                  <FormMessage />
                </FormItem>
              )}
            />

            {/* Notifications */}
            <FormField
              control={form.control}
              name="notificationsEnabled"
              render={({ field }) => (
                <FormItem className="flex flex-row items-center justify-between rounded-lg border p-4">
                  <div className="space-y-0.5">
                    <FormLabel>Enable Notifications</FormLabel>
                    <FormDescription>
                      Receive alerts for important events
                    </FormDescription>
                  </div>
                  <FormControl>
                    <Switch
                      checked={field.value}
                      onCheckedChange={field.onChange}
                    />
                  </FormControl>
                </FormItem>
              )}
            />

            {/* Notification Sound */}
            {form.watch("notificationsEnabled") && (
              <FormField
                control={form.control}
                name="notificationSound"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel>Notification Sound</FormLabel>
                    <Select onValueChange={field.onChange} defaultValue={field.value}>
                      <FormControl>
                        <SelectTrigger>
                          <SelectValue placeholder="Select sound" />
                        </SelectTrigger>
                      </FormControl>
                      <SelectContent>
                        <SelectItem value="chime">Chime</SelectItem>
                        <SelectItem value="bell">Bell</SelectItem>
                        <SelectItem value="none">None</SelectItem>
                      </SelectContent>
                    </Select>
                    <FormMessage />
                  </FormItem>
                )}
              />
            )}

            {/* Language */}
            <FormField
              control={form.control}
              name="language"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>Language</FormLabel>
                  <Select onValueChange={field.onChange} defaultValue={field.value}>
                    <FormControl>
                      <SelectTrigger>
                        <SelectValue placeholder="Select language" />
                      </SelectTrigger>
                    </FormControl>
                    <SelectContent>
                      <SelectItem value="en">English</SelectItem>
                      <SelectItem value="es">Spanish</SelectItem>
                      <SelectItem value="fr">French</SelectItem>
                    </SelectContent>
                  </Select>
                  <FormMessage />
                </FormItem>
              )}
            />

            {/* Timezone */}
            <FormField
              control={form.control}
              name="timezone"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>Timezone</FormLabel>
                  <Select onValueChange={field.onChange} defaultValue={field.value}>
                    <FormControl>
                      <SelectTrigger>
                        <SelectValue placeholder="Select timezone" />
                      </SelectTrigger>
                    </FormControl>
                    <SelectContent>
                      <SelectItem value="UTC">UTC</SelectItem>
                      <SelectItem value="EST">Eastern (EST)</SelectItem>
                      <SelectItem value="PST">Pacific (PST)</SelectItem>
                    </SelectContent>
                  </Select>
                  <FormMessage />
                </FormItem>
              )}
            />
          </div>

          <div className="flex justify-end">
            <Button type="submit">Save Settings</Button>
          </div>
        </form>
      </Form>
    </div>
  );
};

export default Settings;