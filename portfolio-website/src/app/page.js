"use client";

import React from "react";
import Card from "./components/Card";
import { Funnel_Sans } from "next/font/google";
import Link from "next/link";

const funnelsans = Funnel_Sans({ subsets: ["latin"], weight: ["400"] });

export default function Home() {
  return (
    <div>
      <h3>Thanh Nguyen</h3>
      <p>Software Developer</p>
    </div>
  );
}
