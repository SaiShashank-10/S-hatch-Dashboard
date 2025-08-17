import { Bell, Search, Moon, Sun } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { 
  SidebarTrigger, 
  useSidebar 
} from "@/components/ui/sidebar";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import { Badge } from "@/components/ui/badge";

export function Header() {
  const { toggleSidebar } = useSidebar();

  return (
    <header className="h-24 border-b border-glass-border/30 bg-surface/90 backdrop-blur-2xl px-8 flex items-center justify-between relative">
      <div className="absolute inset-0 bg-gradient-mesh opacity-20"></div>
      <div className="relative flex items-center gap-6">
        <SidebarTrigger 
          onClick={toggleSidebar}
          className="text-text-secondary hover:text-primary transition-all duration-300 hover:bg-glass-hover/50 p-3 rounded-xl hover-lift"
        />
        
        {/* Enhanced Search */}
        <div className="relative hidden md:block">
          <Search className="absolute left-4 top-1/2 transform -translate-y-1/2 h-5 w-5 text-text-muted" />
          <Input
            placeholder="Search reports, scenarios, insights..."
            className="pl-12 w-96 h-12 bg-glass/60 border-glass-border/50 placeholder:text-text-muted rounded-2xl backdrop-blur-xl focus:ring-2 focus:ring-primary/50 focus:border-primary/50 transition-all duration-300"
          />
        </div>
      </div>

      <div className="relative flex items-center gap-6">
        {/* Enhanced Notifications */}
        <DropdownMenu>
          <DropdownMenuTrigger asChild>
            <Button variant="ghost" size="icon" className="relative hover:bg-glass-hover/50 rounded-xl p-3 transition-all duration-300 hover-lift">
              <Bell className="h-5 w-5" />
              <Badge 
                variant="destructive" 
                className="absolute -top-1 -right-1 h-6 w-6 rounded-full p-0 flex items-center justify-center text-xs bg-gradient-primary border-0 shadow-primary animate-pulse-glow"
              >
                3
              </Badge>
            </Button>
          </DropdownMenuTrigger>
          <DropdownMenuContent align="end" className="w-96 glass-elevated border-glass-border/60 backdrop-blur-2xl rounded-2xl p-2">
            <DropdownMenuLabel className="font-display font-semibold text-lg px-4 py-3">Notifications</DropdownMenuLabel>
            <DropdownMenuSeparator className="bg-glass-border/50" />
            <div className="space-y-1">
              <DropdownMenuItem className="rounded-xl p-4 hover:bg-glass-hover/50 transition-all duration-300">
                <div className="flex flex-col gap-2">
                  <p className="font-semibold text-text-primary">AI Report Complete</p>
                  <p className="text-sm text-text-muted">Your Q4 analysis is ready for review</p>
                </div>
              </DropdownMenuItem>
              <DropdownMenuItem className="rounded-xl p-4 hover:bg-glass-hover/50 transition-all duration-300">
                <div className="flex flex-col gap-2">
                  <p className="font-semibold text-text-primary">Scenario Updated</p>
                  <p className="text-sm text-text-muted">Market expansion scenario has new data</p>
                </div>
              </DropdownMenuItem>
            </div>
          </DropdownMenuContent>
        </DropdownMenu>

        {/* Enhanced Plan Badge */}
        <Badge className="px-4 py-2 rounded-2xl border-primary/50 text-primary bg-gradient-primary/10 backdrop-blur-xl font-semibold tracking-wide neon-border">
          Basic Plan
        </Badge>
      </div>
    </header>
  );
}