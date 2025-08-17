import { useState } from "react";
import { Activity, Plus, Play, Pause, BarChart, TrendingUp, AlertTriangle } from "lucide-react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Progress } from "@/components/ui/progress";

const Scenarios = () => {
  const [isCreating, setIsCreating] = useState(false);

  const scenarios = [
    {
      id: 1,
      title: "Market Expansion Strategy",
      description: "Analyzing the impact of expanding into European markets",
      status: "active",
      progress: 78,
      outcome: "positive",
      lastUpdated: "2 hours ago",
      metrics: {
        revenue: "+25%",
        risk: "Medium",
        timeline: "6 months"
      }
    },
    {
      id: 2,
      title: "Remote Work Transition",
      description: "Evaluating full remote work implementation effects",
      status: "completed",
      progress: 100,
      outcome: "neutral",
      lastUpdated: "1 day ago",
      metrics: {
        productivity: "+5%",
        risk: "Low",
        timeline: "3 months"
      }
    },
    {
      id: 3,
      title: "Product Line Extension",
      description: "Impact analysis of launching premium product tier",
      status: "paused",
      progress: 45,
      outcome: "pending",
      lastUpdated: "3 days ago",
      metrics: {
        revenue: "+15%",
        risk: "High",
        timeline: "12 months"
      }
    }
  ];

  const handleCreateScenario = async () => {
    setIsCreating(true);
    setTimeout(() => {
      setIsCreating(false);
    }, 2000);
  };

  const getOutcomeColor = (outcome: string) => {
    switch (outcome) {
      case "positive": return "text-green-400";
      case "negative": return "text-red-400";
      case "neutral": return "text-yellow-400";
      default: return "text-text-muted";
    }
  };

  const getStatusColor = (status: string) => {
    switch (status) {
      case "active": return "bg-primary";
      case "completed": return "bg-green-500";
      case "paused": return "bg-yellow-500";
      default: return "bg-gray-500";
    }
  };

  return (
    <div className="space-y-8">
      {/* Header */}
      <div className="flex flex-col gap-4 md:flex-row md:items-center md:justify-between">
        <div>
          <h1 className="text-3xl font-bold bg-gradient-to-r from-primary to-secondary bg-clip-text text-transparent">
            Scenario Analysis
          </h1>
          <p className="text-text-secondary mt-2">
            Create and analyze different business scenarios with AI insights.
          </p>
        </div>
        <Dialog>
          <DialogTrigger asChild>
            <Button className="gradient-primary">
              <Plus className="h-4 w-4 mr-2" />
              New Scenario
            </Button>
          </DialogTrigger>
          <DialogContent className="glass border-glass-border/50 max-w-md">
            <DialogHeader>
              <DialogTitle className="flex items-center gap-2">
                <Activity className="h-5 w-5 text-primary" />
                Create New Scenario
              </DialogTitle>
              <DialogDescription>
                Define a new business scenario for AI analysis.
              </DialogDescription>
            </DialogHeader>
            <div className="space-y-4">
              <div>
                <label className="text-sm font-medium text-text-primary block mb-2">
                  Scenario Name
                </label>
                <Input
                  placeholder="e.g., Market Expansion to Asia"
                  className="bg-surface-bright/50"
                />
              </div>
              <div>
                <label className="text-sm font-medium text-text-primary block mb-2">
                  Category
                </label>
                <Select>
                  <SelectTrigger>
                    <SelectValue placeholder="Select category" />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="market">Market Analysis</SelectItem>
                    <SelectItem value="financial">Financial Planning</SelectItem>
                    <SelectItem value="operational">Operational Changes</SelectItem>
                    <SelectItem value="strategic">Strategic Planning</SelectItem>
                  </SelectContent>
                </Select>
              </div>
              <div>
                <label className="text-sm font-medium text-text-primary block mb-2">
                  Description
                </label>
                <Textarea
                  placeholder="Describe your scenario and what you want to analyze..."
                  className="min-h-[100px] bg-surface-bright/50"
                />
              </div>
              <Button 
                onClick={handleCreateScenario} 
                disabled={isCreating}
                className="w-full gradient-primary"
              >
                {isCreating ? (
                  <>
                    <Activity className="h-4 w-4 mr-2 animate-spin" />
                    Creating...
                  </>
                ) : (
                  <>
                    <Activity className="h-4 w-4 mr-2" />
                    Create Scenario
                  </>
                )}
              </Button>
            </div>
          </DialogContent>
        </Dialog>
      </div>

      {/* Active Scenario Alert */}
      <Card className="glass border-glass-border/50 border-l-4 border-l-primary">
        <CardContent className="p-4">
          <div className="flex items-center gap-3">
            <div className="p-2 rounded-lg bg-primary/20">
              <AlertTriangle className="h-5 w-5 text-primary" />
            </div>
            <div>
              <h3 className="font-semibold text-text-primary">Basic Plan Limitation</h3>
              <p className="text-text-secondary text-sm">
                You can analyze 1 scenario at a time. Upgrade to analyze multiple scenarios simultaneously.
              </p>
            </div>
          </div>
        </CardContent>
      </Card>

      {/* Scenarios Grid */}
      <div className="grid grid-cols-1 lg:grid-cols-2 xl:grid-cols-3 gap-6">
        {scenarios.map((scenario) => (
          <Card key={scenario.id} className="glass border-glass-border/50 hover:shadow-glow transition-all duration-300 group">
            <CardHeader>
              <div className="flex items-start justify-between">
                <div className="flex-1">
                  <CardTitle className="text-lg text-text-primary group-hover:text-primary transition-colors">
                    {scenario.title}
                  </CardTitle>
                  <p className="text-text-muted text-sm mt-2">{scenario.description}</p>
                </div>
                <Badge className={getStatusColor(scenario.status)}>
                  {scenario.status}
                </Badge>
              </div>
            </CardHeader>
            <CardContent className="space-y-4">
              {/* Progress */}
              <div>
                <div className="flex justify-between text-sm mb-2">
                  <span className="text-text-secondary">Progress</span>
                  <span className="text-text-primary">{scenario.progress}%</span>
                </div>
                <Progress value={scenario.progress} className="h-2" />
              </div>

              {/* Metrics */}
              <div className="grid grid-cols-3 gap-3 text-center">
                <div className="p-3 rounded-lg bg-surface-bright/50">
                  <div className="flex items-center justify-center mb-1">
                    <TrendingUp className="h-4 w-4 text-primary" />
                  </div>
                  <p className="text-xs text-text-muted">Impact</p>
                  <p className="font-semibold text-text-primary text-sm">{scenario.metrics.revenue}</p>
                </div>
                <div className="p-3 rounded-lg bg-surface-bright/50">
                  <div className="flex items-center justify-center mb-1">
                    <AlertTriangle className="h-4 w-4 text-yellow-400" />
                  </div>
                  <p className="text-xs text-text-muted">Risk</p>
                  <p className="font-semibold text-text-primary text-sm">{scenario.metrics.risk}</p>
                </div>
                <div className="p-3 rounded-lg bg-surface-bright/50">
                  <div className="flex items-center justify-center mb-1">
                    <BarChart className="h-4 w-4 text-secondary" />
                  </div>
                  <p className="text-xs text-text-muted">Timeline</p>
                  <p className="font-semibold text-text-primary text-sm">{scenario.metrics.timeline}</p>
                </div>
              </div>

              {/* Outcome */}
              <div className="flex items-center justify-between">
                <div>
                  <p className="text-text-muted text-sm">Predicted Outcome</p>
                  <p className={`font-semibold capitalize ${getOutcomeColor(scenario.outcome)}`}>
                    {scenario.outcome === "pending" ? "Analyzing..." : scenario.outcome}
                  </p>
                </div>
                <div className="flex gap-2">
                  {scenario.status === "active" ? (
                    <Button size="sm" variant="outline">
                      <Pause className="h-4 w-4" />
                    </Button>
                  ) : (
                    <Button size="sm" variant="outline">
                      <Play className="h-4 w-4" />
                    </Button>
                  )}
                  <Button size="sm" variant="outline">
                    <BarChart className="h-4 w-4" />
                  </Button>
                </div>
              </div>

              <p className="text-text-muted text-xs">
                Last updated: {scenario.lastUpdated}
              </p>
            </CardContent>
          </Card>
        ))}
      </div>

      {/* Usage Info */}
      <Card className="glass border-glass-border/50">
        <CardHeader>
          <CardTitle className="flex items-center gap-2">
            <Activity className="h-5 w-5 text-primary" />
            Plan Usage
          </CardTitle>
        </CardHeader>
        <CardContent>
          <div className="flex items-center justify-between mb-4">
            <div>
              <p className="text-text-primary font-semibold">Basic Plan - Scenario Analysis</p>
              <p className="text-text-muted text-sm">8 of 10 scenarios used this month</p>
            </div>
            <Badge variant="outline" className="border-primary/50 text-primary">
              80% Used
            </Badge>
          </div>
          <Progress value={80} className="h-2" />
          <div className="mt-4 p-4 rounded-lg bg-yellow-500/10 border border-yellow-500/20">
            <div className="flex items-center gap-2">
              <AlertTriangle className="h-5 w-5 text-yellow-400" />
              <span className="font-semibold text-yellow-400">Running Low</span>
            </div>
            <p className="text-text-muted text-sm mt-1">
              You have 2 scenarios remaining. Consider upgrading for unlimited analysis.
            </p>
          </div>
        </CardContent>
      </Card>
    </div>
  );
};

export default Scenarios;