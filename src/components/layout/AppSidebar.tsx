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
      relative group transition-all duration-500 rounded-2xl mx-2 my-1
      ${active 
        ? "bg-gradient-primary text-background shadow-primary neon-border font-semibold" 
        : "text-text-secondary hover:text-primary hover:bg-glass-hover/50 hover:shadow-glow"
      }
      ${isCollapsed ? "justify-center p-3" : "justify-start p-4"}
      hover-lift transform-gpu
    `;
  };

  return (
    <Sidebar className="border-r border-glass-border/30 bg-surface/95 backdrop-blur-2xl">
      <SidebarContent className="bg-transparent animate-fade-in-up">
        {/* Enhanced Logo Section */}
        <div className="p-8 border-b border-glass-border/30 relative">
          <div className="absolute inset-0 bg-gradient-mesh opacity-30"></div>
          <div className="relative flex items-center gap-4">
            <div className="p-3 rounded-2xl bg-gradient-primary shadow-primary hover-glow transition-all duration-300">
              <Zap className="h-7 w-7 text-background animate-bounce-subtle" />
            </div>
            {!isCollapsed && (
              <div className="animate-slide-in-right">
                <h2 className="font-display font-bold text-2xl text-primary neon-glow">Pulsar</h2>
                <p className="text-sm text-text-muted font-medium tracking-wide">AI Analytics Pro</p>
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

      {/* Enhanced Footer */}
      <SidebarFooter className="border-t border-glass-border/30 p-6 relative">
        <div className="absolute inset-0 bg-gradient-mesh opacity-20"></div>
        <div className="relative space-y-4">
          <div className="flex items-center gap-4">
            <Avatar className="h-12 w-12 ring-2 ring-primary/20 ring-offset-2 ring-offset-background">
              <AvatarImage src="/lovable-uploads/avatar-placeholder.jpg" />
              <AvatarFallback className="bg-gradient-primary text-background text-lg font-bold">
                JD
              </AvatarFallback>
            </Avatar>
            {!isCollapsed && (
              <div className="flex-1 min-w-0">
                <p className="text-sm font-semibold text-text-primary truncate">John Doe</p>
                <div className="flex items-center gap-2">
                  <div className="h-2 w-2 rounded-full bg-success animate-pulse"></div>
                  <p className="text-xs text-text-muted truncate">Basic Plan Active</p>
                </div>
              </div>
            )}
          </div>
          {!isCollapsed && (
            <Button
              variant="ghost"
              size="sm"
              className="w-full justify-start text-text-muted hover:text-primary hover:bg-glass-hover/50 rounded-xl transition-all duration-300"
            >
              <LogOut className="h-4 w-4 mr-3" />
              Sign Out
            </Button>
          )}
        </div>
      </SidebarFooter>
    </Sidebar>
  );
}