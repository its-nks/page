"use client";

import { useState, useEffect } from "react";
import { Button } from "@/components/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/card";
import { Badge } from "@/components/badge";
import { Textarea } from "@/components/textarea";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/select";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/tabs";
import { Progress } from "@/components/progress";
import Link from "next/link";

export default function PracticePage() {
    const [selectedLanguage, setSelectedLanguage] = useState("javascript");
    const [code, setCode] = useState("");
    const [timeElapsed, setTimeElapsed] = useState(0);
    const [isRunning, setIsRunning] = useState(false);

    // Mock problem data
    const problem = {
        id: 1,
        title: "Two Sum",
        difficulty: "Easy",
        topic: "Arrays",
        description: `Given an array of integers nums and an integer target, return indices of the two numbers such that they add up to target.

You may assume that each input would have exactly one solution, and you may not use the same element twice.

You can return the answer in any order.`,
        examples: [
            {
                input: "nums = [2,7,11,15], target = 9",
                output: "[0,1]",
                explanation: "Because nums[0] + nums[1] == 9, we return [0, 1]."
            },
            {
                input: "nums = [3,2,4], target = 6",
                output: "[1,2]",
                explanation: "Because nums[1] + nums[2] == 6, we return [1, 2]."
            }
        ],
        constraints: [
            "2 ≤ nums.length ≤ 10⁴",
            "-10⁹ ≤ nums[i] ≤ 10⁹",
            "-10⁹ ≤ target ≤ 10⁹",
            "Only one valid answer exists."
        ],
        hints: [
            "A really brute force way would be to search for all possible pairs of numbers but that would be too slow. Again, it's best to try out brute force solutions for just for completeness. It is from these brute force solutions that you can come up with optimizations.",
            "So, if we fix one of the numbers, say x, we have to scan the entire array to find the next number y which is value - x where value is the input parameter. Can we change our array somehow so that this search becomes faster?",
            "The second train of thought is, without changing the array, can we use additional space somehow? Like maybe a hash map to speed up the search?"
        ]
    };

    const codeTemplates = {
        javascript: `function twoSum(nums, target) {
    // Write your solution here
    
}`,
        python: `def twoSum(nums, target):
    # Write your solution here
    pass`,
        java: `class Solution {
    public int[] twoSum(int[] nums, int target) {
        // Write your solution here
        
    }
}`,
        cpp: `class Solution {
public:
    vector<int> twoSum(vector<int>& nums, int target) {
        // Write your solution here
        
    }
};`
    };

    // Timer effect
    useEffect(() => {
        let interval: NodeJS.Timeout;
        if (isRunning) {
            interval = setInterval(() => {
                setTimeElapsed(prev => prev + 1);
            }, 1000);
        }
        return () => clearInterval(interval);
    }, [isRunning]);

    // Start timer when component mounts
    useEffect(() => {
        setIsRunning(true);
        setCode(codeTemplates[selectedLanguage as keyof typeof codeTemplates]);
    }, []);

    // Update code template when language changes
    useEffect(() => {
        setCode(codeTemplates[selectedLanguage as keyof typeof codeTemplates]);
    }, [selectedLanguage]);

    const formatTime = (seconds: number) => {
        const mins = Math.floor(seconds / 60);
        const secs = seconds % 60;
        return `${mins.toString().padStart(2, '0')}:${secs.toString().padStart(2, '0')}`;
    };

    const handleSubmit = () => {
        // Handle code submission
        console.log("Submitting code:", code);
        setIsRunning(false);
    };

    const handleRunCode = () => {
        // Handle code execution
        console.log("Running code:", code);
    };

    return (
        <div className="min-h-screen bg-gray-50">
            {/* Header */}
            <header className="bg-white border-b">
                <div className="container mx-auto px-4 py-4">
                    <div className="flex items-center justify-between">
                        <div className="flex items-center space-x-4">
                            <Link href="/dashboard" className="flex items-center space-x-2">
                                <div className="w-8 h-8 bg-gradient-to-r from-blue-600 to-purple-600 rounded-lg flex items-center justify-center">
                                    <span className="text-white font-bold text-sm">CR</span>
                                </div>
                                <span className="text-xl font-bold text-gray-900">CodeRithm</span>
                            </Link>
                            <Badge variant="secondary">Practice Session</Badge>
                        </div>
                        <div className="flex items-center space-x-4">
                            <div className="text-sm text-gray-600">
                                Time: <span className="font-mono font-semibold">{formatTime(timeElapsed)}</span>
                            </div>
                            <Button variant="outline" size="sm">
                                Give Up
                            </Button>
                        </div>
                    </div>
                </div>
            </header>

            <div className="container mx-auto px-4 py-6">
                <div className="grid lg:grid-cols-2 gap-6 h-[calc(100vh-140px)]">
                    {/* Problem Description */}
                    <div className="space-y-4 overflow-y-auto">
                        <Card>
                            <CardHeader>
                                <div className="flex items-center justify-between">
                                    <CardTitle className="text-2xl">{problem.title}</CardTitle>
                                    <div className="flex items-center space-x-2">
                                        <Badge variant={problem.difficulty === 'Easy' ? 'secondary' : problem.difficulty === 'Medium' ? 'default' : 'destructive'}>
                                            {problem.difficulty}
                                        </Badge>
                                        <Badge variant="outline">{problem.topic}</Badge>
                                    </div>
                                </div>
                            </CardHeader>
                            <CardContent>
                                <div className="prose prose-sm max-w-none">
                                    <p className="text-gray-700 whitespace-pre-line">{problem.description}</p>
                                </div>
                            </CardContent>
                        </Card>

                        <Tabs defaultValue="examples" className="w-full">
                            <TabsList className="grid w-full grid-cols-3">
                                <TabsTrigger value="examples">Examples</TabsTrigger>
                                <TabsTrigger value="constraints">Constraints</TabsTrigger>
                                <TabsTrigger value="hints">Hints</TabsTrigger>
                            </TabsList>

                            <TabsContent value="examples" className="space-y-4">
                                {problem.examples.map((example, index) => (
                                    <Card key={index}>
                                        <CardHeader>
                                            <CardTitle className="text-sm">Example {index + 1}</CardTitle>
                                        </CardHeader>
                                        <CardContent className="space-y-2">
                                            <div>
                                                <strong>Input:</strong> <code className="bg-gray-100 px-2 py-1 rounded text-sm">{example.input}</code>
                                            </div>
                                            <div>
                                                <strong>Output:</strong> <code className="bg-gray-100 px-2 py-1 rounded text-sm">{example.output}</code>
                                            </div>
                                            <div>
                                                <strong>Explanation:</strong> {example.explanation}
                                            </div>
                                        </CardContent>
                                    </Card>
                                ))}
                            </TabsContent>

                            <TabsContent value="constraints">
                                <Card>
                                    <CardContent className="pt-6">
                                        <ul className="space-y-2">
                                            {problem.constraints.map((constraint, index) => (
                                                <li key={index} className="text-sm">
                                                    • <code className="bg-gray-100 px-2 py-1 rounded">{constraint}</code>
                                                </li>
                                            ))}
                                        </ul>
                                    </CardContent>
                                </Card>
                            </TabsContent>

                            <TabsContent value="hints">
                                <div className="space-y-4">
                                    {problem.hints.map((hint, index) => (
                                        <Card key={index}>
                                            <CardHeader>
                                                <CardTitle className="text-sm">Hint {index + 1}</CardTitle>
                                            </CardHeader>
                                            <CardContent>
                                                <p className="text-sm text-gray-700">{hint}</p>
                                            </CardContent>
                                        </Card>
                                    ))}
                                </div>
                            </TabsContent>
                        </Tabs>
                    </div>

                    {/* Code Editor */}
                    <div className="space-y-4">
                        <Card className="h-full flex flex-col">
                            <CardHeader>
                                <div className="flex items-center justify-between">
                                    <CardTitle>Code Editor</CardTitle>
                                    <Select value={selectedLanguage} onValueChange={setSelectedLanguage}>
                                        <SelectTrigger className="w-40">
                                            <SelectValue />
                                        </SelectTrigger>
                                        <SelectContent>
                                            <SelectItem value="javascript">JavaScript</SelectItem>
                                            <SelectItem value="python">Python</SelectItem>
                                            <SelectItem value="java">Java</SelectItem>
                                            <SelectItem value="cpp">C++</SelectItem>
                                        </SelectContent>
                                    </Select>
                                </div>
                            </CardHeader>
                            <CardContent className="flex-1 flex flex-col">
                                <Textarea
                                    value={code}
                                    onChange={(e) => setCode(e.target.value)}
                                    className="flex-1 font-mono text-sm resize-none"
                                    placeholder="Write your solution here..."
                                />
                                <div className="flex justify-between items-center mt-4">
                                    <div className="flex space-x-2">
                                        <Button variant="outline" onClick={handleRunCode}>
                                            Run Code
                                        </Button>
                                        <Button onClick={handleSubmit} className="bg-green-600 hover:bg-green-700">
                                            Submit Solution
                                        </Button>
                                    </div>
                                    <div className="text-sm text-gray-500">
                                        Auto-save enabled
                                    </div>
                                </div>
                            </CardContent>
                        </Card>

                        {/* Test Results */}
                        <Card>
                            <CardHeader>
                                <CardTitle className="text-sm">Test Results</CardTitle>
                            </CardHeader>
                            <CardContent>
                                <div className="space-y-2">
                                    <div className="flex items-center justify-between text-sm">
                                        <span>Test Case 1</span>
                                        <Badge variant="secondary">Pending</Badge>
                                    </div>
                                    <div className="flex items-center justify-between text-sm">
                                        <span>Test Case 2</span>
                                        <Badge variant="secondary">Pending</Badge>
                                    </div>
                                    <div className="flex items-center justify-between text-sm">
                                        <span>Test Case 3</span>
                                        <Badge variant="secondary">Pending</Badge>
                                    </div>
                                </div>
                            </CardContent>
                        </Card>
                    </div>
                </div>
            </div>
        </div>
    );
}
