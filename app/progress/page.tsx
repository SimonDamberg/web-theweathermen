import ScrollUp from "@/components/Common/ScrollUp";
import Hero from "@/components/Hero";
import Navbar from "@/components/Navbar";
import ProgressData from "@/components/Progress";
import { Background } from "@/components/Styling/background";
import { Metadata } from "next";


export const metadata: Metadata = {
  title: "The Weathermen",
  description: "Weather web application",
  // other metadata
};

export default function Progress() {
  return (
    <>
      <Navbar/>
      <ScrollUp />
      <Background/>
      <ProgressData/>
    </>
  )
}