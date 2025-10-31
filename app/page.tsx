"use client";
import Header from "@/components/Header";
import Image from "next/image";
import { redirect } from "next/navigation";
import { useEffect } from "react";

export default function Home() {
  return (
    <div className="h-screen w-full bg-blue-100 px-[200px] pt-4">
      <Header />
    </div>
  );
  // useEffect(() => {
  //   redirect("/login");
  // }, []);
}
