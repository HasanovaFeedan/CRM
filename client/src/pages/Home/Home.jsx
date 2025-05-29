import React, { useState } from "react";
import "./Home.scss";
import { FaBell } from "react-icons/fa";
import { PieChart } from "@mui/x-charts/PieChart";
import { useDrawingArea } from "@mui/x-charts/hooks";
import { styled } from "@mui/material/styles";
import { Stack } from "@mui/material";
import {
  buildStyles,
  CircularProgressbar,
  CircularProgressbarWithChildren,
} from "react-circular-progressbar";
import "react-circular-progressbar/dist/styles.css";
import RadialSeparators from "./RadialSeperators";
import { AgCharts } from "ag-charts-react";
// import "ag-charts-enterprise";
import { Mapdata } from "./data";
import { topology } from "./topology";
import MapStatic from "./map";
import MapChart from "./map";
import CustomerGrowthCard from "../../components/Customercard";

const percentage = 85;

const data = [
  { id: 0, value: 40, label: "Boz", color: "#A9A9A9" },     
  { id: 1, value: 30, label: "Qara", color: "#000000" },    
  { id: 2, value: 20, label: "Turuncu", color: "#FFA500" }, 

];


const size = {
  width: 200,
  height: 200,
};

const StyledText = styled("text")(({ theme }) => ({
  fill: theme.palette.text.primary,
  textAnchor: "middle",
  dominantBaseline: "central",
  fontSize: 20,
}));
function PieCenterLabel({ children }) {
  const { width, height, left, top } = useDrawingArea();
  return (
    <StyledText x={left + width / 2} y={top + height / 2}>
      {children}
    </StyledText>
  );
}
const Home = () => {
  const [options, setOptions] = useState({
    data: Mapdata,
    topology: topology,
    series: [
      { type: "map-shape-background" },
      {
        type: "map-shape",
        title: "Access to Clean Fuels",
        idKey: "name",
        colorKey: "value",
        colorName: "% of population",
      },
    ],
    gradientLegend: {
      enabled: true,
      position: "right",
      gradient: {
        preferredLength: 200,
        thickness: 2,
      },
      scale: {
        label: {
          fontSize: 10,
          formatter: (p) => p.value + "%",
        },
      },
    },
  });

  return (
    <div className="dashboard-main-box">
    
      <div className="dashboard-header">
        <h2>Welcome, Namiq!</h2>
        <div className="dashboard-header-right">
          <div className="search-container">
            <input
              type="text"
              className="search-input"
              placeholder="Search..."
              style={{
                background: "rgba(229, 229, 229, 1)",
                border: "none",
                outline: "none",
                width: "100%",
                height: "100%",
                fontFamily: "Satoshi",
                fontSize: "16px",
                color: "#111A23",
              }}
            />
            <span className="search-icon">
              <svg
                width="18"
                height="18"
                fill="none"
                stroke="#111A23"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
              >
                <circle cx="8" cy="8" r="7" />
                <line x1="13" y1="13" x2="17" y2="17" />
              </svg>
            </span>
          </div>
          <span className="notification-badge">
            <FaBell />
          </span>
        </div>
      </div>
      {/* İstatistik kartları */}
      <div className="stats-group">
        <div className="stat-item">
          <div className="stat-value">
            18.6K <span className="stat-up">↑ 18%</span>
          </div>
          <div className="stat-label">Total Customers lorem100</div>
        </div>
        <div className="stat-item">
          <div className="stat-value">
            55.9K <span className="stat-up">↑ 25%</span>
          </div>
          <div className="stat-label">Total shipping</div>
        </div>
        <div className="stat-item">
          <div className="stat-value">
            54% <span className="stat-down">↓ 7%</span>
          </div>
          <div className="stat-label">Bounce Rate</div>
        </div>
        <div className="stat-item">
          <div className="stat-value">
            2m 56s <span className="stat-up">↑ 12%</span>
          </div>
          <div className="stat-label">Average delivery time</div>
        </div>
      </div>
      <div className="dashboard-row">
        <div className="direc">
          <div className="flex-cart">
            <div
              className="card"
              style={{
                display: "flex",
                justifyContent: "center",
                alignItems: "center",
              }}
            >
              <div style={{ position: "relative", width: 200, height: 200 }}>
                <CircularProgressbarWithChildren
                  value={percentage}
                  strokeWidth={12}
                  text={`${percentage}%`}
                >
                  {" "}
                  <RadialSeparators
                    count={12}
                    style={{
                      background: "#fff",
                      width: "2px",
                      // This needs to be equal to props.strokeWidth
                      height: `${10}%`,
                    }}
                  />
                </CircularProgressbarWithChildren>
              </div>
            </div>
            <div
              className="card"
              style={{
                display: "flex",
                justifyContent: "center",
                alignItems: "center",
              }}
            >
              {" "}
              <div style={{ position: "relative", width: 200, height: 200 }}>
                <Stack width="100%" direction="row" flexWrap="wrap">
                  <PieChart
                    series={[
                      {
                        data,
                        innerRadius: 60,
                        highlightScope: { fade: "global", highlight: "item" },
                        faded: {
                          innerRadius: 90,
                          additionalRadius: -30,
                          color: "gray",
                        },
                      },
                    ]}
                    {...size}
                  >
                    <PieCenterLabel>2548 Visitors</PieCenterLabel>
                  </PieChart>
                </Stack>
              </div>
            </div>
          </div>
          <div className="card card-table">
            <div className="table-title">Top Orders list</div>
            <table className="orders-table">
              <thead>
                <tr>
                  <th>Customer Name</th>
                  <th>Shipping Number</th>
                  <th>Price</th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td>Order name example</td>
                  <td>0299387748932</td>
                  <td className="order-price">$45</td>
                </tr>
                <tr>
                  <td>Order name ezample</td>
                  <td>0299387748932</td>
                  <td className="order-price">$125</td>
                </tr>
                <tr>
                  <td>Order name ezample</td>
                  <td>0299387748932</td>
                  <td className="order-price">$247</td>
                </tr>
                <tr>
                  <td>Order name ezample</td>
                  <td>0299387748932</td>
                  <td className="order-price">$103</td>
                </tr>      <tr>
                  <td>Order name ezample</td>
                  <td>0299387748932</td>
                  <td className="order-price">$103</td>
                </tr>      <tr>
                  <td>Order name ezample</td>
                  <td>0299387748932</td>
                  <td className="order-price">$103</td>
                </tr>      <tr>
                  <td>Order name ezample</td>
                  <td>0299387748932</td>
                  <td className="order-price">$103</td>
                </tr>      <tr>
                  <td>Order name ezample</td>
                  <td>0299387748932</td>
                  <td className="order-price">$103</td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>
        <div className="direc">
          <div className="card lorem-card">
            <MapChart/>
            
          </div>
          <div className="customer-growth-card">
      <CustomerGrowthCard/>
          </div>
        </div>
      </div>

    </div>
  );
};

export default Home;
