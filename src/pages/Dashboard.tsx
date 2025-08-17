import { Brain, Activity, TrendingUp, Zap, BarChart3, Users } from "lucide-react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Progress } from "@/components/ui/progress";
import { Badge } from "@/components/ui/badge";
import { NavLink } from "react-router-dom";

const Dashboard = () => {
  const stats = [
    {
      title: "AI Reports Generated",
      value: "12",
      change: "+3 this month",
      icon: Brain,
      gradient: "from-primary to-secondary"
    },
    {
      title: "Scenarios Analyzed",
      value: "8",
      change: "+2 this week",
      icon: Activity,
      gradient: "from-secondary to-accent"
    },
    {
      title: "Insights Generated",
      value: "47",
      change: "+12 this month",
      icon: TrendingUp,
      gradient: "from-accent to-primary"
    },
    {
      title: "Active Projects",
      value: "3",
      change: "2 completed",
      icon: BarChart3,
      gradient: "from-primary to-accent"
    }
  ];

  const recentReports = [
    {
      title: "Q4 Financial Analysis",
      status: "completed",
      date: "2 days ago",
      type: "Financial"
    },
    {
      title: "Market Expansion Study",
      status: "processing",
      date: "1 hour ago",
      type: "Market"
    },
    {
      title: "Customer Behavior Report",
      status: "completed",
      date: "1 week ago",
      type: "Customer"
    }
  ];

  const quickActions = [
    {
      title: "Generate AI Report",
      description: "Create a new AI-powered business report",
      icon: Brain,
      href: "/reports",
      color: "primary"
    },
    {
      title: "Scenario Analysis",
      description: "Analyze different business scenarios",
      icon: Activity,
      href: "/scenarios",
      color: "secondary"
    }
  ];

  return (
    <div className="space-y-8">
      {/* Header */}
      <div className="flex flex-col gap-4 md:flex-row md:items-center md:justify-between">
        <div>
          <h1 className="text-3xl font-bold bg-gradient-to-r from-primary to-secondary bg-clip-text text-transparent">
            Dashboard
          </h1>
          <p className="text-text-secondary mt-2">
            Welcome back! Here's your AI analytics overview.
          </p>
        </div>
        <div className="flex gap-3">
          <Button asChild className="gradient-primary">
            <NavLink to="/reports">
              <Brain className="h-4 w-4 mr-2" />
              New Report
            </NavLink>
          </Button>
        </div>
      </div>

      {/* Stats Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
        {stats.map((stat, index) => (
          <Card key={stat.title} className="glass border-glass-border/50 overflow-hidden group hover:shadow-glow transition-all duration-300">
            <CardContent className="p-6">
              <div className="flex items-center justify-between">
                <div>
                  <p className="text-text-muted text-sm font-medium">{stat.title}</p>
                  <p className="text-3xl font-bold text-text-primary mt-2">{stat.value}</p>
                  <p className="text-primary text-sm mt-1">{stat.change}</p>
                </div>
                <div className={`p-3 rounded-xl bg-gradient-to-br ${stat.gradient} opacity-80 group-hover:opacity-100 transition-opacity`}>
                  <stat.icon className="h-6 w-6 text-white" />
                </div>
              </div>
            </CardContent>
          </Card>
        ))}
      </div>

      {/* Main Content Grid */}
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
        {/* Recent Reports */}
        <Card className="lg:col-span-2 glass border-glass-border/50">
          <CardHeader>
            <CardTitle className="flex items-center gap-2">
              <BarChart3 className="h-5 w-5 text-primary" />
              Recent Reports
            </CardTitle>
          </CardHeader>
          <CardContent>
            <div className="space-y-4">
              {recentReports.map((report, index) => (
                <div key={index} className="flex items-center justify-between p-4 rounded-lg bg-surface-bright/50 border border-glass-border/30">
                  <div className="flex-1">
                    <h4 className="font-semibold text-text-primary">{report.title}</h4>
                    <div className="flex items-center gap-2 mt-1">
                      <Badge variant="outline" className="text-xs">
                        {report.type}
                      </Badge>
                      <span className="text-text-muted text-sm">{report.date}</span>
                    </div>
                  </div>
                  <Badge 
                    variant={report.status === "completed" ? "default" : "secondary"}
                    className={report.status === "completed" ? "bg-primary" : ""}
                  >
                    {report.status}
                  </Badge>
                </div>
              ))}
            </div>
            <Button asChild variant="outline" className="w-full mt-4">
              <NavLink to="/reports">View All Reports</NavLink>
            </Button>
          </CardContent>
        </Card>

        {/* Quick Actions */}
        <Card className="glass border-glass-border/50">
          <CardHeader>
            <CardTitle className="flex items-center gap-2">
              <Zap className="h-5 w-5 text-primary" />
              Quick Actions
            </CardTitle>
          </CardHeader>
          <CardContent className="space-y-4">
            {quickActions.map((action, index) => (
              <Button
                key={index}
                asChild
                variant="outline"
                className="w-full h-auto p-4 justify-start hover:bg-surface-bright/50 transition-all duration-300"
              >
                <NavLink to={action.href} className="flex flex-col items-start gap-2">
                  <div className="flex items-center gap-2">
                    <action.icon className="h-5 w-5 text-primary" />
                    <span className="font-semibold">{action.title}</span>
                  </div>
                  <p className="text-text-muted text-sm text-left">{action.description}</p>
                </NavLink>
              </Button>
            ))}
          </CardContent>
        </Card>
      </div>

      {/* Usage Stats */}
      <Card className="glass border-glass-border/50">
        <CardHeader>
          <CardTitle className="flex items-center gap-2">
            <Users className="h-5 w-5 text-primary" />
            Plan Usage (Basic)
          </CardTitle>
        </CardHeader>
        <CardContent>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div>
              <div className="flex justify-between items-center mb-2">
                <span className="text-text-secondary">AI Reports</span>
                <span className="text-text-primary font-semibold">12/50</span>
              </div>
              <Progress value={24} className="h-2" />
            </div>
            <div>
              <div className="flex justify-between items-center mb-2">
                <span className="text-text-secondary">Scenario Analysis</span>
                <span className="text-text-primary font-semibold">8/10</span>
              </div>
              <Progress value={80} className="h-2" />
            </div>
          </div>
          <div className="mt-6 p-4 rounded-lg bg-primary/10 border border-primary/20">
            <div className="flex items-center gap-2">
              <Zap className="h-5 w-5 text-primary" />
              <span className="font-semibold text-primary">Basic Plan Features</span>
            </div>
            <ul className="mt-2 space-y-1 text-sm text-text-secondary">
              <li>✓ Simple AI Report Generation</li>
              <li>✓ 1 Scenario Analysis at a time</li>
              <li>✗ HR/Burnout/Runway Analysis (Upgrade required)</li>
              <li>✗ Compliance Check (Upgrade required)</li>
              <li>✗ Mentoring Features (Upgrade required)</li>
            </ul>
          </div>
        </CardContent>
      </Card>
    </div>
  );
};

export default Dashboard;