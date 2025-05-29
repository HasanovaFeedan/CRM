import React, { useEffect, useState } from "react";
import { csv } from "d3-fetch";
import { feature } from "topojson-client";
import {
  ComposableMap,
  Geographies,
  Geography,
  ZoomableGroup,
  Sphere,
  Graticule,
} from "react-simple-maps";

const MapChart = () => {
  const [geoData, setGeoData] = useState(null);
  const [csvData, setCsvData] = useState([]);

  useEffect(() => {
    // TopoJSON → GeoJSON çevirmə
    fetch("/features.json")
      .then((res) => res.json())
      .then((topology) => {
        const geo = feature(topology, topology.objects.world);
        setGeoData(geo);
      });

    // CSV datanı oxu
    csv("/data.csv").then((data) => {
      setCsvData(data);
    });
  }, []);

  return (
    <div>
      <ComposableMap
        projection="geoEqualEarth"
        style={{ backgroundColor: "", width: "100%", height: "auto" }}
      >
        <ZoomableGroup zoom={1} center={[0, 20]}>
          <Sphere stroke="#E4E5E6" strokeWidth={0.5} />
          <Graticule stroke="#E4E5E6" strokeWidth={0.5} />
          {geoData && (
            <Geographies geography={geoData}>
              {({ geographies }) =>
                geographies.map((geo) => {
                  const iso3 = geo.properties.id;
                  const country = csvData.find((d) => d.ISO3 === iso3);
                  const value = country ? parseFloat(country["2017"]) : 0;
                  const fill = country
                    ? `rgba(183, 200, 255, ${value})`
                    : "rgba(169, 189, 255, 1)";
                  return (
                    <Geography
                      key={geo.rsmKey}
                      geography={geo}
                      fill={fill}
                      stroke="white"
                      style={{
                        default: { outline: "none" },
                        hover: { fill: "blue", outline: "none" },
                        pressed: { outline: "none" },
                      }}
                    />
                  );
                })
              }
            </Geographies>
          )}
        </ZoomableGroup>
      </ComposableMap>
 
      <div className="country-stats-list" style={{ marginTop: "24px",paddingLeft:"20px" }}>
       
        {[
          { flag: "🇺🇸", name: "United States", percent: 35 },
          { flag: "🇨🇦", name: "Canada", percent: 26 },
          { flag: "🇫🇷", name: "France", percent: 18 },
          { flag: "🇮🇹", name: "Italy", percent: 14 },
          { flag: "🇦🇺", name: "Australia", percent: 10 },
          { flag: "🇮🇳", name: "India", percent: 7 },
        ].map((item, idx) => (
          <div
            key={idx}
            style={{
              display: "flex",
              alignItems: "center",
              marginBottom: 12,
            }}
          >
            <span style={{ fontSize: 22, marginRight: 10 }}>{item.flag}</span>
            <span
              style={{
                width: 110,
                marginRight: 10,
                color: "#222",
                fontWeight: 500,
              }}
            >
              {item.name}
            </span>
            <div
              style={{
                flex: 1,
                background: "#E6EAF2",
                borderRadius: 8,
                height: 18,
                position: "relative",
                marginRight: 10,
              }}
            >
              <div
                style={{
                  width: `${item.percent}%`,
                  background:
                    "linear-gradient(90deg, #0B2C47 0%, #051725 100%)",
                  height: "100%",
                  borderRadius: 8,
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center",
                  color: "#fff",
                  fontSize: 13,
                  fontWeight: 500,
                }}
              >
                {item.percent > 0 ? `${item.percent}%` : ""}
              </div>
            </div>
          </div>
        ))}
        {/* Yeni olke elave etmek ucun*/}
        <div
          style={{
            height: 40,
            display: "flex",
            alignItems: "center",
            color: "#aaa",
            fontStyle: "italic",
            fontSize: 15,
          }}
        >
          + yeni olke
        </div>
      </div>
    </div>
  );
};

export default MapChart;