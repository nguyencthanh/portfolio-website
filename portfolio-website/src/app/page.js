"use client";

import React from "react";
import Card from "./components/Card";
import { JetBrains_Mono } from "next/font/google";
import { Funnel_Sans } from "next/font/google";
import Link from "next/link";

const funnelsans = Funnel_Sans({ subsets: ["latin"], weight: ["400"] });
const jetBrains_mono = JetBrains_Mono({ subsets: ["latin"], weight: ["400"] });

export default function Home() {
  return (
    <main>
      <div className={funnelsans.className}>
        <div className="container px-3">
          <Card>
            <h3>Thanh Nguyen</h3>
            <p>Software Developer</p>
          </Card>
        </div>
        <div className="text-center">About Me</div>
      </div>
    </main>
  );
}
