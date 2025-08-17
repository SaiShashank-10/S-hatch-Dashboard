import { Settings as SettingsIcon, Palette, Globe, Database, Trash2, Download } from "lucide-react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Switch } from "@/components/ui/switch";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { Separator } from "@/components/ui/separator";
import { Badge } from "@/components/ui/badge";

const Settings = () => {
  return (
    <div className="space-y-8">
      {/* Header */}
      <div className="flex flex-col gap-4 md:flex-row md:items-center md:justify-between">
        <div>
          <h1 className="text-3xl font-bold bg-gradient-to-r from-primary to-secondary bg-clip-text text-transparent">
            Settings
          </h1>
          <p className="text-text-secondary mt-2">
            Manage your application preferences and account settings.
          </p>
        </div>
      </div>

      {/* Appearance */}
      <Card className="glass border-glass-border/50">
        <CardHeader>
          <CardTitle className="flex items-center gap-2">
            <Palette className="h-5 w-5 text-primary" />
            Appearance
          </CardTitle>
        </CardHeader>
        <CardContent className="space-y-4">
          <div className="flex items-center justify-between">
            <div>
              <p className="font-medium text-text-primary">Theme</p>
              <p className="text-text-muted text-sm">Choose your interface theme</p>
            </div>
            <Select defaultValue="dark">
              <SelectTrigger className="w-32">
                <SelectValue />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="dark">Dark</SelectItem>
                <SelectItem value="light">Light</SelectItem>
                <SelectItem value="system">System</SelectItem>
              </SelectContent>
            </Select>
          </div>
          <div className="flex items-center justify-between">
            <div>
              <p className="font-medium text-text-primary">Compact Mode</p>
              <p className="text-text-muted text-sm">Use less space for interface elements</p>
            </div>
            <Switch />
          </div>
          <div className="flex items-center justify-between">
            <div>
              <p className="font-medium text-text-primary">Animations</p>
              <p className="text-text-muted text-sm">Enable smooth transitions and effects</p>
            </div>
            <Switch defaultChecked />
          </div>
        </CardContent>
      </Card>

      {/* Language & Region */}
      <Card className="glass border-glass-border/50">
        <CardHeader>
          <CardTitle className="flex items-center gap-2">
            <Globe className="h-5 w-5 text-primary" />
            Language & Region
          </CardTitle>
        </CardHeader>
        <CardContent className="space-y-4">
          <div className="flex items-center justify-between">
            <div>
              <p className="font-medium text-text-primary">Language</p>
              <p className="text-text-muted text-sm">Choose your interface language</p>
            </div>
            <Select defaultValue="en">
              <SelectTrigger className="w-40">
                <SelectValue />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="en">English</SelectItem>
                <SelectItem value="es">Español</SelectItem>
                <SelectItem value="fr">Français</SelectItem>
                <SelectItem value="de">Deutsch</SelectItem>
              </SelectContent>
            </Select>
          </div>
          <div className="flex items-center justify-between">
            <div>
              <p className="font-medium text-text-primary">Time Zone</p>
              <p className="text-text-muted text-sm">Your current time zone</p>
            </div>
            <Select defaultValue="pst">
              <SelectTrigger className="w-40">
                <SelectValue />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="pst">PST (UTC-8)</SelectItem>
                <SelectItem value="est">EST (UTC-5)</SelectItem>
                <SelectItem value="utc">UTC (UTC+0)</SelectItem>
                <SelectItem value="ist">IST (UTC+5:30)</SelectItem>
              </SelectContent>
            </Select>
          </div>
          <div className="flex items-center justify-between">
            <div>
              <p className="font-medium text-text-primary">Date Format</p>
              <p className="text-text-muted text-sm">How dates are displayed</p>
            </div>
            <Select defaultValue="mdy">
              <SelectTrigger className="w-40">
                <SelectValue />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="mdy">MM/DD/YYYY</SelectItem>
                <SelectItem value="dmy">DD/MM/YYYY</SelectItem>
                <SelectItem value="ymd">YYYY-MM-DD</SelectItem>
              </SelectContent>
            </Select>
          </div>
        </CardContent>
      </Card>

      {/* Data & Privacy */}
      <Card className="glass border-glass-border/50">
        <CardHeader>
          <CardTitle className="flex items-center gap-2">
            <Database className="h-5 w-5 text-primary" />
            Data & Privacy
          </CardTitle>
        </CardHeader>
        <CardContent className="space-y-4">
          <div className="flex items-center justify-between">
            <div>
              <p className="font-medium text-text-primary">Data Collection</p>
              <p className="text-text-muted text-sm">Help improve our service with usage analytics</p>
            </div>
            <Switch defaultChecked />
          </div>
          <div className="flex items-center justify-between">
            <div>
              <p className="font-medium text-text-primary">Crash Reports</p>
              <p className="text-text-muted text-sm">Automatically send crash reports</p>
            </div>
            <Switch defaultChecked />
          </div>
          <div className="flex items-center justify-between">
            <div>
              <p className="font-medium text-text-primary">Marketing Communications</p>
              <p className="text-text-muted text-sm">Receive product updates and tips</p>
            </div>
            <Switch />
          </div>
          
          <Separator />
          
          <div className="space-y-3">
            <Button variant="outline" className="w-full justify-start">
              <Download className="h-4 w-4 mr-2" />
              Export My Data
            </Button>
            <p className="text-text-muted text-sm">
              Download a copy of all your data including reports, scenarios, and settings.
            </p>
          </div>
        </CardContent>
      </Card>

      {/* Plan Information */}
      <Card className="glass border-glass-border/50">
        <CardHeader>
          <CardTitle className="flex items-center gap-2">
            <SettingsIcon className="h-5 w-5 text-primary" />
            Subscription
          </CardTitle>
        </CardHeader>
        <CardContent className="space-y-4">
          <div className="flex items-center justify-between">
            <div>
              <p className="font-medium text-text-primary">Current Plan</p>
              <p className="text-text-muted text-sm">Basic Plan - ₹59/month</p>
            </div>
            <Badge className="bg-primary">Active</Badge>
          </div>
          <div className="flex items-center justify-between">
            <div>
              <p className="font-medium text-text-primary">Billing Cycle</p>
              <p className="text-text-muted text-sm">Monthly billing</p>
            </div>
            <p className="text-text-primary">Next bill: Feb 15, 2024</p>
          </div>
          <Separator />
          <div className="flex gap-3">
            <Button className="gradient-primary">Upgrade Plan</Button>
            <Button variant="outline">Billing History</Button>
          </div>
        </CardContent>
      </Card>

      {/* Danger Zone */}
      <Card className="glass border-glass-border/50 border-red-500/20">
        <CardHeader>
          <CardTitle className="flex items-center gap-2 text-red-400">
            <Trash2 className="h-5 w-5" />
            Danger Zone
          </CardTitle>
        </CardHeader>
        <CardContent className="space-y-4">
          <div className="p-4 rounded-lg bg-red-500/10 border border-red-500/20">
            <h4 className="font-semibold text-red-400 mb-2">Delete Account</h4>
            <p className="text-text-muted text-sm mb-3">
              Permanently delete your account and all associated data. This action cannot be undone.
            </p>
            <Button variant="destructive" size="sm">
              Delete Account
            </Button>
          </div>
        </CardContent>
      </Card>
    </div>
  );
};

export default Settings;