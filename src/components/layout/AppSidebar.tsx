import { NavLink, useLocation } from "react-router-dom";
import { 
  BarChart3, 
  Brain, 
  User, 
  Settings, 
  LogOut,
  Activity,
  Zap
} from "lucide-react";

import {
  Sidebar,
  SidebarContent,
  SidebarGroup,
  SidebarGroupContent,
  SidebarGroupLabel,
  SidebarMenu,
  SidebarMenuButton,
  SidebarMenuItem,
  SidebarFooter,
  useSidebar,
} from "@/components/ui/sidebar";

import { Button } from "@/components/ui/button";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";

const navigationItems = [
  { title: "Dashboard", url: "/", icon: BarChart3 },
  { title: "AI Reports", url: "/reports", icon: Brain },
  { title: "Scenario Analysis", url: "/scenarios", icon: Activity },
  { title: "Profile", url: "/profile", icon: User },
];

const settingsItems = [
  { title: "Settings", url: "/settings", icon: Settings },
];

export function AppSidebar() {
  const { state } = useSidebar();
  const location = useLocation();
  const isCollapsed = state === "collapsed";

  const isActive = (path: string) => {
    if (path === "/") {
      return location.pathname === "/";
    }
    return location.pathname.startsWith(path);
  };

  const getNavClassName = (path: string) => {
    const active = isActive(path);
    return `
      relative group transition-all duration-300
      ${active 
        ? "bg-primary/20 text-primary border-r-2 border-primary shadow-primary/30" 
        : "text-text-secondary hover:text-primary hover:bg-surface-bright"
      }
      ${isCollapsed ? "justify-center" : "justify-start"}
    `;
  };

  return (
    <Sidebar className="border-r border-glass-border/30 bg-surface/80 backdrop-blur-xl">
      <SidebarContent className="bg-transparent">
        {/* Logo */}
        <div className="p-6 border-b border-glass-border/30">
          <div className="flex items-center gap-3">
            <div className="p-2 rounded-lg bg-gradient-primary">
              <Zap className="h-6 w-6 text-background" />
            </div>
            {!isCollapsed && (
              <div>
                <h2 className="font-bold text-lg text-primary neon-glow">Pulsar</h2>
                <p className="text-xs text-text-muted">AI Analytics</p>
              </div>
            )}
          </div>
        </div>

        {/* Navigation */}
        <SidebarGroup className="px-4 py-4">
          <SidebarGroupLabel className={`text-text-muted text-xs uppercase tracking-wider ${isCollapsed ? "sr-only" : ""}`}>
            Main Menu
          </SidebarGroupLabel>
          <SidebarGroupContent>
            <SidebarMenu className="space-y-2">
              {navigationItems.map((item) => (
                <SidebarMenuItem key={item.title}>
                  <SidebarMenuButton asChild>
                    <NavLink to={item.url} className={getNavClassName(item.url)}>
                      <item.icon className="h-5 w-5 flex-shrink-0" />
                      {!isCollapsed && (
                        <span className="font-medium">{item.title}</span>
                      )}
                      {isActive(item.url) && !isCollapsed && (
                        <div className="absolute left-0 w-1 h-8 bg-primary rounded-r-full" />
                      )}
                    </NavLink>
                  </SidebarMenuButton>
                </SidebarMenuItem>
              ))}
            </SidebarMenu>
          </SidebarGroupContent>
        </SidebarGroup>

        {/* Settings */}
        <SidebarGroup className="px-4">
          <SidebarGroupLabel className={`text-text-muted text-xs uppercase tracking-wider ${isCollapsed ? "sr-only" : ""}`}>
            Account
          </SidebarGroupLabel>
          <SidebarGroupContent>
            <SidebarMenu className="space-y-2">
              {settingsItems.map((item) => (
                <SidebarMenuItem key={item.title}>
                  <SidebarMenuButton asChild>
                    <NavLink to={item.url} className={getNavClassName(item.url)}>
                      <item.icon className="h-5 w-5 flex-shrink-0" />
                      {!isCollapsed && (
                        <span className="font-medium">{item.title}</span>
                      )}
                    </NavLink>
                  </SidebarMenuButton>
                </SidebarMenuItem>
              ))}
            </SidebarMenu>
          </SidebarGroupContent>
        </SidebarGroup>
      </SidebarContent>

      {/* Footer */}
      <SidebarFooter className="border-t border-glass-border/30 p-4">
        <div className="flex items-center gap-3">
          <Avatar className="h-8 w-8">
            <AvatarImage src="/lovable-uploads/avatar-placeholder.jpg" />
            <AvatarFallback className="bg-primary text-background text-sm font-semibold">
              JD
            </AvatarFallback>
          </Avatar>
          {!isCollapsed && (
            <div className="flex-1 min-w-0">
              <p className="text-sm font-medium text-text-primary truncate">John Doe</p>
              <p className="text-xs text-text-muted truncate">Basic Plan</p>
            </div>
          )}
        </div>
        {!isCollapsed && (
          <Button
            variant="ghost"
            size="sm"
            className="mt-3 w-full justify-start text-text-muted hover:text-primary"
          >
            <LogOut className="h-4 w-4 mr-2" />
            Sign Out
          </Button>
        )}
      </SidebarFooter>
    </Sidebar>
  );
}