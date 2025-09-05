"use client";

import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Progress } from "@/components/ui/progress";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { Avatar, AvatarFallback } from "@/components/ui/avatar";

export default function Dashboard() {
    const [selectedTopic, setSelectedTopic] = useState("arrays");
    const [selectedDifficulty, setSelectedDifficulty] = useState("medium");

    // Mock user data
    const userData = {
        name: "Alex Johnson",
        streak: 15,
        totalProblems: 127,
        weeklyGoal: 20,
        currentWeekProgress: 12
    };

    // Topics data
    const topics = [
        { id: "arrays", name: "Arrays", progress: 75, total: 50, completed: 38 },
        { id: "strings", name: "Strings", progress: 60, total: 40, completed: 24 },
        { id: "linkedlist", name: "Linked Lists", progress: 45, total: 30, completed: 14 },
        { id: "stacks", name: "Stacks & Queues", progress: 80, total: 25, completed: 20 },
        { id: "trees", name: "Binary Trees", progress: 30, total: 45, completed: 14 },
        { id: "graphs", name: "Graphs", progress: 20, total: 35, completed: 7 },
        { id: "dp", name: "Dynamic Programming", progress: 15, total: 60, completed: 9 },
        { id: "sorting", name: "Sorting", progress: 90, total: 20, completed: 18 }
    ];

    // Recent activity
    const recentActivity = [
        { problem: "Two Sum", difficulty: "Easy", status: "Solved", time: "12 min", topic: "Arrays" },
        { problem: "Longest Substring", difficulty: "Medium", status: "Attempted", time: "25 min", topic: "Strings" },
        { problem: "Binary Tree Inorder", difficulty: "Medium", status: "Solved", time: "18 min", topic: "Trees" },
        { problem: "Valid Parentheses", difficulty: "Easy", status: "Solved", time: "8 min", topic: "Stacks" }
    ];

    // Recommended problems based on performance
    const recommendedProblems = [
        { name: "3Sum", difficulty: "Medium", topic: "Arrays", estimatedTime: "20-30 min", reason: "Based on your Arrays progress" },
        { name: "Merge Intervals", difficulty: "Medium", topic: "Arrays", estimatedTime: "15-25 min", reason: "Strengthen sorting concepts" },
        { name: "Valid Palindrome", difficulty: "Easy", topic: "Strings", estimatedTime: "10-15 min", reason: "Build confidence" }
    ];

    return (
        <div className="min-h-screen bg-gray-50">
            {/* Header */}
            <header className="bg-white border-b">
                <div className="container mx-auto px-4 py-4">
                    <div className="flex items-center justify-between">
                        <div className="flex items-center space-x-4">
                            <div className="flex items-center space-x-2">
                                <div className="w-8 h-8 bg-gradient-to-r from-blue-600 to-purple-600 rounded-lg flex items-center justify-center">
                                    <span className="text-white font-bold text-sm">CR</span>
                                </div>
                                <span className="text-xl font-bold text-gray-900">CodeRithm</span>
                            </div>
                            <Badge variant="secondary">Dashboard</Badge>
                        </div>
                        <div className="flex items-center space-x-4">
                            <Avatar>
                                <AvatarFallback>AJ</AvatarFallback>
                            </Avatar>
                            <div className="text-right">
                                <p className="font-semibold">{userData.name}</p>
                                <p className="text-sm text-gray-600">{userData.streak} day streak 🔥</p>
                            </div>
                        </div>
                    </div>
                </div>
            </header>

            <div className="container mx-auto px-4 py-8">
                {/* Stats Overview */}
                <div className="grid grid-cols-1 md:grid-cols-4 gap-6 mb-8">
                    <Card>
                        <CardHeader className="pb-2">
                            <CardTitle className="text-sm font-medium text-gray-600">Total Problems</CardTitle>
                        </CardHeader>
                        <CardContent>
                            <div className="text-2xl font-bold">{userData.totalProblems}</div>
                            <p className="text-xs text-green-600">+5 this week</p>
                        </CardContent>
                    </Card>

                    <Card>
                        <CardHeader className="pb-2">
                            <CardTitle className="text-sm font-medium text-gray-600">Current Streak</CardTitle>
                        </CardHeader>
                        <CardContent>
                            <div className="text-2xl font-bold">{userData.streak} days</div>
                            <p className="text-xs text-blue-600">Keep it up!</p>
                        </CardContent>
                    </Card>

                    <Card>
                        <CardHeader className="pb-2">
                            <CardTitle className="text-sm font-medium text-gray-600">Weekly Goal</CardTitle>
                        </CardHeader>
                        <CardContent>
                            <div className="text-2xl font-bold">{userData.currentWeekProgress}/{userData.weeklyGoal}</div>
                            <Progress value={(userData.currentWeekProgress / userData.weeklyGoal) * 100} className="mt-2" />
                        </CardContent>
                    </Card>

                    <Card>
                        <CardHeader className="pb-2">
                            <CardTitle className="text-sm font-medium text-gray-600">Accuracy</CardTitle>
                        </CardHeader>
                        <CardContent>
                            <div className="text-2xl font-bold">78%</div>
                            <p className="text-xs text-orange-600">+2% from last week</p>
                        </CardContent>
                    </Card>
                </div>

                {/* Main Content */}
                <Tabs defaultValue="practice" className="space-y-6">
                    <TabsList className="grid w-full grid-cols-4">
                        <TabsTrigger value="practice">Practice</TabsTrigger>
                        <TabsTrigger value="progress">Progress</TabsTrigger>
                        <TabsTrigger value="analytics">Analytics</TabsTrigger>
                        <TabsTrigger value="settings">Settings</TabsTrigger>
                    </TabsList>

                    {/* Practice Tab */}
                    <TabsContent value="practice" className="space-y-6">
                        <div className="grid lg:grid-cols-3 gap-6">
                            {/* Problem Selection */}
                            <div className="lg:col-span-2">
                                <Card>
                                    <CardHeader>
                                        <CardTitle>Start Practice Session</CardTitle>
                                        <CardDescription>Choose your focus area and difficulty level</CardDescription>
                                    </CardHeader>
                                    <CardContent className="space-y-4">
                                        <div className="grid grid-cols-2 gap-4">
                                            <div>
                                                <label className="text-sm font-medium mb-2 block">Topic</label>
                                                <Select value={selectedTopic} onValueChange={setSelectedTopic}>
                                                    <SelectTrigger>
                                                        <SelectValue />
                                                    </SelectTrigger>
                                                    <SelectContent>
                                                        {topics.map(topic => (
                                                            <SelectItem key={topic.id} value={topic.id}>
                                                                {topic.name}
                                                            </SelectItem>
                                                        ))}
                                                    </SelectContent>
                                                </Select>
                                            </div>
                                            <div>
                                                <label className="text-sm font-medium mb-2 block">Difficulty</label>
                                                <Select value={selectedDifficulty} onValueChange={setSelectedDifficulty}>
                                                    <SelectTrigger>
                                                        <SelectValue />
                                                    </SelectTrigger>
                                                    <SelectContent>
                                                        <SelectItem value="easy">Easy</SelectItem>
                                                        <SelectItem value="medium">Medium</SelectItem>
                                                        <SelectItem value="hard">Hard</SelectItem>
                                                    </SelectContent>
                                                </Select>
                                            </div>
                                        </div>
                                        <div className="flex space-x-4">
                                            <Button className="flex-1">Start Adaptive Session</Button>
                                            <Button variant="outline" className="flex-1">Random Problem</Button>
                                        </div>
                                    </CardContent>
                                </Card>

                                {/* Recommended Problems */}
                                <Card className="mt-6">
                                    <CardHeader>
                                        <CardTitle>Recommended for You</CardTitle>
                                        <CardDescription>AI-curated problems based on your performance</CardDescription>
                                    </CardHeader>
                                    <CardContent>
                                        <div className="space-y-4">
                                            {recommendedProblems.map((problem, index) => (
                                                <div key={index} className="flex items-center justify-between p-4 border rounded-lg">
                                                    <div>
                                                        <h4 className="font-semibold">{problem.name}</h4>
                                                        <div className="flex items-center space-x-2 mt-1">
                                                            <Badge variant={problem.difficulty === 'Easy' ? 'secondary' : problem.difficulty === 'Medium' ? 'default' : 'destructive'}>
                                                                {problem.difficulty}
                                                            </Badge>
                                                            <span className="text-sm text-gray-600">{problem.topic}</span>
                                                            <span className="text-sm text-gray-500">• {problem.estimatedTime}</span>
                                                        </div>
                                                        <p className="text-sm text-gray-600 mt-1">{problem.reason}</p>
                                                    </div>
                                                    <Button size="sm">Solve</Button>
                                                </div>
                                            ))}
                                        </div>
                                    </CardContent>
                                </Card>
                            </div>

                            {/* Recent Activity */}
                            <div>
                                <Card>
                                    <CardHeader>
                                        <CardTitle>Recent Activity</CardTitle>
                                    </CardHeader>
                                    <CardContent>
                                        <div className="space-y-4">
                                            {recentActivity.map((activity, index) => (
                                                <div key={index} className="flex items-center justify-between">
                                                    <div>
                                                        <p className="font-medium text-sm">{activity.problem}</p>
                                                        <div className="flex items-center space-x-2 mt-1">
                                                            <Badge variant="outline" className="text-xs">
                                                                {activity.difficulty}
                                                            </Badge>
                                                            <span className="text-xs text-gray-500">{activity.time}</span>
                                                        </div>
                                                    </div>
                                                    <Badge variant={activity.status === 'Solved' ? 'default' : 'secondary'}>
                                                        {activity.status}
                                                    </Badge>
                                                </div>
                                            ))}
                                        </div>
                                    </CardContent>
                                </Card>
                            </div>
                        </div>
                    </TabsContent>

                    {/* Progress Tab */}
                    <TabsContent value="progress" className="space-y-6">
                        <Card>
                            <CardHeader>
                                <CardTitle>Topic Progress</CardTitle>
                                <CardDescription>Your progress across different DSA topics</CardDescription>
                            </CardHeader>
                            <CardContent>
                                <div className="grid gap-4">
                                    {topics.map((topic) => (
                                        <div key={topic.id} className="space-y-2">
                                            <div className="flex justify-between items-center">
                                                <span className="font-medium">{topic.name}</span>
                                                <span className="text-sm text-gray-600">{topic.completed}/{topic.total}</span>
                                            </div>
                                            <Progress value={topic.progress} className="h-2" />
                                        </div>
                                    ))}
                                </div>
                            </CardContent>
                        </Card>
                    </TabsContent>

                    {/* Analytics Tab */}
                    <TabsContent value="analytics" className="space-y-6">
                        <div className="grid md:grid-cols-2 gap-6">
                            <Card>
                                <CardHeader>
                                    <CardTitle>Performance Insights</CardTitle>
                                </CardHeader>
                                <CardContent>
                                    <div className="space-y-4">
                                        <div className="flex justify-between">
                                            <span>Average Solve Time</span>
                                            <span className="font-semibold">18 minutes</span>
                                        </div>
                                        <div className="flex justify-between">
                                            <span>Strongest Topic</span>
                                            <span className="font-semibold">Sorting</span>
                                        </div>
                                        <div className="flex justify-between">
                                            <span>Needs Improvement</span>
                                            <span className="font-semibold">Dynamic Programming</span>
                                        </div>
                                        <div className="flex justify-between">
                                            <span>Success Rate</span>
                                            <span className="font-semibold">78%</span>
                                        </div>
                                    </div>
                                </CardContent>
                            </Card>

                            <Card>
                                <CardHeader>
                                    <CardTitle>Weekly Summary</CardTitle>
                                </CardHeader>
                                <CardContent>
                                    <div className="space-y-4">
                                        <div className="flex justify-between">
                                            <span>Problems Solved</span>
                                            <span className="font-semibold">12</span>
                                        </div>
                                        <div className="flex justify-between">
                                            <span>Time Spent</span>
                                            <span className="font-semibold">4.5 hours</span>
                                        </div>
                                        <div className="flex justify-between">
                                            <span>New Topics Explored</span>
                                            <span className="font-semibold">2</span>
                                        </div>
                                        <div className="flex justify-between">
                                            <span>Streak Maintained</span>
                                            <span className="font-semibold">7 days</span>
                                        </div>
                                    </div>
                                </CardContent>
                            </Card>
                        </div>
                    </TabsContent>

                    {/* Settings Tab */}
                    <TabsContent value="settings" className="space-y-6">
                        <Card>
                            <CardHeader>
                                <CardTitle>Learning Preferences</CardTitle>
                                <CardDescription>Customize your learning experience</CardDescription>
                            </CardHeader>
                            <CardContent className="space-y-4">
                                <div>
                                    <label className="text-sm font-medium mb-2 block">Daily Goal</label>
                                    <Select defaultValue="3">
                                        <SelectTrigger className="w-full">
                                            <SelectValue />
                                        </SelectTrigger>
                                        <SelectContent>
                                            <SelectItem value="1">1 problem per day</SelectItem>
                                            <SelectItem value="3">3 problems per day</SelectItem>
                                            <SelectItem value="5">5 problems per day</SelectItem>
                                            <SelectItem value="10">10 problems per day</SelectItem>
                                        </SelectContent>
                                    </Select>
                                </div>
                                <div>
                                    <label className="text-sm font-medium mb-2 block">Difficulty Preference</label>
                                    <Select defaultValue="adaptive">
                                        <SelectTrigger className="w-full">
                                            <SelectValue />
                                        </SelectTrigger>
                                        <SelectContent>
                                            <SelectItem value="easy">Focus on Easy</SelectItem>
                                            <SelectItem value="medium">Focus on Medium</SelectItem>
                                            <SelectItem value="hard">Focus on Hard</SelectItem>
                                            <SelectItem value="adaptive">Adaptive (Recommended)</SelectItem>
                                        </SelectContent>
                                    </Select>
                                </div>
                                <Button>Save Preferences</Button>
                            </CardContent>
                        </Card>
                    </TabsContent>
                </Tabs>
            </div>
        </div>
    );
}
