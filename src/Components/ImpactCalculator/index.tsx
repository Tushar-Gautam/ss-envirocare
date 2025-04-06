"use client";
import "./style.css";
import { useState } from "react";
import {
  Leaf,
  Droplets,
  Zap,
  Car,
  TreesIcon as Tree,
  Lightbulb,
} from "lucide-react";

// Device environmental impact data (estimated values)
const deviceImpact = {
  smartphone: {
    co2PerUnit: 80, // kg of CO2
    waterPerUnit: 13000, // liters of water
    energyPerUnit: 60, // kWh of energy
    materialsRecovered: 0.03, // kg of valuable materials
  },
  laptop: {
    co2PerUnit: 350,
    waterPerUnit: 20000,
    energyPerUnit: 200,
    materialsRecovered: 0.5,
  },
  desktop: {
    co2PerUnit: 700,
    waterPerUnit: 35000,
    energyPerUnit: 350,
    materialsRecovered: 2,
  },
  tablet: {
    co2PerUnit: 120,
    waterPerUnit: 15000,
    energyPerUnit: 80,
    materialsRecovered: 0.1,
  },
  tv: {
    co2PerUnit: 500,
    waterPerUnit: 30000,
    energyPerUnit: 250,
    materialsRecovered: 3,
  },
  printer: {
    co2PerUnit: 300,
    waterPerUnit: 18000,
    energyPerUnit: 150,
    materialsRecovered: 1.5,
  },
};

export default function ImpactCalculator() {
  const [deviceType, setDeviceType] = useState("smartphone");
  const [quantity, setQuantity] = useState(1);
  const [results, setResults] = useState<null | {
    co2Saved: number;
    waterSaved: number;
    energySaved: number;
    materialsRecovered: number;
  }>(null);

  const handleCalculate = () => {
    const impact = deviceImpact[deviceType as keyof typeof deviceImpact];

    setResults({
      co2Saved: impact.co2PerUnit * quantity,
      waterSaved: impact.waterPerUnit * quantity,
      energySaved: impact.energyPerUnit * quantity,
      materialsRecovered: impact.materialsRecovered * quantity,
    });
  };

  return (
    <section className="impact-calculator">
      <div className="impact-calculator__bg">
        <div className="impact-calculator__blob impact-calculator__blob--1" />
        <div className="impact-calculator__blob impact-calculator__blob--2" />
      </div>

      <div className="container">
        <header className="impact-calculator__header">
          <h2 className="impact-calculator__title">
            Environmental Impact Calculator
          </h2>
          <p className="impact-calculator__subtitle">
            Discover the positive environmental impact of recycling your
            electronic waste with S S EnviroCare
          </p>
        </header>

        <div className="calculator-container">
          {/* Calculator Form */}
          <div className="calculator-form fade-in">
            <div className="calculator-form__glass" />
            <div className="calculator-form__content">
              <h3 className="form-title">Calculate Your Impact</h3>

              <div className="form-group">
                <label htmlFor="device-type" className="form-label">
                  Device Type
                </label>
                <select
                  id="device-type"
                  className="form-select"
                  value={deviceType}
                  onChange={(e) => setDeviceType(e.target.value)}
                >
                  <option value="smartphone">Smartphone</option>
                  <option value="laptop">Laptop</option>
                  <option value="desktop">Desktop Computer</option>
                  <option value="tablet">Tablet</option>
                  <option value="tv">Television</option>
                  <option value="printer">Printer</option>
                </select>
              </div>

              <div className="form-group">
                <label htmlFor="quantity" className="form-label">
                  Quantity
                </label>
                <input
                  type="number"
                  id="quantity"
                  className="form-input"
                  min="1"
                  value={quantity}
                  onChange={(e) =>
                    setQuantity(Number.parseInt(e.target.value) || 1)
                  }
                />
              </div>

              <button className="calculate-button" onClick={handleCalculate}>
                Calculate Impact
              </button>
            </div>
            <div className="results-display__glass" />
            <div className="results-display__content">
              <h3 className="results-title">Your Environmental Impact</h3>

              {results ? (
                <>
                  <div className="results-grid">
                    <div className="result-card">
                      <div className="result-card__glass" />
                      <div className="result-card__content">
                        <Leaf className="result-card__icon" />
                        <div className="result-card__value">
                          {results.co2Saved.toLocaleString()} kg
                        </div>
                        <div className="result-card__label">
                          CO₂ Emissions Prevented
                        </div>
                      </div>
                    </div>

                    <div className="result-card">
                      <div className="result-card__glass" />
                      <div className="result-card__content">
                        <Droplets className="result-card__icon" />
                        <div className="result-card__value">
                          {results.waterSaved.toLocaleString()} L
                        </div>
                        <div className="result-card__label">Water Saved</div>
                      </div>
                    </div>

                    <div className="result-card">
                      <div className="result-card__glass" />
                      <div className="result-card__content">
                        <Zap className="result-card__icon" />
                        <div className="result-card__value">
                          {results.energySaved.toLocaleString()} kWh
                        </div>
                        <div className="result-card__label">
                          Energy Conserved
                        </div>
                      </div>
                    </div>

                    <div className="result-card">
                      <div className="result-card__glass" />
                      <div className="result-card__content">
                        <Leaf className="result-card__icon" />
                        <div className="result-card__value">
                          {results.materialsRecovered.toLocaleString()} kg
                        </div>
                        <div className="result-card__label">
                          Materials Recovered
                        </div>
                      </div>
                    </div>
                  </div>

                  <div className="results-message">
                    <h4 className="results-message__title">
                      Your Contribution Matters!
                    </h4>
                    <p className="results-message__text">
                      By recycling your electronic waste with S S EnviroCare,
                      you&apos;re making a significant positive impact on our
                      environment. The resources saved contribute to a more
                      sustainable future for all.
                    </p>
                  </div>

                  <div className="equivalence-section">
                    <h4 className="equivalence-title">
                      This is Equivalent to:
                    </h4>
                    <div className="equivalence-grid">
                      <div className="equivalence-card">
                        <div className="equivalence-card__glass" />
                        <div className="equivalence-card__content">
                          <Car className="equivalence-card__icon" />
                          <p className="equivalence-card__text">
                            Not driving a car for{" "}
                            <span className="equivalence-card__value">
                              {Math.round(
                                results.co2Saved / 2.3
                              ).toLocaleString()}
                            </span>{" "}
                            days
                          </p>
                        </div>
                      </div>

                      <div className="equivalence-card">
                        <div className="equivalence-card__glass" />
                        <div className="equivalence-card__content">
                          <Tree className="equivalence-card__icon" />
                          <p className="equivalence-card__text">
                            Planting{" "}
                            <span className="equivalence-card__value">
                              {Math.round(
                                results.co2Saved / 20
                              ).toLocaleString()}
                            </span>{" "}
                            trees
                          </p>
                        </div>
                      </div>

                      <div className="equivalence-card">
                        <div className="equivalence-card__glass" />
                        <div className="equivalence-card__content">
                          <Lightbulb className="equivalence-card__icon" />
                          <p className="equivalence-card__text">
                            Powering a home for{" "}
                            <span className="equivalence-card__value">
                              {Math.round(
                                results.energySaved / 30
                              ).toLocaleString()}
                            </span>{" "}
                            days
                          </p>
                        </div>
                      </div>
                    </div>
                  </div>
                </>
              ) : (
                <div className="results-message">
                  <h4 className="results-message__title">
                    Calculate Your Impact
                  </h4>
                  <p className="results-message__text">
                    Select your device type and quantity to see the
                    environmental benefits of recycling your electronic waste
                    with S S EnviroCare.
                  </p>
                </div>
              )}
            </div>
          </div>

          {/* Results Display */}
          {/* <div className="results-display fade-in delay-1">
            <div className="results-display__glass" />
            <div className="results-display__content">
              <h3 className="results-title">Your Environmental Impact</h3>

              {results ? (
                <>
                  <div className="results-grid">
                    <div className="result-card">
                      <div className="result-card__glass" />
                      <div className="result-card__content">
                        <Leaf className="result-card__icon" />
                        <div className="result-card__value">
                          {results.co2Saved.toLocaleString()} kg
                        </div>
                        <div className="result-card__label">
                          CO₂ Emissions Prevented
                        </div>
                      </div>
                    </div>

                    <div className="result-card">
                      <div className="result-card__glass" />
                      <div className="result-card__content">
                        <Droplets className="result-card__icon" />
                        <div className="result-card__value">
                          {results.waterSaved.toLocaleString()} L
                        </div>
                        <div className="result-card__label">Water Saved</div>
                      </div>
                    </div>

                    <div className="result-card">
                      <div className="result-card__glass" />
                      <div className="result-card__content">
                        <Zap className="result-card__icon" />
                        <div className="result-card__value">
                          {results.energySaved.toLocaleString()} kWh
                        </div>
                        <div className="result-card__label">
                          Energy Conserved
                        </div>
                      </div>
                    </div>

                    <div className="result-card">
                      <div className="result-card__glass" />
                      <div className="result-card__content">
                        <Leaf className="result-card__icon" />
                        <div className="result-card__value">
                          {results.materialsRecovered.toLocaleString()} kg
                        </div>
                        <div className="result-card__label">
                          Materials Recovered
                        </div>
                      </div>
                    </div>
                  </div>

                  <div className="results-message">
                    <h4 className="results-message__title">
                      Your Contribution Matters!
                    </h4>
                    <p className="results-message__text">
                      By recycling your electronic waste with S S EnviroCare,
                      you&apos;re making a significant positive impact on our
                      environment. The resources saved contribute to a more
                      sustainable future for all.
                    </p>
                  </div>

                  <div className="equivalence-section">
                    <h4 className="equivalence-title">
                      This is Equivalent to:
                    </h4>
                    <div className="equivalence-grid">
                      <div className="equivalence-card">
                        <div className="equivalence-card__glass" />
                        <div className="equivalence-card__content">
                          <Car className="equivalence-card__icon" />
                          <p className="equivalence-card__text">
                            Not driving a car for{" "}
                            <span className="equivalence-card__value">
                              {Math.round(
                                results.co2Saved / 2.3
                              ).toLocaleString()}
                            </span>{" "}
                            days
                          </p>
                        </div>
                      </div>

                      <div className="equivalence-card">
                        <div className="equivalence-card__glass" />
                        <div className="equivalence-card__content">
                          <Tree className="equivalence-card__icon" />
                          <p className="equivalence-card__text">
                            Planting{" "}
                            <span className="equivalence-card__value">
                              {Math.round(
                                results.co2Saved / 20
                              ).toLocaleString()}
                            </span>{" "}
                            trees
                          </p>
                        </div>
                      </div>

                      <div className="equivalence-card">
                        <div className="equivalence-card__glass" />
                        <div className="equivalence-card__content">
                          <Lightbulb className="equivalence-card__icon" />
                          <p className="equivalence-card__text">
                            Powering a home for{" "}
                            <span className="equivalence-card__value">
                              {Math.round(
                                results.energySaved / 30
                              ).toLocaleString()}
                            </span>{" "}
                            days
                          </p>
                        </div>
                      </div>
                    </div>
                  </div>
                </>
              ) : (
                <div className="results-message">
                  <h4 className="results-message__title">
                    Calculate Your Impact
                  </h4>
                  <p className="results-message__text">
                    Select your device type and quantity to see the
                    environmental benefits of recycling your electronic waste
                    with S S EnviroCare.
                  </p>
                </div>
              )}
            </div>
          </div> */}
        </div>
      </div>
    </section>
  );
}
