import Brands from "@/components/Brands";
import ScrollUp from "@/components/Common/ScrollUp";
import Features from "@/components/Features";
import Hero from "@/components/Hero";
import Team from "@/components/Team";
import Navbar from "@/components/Navbar";
import { Metadata } from "next";


export const metadata: Metadata = {
  title: "The Weathermen",
  description: "Weather web application",
  // other metadata
};

export default function Home() {
  return (
    <>
      <Navbar/>
      <ScrollUp />
      <Hero />
      <Features />
      <Brands />
      <Team />
    </>
  )
}
