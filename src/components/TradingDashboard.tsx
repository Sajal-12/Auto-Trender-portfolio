import { useState } from "react";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer, BarChart, Bar, PieChart, Pie, Cell } from "recharts";
import { TrendingUp, TrendingDown, Activity, Target, DollarSign, BarChart3, Code, Zap } from "lucide-react";

const mockPriceData = [
  { time: "09:00", price: 2450, ema8: 2448, ema21: 2445 },
  { time: "09:30", price: 2465, ema8: 2455, ema21: 2448 },
  { time: "10:00", price: 2478, ema8: 2465, ema21: 2452 },
  { time: "10:30", price: 2485, ema8: 2472, ema21: 2458 },
  { time: "11:00", price: 2492, ema8: 2480, ema21: 2465 },
  { time: "11:30", price: 2488, ema8: 2484, ema21: 2468 },
  { time: "12:00", price: 2495, ema8: 2488, ema21: 2472 },
];

const mockBacktestData = [
  { period: "Jan", returns: 12.5, trades: 24, winRate: 92 },
  { period: "Feb", returns: 8.3, trades: 18, winRate: 89 },
  { period: "Mar", returns: 15.7, trades: 31, winRate: 94 },
  { period: "Apr", returns: 10.2, trades: 22, winRate: 91 },
  { period: "May", returns: 18.9, trades: 28, winRate: 96 },
];

const portfolioData = [
  { name: "Active Trades", value: 35, color: "#3b82f6" },
  { name: "Profitable", value: 32, color: "#10b981" },
  { name: "Losses", value: 3, color: "#ef4444" },
];

const TradingDashboard = () => {
  const [activeStrategy, setActiveStrategy] = useState("8:33 EMA");
  const [signalStrength, setSignalStrength] = useState(85);

  return (
    <div className="min-h-screen bg-background p-6 space-y-6">
      {/* Header */}
      <div className="flex items-center justify-between">
        <div>
          <h1 className="text-3xl font-bold bg-gradient-primary bg-clip-text text-transparent">
            Trading Strategy Dashboard
          </h1>
          <p className="text-muted-foreground">Advanced algorithmic trading with 90%+ accuracy</p>
        </div>
        <div className="flex items-center gap-4">
          <Badge variant="secondary" className="bg-profit/10 text-profit border-profit/20">
            <Activity className="w-3 h-3 mr-1" />
            Live Market
          </Badge>
          <Badge variant="secondary" className="bg-primary/10 text-primary border-primary/20">
            Strategy: {activeStrategy}
          </Badge>
        </div>
      </div>

      {/* Key Metrics */}
      <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
        <Card className="bg-gradient-card border-0 shadow-trading">
          <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
            <CardTitle className="text-sm font-medium">Win Rate</CardTitle>
            <Target className="h-4 w-4 text-profit" />
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold text-profit">94.2%</div>
            <p className="text-xs text-muted-foreground">
              <span className="text-profit">+2.1%</span> from last month
            </p>
          </CardContent>
        </Card>

        <Card className="bg-gradient-card border-0 shadow-trading">
          <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
            <CardTitle className="text-sm font-medium">Total P&L</CardTitle>
            <DollarSign className="h-4 w-4 text-profit" />
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold text-profit">+$18,453</div>
            <p className="text-xs text-muted-foreground">
              <span className="text-profit">+15.7%</span> this month
            </p>
          </CardContent>
        </Card>

        <Card className="bg-gradient-card border-0 shadow-trading">
          <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
            <CardTitle className="text-sm font-medium">Risk:Reward</CardTitle>
            <BarChart3 className="h-4 w-4 text-primary" />
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold text-primary">1:3.2</div>
            <p className="text-xs text-muted-foreground">
              Optimal ratio maintained
            </p>
          </CardContent>
        </Card>

        <Card className="bg-gradient-card border-0 shadow-trading">
          <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
            <CardTitle className="text-sm font-medium">Signal Strength</CardTitle>
            <Zap className="h-4 w-4 text-warning" />
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold text-warning">{signalStrength}%</div>
            <p className="text-xs text-muted-foreground">
              Strong buy signal detected
            </p>
          </CardContent>
        </Card>
      </div>

      {/* Main Content Tabs */}
      <Tabs defaultValue="strategy" className="w-full">
        <TabsList className="grid w-full grid-cols-5 bg-secondary/50">
          <TabsTrigger value="strategy">Strategy</TabsTrigger>
          <TabsTrigger value="backtest">Backtest</TabsTrigger>
          <TabsTrigger value="signals">Signals</TabsTrigger>
          <TabsTrigger value="portfolio">Portfolio</TabsTrigger>
          <TabsTrigger value="pinescript">Pine Script</TabsTrigger>
        </TabsList>

        <TabsContent value="strategy" className="space-y-6">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
            <Card className="bg-gradient-card border-0 shadow-trading">
              <CardHeader>
                <CardTitle className="flex items-center gap-2">
                  <TrendingUp className="w-5 h-5 text-profit" />
                  8:33 EMA Strategy Chart
                </CardTitle>
                <CardDescription>
                  Real-time price action with 8 and 33 period EMAs
                </CardDescription>
              </CardHeader>
              <CardContent>
                <ResponsiveContainer width="100%" height={300}>
                  <LineChart data={mockPriceData}>
                    <CartesianGrid strokeDasharray="3 3" stroke="hsl(var(--border))" />
                    <XAxis dataKey="time" stroke="hsl(var(--foreground))" />
                    <YAxis stroke="hsl(var(--foreground))" />
                    <Tooltip 
                      contentStyle={{ 
                        backgroundColor: "hsl(var(--card))", 
                        border: "1px solid hsl(var(--border))",
                        borderRadius: "8px"
                      }} 
                    />
                    <Line type="monotone" dataKey="price" stroke="hsl(var(--primary))" strokeWidth={2} />
                    <Line type="monotone" dataKey="ema8" stroke="hsl(var(--profit))" strokeWidth={1} />
                    <Line type="monotone" dataKey="ema21" stroke="hsl(var(--warning))" strokeWidth={1} />
                  </LineChart>
                </ResponsiveContainer>
              </CardContent>
            </Card>

            <Card className="bg-gradient-card border-0 shadow-trading">
              <CardHeader>
                <CardTitle>Strategy Configuration</CardTitle>
                <CardDescription>Current trading parameters</CardDescription>
              </CardHeader>
              <CardContent className="space-y-4">
                <div className="space-y-3">
                  <div className="flex justify-between items-center">
                    <span className="text-sm text-muted-foreground">Fast EMA Period</span>
                    <Badge variant="secondary">8</Badge>
                  </div>
                  <div className="flex justify-between items-center">
                    <span className="text-sm text-muted-foreground">Slow EMA Period</span>
                    <Badge variant="secondary">33</Badge>
                  </div>
                  <div className="flex justify-between items-center">
                    <span className="text-sm text-muted-foreground">Risk Per Trade</span>
                    <Badge variant="secondary">2%</Badge>
                  </div>
                  <div className="flex justify-between items-center">
                    <span className="text-sm text-muted-foreground">Risk:Reward Ratio</span>
                    <Badge variant="secondary">1:3</Badge>
                  </div>
                  <div className="flex justify-between items-center">
                    <span className="text-sm text-muted-foreground">Stop Loss</span>
                    <Badge variant="destructive">-2%</Badge>
                  </div>
                  <div className="flex justify-between items-center">
                    <span className="text-sm text-muted-foreground">Take Profit</span>
                    <Badge variant="default" className="bg-profit text-profit-foreground">+6%</Badge>
                  </div>
                </div>
                <Button className="w-full bg-gradient-primary shadow-glow">
                  Update Strategy
                </Button>
              </CardContent>
            </Card>
          </div>
        </TabsContent>

        <TabsContent value="backtest" className="space-y-6">
          <Card className="bg-gradient-card border-0 shadow-trading">
            <CardHeader>
              <CardTitle>Backtesting Results</CardTitle>
              <CardDescription>Historical performance analysis over the last 5 months</CardDescription>
            </CardHeader>
            <CardContent>
              <ResponsiveContainer width="100%" height={400}>
                <BarChart data={mockBacktestData}>
                  <CartesianGrid strokeDasharray="3 3" stroke="hsl(var(--border))" />
                  <XAxis dataKey="period" stroke="hsl(var(--foreground))" />
                  <YAxis stroke="hsl(var(--foreground))" />
                  <Tooltip 
                    contentStyle={{ 
                      backgroundColor: "hsl(var(--card))", 
                      border: "1px solid hsl(var(--border))",
                      borderRadius: "8px"
                    }} 
                  />
                  <Bar dataKey="returns" fill="hsl(var(--profit))" />
                  <Bar dataKey="winRate" fill="hsl(var(--primary))" />
                </BarChart>
              </ResponsiveContainer>
            </CardContent>
          </Card>
        </TabsContent>

        <TabsContent value="signals" className="space-y-6">
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
            <Card className="bg-gradient-profit border-0 shadow-trading">
              <CardHeader>
                <CardTitle className="flex items-center gap-2 text-profit-foreground">
                  <TrendingUp className="w-5 h-5" />
                  BUY Signal
                </CardTitle>
              </CardHeader>
              <CardContent className="text-profit-foreground">
                <div className="text-2xl font-bold">EUR/USD</div>
                <p className="text-sm opacity-90">EMA 8 crossed above EMA 33</p>
                <p className="text-xs opacity-75 mt-2">Strength: 92% | Risk: 2%</p>
              </CardContent>
            </Card>

            <Card className="bg-gradient-card border-0 shadow-trading">
              <CardHeader>
                <CardTitle className="flex items-center gap-2 text-muted-foreground">
                  <Activity className="w-5 h-5" />
                  HOLD Signal
                </CardTitle>
              </CardHeader>
              <CardContent>
                <div className="text-2xl font-bold">GBP/USD</div>
                <p className="text-sm text-muted-foreground">EMAs in consolidation</p>
                <p className="text-xs text-muted-foreground mt-2">Strength: 45% | Wait for clarity</p>
              </CardContent>
            </Card>

            <Card className="bg-gradient-loss border-0 shadow-trading">
              <CardHeader>
                <CardTitle className="flex items-center gap-2 text-loss-foreground">
                  <TrendingDown className="w-5 h-5" />
                  SELL Signal
                </CardTitle>
              </CardHeader>
              <CardContent className="text-loss-foreground">
                <div className="text-2xl font-bold">USD/JPY</div>
                <p className="text-sm opacity-90">EMA 8 crossed below EMA 33</p>
                <p className="text-xs opacity-75 mt-2">Strength: 88% | Risk: 2%</p>
              </CardContent>
            </Card>
          </div>
        </TabsContent>

        <TabsContent value="portfolio" className="space-y-6">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
            <Card className="bg-gradient-card border-0 shadow-trading">
              <CardHeader>
                <CardTitle>Portfolio Distribution</CardTitle>
                <CardDescription>Current trade allocation</CardDescription>
              </CardHeader>
              <CardContent>
                <ResponsiveContainer width="100%" height={300}>
                  <PieChart>
                    <Pie
                      data={portfolioData}
                      cx="50%"
                      cy="50%"
                      innerRadius={60}
                      outerRadius={100}
                      dataKey="value"
                    >
                      {portfolioData.map((entry, index) => (
                        <Cell key={`cell-${index}`} fill={entry.color} />
                      ))}
                    </Pie>
                    <Tooltip />
                  </PieChart>
                </ResponsiveContainer>
              </CardContent>
            </Card>

            <Card className="bg-gradient-card border-0 shadow-trading">
              <CardHeader>
                <CardTitle>Risk Management</CardTitle>
                <CardDescription>Portfolio risk metrics</CardDescription>
              </CardHeader>
              <CardContent className="space-y-4">
                <div className="space-y-3">
                  <div className="flex justify-between">
                    <span className="text-sm text-muted-foreground">Total Exposure</span>
                    <span className="font-medium">$47,500</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-sm text-muted-foreground">Available Margin</span>
                    <span className="font-medium text-profit">$12,500</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-sm text-muted-foreground">Max Drawdown</span>
                    <span className="font-medium text-loss">-3.2%</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-sm text-muted-foreground">Sharpe Ratio</span>
                    <span className="font-medium text-profit">2.87</span>
                  </div>
                </div>
                <Button variant="outline" className="w-full">
                  Adjust Risk Parameters
                </Button>
              </CardContent>
            </Card>
          </div>
        </TabsContent>

        <TabsContent value="pinescript" className="space-y-6">
          <Card className="bg-gradient-card border-0 shadow-trading">
            <CardHeader>
              <CardTitle className="flex items-center gap-2">
                <Code className="w-5 h-5 text-primary" />
                Pine Script Generator
              </CardTitle>
              <CardDescription>
                Generate Pine Script code for your 8:33 EMA strategy
              </CardDescription>
            </CardHeader>
            <CardContent className="space-y-4">
              <div className="bg-secondary/30 p-4 rounded-lg font-mono text-sm">
                <pre className="text-foreground">
{`//@version=5
strategy("8:33 EMA Strategy", overlay=true)

// Input parameters
ema_fast = input.int(8, title="Fast EMA Period")
ema_slow = input.int(33, title="Slow EMA Period")
risk_reward = input.float(3.0, title="Risk:Reward Ratio")
risk_percent = input.float(2.0, title="Risk Percentage")

// Calculate EMAs
ema_8 = ta.ema(close, ema_fast)
ema_33 = ta.ema(close, ema_slow)

// Entry conditions
long_condition = ta.crossover(ema_8, ema_33)
short_condition = ta.crossunder(ema_8, ema_33)

// Risk management
entry_price = strategy.position_avg_price
stop_loss_long = entry_price * (1 - risk_percent/100)
take_profit_long = entry_price * (1 + (risk_percent * risk_reward)/100)

// Strategy execution
if long_condition
    strategy.entry("Long", strategy.long)
    strategy.exit("Exit Long", "Long", stop=stop_loss_long, limit=take_profit_long)

if short_condition
    strategy.entry("Short", strategy.short)

// Plot EMAs
plot(ema_8, color=color.green, title="EMA 8")
plot(ema_33, color=color.orange, title="EMA 33")`}
                </pre>
              </div>
              <div className="flex gap-3">
                <Button className="bg-gradient-primary shadow-glow">
                  Copy to Clipboard
                </Button>
                <Button variant="outline">
                  Download .pine File
                </Button>
                <Button variant="outline">
                  Customize Parameters
                </Button>
              </div>
            </CardContent>
          </Card>
        </TabsContent>
      </Tabs>
    </div>
  );
};

export default TradingDashboard;