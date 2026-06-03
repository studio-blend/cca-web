"use client";

import { useState } from "react";

export default function TabSwitcher({ tabs, gridLayout = false, defaultTabId }) {
  const [activeTab, setActiveTab] = useState(defaultTabId || tabs[0]?.id);

  return (
    <div className="tab-explorer">
      {/* Tab Navigation */}
      <div className="tab-nav">
        {tabs.map((tab) => (
          <button
            key={tab.id}
            className={`tab-trigger ${activeTab === tab.id ? "active" : ""}`}
            onClick={() => setActiveTab(tab.id)}
            type="button"
            suppressHydrationWarning={true}
          >
            {tab.label}
          </button>
        ))}
      </div>

      {/* Tab Panel Content */}
      <div className="tab-panel-container">
        {tabs.map((tab) => (
          <div
            key={tab.id}
            className={`program-panel ${activeTab === tab.id ? "active" : ""}`}
            style={{ display: activeTab === tab.id ? (gridLayout ? "grid" : "block") : "none" }}
          >
            {tab.content}
          </div>
        ))}
      </div>
    </div>
  );
}
