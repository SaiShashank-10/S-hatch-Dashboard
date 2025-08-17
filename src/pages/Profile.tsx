import { useState } from "react";
import { User, Mail, Phone, MapPin, Calendar, Crown, Shield, Bell, Eye, Lock } from "lucide-react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Badge } from "@/components/ui/badge";
import { Switch } from "@/components/ui/switch";
import { Separator } from "@/components/ui/separator";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";

const Profile = () => {
  const [isEditing, setIsEditing] = useState(false);
  const [profileData, setProfileData] = useState({
    name: "John Doe",
    email: "john.doe@company.com",
    phone: "+1 (555) 123-4567",
    location: "San Francisco, CA",
    company: "Tech Solutions Inc.",
    role: "Business Analyst",
    joinDate: "January 2024"
  });

  const [notifications, setNotifications] = useState({
    reports: true,
    scenarios: true,
    security: true,
    marketing: false
  });

  const [privacy, setPrivacy] = useState({
    profileVisibility: "private",
    dataSharing: false,
    analytics: true
  });

  const handleSave = () => {
    setIsEditing(false);
    // Save logic here
  };

  const planFeatures = [
    { name: "AI Reports", limit: "50/month", used: 12, unlimited: false },
    { name: "Scenario Analysis", limit: "10/month", used: 8, unlimited: false },
    { name: "Data Storage", limit: "5GB", used: "2.3GB", unlimited: false },
    { name: "Export Formats", limit: "PDF, CSV", used: "-", unlimited: false },
  ];

  const securityLog = [
    { action: "Login", location: "San Francisco, CA", time: "2 hours ago", ip: "192.168.1.1" },
    { action: "Report Generated", location: "San Francisco, CA", time: "1 day ago", ip: "192.168.1.1" },
    { action: "Password Changed", location: "San Francisco, CA", time: "1 week ago", ip: "192.168.1.1" },
    { action: "Login", location: "New York, NY", time: "2 weeks ago", ip: "10.0.0.1" },
  ];

  return (
    <div className="space-y-8">
      {/* Header */}
      <div className="flex flex-col gap-4 md:flex-row md:items-center md:justify-between">
        <div>
          <h1 className="text-3xl font-bold bg-gradient-to-r from-primary to-secondary bg-clip-text text-transparent">
            Profile Settings
          </h1>
          <p className="text-text-secondary mt-2">
            Manage your account information and preferences.
          </p>
        </div>
      </div>

      <Tabs defaultValue="profile" className="space-y-6">
        <TabsList className="grid w-full grid-cols-4 glass">
          <TabsTrigger value="profile">Profile</TabsTrigger>
          <TabsTrigger value="plan">Plan & Usage</TabsTrigger>
          <TabsTrigger value="notifications">Notifications</TabsTrigger>
          <TabsTrigger value="security">Security</TabsTrigger>
        </TabsList>

        <TabsContent value="profile" className="space-y-6">
          {/* Profile Information */}
          <Card className="glass border-glass-border/50">
            <CardHeader>
              <div className="flex items-center justify-between">
                <CardTitle className="flex items-center gap-2">
                  <User className="h-5 w-5 text-primary" />
                  Profile Information
                </CardTitle>
                <Button
                  variant={isEditing ? "default" : "outline"}
                  onClick={isEditing ? handleSave : () => setIsEditing(true)}
                >
                  {isEditing ? "Save Changes" : "Edit Profile"}
                </Button>
              </div>
            </CardHeader>
            <CardContent className="space-y-6">
              <div className="flex items-center gap-6">
                <Avatar className="h-24 w-24">
                  <AvatarImage src="/lovable-uploads/avatar-placeholder.jpg" />
                  <AvatarFallback className="bg-primary text-background text-2xl font-bold">
                    JD
                  </AvatarFallback>
                </Avatar>
                <div>
                  <h3 className="text-xl font-semibold text-text-primary">{profileData.name}</h3>
                  <p className="text-text-secondary">{profileData.role} at {profileData.company}</p>
                  <Badge className="mt-2 bg-primary">Basic Plan</Badge>
                </div>
              </div>

              <Separator />

              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div>
                  <label className="text-sm font-medium text-text-primary flex items-center gap-2 mb-2">
                    <User className="h-4 w-4" />
                    Full Name
                  </label>
                  <Input
                    value={profileData.name}
                    onChange={(e) => setProfileData({...profileData, name: e.target.value})}
                    disabled={!isEditing}
                    className="bg-surface-bright/50"
                  />
                </div>
                <div>
                  <label className="text-sm font-medium text-text-primary flex items-center gap-2 mb-2">
                    <Mail className="h-4 w-4" />
                    Email Address
                  </label>
                  <Input
                    value={profileData.email}
                    onChange={(e) => setProfileData({...profileData, email: e.target.value})}
                    disabled={!isEditing}
                    className="bg-surface-bright/50"
                  />
                </div>
                <div>
                  <label className="text-sm font-medium text-text-primary flex items-center gap-2 mb-2">
                    <Phone className="h-4 w-4" />
                    Phone Number
                  </label>
                  <Input
                    value={profileData.phone}
                    onChange={(e) => setProfileData({...profileData, phone: e.target.value})}
                    disabled={!isEditing}
                    className="bg-surface-bright/50"
                  />
                </div>
                <div>
                  <label className="text-sm font-medium text-text-primary flex items-center gap-2 mb-2">
                    <MapPin className="h-4 w-4" />
                    Location
                  </label>
                  <Input
                    value={profileData.location}
                    onChange={(e) => setProfileData({...profileData, location: e.target.value})}
                    disabled={!isEditing}
                    className="bg-surface-bright/50"
                  />
                </div>
              </div>
            </CardContent>
          </Card>
        </TabsContent>

        <TabsContent value="plan" className="space-y-6">
          {/* Current Plan */}
          <Card className="glass border-glass-border/50">
            <CardHeader>
              <CardTitle className="flex items-center gap-2">
                <Crown className="h-5 w-5 text-primary" />
                Current Plan
              </CardTitle>
            </CardHeader>
            <CardContent>
              <div className="flex items-center justify-between mb-6">
                <div>
                  <h3 className="text-2xl font-bold text-text-primary">Basic Plan</h3>
                  <p className="text-text-secondary">₹59/month</p>
                </div>
                <Button className="gradient-primary">Upgrade Plan</Button>
              </div>

              <div className="space-y-4">
                {planFeatures.map((feature, index) => (
                  <div key={index} className="flex items-center justify-between p-4 rounded-lg bg-surface-bright/50">
                    <div>
                      <p className="font-medium text-text-primary">{feature.name}</p>
                      <p className="text-text-muted text-sm">{feature.limit}</p>
                    </div>
                    <div className="text-right">
                      <p className="font-semibold text-text-primary">{feature.used}</p>
                      <p className="text-text-muted text-sm">Used</p>
                    </div>
                  </div>
                ))}
              </div>

              <div className="mt-6 p-4 rounded-lg bg-primary/10 border border-primary/20">
                <h4 className="font-semibold text-primary mb-2">Basic Plan Features</h4>
                <ul className="space-y-1 text-sm text-text-secondary">
                  <li>✓ Simple AI Report Generation</li>
                  <li>✓ 1 Scenario Analysis at a time</li>
                  <li>✗ HR/Burnout/Runway Analysis</li>
                  <li>✗ Compliance Check</li>
                  <li>✗ Mentoring Features</li>
                </ul>
              </div>
            </CardContent>
          </Card>
        </TabsContent>

        <TabsContent value="notifications" className="space-y-6">
          {/* Notification Settings */}
          <Card className="glass border-glass-border/50">
            <CardHeader>
              <CardTitle className="flex items-center gap-2">
                <Bell className="h-5 w-5 text-primary" />
                Notification Preferences
              </CardTitle>
            </CardHeader>
            <CardContent className="space-y-6">
              <div className="space-y-4">
                <div className="flex items-center justify-between">
                  <div>
                    <p className="font-medium text-text-primary">Report Notifications</p>
                    <p className="text-text-muted text-sm">Get notified when reports are ready</p>
                  </div>
                  <Switch
                    checked={notifications.reports}
                    onCheckedChange={(checked) => setNotifications({...notifications, reports: checked})}
                  />
                </div>
                <div className="flex items-center justify-between">
                  <div>
                    <p className="font-medium text-text-primary">Scenario Updates</p>
                    <p className="text-text-muted text-sm">Updates on scenario analysis progress</p>
                  </div>
                  <Switch
                    checked={notifications.scenarios}
                    onCheckedChange={(checked) => setNotifications({...notifications, scenarios: checked})}
                  />
                </div>
                <div className="flex items-center justify-between">
                  <div>
                    <p className="font-medium text-text-primary">Security Alerts</p>
                    <p className="text-text-muted text-sm">Important security-related notifications</p>
                  </div>
                  <Switch
                    checked={notifications.security}
                    onCheckedChange={(checked) => setNotifications({...notifications, security: checked})}
                  />
                </div>
                <div className="flex items-center justify-between">
                  <div>
                    <p className="font-medium text-text-primary">Marketing Communications</p>
                    <p className="text-text-muted text-sm">Product updates and promotional content</p>
                  </div>
                  <Switch
                    checked={notifications.marketing}
                    onCheckedChange={(checked) => setNotifications({...notifications, marketing: checked})}
                  />
                </div>
              </div>
            </CardContent>
          </Card>
        </TabsContent>

        <TabsContent value="security" className="space-y-6">
          {/* Security Settings */}
          <Card className="glass border-glass-border/50">
            <CardHeader>
              <CardTitle className="flex items-center gap-2">
                <Shield className="h-5 w-5 text-primary" />
                Security Settings
              </CardTitle>
            </CardHeader>
            <CardContent className="space-y-6">
              <div className="space-y-4">
                <div className="flex items-center justify-between">
                  <div>
                    <p className="font-medium text-text-primary">Two-Factor Authentication</p>
                    <p className="text-text-muted text-sm">Add an extra layer of security</p>
                  </div>
                  <Button variant="outline">Enable 2FA</Button>
                </div>
                <div className="flex items-center justify-between">
                  <div>
                    <p className="font-medium text-text-primary">Password</p>
                    <p className="text-text-muted text-sm">Last changed 1 week ago</p>
                  </div>
                  <Button variant="outline">
                    <Lock className="h-4 w-4 mr-2" />
                    Change Password
                  </Button>
                </div>
              </div>

              <Separator />

              <div>
                <h4 className="font-semibold text-text-primary mb-4">Recent Activity</h4>
                <div className="space-y-3">
                  {securityLog.map((log, index) => (
                    <div key={index} className="flex items-center justify-between p-3 rounded-lg bg-surface-bright/50">
                      <div>
                        <p className="font-medium text-text-primary">{log.action}</p>
                        <p className="text-text-muted text-sm">{log.location} • {log.ip}</p>
                      </div>
                      <p className="text-text-muted text-sm">{log.time}</p>
                    </div>
                  ))}
                </div>
              </div>
            </CardContent>
          </Card>
        </TabsContent>
      </Tabs>
    </div>
  );
};

export default Profile;