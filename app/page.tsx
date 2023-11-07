import Brands from "@/components/Brands";
import ScrollUp from "@/components/Common/ScrollUp";
import Features from "@/components/Features";
import Hero from "@/components/Hero";
import Team from "@/components/Team";

export default function Home() {
  return (
    <>
      <ScrollUp />
      <Hero />
      <Features />
      <Brands />
      <Team />
    </>
  )
}
