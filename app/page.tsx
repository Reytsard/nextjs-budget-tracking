"use client";
import Header from "@/components/Header";
import Hero from "@/components/Hero";
import Image from "next/image";
import { redirect } from "next/navigation";
import { useEffect } from "react";

export default function Home() {
  return (
    <div className="h-screen w-full bg-blue-100 md:px-[200px] pt-4 px-5">
      {/* <Header /> */}
      <Hero />
    </div>
  );
  // useEffect(() => {
  //   redirect("/login");
  // }, []);
}
