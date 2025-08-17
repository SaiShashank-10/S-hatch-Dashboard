import { useState } from "react";
import { Brain, Plus, Download, Eye, Calendar, Filter, Search } from "lucide-react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
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
import { Textarea } from "@/components/ui/textarea";
import { Progress } from "@/components/ui/progress";

const Reports = () => {
  const [isGenerating, setIsGenerating] = useState(false);
  const [reportData, setReportData] = useState("");

  const reports = [
    {
      id: 1,
      title: "Q4 Financial Analysis",
      description: "Comprehensive financial performance review with AI insights",
      status: "completed",
      date: "2024-01-15",
      type: "Financial",
      insights: 23,
      downloadUrl: "#"
    },
    {
      id: 2,
      title: "Market Expansion Study",
      description: "Analysis of potential new market opportunities",
      status: "processing",
      date: "2024-01-16",
      type: "Market",
      insights: 0,
      progress: 65
    },
    {
      id: 3,
      title: "Customer Behavior Report",
      description: "Deep dive into customer patterns and preferences",
      status: "completed",
      date: "2024-01-10",
      type: "Customer",
      insights: 18,
      downloadUrl: "#"
    },
    {
      id: 4,
      title: "Product Performance Analysis",
      description: "Evaluation of product metrics and user engagement",
      status: "completed",
      date: "2024-01-08",
      type: "Product",
      insights: 15,
      downloadUrl: "#"
    }
  ];

  const handleGenerateReport = async () => {
    setIsGenerating(true);
    // Simulate API call
    setTimeout(() => {
      setIsGenerating(false);
    }, 3000);
  };

  return (
    <div className="space-y-8">
      {/* Header */}
      <div className="flex flex-col gap-4 md:flex-row md:items-center md:justify-between">
        <div>
          <h1 className="text-3xl font-bold bg-gradient-to-r from-primary to-secondary bg-clip-text text-transparent">
            AI Reports
          </h1>
          <p className="text-text-secondary mt-2">
            Generate and manage your AI-powered business reports.
          </p>
        </div>
        <Dialog>
          <DialogTrigger asChild>
            <Button className="gradient-primary">
              <Plus className="h-4 w-4 mr-2" />
              Generate Report
            </Button>
          </DialogTrigger>
          <DialogContent className="glass border-glass-border/50 max-w-md">
            <DialogHeader>
              <DialogTitle className="flex items-center gap-2">
                <Brain className="h-5 w-5 text-primary" />
                Generate AI Report
              </DialogTitle>
              <DialogDescription>
                Provide data or context for your AI report generation.
              </DialogDescription>
            </DialogHeader>
            <div className="space-y-4">
              <div>
                <label className="text-sm font-medium text-text-primary block mb-2">
                  Report Type
                </label>
                <Select>
                  <SelectTrigger>
                    <SelectValue placeholder="Select report type" />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="financial">Financial Analysis</SelectItem>
                    <SelectItem value="market">Market Research</SelectItem>
                    <SelectItem value="customer">Customer Insights</SelectItem>
                    <SelectItem value="product">Product Analysis</SelectItem>
                  </SelectContent>
                </Select>
              </div>
              <div>
                <label className="text-sm font-medium text-text-primary block mb-2">
                  Data Input
                </label>
                <Textarea
                  placeholder="Paste your data here or describe what you want to analyze..."
                  value={reportData}
                  onChange={(e) => setReportData(e.target.value)}
                  className="min-h-[100px] bg-surface-bright/50"
                />
              </div>
              <Button 
                onClick={handleGenerateReport} 
                disabled={isGenerating || !reportData.trim()}
                className="w-full gradient-primary"
              >
                {isGenerating ? (
                  <>
                    <Brain className="h-4 w-4 mr-2 animate-spin" />
                    Generating...
                  </>
                ) : (
                  <>
                    <Brain className="h-4 w-4 mr-2" />
                    Generate Report
                  </>
                )}
              </Button>
            </div>
          </DialogContent>
        </Dialog>
      </div>

      {/* Filters */}
      <Card className="glass border-glass-border/50">
        <CardContent className="p-4">
          <div className="flex flex-col md:flex-row gap-4">
            <div className="relative flex-1">
              <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 h-4 w-4 text-text-muted" />
              <Input
                placeholder="Search reports..."
                className="pl-10 bg-surface-bright/50"
              />
            </div>
            <Select>
              <SelectTrigger className="w-full md:w-[180px]">
                <SelectValue placeholder="All Types" />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="all">All Types</SelectItem>
                <SelectItem value="financial">Financial</SelectItem>
                <SelectItem value="market">Market</SelectItem>
                <SelectItem value="customer">Customer</SelectItem>
                <SelectItem value="product">Product</SelectItem>
              </SelectContent>
            </Select>
            <Select>
              <SelectTrigger className="w-full md:w-[180px]">
                <SelectValue placeholder="All Status" />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="all">All Status</SelectItem>
                <SelectItem value="completed">Completed</SelectItem>
                <SelectItem value="processing">Processing</SelectItem>
                <SelectItem value="failed">Failed</SelectItem>
              </SelectContent>
            </Select>
          </div>
        </CardContent>
      </Card>

      {/* Reports Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {reports.map((report) => (
          <Card key={report.id} className="glass border-glass-border/50 hover:shadow-glow transition-all duration-300 group">
            <CardHeader>
              <div className="flex items-start justify-between">
                <div className="flex-1">
                  <CardTitle className="text-lg text-text-primary group-hover:text-primary transition-colors">
                    {report.title}
                  </CardTitle>
                  <p className="text-text-muted text-sm mt-2">{report.description}</p>
                </div>
                <Badge 
                  variant={report.status === "completed" ? "default" : report.status === "processing" ? "secondary" : "destructive"}
                  className={report.status === "completed" ? "bg-primary" : ""}
                >
                  {report.status}
                </Badge>
              </div>
            </CardHeader>
            <CardContent>
              <div className="space-y-4">
                <div className="flex items-center justify-between text-sm">
                  <span className="text-text-muted flex items-center gap-1">
                    <Calendar className="h-4 w-4" />
                    {new Date(report.date).toLocaleDateString()}
                  </span>
                  <Badge variant="outline">{report.type}</Badge>
                </div>

                {report.status === "processing" && (
                  <div>
                    <div className="flex justify-between text-sm mb-2">
                      <span className="text-text-secondary">Progress</span>
                      <span className="text-text-primary">{report.progress}%</span>
                    </div>
                    <Progress value={report.progress} className="h-2" />
                  </div>
                )}

                {report.status === "completed" && (
                  <div className="flex items-center justify-between">
                    <span className="text-text-secondary text-sm">
                      {report.insights} insights generated
                    </span>
                    <div className="flex gap-2">
                      <Button size="sm" variant="outline">
                        <Eye className="h-4 w-4" />
                      </Button>
                      <Button size="sm" variant="outline">
                        <Download className="h-4 w-4" />
                      </Button>
                    </div>
                  </div>
                )}
              </div>
            </CardContent>
          </Card>
        ))}
      </div>

      {/* Usage Info */}
      <Card className="glass border-glass-border/50">
        <CardHeader>
          <CardTitle className="flex items-center gap-2">
            <Brain className="h-5 w-5 text-primary" />
            Plan Usage
          </CardTitle>
        </CardHeader>
        <CardContent>
          <div className="flex items-center justify-between mb-4">
            <div>
              <p className="text-text-primary font-semibold">Basic Plan - AI Reports</p>
              <p className="text-text-muted text-sm">12 of 50 reports used this month</p>
            </div>
            <Badge variant="outline" className="border-primary/50 text-primary">
              24% Used
            </Badge>
          </div>
          <Progress value={24} className="h-2" />
          <p className="text-text-muted text-sm mt-2">
            Resets on the 1st of each month. Upgrade for unlimited reports.
          </p>
        </CardContent>
      </Card>
    </div>
  );
};

export default Reports;