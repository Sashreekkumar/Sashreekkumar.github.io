import { useState } from "react";

import MainLayout from "../layouts/main_layout";

import TechnicalBlogs from "../components/techblogs";
import Reading from "../components/reading";
import NonTechnicalBlogs from "../components/nontech";

export default function Blogs() {
  const [activeTab, setActiveTab] = useState("technical");

  const tabClass = (tab) =>
    `px-5 py-2 rounded-full text-sm md:text-base transition-all duration-200 whitespace-nowrap ${
      activeTab === tab
        ? "bg-blue-100 text-[#387ed1]"
        : "bg-white text-slate-600 hover:bg-slate-100"
    }`;

  return (
    <MainLayout>
      <div className="min-h-screen bg-slate-50">
        {/* Tabs */}
        <div className="w-full lg:w-[55%] mx-auto px-6 pt-8">
          <div className="flex justify-center gap-3 overflow-x-auto">
            <button
              onClick={() => setActiveTab("technical")}
              className={tabClass("technical")}
            >
              Technical
            </button>

            <button
              onClick={() => setActiveTab("reading")}
              className={tabClass("reading")}
            >
              Reading
            </button>

            <button
              onClick={() => setActiveTab("nontechnical")}
              className={tabClass("nontechnical")}
            >
              Non-Tech
            </button>
          </div>
        </div>

        {/* Content */}
        <div className="w-full lg:w-[55%] mx-auto px-6 pt-10 pb-16">
          <div className="transition-all duration-300">
            {activeTab === "technical" && <TechnicalBlogs />}

            {activeTab === "reading" && <Reading />}

            {activeTab === "nontechnical" && <NonTechnicalBlogs />}
          </div>
        </div>
      </div>
    </MainLayout>
  );
}