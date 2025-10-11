"use client";
import React from "react";
import { HeroParallax } from "@/components/ui/hero-parallax";

export default function PortfolioHeroParallax() {
  return <HeroParallax products={portfolioProjects} />;
}

export const portfolioProjects = [
  {
    title: "TechStart E-commerce Platform",
    link: "#",
    thumbnail: "https://images.unsplash.com/photo-1556742049-0cfed4f6a45d?w=600&h=600&fit=crop&crop=center",
  },
  {
    title: "FinanceApp Mobile Banking",
    link: "#",
    thumbnail: "https://images.unsplash.com/photo-1563013544-824ae1b704d3?w=600&h=600&fit=crop&crop=center",
  },
  {
    title: "Visa Booking App",
    link: "#",
    thumbnail: "/images/euro.png"
  },
  {
    title: "SaaS Growth Campaign",
    link: "#",
    thumbnail: "https://images.unsplash.com/photo-1460925895917-afdab827c52f?w=600&h=600&fit=crop&crop=center",
  },
  {
    title: "Healthcare Portal",
    link: "#",
    thumbnail: "https://images.unsplash.com/photo-1576091160399-112ba8d25d1f?w=600&h=600&fit=crop&crop=center",
  },
  {
    title: "Sultan Fitness",
    link: "#",
    thumbnail: "/images/sultan.png",
  },
  {
    title: "E-Learning Platform",
    link: "#",
    thumbnail: "https://images.unsplash.com/photo-1522202176988-66273c2fd55f?w=600&h=600&fit=crop&crop=center",
  },
  {
    title: "Business Website",
    link: "#",
    thumbnail: "images/klance.png",
  },
  {
    title: "Whatsapp Chatbot",
    link: "#",
    thumbnail: "https://www.luccabot.com/images/hero-1.jpg"
  },
  {
    title: "Social Media Dashboard",
    link: "#",
    thumbnail: "https://images.unsplash.com/photo-1611224923853-80b023f02d71?w=600&h=600&fit=crop&crop=center",
  },
  {
    title: "Inventory Management System",
    link: "#",
    thumbnail: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=600&h=600&fit=crop&crop=center",
  },
  {
    title: "Travel Booking Platform",
    link: "#",
    thumbnail: "https://images.unsplash.com/photo-1488646953014-85cb44e25828?w=600&h=600&fit=crop&crop=center",
  },
  {
    title: "Cryptocurrency Exchange",
    link: "#",
    thumbnail: "https://images.unsplash.com/photo-1621761191319-c6fb62004040?w=600&h=600&fit=crop&crop=center",
  },
  {
    title: "AI Chatbot Platform",
    link: "#",
    thumbnail: "https://images.unsplash.com/photo-1677442136019-21780ecad995?w=600&h=600&fit=crop&crop=center",
  },
  {
    title: "Project Management Tool",
    link: "#",
    thumbnail: "https://images.unsplash.com/photo-1611224923853-80b023f02d71?w=600&h=600&fit=crop&crop=center",
  },
];
