"use client";
import {
  Recycle,
  Truck,
  Package,
  HardDrive,
  Database,
  Globe,
} from "lucide-react";
import { useState } from "react";
import "./style.css";

export default function NeuralFeatures() {
  const [hoveredIndex, setHoveredIndex] = useState<number | null>(null);

  const features = [
    {
      icon: <Truck className="icon" />,
      title: "Collection and Reverse Logistics Management",
      description:
        "Efficiently gather e-waste from various sources and transport it to recycling facilities using eco-friendly logistics.",
    },
    {
      icon: <Recycle className="icon" />,
      title: "E-Waste Recycling",
      description:
        "Process and repurpose discarded electronic devices to minimize environmental impact and conserve resources.",
    },
    {
      icon: <Package className="icon" />,
      title: "Precious Metal Recovery",
      description:
        "Extract valuable metals like gold, silver, and copper from e-waste, reducing the need for new mining.",
    },
    {
      icon: <HardDrive className="icon" />,
      title: "IT Asset Disposal",
      description:
        "Securely dispose of obsolete or unused IT equipment, ensuring data security and environmental compliance.",
    },
    {
      icon: <Database className="icon" />,
      title: "Data Destruction",
      description:
        "Permanently and securely eliminate sensitive data from electronic devices to protect privacy and prevent data breaches.",
    },
    {
      icon: <Globe className="icon" />,
      title: "EPR Fulfilment",
      description:
        "Ensure compliance with Extended Producer Responsibility regulations, managing the end-of-life disposal of electronic products.",
    },
  ];

  return (
    <section className="neural-section flex flex-col items-center justify-center">
      <div className="container">
        <div className="header">
          <h2 className="title">Integrated E-Cycling Ecosystem</h2>
          <p className="description">
            Advanced solutions working in harmony to transform electronic waste
            into environmental value
          </p>
        </div>

        {/* Central Spine */}
        <div className="features-container">
          {/* Vertical Line */}
          <div className="vertical-line" />

          {/* Features */}
          <div className="features">
            {features.map((feature, index) => (
              <div
                key={index}
                className={`feature-group ${
                  index % 2 === 0 ? "left" : "right"
                }`}
                onMouseEnter={() => setHoveredIndex(index)}
                onMouseLeave={() => setHoveredIndex(null)}
              >
                {/* Connection Line */}
                <div
                  className={`connection-line ${
                    hoveredIndex === index ? "highlight" : ""
                  } ${index % 2 === 0 ? "left-line" : "right-line"}`}
                />

                {/* Feature Card */}
                <div
                  className={`feature-card ${
                    hoveredIndex === index ? "hovered" : ""
                  }`}
                >
                  <div className="glass-background" />
                  <div className="content">
                    <div className="icon-title">
                      <div
                        className={`icon-wrapper ${
                          hoveredIndex === index ? "hovered" : ""
                        }`}
                      >
                        {feature.icon}
                      </div>
                      <h3 className="feature-title">{feature.title}</h3>
                    </div>
                    <p className="feature-description">{feature.description}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
