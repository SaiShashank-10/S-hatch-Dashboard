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
    <header className="h-20 border-b border-glass-border/30 bg-surface/50 backdrop-blur-xl px-6 flex items-center justify-between">
      <div className="flex items-center gap-4">
        <SidebarTrigger 
          onClick={toggleSidebar}
          className="text-text-secondary hover:text-primary transition-colors"
        />
        
        {/* Search */}
        <div className="relative hidden md:block">
          <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 h-4 w-4 text-text-muted" />
          <Input
            placeholder="Search reports, scenarios..."
            className="pl-10 w-80 bg-surface-bright/50 border-glass-border/50 placeholder:text-text-muted"
          />
        </div>
      </div>

      <div className="flex items-center gap-4">
        {/* Notifications */}
        <DropdownMenu>
          <DropdownMenuTrigger asChild>
            <Button variant="ghost" size="icon" className="relative">
              <Bell className="h-5 w-5" />
              <Badge 
                variant="destructive" 
                className="absolute -top-1 -right-1 h-5 w-5 rounded-full p-0 flex items-center justify-center text-xs"
              >
                3
              </Badge>
            </Button>
          </DropdownMenuTrigger>
          <DropdownMenuContent align="end" className="w-80 glass">
            <DropdownMenuLabel>Notifications</DropdownMenuLabel>
            <DropdownMenuSeparator />
            <DropdownMenuItem>
              <div className="flex flex-col gap-1">
                <p className="font-medium">AI Report Complete</p>
                <p className="text-sm text-text-muted">Your Q4 analysis is ready for review</p>
              </div>
            </DropdownMenuItem>
            <DropdownMenuItem>
              <div className="flex flex-col gap-1">
                <p className="font-medium">Scenario Updated</p>
                <p className="text-sm text-text-muted">Market expansion scenario has new data</p>
              </div>
            </DropdownMenuItem>
            <DropdownMenuItem>
              <div className="flex flex-col gap-1">
                <p className="font-medium">System Update</p>
                <p className="text-sm text-text-muted">New features available in your plan</p>
              </div>
            </DropdownMenuItem>
          </DropdownMenuContent>
        </DropdownMenu>

        {/* Plan Badge */}
        <Badge variant="outline" className="border-primary/50 text-primary bg-primary/10">
          Basic Plan
        </Badge>
      </div>
    </header>
  );
}