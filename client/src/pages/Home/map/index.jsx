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
    <div className=" ">
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
    </div>
  );
};

export default MapChart;
