"use client";

import { useState } from "react";
import { Button } from "@/components/ui/button";
import {
    Card,
    CardContent,
    CardDescription,
    CardHeader,
    CardTitle,
} from "@/components/ui/card";

// Update this email address to your contact email
const CONTACT_EMAIL = "koshihomeproducts@gmail.com";

export default function FeedbackForm() {
    const [formData, setFormData] = useState({
        name: "",
        email: "",
        message: "",
    });

    const handleChange = (
        e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
    ) => {
        const { name, value } = e.target;
        setFormData((prev) => ({ ...prev, [name]: value }));
    };

    const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault();

        // Create mailto link with pre-filled subject and body
        const subject = encodeURIComponent(`Feedback from ${formData.name}`);
        const body = encodeURIComponent(
            `Name: ${formData.name}\nEmail: ${formData.email}\n\nMessage:\n${formData.message}`
        );
        const mailtoLink = `mailto:${CONTACT_EMAIL}?subject=${subject}&body=${body}`;

        // Open email client
        window.location.href = mailtoLink;

        // Reset form after a short delay
        setTimeout(() => {
            setFormData({ name: "", email: "", message: "" });
        }, 100);
    };

    return (
        <section className="bg-neutral-100 py-16 px-6">
            <div className="max-w-2xl mx-auto">
                <Card>
                    <CardHeader>
                        <CardTitle className="text-3xl font-bold text-center">
                            We&apos;d Love Your Feedback
                        </CardTitle>
                        <CardDescription className="text-center">
                            Your thoughts help us improve our products and services
                        </CardDescription>
                    </CardHeader>
                    <CardContent>
                        <form onSubmit={handleSubmit} className="space-y-6">
                            <div>
                                <label
                                    htmlFor="name"
                                    className="block text-sm font-medium text-neutral-700 mb-2"
                                >
                                    Name
                                </label>
                                <input
                                    type="text"
                                    id="name"
                                    name="name"
                                    value={formData.name}
                                    onChange={handleChange}
                                    required
                                    className="w-full px-4 py-2 border border-neutral-300 rounded-md focus:outline-none focus:ring-2 focus:ring-neutral-500 focus:border-transparent"
                                    placeholder="Your name"
                                />
                            </div>

                            <div>
                                <label
                                    htmlFor="email"
                                    className="block text-sm font-medium text-neutral-700 mb-2"
                                >
                                    Email
                                </label>
                                <input
                                    type="email"
                                    id="email"
                                    name="email"
                                    value={formData.email}
                                    onChange={handleChange}
                                    required
                                    className="w-full px-4 py-2 border border-neutral-300 rounded-md focus:outline-none focus:ring-2 focus:ring-neutral-500 focus:border-transparent"
                                    placeholder="your.email@example.com"
                                />
                            </div>

                            <div>
                                <label
                                    htmlFor="message"
                                    className="block text-sm font-medium text-neutral-700 mb-2"
                                >
                                    Message
                                </label>
                                <textarea
                                    id="message"
                                    name="message"
                                    value={formData.message}
                                    onChange={handleChange}
                                    required
                                    rows={5}
                                    className="w-full px-4 py-2 border border-neutral-300 rounded-md focus:outline-none focus:ring-2 focus:ring-neutral-500 focus:border-transparent resize-vertical"
                                    placeholder="Share your thoughts, suggestions, or questions..."
                                />
                            </div>

                            <p className="text-sm text-neutral-500 text-center">
                                Clicking submit will open your email client with the
                                feedback pre-filled.
                            </p>

                            <Button type="submit" className="w-full" size="lg">
                                Submit Feedback
                            </Button>
                        </form>
                    </CardContent>
                </Card>
            </div>
        </section>
    );
}

