"use client";
import { Menu, X, Check } from "lucide-react";
import React, { useState } from "react";
import { Button } from "@/components/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/card";
import { Badge } from "@/components/badge";
import { Progress } from "@/components/progress";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/tabs";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/select";
import { Avatar, AvatarFallback } from "@/components/avatar";
import Link from "next/link";



export default function HomePage() {
    const [isMenuOpen, setIsMenuOpen] = useState(false);
    const [selectedTopic, setSelectedTopic] = useState("arrays");
    const [selectedDifficulty, setSelectedDifficulty] = useState("medium");

    // Company logos data
    const companies = [
        "Google", "Meta", "Apple", "NVIDIA", "Samsung",
        "Qualcomm", "Mastercard", "Microsoft", "Amazon", "Netflix"
    ];

    // Pricing plans data
    const pricingPlans = [
        {
            name: "Free Trial",
            price: "Free",
            duration: "21 Days",
            features: [
                "Access to basic problems",
                "Limited topic selection",
                "Basic progress tracking",
                "Community support"
            ]
        },
        {
            name: "Standard Plan",
            price: "₹299",
            duration: "6 Months",
            features: [
                "All problem categories",
                "Adaptive difficulty system",
                "Detailed analytics",
                "Priority support",
                "Custom study plans"
            ]
        },
        {
            name: "Premium Plan",
            price: "₹999",
            duration: "2 Years",
            features: [
                "Everything in Standard",
                "1-on-1 mentorship",
                "Mock interviews",
                "Company-specific prep",
                "Lifetime updates",
                "Advanced AI insights"
            ]
        }
    ];

    return (
        <div className="min-h-screen bg-gradient-to-br from-blue-50 via-white to-purple-50">
            {/* Header */}
            <header className="sticky top-0 z-50 bg-white/80 backdrop-blur-md border-b">
                <div className="container mx-auto px-4 py-4">
                    <div className="flex items-center justify-between">
                        {/* Logo */}
                        <div className="flex items-center space-x-2">
                            <div className="w-8 h-8 bg-gradient-to-r from-blue-600 to-purple-600 rounded-lg flex items-center justify-center">
                                <span className="text-white font-bold text-sm">CR</span>
                            </div>
                            <span className="text-xl font-bold text-gray-900">CodeRithm</span>
                        </div>

                        {/* Desktop Navigation */}
                        <nav className="hidden md:flex items-center space-x-8">
                            <Link href="/">Home</Link>
                            <Link href="/about">About</Link>
                            <Link href="/dashboard">Dashboard</Link>
                            <Link href="/login">Login</Link>
                            <Button variant="outline" className="mr-2">Register</Button>
                            <Avatar className="w-8 h-8">
                                <AvatarFallback>U</AvatarFallback>
                            </Avatar>
                        </nav>

                        {/* Mobile Menu Button */}
                        <button
                            className="md:hidden"
                            onClick={() => setIsMenuOpen(!isMenuOpen)}
                        >
                            {isMenuOpen ? <X /> : <Menu />}
                        </button>
                    </div>

                    {/* Mobile Navigation */}
                    {isMenuOpen && (
                        <nav className="md:hidden mt-4 pb-4 border-t pt-4">
                            <div className="flex flex-col space-y-4">
                                <a href="#home" className="text-gray-700 hover:text-blue-600 transition-colors">Home</a>
                                <a href="#about" className="text-gray-700 hover:text-blue-600 transition-colors">About</a>
                                <a href="#dashboard" className="text-gray-700 hover:text-blue-600 transition-colors">Dashboard</a>
                                <a href="#login" className="text-gray-700 hover:text-blue-600 transition-colors">Login</a>
                                <Button variant="outline" className="w-fit">Register</Button>
                            </div>
                        </nav>
                    )}
                </div>
            </header>

            {/* Hero Section */}
            <section id="home" className="py-20 px-4">
                <div className="container mx-auto text-center">
                    <div className="max-w-4xl mx-auto">
                        <h1 className="text-5xl md:text-7xl font-bold text-gray-900 mb-6 leading-tight">
                            Master DSA with
                            <span className="bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent"> Adaptive Learning</span>
                        </h1>
                        <p className="text-xl text-gray-600 mb-8 max-w-2xl mx-auto">
                            Build consistent problem-solving habits with our AI-powered platform that adapts to your learning pace and strengthens your weak areas.
                        </p>
                        <div className="flex flex-col sm:flex-row gap-4 justify-center">
                            <Button size="lg" className="bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700 text-white px-8 py-4 text-lg">
                                Start Your Journey
                            </Button>
                            <Button size="lg" variant="outline" className="px-8 py-4 text-lg">
                                Learn More
                            </Button>
                        </div>
                    </div>
                </div>
            </section>

            {/* About Section */}
            <section id="about" className="py-20 px-4 bg-white">
                <div className="container mx-auto">
                    <div className="max-w-4xl mx-auto text-center">
                        <h2 className="text-4xl font-bold text-gray-900 mb-6">
                            Revolutionizing DSA Learning
                        </h2>
                        <p className="text-lg text-gray-600 mb-12">
                            CodeRithm is an adaptive DSA practice platform that personalizes your learning journey.
                            Choose your focus topics, set your difficulty preferences, and let our AI adjust the challenge
                            based on your performance. Build lasting problem-solving habits with curated questions,
                            real-time feedback, and progressive difficulty scaling.
                        </p>
                        <div className="grid md:grid-cols-3 gap-8">
                            <div className="text-center">
                                <div className="w-16 h-16 bg-blue-100 rounded-full flex items-center justify-center mx-auto mb-4">
                                    <span className="text-2xl">🎯</span>
                                </div>
                                <h3 className="text-xl font-semibold mb-2">Adaptive Learning</h3>
                                <p className="text-gray-600">AI-powered difficulty adjustment based on your performance</p>
                            </div>
                            <div className="text-center">
                                <div className="w-16 h-16 bg-purple-100 rounded-full flex items-center justify-center mx-auto mb-4">
                                    <span className="text-2xl">📊</span>
                                </div>
                                <h3 className="text-xl font-semibold mb-2">Progress Tracking</h3>
                                <p className="text-gray-600">Detailed analytics to monitor your growth and weak areas</p>
                            </div>
                            <div className="text-center">
                                <div className="w-16 h-16 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-4">
                                    <span className="text-2xl">🏆</span>
                                </div>
                                <h3 className="text-xl font-semibold mb-2">Habit Formation</h3>
                                <p className="text-gray-600">Consistent practice schedules for long-term success</p>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* Company Logos Section */}
            <section className="py-16 px-4 bg-gray-50">
                <div className="container mx-auto text-center">
                    <h2 className="text-3xl font-bold text-gray-900 mb-2">
                        Delivering job-ready developers
                    </h2>
                    <p className="text-lg text-gray-600 mb-12">
                        Companies where our graduates are working
                    </p>
                    <div className="overflow-hidden">
                        <div className="flex animate-scroll space-x-12">
                            {[...companies, ...companies].map((company, index) => (
                                <div key={index} className="flex-shrink-0">
                                    <div className="w-32 h-16 bg-white rounded-lg shadow-sm flex items-center justify-center">
                                        <span className="text-gray-700 font-semibold">{company}</span>
                                    </div>
                                </div>
                            ))}
                        </div>
                    </div>
                </div>
            </section>

            {/* Features Section */}
            <section className="py-20 px-4 bg-white">
                <div className="container mx-auto text-center">
                    <h2 className="text-4xl font-bold text-gray-900 mb-6">
                        Why Choose CodeRithm?
                    </h2>
                    <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8 mt-12">
                        <div className="text-center">
                            <h3 className="text-xl font-semibold mb-4">Personalized Learning Path</h3>
                            <p className="text-gray-600">Tailored curriculum based on your strengths and weaknesses</p>
                        </div>
                        <div className="text-center">
                            <h3 className="text-xl font-semibold mb-4">Real-time Feedback</h3>
                            <p className="text-gray-600">Instant insights on your problem-solving approach</p>
                        </div>
                        <div className="text-center">
                            <h3 className="text-xl font-semibold mb-4">Industry-Standard Problems</h3>
                            <p className="text-gray-600">Questions from top tech companies and coding interviews</p>
                        </div>
                        <div className="text-center">
                            <h3 className="text-xl font-semibold mb-4">Community Support</h3>
                            <p className="text-gray-600">Connect with peers and mentors for collaborative learning</p>
                        </div>
                    </div>
                </div>
            </section>

            {/* Pricing Section */}
            <section className="py-20 px-4 bg-gray-50">
                <div className="container mx-auto">
                    <div className="text-center mb-12">
                        <h2 className="text-4xl font-bold text-gray-900 mb-4">
                            Choose Your Learning Plan
                        </h2>
                        <p className="text-lg text-gray-600">
                            Start your journey with the plan that fits your goals
                        </p>
                    </div>
                    <div className="grid md:grid-cols-3 gap-8 max-w-6xl mx-auto">
                        {pricingPlans.map((plan, index) => (
                            <Card key={index} className={`relative ${index === 1 ? 'border-blue-500 shadow-lg scale-105' : ''}`}>
                                {index === 1 && (
                                    <Badge className="absolute -top-3 left-1/2 transform -translate-x-1/2 bg-blue-500">
                                        Most Popular
                                    </Badge>
                                )}
                                <CardHeader className="text-center">
                                    <CardTitle className="text-2xl">{plan.name}</CardTitle>
                                    <div className="text-3xl font-bold text-blue-600">{plan.price}</div>
                                    <CardDescription>{plan.duration}</CardDescription>
                                </CardHeader>
                                <CardContent>
                                    <ul className="space-y-3">
                                        {plan.features.map((feature, featureIndex) => (
                                            <li key={featureIndex} className="flex items-center">
                                                <Check className="w-5 h-5 text-green-500 mr-3" />
                                                <span className="text-gray-700">{feature}</span>
                                            </li>
                                        ))}
                                    </ul>
                                    <Button className="w-full mt-6" variant={index === 1 ? "default" : "outline"}>
                                        Get Started
                                    </Button>
                                </CardContent>
                            </Card>
                        ))}
                    </div>
                </div>
            </section>

            {/* Illustration Section */}
            <section className="py-20 px-4 bg-white">
                <div className="container mx-auto">
                    <div className="grid lg:grid-cols-2 gap-12 items-center">
                        <div>
                            <h2 className="text-4xl font-bold text-gray-900 mb-6">
                                Start Your Coding Journey with CodeRithm
                            </h2>
                            <p className="text-lg text-gray-600 mb-8">
                                Join millions mastering top languages, cracking real-world problems & winning coding contests.
                                Our adaptive platform ensures you're always challenged at the right level.
                            </p>
                            <Button size="lg" className="bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700 text-white">
                                Level Up Your Skills Now
                            </Button>
                        </div>
                        <div className="flex justify-center">
                            <img
                                src="https://placehold.co/500x400?text=Person+coding+on+laptop+with+modern+workspace+setup"
                                alt="Person coding on laptop with modern workspace setup"
                                className="rounded-lg shadow-lg max-w-full h-auto"
                            />
                        </div>
                    </div>
                </div>
            </section>

            {/* Footer */}
            <footer className="bg-gray-900 text-white py-16 px-4">
                <div className="container mx-auto">
                    <div className="grid md:grid-cols-4 gap-8">
                        {/* Company Info */}
                        <div>
                            <div className="flex items-center space-x-2 mb-4">
                                <div className="w-8 h-8 bg-gradient-to-r from-blue-600 to-purple-600 rounded-lg flex items-center justify-center">
                                    <span className="text-white font-bold text-sm">CR</span>
                                </div>
                                <span className="text-xl font-bold">CodeRithm</span>
                            </div>
                            <p className="text-gray-400 mb-4">
                                IGDTUW Campus<br />
                                New Delhi, India<br />
                                contact@coderithm.com<br />
                                +91 98765 43210
                            </p>
                        </div>

                        {/* Roadmaps */}
                        <div>
                            <h3 className="text-lg font-semibold mb-4">Roadmaps</h3>
                            <ul className="space-y-2 text-gray-400">
                                <li><a href="#" className="hover:text-white transition-colors">Arrays</a></li>
                                <li><a href="#" className="hover:text-white transition-colors">Sorting</a></li>
                                <li><a href="#" className="hover:text-white transition-colors">Stack</a></li>
                                <li><a href="#" className="hover:text-white transition-colors">Queue</a></li>
                                <li><a href="#" className="hover:text-white transition-colors">Binary Tree</a></li>
                                <li><a href="#" className="hover:text-white transition-colors">Dynamic Programming</a></li>
                            </ul>
                        </div>

                        {/* Company Links */}
                        <div>
                            <h3 className="text-lg font-semibold mb-4">Company</h3>
                            <ul className="space-y-2 text-gray-400">
                                <li><a href="#" className="hover:text-white transition-colors">About Us</a></li>
                                <li><a href="#" className="hover:text-white transition-colors">For Colleges</a></li>
                                <li><a href="#" className="hover:text-white transition-colors">Blogs</a></li>
                                <li><a href="#" className="hover:text-white transition-colors">Contact Us</a></li>
                                <li><a href="#" className="hover:text-white transition-colors">Privacy Policy</a></li>
                            </ul>
                        </div>

                        {/* Social Media */}
                        <div>
                            <h3 className="text-lg font-semibold mb-4">Follow Us</h3>
                            <div className="flex space-x-4">
                                <a href="#" className="w-10 h-10 bg-gray-800 rounded-full flex items-center justify-center hover:bg-gray-700 transition-colors">
                                    <span className="text-sm">YT</span>
                                </a>
                                <a href="#" className="w-10 h-10 bg-gray-800 rounded-full flex items-center justify-center hover:bg-gray-700 transition-colors">
                                    <span className="text-sm">LI</span>
                                </a>
                                <a href="#" className="w-10 h-10 bg-gray-800 rounded-full flex items-center justify-center hover:bg-gray-700 transition-colors">
                                    <span className="text-sm">IG</span>
                                </a>
                                <a href="#" className="w-10 h-10 bg-gray-800 rounded-full flex items-center justify-center hover:bg-gray-700 transition-colors">
                                    <span className="text-sm">FB</span>
                                </a>
                                <a href="#" className="w-10 h-10 bg-gray-800 rounded-full flex items-center justify-center hover:bg-gray-700 transition-colors">
                                    <span className="text-sm">TW</span>
                                </a>
                                <a href="#" className="w-10 h-10 bg-gray-800 rounded-full flex items-center justify-center hover:bg-gray-700 transition-colors">
                                    <span className="text-sm">MD</span>
                                </a>
                            </div>
                        </div>
                    </div>

                    <div className="border-t border-gray-800 mt-12 pt-8 text-center text-gray-400">
                        <p>© 2025 CodeRithm By IGDTUW Girls. All rights reserved.</p>
                    </div>
                </div>
            </footer>

            <style jsx>{`
        @keyframes scroll {
          0% {
            transform: translateX(0);
          }
          100% {
            transform: translateX(-50%);
          }
        }
        .animate-scroll {
          animation: scroll 20s linear infinite;
        }
      `}</style>
        </div>
    );
}
