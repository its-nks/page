"use client";

import { Button } from "@/components/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/card";
import { Badge } from "@/components/badge";
import Link from "next/link";

export default function AboutPage() {
    const features = [
        {
            title: "Adaptive Learning Algorithm",
            description: "Our AI-powered system analyzes your performance patterns, time spent on problems, and success rates to dynamically adjust difficulty levels and recommend personalized learning paths.",
            icon: "🧠"
        },
        {
            title: "Comprehensive Topic Coverage",
            description: "Master all essential DSA topics including Arrays, Strings, Linked Lists, Trees, Graphs, Dynamic Programming, and advanced algorithms with curated problem sets.",
            icon: "📚"
        },
        {
            title: "Real-time Performance Analytics",
            description: "Track your progress with detailed analytics, identify weak areas, monitor improvement trends, and get insights into your problem-solving patterns.",
            icon: "📊"
        },
        {
            title: "Industry-Standard Problems",
            description: "Practice with problems from top tech companies like Google, Meta, Amazon, and Microsoft. Prepare for coding interviews with real-world scenarios.",
            icon: "🏢"
        },
        {
            title: "Habit Formation System",
            description: "Build consistent coding habits with daily goals, streak tracking, and personalized reminders that keep you motivated and on track.",
            icon: "🎯"
        },
        {
            title: "Community & Mentorship",
            description: "Connect with peers, participate in discussions, get help from mentors, and learn from a community of passionate developers.",
            icon: "👥"
        }
    ];

    const stats = [
        { number: "50,000+", label: "Active Learners" },
        { number: "1,000+", label: "Practice Problems" },
        { number: "95%", label: "Interview Success Rate" },
        { number: "500+", label: "Companies Hiring Our Users" }
    ];

    const team = [
        {
            name: "Priya Sharma",
            role: "Founder & CEO",
            description: "Former Google SWE, passionate about making quality CS education accessible to everyone.",
            image: "https://placehold.co/150x150?text=Priya+Sharma+professional+headshot"
        },
        {
            name: "Ananya Gupta",
            role: "CTO & Co-founder",
            description: "Ex-Microsoft engineer with expertise in AI/ML and educational technology platforms.",
            image: "https://placehold.co/150x150?text=Ananya+Gupta+professional+headshot"
        },
        {
            name: "Riya Patel",
            role: "Head of Product",
            description: "Former Amazon PM, focused on creating intuitive learning experiences for developers.",
            image: "https://placehold.co/150x150?text=Riya+Patel+professional+headshot"
        },
        {
            name: "Kavya Singh",
            role: "Lead Data Scientist",
            description: "PhD in ML from IIT Delhi, specializing in adaptive learning algorithms and personalization.",
            image: "https://placehold.co/150x150?text=Kavya+Singh+professional+headshot"
        }
    ];

    return (
        <div className="min-h-screen bg-gradient-to-br from-blue-50 via-white to-purple-50">
            {/* Header */}
            <header className="sticky top-0 z-50 bg-white/80 backdrop-blur-md border-b">
                <div className="container mx-auto px-4 py-4">
                    <div className="flex items-center justify-between">
                        <Link href="/" className="flex items-center space-x-2">
                            <div className="w-8 h-8 bg-gradient-to-r from-blue-600 to-purple-600 rounded-lg flex items-center justify-center">
                                <span className="text-white font-bold text-sm">CR</span>
                            </div>
                            <span className="text-xl font-bold text-gray-900">CodeRithm</span>
                        </Link>
                        <nav className="hidden md:flex items-center space-x-8">
                            <Link href="/" className="text-gray-700 hover:text-blue-600 transition-colors">Home</Link>
                            <Link href="/about" className="text-blue-600 font-medium">About</Link>
                            <Link href="/dashboard" className="text-gray-700 hover:text-blue-600 transition-colors">Dashboard</Link>
                            <Link href="/login" className="text-gray-700 hover:text-blue-600 transition-colors">Login</Link>
                            <Button variant="outline">Register</Button>
                        </nav>
                    </div>
                </div>
            </header>

            {/* Hero Section */}
            <section className="py-20 px-4">
                <div className="container mx-auto text-center">
                    <div className="max-w-4xl mx-auto">
                        <h1 className="text-5xl md:text-6xl font-bold text-gray-900 mb-6">
                            About <span className="bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">CodeRithm</span>
                        </h1>
                        <p className="text-xl text-gray-600 mb-8 max-w-3xl mx-auto">
                            We're on a mission to democratize quality computer science education and help every developer
                            build the skills they need to succeed in their career through adaptive, personalized learning.
                        </p>
                    </div>
                </div>
            </section>

            {/* Mission Section */}
            <section className="py-16 px-4 bg-white">
                <div className="container mx-auto">
                    <div className="max-w-4xl mx-auto text-center">
                        <h2 className="text-4xl font-bold text-gray-900 mb-8">Our Mission</h2>
                        <p className="text-lg text-gray-600 mb-12">
                            Traditional learning approaches often follow a one-size-fits-all methodology that doesn't account
                            for individual learning patterns, strengths, and weaknesses. At CodeRithm, we believe that every
                            developer learns differently and deserves a personalized path to mastery.
                        </p>
                        <div className="grid md:grid-cols-3 gap-8">
                            <div className="text-center">
                                <div className="w-16 h-16 bg-blue-100 rounded-full flex items-center justify-center mx-auto mb-4">
                                    <span className="text-2xl">🎯</span>
                                </div>
                                <h3 className="text-xl font-semibold mb-2">Personalized Learning</h3>
                                <p className="text-gray-600">Adaptive algorithms that adjust to your unique learning style and pace</p>
                            </div>
                            <div className="text-center">
                                <div className="w-16 h-16 bg-purple-100 rounded-full flex items-center justify-center mx-auto mb-4">
                                    <span className="text-2xl">🌍</span>
                                </div>
                                <h3 className="text-xl font-semibold mb-2">Accessible Education</h3>
                                <p className="text-gray-600">Making quality CS education available to everyone, regardless of background</p>
                            </div>
                            <div className="text-center">
                                <div className="w-16 h-16 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-4">
                                    <span className="text-2xl">🚀</span>
                                </div>
                                <h3 className="text-xl font-semibold mb-2">Career Success</h3>
                                <p className="text-gray-600">Preparing developers for real-world challenges and interview success</p>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* Stats Section */}
            <section className="py-16 px-4 bg-gray-50">
                <div className="container mx-auto">
                    <div className="text-center mb-12">
                        <h2 className="text-4xl font-bold text-gray-900 mb-4">Impact by Numbers</h2>
                        <p className="text-lg text-gray-600">See how CodeRithm is transforming careers worldwide</p>
                    </div>
                    <div className="grid md:grid-cols-4 gap-8">
                        {stats.map((stat, index) => (
                            <div key={index} className="text-center">
                                <div className="text-4xl font-bold text-blue-600 mb-2">{stat.number}</div>
                                <div className="text-gray-600">{stat.label}</div>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            {/* Features Section */}
            <section className="py-20 px-4 bg-white">
                <div className="container mx-auto">
                    <div className="text-center mb-16">
                        <h2 className="text-4xl font-bold text-gray-900 mb-4">What Makes Us Different</h2>
                        <p className="text-lg text-gray-600 max-w-2xl mx-auto">
                            Our platform combines cutting-edge AI technology with proven educational methodologies
                            to create a truly personalized learning experience.
                        </p>
                    </div>
                    <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
                        {features.map((feature, index) => (
                            <Card key={index} className="h-full">
                                <CardHeader>
                                    <div className="w-12 h-12 bg-gradient-to-r from-blue-100 to-purple-100 rounded-lg flex items-center justify-center mb-4">
                                        <span className="text-2xl">{feature.icon}</span>
                                    </div>
                                    <CardTitle className="text-xl">{feature.title}</CardTitle>
                                </CardHeader>
                                <CardContent>
                                    <p className="text-gray-600">{feature.description}</p>
                                </CardContent>
                            </Card>
                        ))}
                    </div>
                </div>
            </section>

            {/* Team Section */}
            <section className="py-20 px-4 bg-gray-50">
                <div className="container mx-auto">
                    <div className="text-center mb-16">
                        <h2 className="text-4xl font-bold text-gray-900 mb-4">Meet Our Team</h2>
                        <p className="text-lg text-gray-600 max-w-2xl mx-auto">
                            Founded by IGDTUW alumni, our team combines deep technical expertise with a passion
                            for education and empowering the next generation of developers.
                        </p>
                    </div>
                    <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
                        {team.map((member, index) => (
                            <Card key={index} className="text-center">
                                <CardHeader>
                                    <img
                                        src={member.image}
                                        alt={member.name}
                                        className="w-24 h-24 rounded-full mx-auto mb-4"
                                    />
                                    <CardTitle className="text-lg">{member.name}</CardTitle>
                                    <CardDescription className="text-blue-600 font-medium">{member.role}</CardDescription>
                                </CardHeader>
                                <CardContent>
                                    <p className="text-sm text-gray-600">{member.description}</p>
                                </CardContent>
                            </Card>
                        ))}
                    </div>
                </div>
            </section>

            {/* Values Section */}
            <section className="py-20 px-4 bg-white">
                <div className="container mx-auto">
                    <div className="max-w-4xl mx-auto">
                        <div className="text-center mb-16">
                            <h2 className="text-4xl font-bold text-gray-900 mb-4">Our Values</h2>
                            <p className="text-lg text-gray-600">
                                The principles that guide everything we do at CodeRithm
                            </p>
                        </div>
                        <div className="grid md:grid-cols-2 gap-12">
                            <div>
                                <h3 className="text-2xl font-semibold mb-4">🎓 Education First</h3>
                                <p className="text-gray-600 mb-6">
                                    We believe that quality education should be accessible to everyone. Our platform is designed
                                    with learners at the center, ensuring that every feature serves the goal of effective learning.
                                </p>

                                <h3 className="text-2xl font-semibold mb-4">🔬 Innovation & Research</h3>
                                <p className="text-gray-600">
                                    We continuously research and implement the latest advances in educational technology,
                                    machine learning, and cognitive science to improve learning outcomes.
                                </p>
                            </div>
                            <div>
                                <h3 className="text-2xl font-semibold mb-4">🤝 Community & Collaboration</h3>
                                <p className="text-gray-600 mb-6">
                                    Learning is better together. We foster a supportive community where learners can
                                    help each other grow and succeed in their coding journey.
                                </p>

                                <h3 className="text-2xl font-semibold mb-4">📈 Continuous Improvement</h3>
                                <p className="text-gray-600">
                                    We're committed to constantly improving our platform based on user feedback,
                                    learning science research, and industry best practices.
                                </p>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* CTA Section */}
            <section className="py-20 px-4 bg-gradient-to-r from-blue-600 to-purple-600">
                <div className="container mx-auto text-center">
                    <div className="max-w-3xl mx-auto">
                        <h2 className="text-4xl font-bold text-white mb-6">
                            Ready to Transform Your Learning?
                        </h2>
                        <p className="text-xl text-blue-100 mb-8">
                            Join thousands of developers who are already mastering DSA with our adaptive learning platform.
                        </p>
                        <div className="flex flex-col sm:flex-row gap-4 justify-center">
                            <Button size="lg" variant="secondary" className="px-8 py-4 text-lg">
                                Start Free Trial
                            </Button>
                            <Button size="lg" variant="outline" className="px-8 py-4 text-lg border-white text-white hover:bg-white hover:text-blue-600">
                                View Pricing
                            </Button>
                        </div>
                    </div>
                </div>
            </section>

            {/* Footer */}
            <footer className="bg-gray-900 text-white py-16 px-4">
                <div className="container mx-auto">
                    <div className="grid md:grid-cols-4 gap-8">
                        <div>
                            <div className="flex items-center space-x-2 mb-4">
                                <div className="w-8 h-8 bg-gradient-to-r from-blue-600 to-purple-600 rounded-lg flex items-center justify-center">
                                    <span className="text-white font-bold text-sm">CR</span>
                                </div>
                                <span className="text-xl font-bold">CodeRithm</span>
                            </div>
                            <p className="text-gray-400 mb-4">
                                Empowering developers through adaptive learning and personalized education.
                            </p>
                        </div>
                        <div>
                            <h3 className="text-lg font-semibold mb-4">Product</h3>
                            <ul className="space-y-2 text-gray-400">
                                <li><Link href="/dashboard" className="hover:text-white transition-colors">Dashboard</Link></li>
                                <li><Link href="/practice" className="hover:text-white transition-colors">Practice</Link></li>
                                <li><Link href="/analytics" className="hover:text-white transition-colors">Analytics</Link></li>
                                <li><Link href="/community" className="hover:text-white transition-colors">Community</Link></li>
                            </ul>
                        </div>
                        <div>
                            <h3 className="text-lg font-semibold mb-4">Company</h3>
                            <ul className="space-y-2 text-gray-400">
                                <li><Link href="/about" className="hover:text-white transition-colors">About Us</Link></li>
                                <li><Link href="/careers" className="hover:text-white transition-colors">Careers</Link></li>
                                <li><Link href="/blog" className="hover:text-white transition-colors">Blog</Link></li>
                                <li><Link href="/contact" className="hover:text-white transition-colors">Contact</Link></li>
                            </ul>
                        </div>
                        <div>
                            <h3 className="text-lg font-semibold mb-4">Support</h3>
                            <ul className="space-y-2 text-gray-400">
                                <li><Link href="/help" className="hover:text-white transition-colors">Help Center</Link></li>
                                <li><Link href="/privacy" className="hover:text-white transition-colors">Privacy Policy</Link></li>
                                <li><Link href="/terms" className="hover:text-white transition-colors">Terms of Service</Link></li>
                            </ul>
                        </div>
                    </div>
                    <div className="border-t border-gray-800 mt-12 pt-8 text-center text-gray-400">
                        <p>© 2025 CodeRithm By IGDTUW Girls. All rights reserved.</p>
                    </div>
                </div>
            </footer>
        </div>
    );
}
