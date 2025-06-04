import React, { useState } from "react";
import "./op.scss";
import { IoSearch } from "react-icons/io5";
import { FaQuestionCircle } from "react-icons/fa";
import { Button } from "@mui/material";
import Backdrop from "@mui/material/Backdrop";
import Box from "@mui/material/Box";
import Modal from "@mui/material/Modal";
import Fade from "@mui/material/Fade";
import Typography from "@mui/material/Typography";
import IconButton from "@mui/material/IconButton";
import CloseIcon from "@mui/icons-material/Close";

const Operation = () => {
  const [filter, setFilter] = useState("All");
  const [sortAsc, setSortAsc] = useState(true);
  const [showAdd, setShowAdd] = useState(false);
  const [modalOpen, setModalOpen] = useState(false);

  const openModal = () => setModalOpen(true);
  const closeModal = () => setModalOpen(false);
    const [direction, setDirection] = useState('');
    const [transport, setTransport] = useState('air');
    const [shipmentType, setShipmentType] = useState('FCL');
    const [rateType, setRateType] = useState('spot');
    const [open, setOpen] = React.useState(false);
    const handleOpen = () => setOpen(true);
    const handleClose = () => setOpen(false);
  
    const style = {
      position: "absolute",
      top: "50%",
      left: "50%",
      transform: "translate(-50%, -50%)",
      width: "90vw",
      maxWidth: "1300px",
      bgcolor: "background.paper",
      border: "2px solid #000",
      boxShadow: 24,
      borderRadius: "8px",
      p: 2,
    };
  
  const documents = Array(20)
    .fill(0)
    .map((_, idx) => ({
      type: "Name Example",
      docimage:
        idx % 5 === 0
          ? "ucakmavi"
          : idx % 5 === 1
          ? "gemimavi"
          : idx % 5 === 2
          ? "busmavi"
          : idx % 5 === 3
          ? "sekilmavi"
          : "trainmavi",
      arrowimage: "arrowmavi",
      name: `Client Name ${idx + 1}`,
      date: "dd / mm / yyyy",
    }));

  const filteredDocuments =
    filter === "All"
      ? documents
      : filter === "exportgray"
      ? documents.filter((doc) => doc.arrowimage === "arrowmavi") // örnek
      : filter === "none"
      ? []
      : documents.filter((doc) => doc.docimage === filter);

  const sortedDocuments = [...filteredDocuments].sort((a, b) => {
    return sortAsc
      ? a.name.localeCompare(b.name)
      : b.name.localeCompare(a.name);
  });

  return (
    <div className="dashboard-main-box">
          <div className="dashboard-header-client">
        <h2>Operation</h2>
        <div className="dashboard-header-right-client">
          <div className="search-containers">
            <input
              type="text"
              className="search-inputs"
              placeholder="Search..."
              style={{
                background: "transparent",
                border: "none",
                outline: "none",
                width: "90%",
                height: "100%",
                fontFamily: "Satoshi",
                fontSize: "16px",
                color: "#111A23",
                borderRadius: "20px",
              }}
            />
            <IoSearch className="sear" />
          </div>

          <button
            className="download-excell"
            style={{
              background: "rgba(16, 185, 129, 1)",
              width: "183px",
              height: "42px",
              borderRadius: "20px",
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
              gap: "8px",
              border: "none",
              cursor: "pointer",
            }}
          >
            Download Excel
            <img src="/image/download.png" alt="" style={{ height: "20px" }} />
          </button>
     <button className="new-opera"  onClick={handleOpen}>Create New Operation</button>

        </div>
      </div>

      <div className="doc-wrappersa">
        <div className="jus">
          <div className="doc-da">
            <p className="doc-paa">Document List</p>
          </div>

          <div className="flex-last">
            {/* 1. Filter Group */}
            <div className="doc-headersa">
              <button
                className={`gr ${filter === "All" ? "active" : ""}`}
                onClick={() => setFilter("All")}
              >
                All
              </button>
              <button
                className={`gr ${filter === "ucakmavi" ? "active" : ""}`}
                onClick={() => setFilter("ucakmavi")}
              >
                <img src="/image/grayfly.png" alt="" />
              </button>
              <button
                className={`gr ${filter === "gemimavi" ? "active" : ""}`}
                onClick={() => setFilter("gemimavi")}
              >
                <img src="/image/gemigray.png" alt="" />
              </button>
              <button
                className={`gr ${filter === "busmavi" ? "active" : ""}`}
                onClick={() => setFilter("busmavi")}
              >
                <img src="/image/busgray.png" alt="" />
              </button>
              <button
                className={`gr ${filter === "trainmavi" ? "active" : ""}`}
                onClick={() => setFilter("trainmavi")}
              >
                <img className="train" src="/image/traingray.png" alt="" />
              </button>
              <button
                className={`gr ${filter === "sekilmavi" ? "active" : ""}`}
                onClick={() => setFilter("sekilmavi")}
              >
                <img src="/image/sekilgray.png" alt="" />
              </button>
            </div>

            {/* 2. Filter Group */}
            <div className="doc-headersa">
              <button
                className={`gr ${filter === "All" ? "active" : ""}`}
                onClick={() => setFilter("All")}
              >
                All
              </button>
              <button
                className={`gr ${filter === "exportgray" ? "active" : ""}`}
                onClick={() => setFilter("exportgray")}
              >
                <img src="/image/exportgray.png" alt="" />
              </button>
              <button className="gr" onClick={() => setFilter("none")}>
                <img src="/image/downgray.png" alt="" />
              </button>
              <button className="gr" onClick={() => setFilter("none")}>
                <img src="/image/busgray.png" alt="" />
              </button>
              <button className="gr" onClick={() => setFilter("none")}>
                <img src="/image/rengray.png" alt="" />
              </button>
            </div>
          </div>
        </div>

        <div className="table-containerssa">
          <div className="table-rows table-headsa">
            <div className="colaa type">Document type</div>
            <div className="colaa type">
              <img src="/image/docimage.png" alt="docimage" height={20} />
            </div>
            <div
              className="colaa type"
              style={{ cursor: "pointer" }}
           
            >
              <img src="/image/arrowimage.png" alt="arrowimage" height={20} />
            </div>
            <div className="colaa name">Document Name</div>
            <div className="colaa date">Date</div>
          </div>

          <div className="table-bodysa">
            {sortedDocuments.map((doc, idx) => (
              <div className="table-rowsa" key={idx}>
                <div className="colaa type">{doc.type}</div>
                <div className="colaa type">
                  <img
                    src={`/image/${doc.docimage}.png`}
                    alt={doc.docimage}
                    height={20}
                  />
                </div>
                <div className="colaa type">
                  <img
                    src={`/image/${doc.arrowimage}.png`}
                    alt={doc.arrowimage}
                    height={20}
                  />
                </div>
                <div className="colaa name">{doc.name}</div>
                <div className="colaa date">{doc.date}</div>
              </div>
            ))}
          </div>
        </div>
      </div>
      <div className="fulsl-op">


        <Modal
          aria-labelledby="transition-modal-title"
          aria-describedby="transition-modal-description"
          open={open}
          onClose={handleClose}
          closeAfterTransition
          slots={{ backdrop: Backdrop }}
          slotProps={{
            backdrop: {
              timeout: 500,
            },
          }}
        >
          <Fade in={open}>
      <Box sx={{ ...style, position: "relative" }}>
          <IconButton
    onClick={handleClose}
    sx={{
      position: "absolute",
      top: 8,
      right: 8,
      zIndex: 1,
    }}
  >
    <CloseIcon />
  </IconButton>
              <div className="flex-op">
                <div className="left-op">
                  <p>Direction:</p>
                  <label htmlFor="export">
                    <input
                      type="checkbox"
                      id="export"
                      checked={direction === "export"}
                      onChange={() => setDirection("export")}
                    />
                    <span>Export</span>
                    <img src={direction === 'export' ? "/image/bir.png" : "/image/exportnocolor.png"} alt="" />
                  </label>
                  <label htmlFor="import">
                    <input
                      type="checkbox"
                      id="import"
                      checked={direction === "import"}
                      onChange={() => setDirection("import")}
                    />
                    <span>Import</span>
                    <img src="/image/iki.png" alt="" />
                  </label>
                  <label htmlFor="domestic">
                    <input
                      type="checkbox"
                      id="domestic"
                      checked={direction === "domestic"}
                      onChange={() => setDirection("domestic")}
                    />
                    <span>Domestic</span>
                    <img src="/image/uc.png" alt="" />
                  </label>
                  {direction && (
                    <>
                      <p>Transport:</p>
                      <label htmlFor="air">
                        <input
                          type="checkbox"
                          id="air"
                          checked={transport === 'air'}
                          onChange={() => setTransport('air')}
                        />
                        <span>Air</span>
                        <img src={transport === 'air' ? "/image/dord.png" : "/image/airnocolor.png"} alt="" />
                      </label>
                      <label htmlFor="ocean">
                        <input
                          type="checkbox"
                          id="ocean"
                          checked={transport === 'ocean'}
                          onChange={() => setTransport('ocean')}
                        />
                        <span>Ocean</span>
                        <img src={transport === 'ocean' ? "/image/oceancolor.png" : "/image/bes.png"} alt="" />
                      </label>
                      <label htmlFor="inland">
                        <input
                          type="checkbox"
                          id="inland"
                          checked={transport === 'inland'}
                          onChange={() => setTransport('inland')}
                        />
                        <span>Inland</span>
                        <img src="/image/alti.png" alt="" />
                      </label>
                      {transport === 'ocean' && (
                        <>
                          <p>Shipment Type:</p>
                          <label htmlFor="fcl">
                            <input
                              type="checkbox"
                              id="fcl"
                              checked={shipmentType === 'FCL'}
                              onChange={() => setShipmentType('FCL')}
                            />
                            <span>FCL</span>
                          </label>
                          <label htmlFor="lcl">
                            <input
                              type="checkbox"
                              id="lcl"
                              checked={shipmentType === 'LCL'}
                              onChange={() => setShipmentType('LCL')}
                            />
                            <span>LCL</span>
                          </label>
                        </>
                      )}
                      <p>Sub Type</p>
                      <label htmlFor="subtype">
                        <input
                          type="checkbox"
                          id="subtype"
                          checked={transport === 'air' ? true : shipmentType === 'FCL'}
                          readOnly
                        />
                        <span>{transport === 'air' ? 'Air' : 'FCL'}</span>
                        {transport === 'air' && <img src="/image/dord.png" alt="" />}
                      </label>
                    </>
                  )}
                  <div className="general-section"></div>
                </div>
                {direction && (
                  <div className="right-op">
                    <div className="one-input-op">
                      <div className="op-side">
                        <label htmlFor="">Shipper</label>
                        <div className="op-f">
                          <input className="op-inp" type="text" placeholder="" />

                          <span>+</span>
                          <IoSearch className="seric" />
                        </div>
                      </div>
                      <div className="op-side">
                        <label htmlFor="">Consignee</label>
                        <div className="op-f">
                          <input className="op-inp" type="text" placeholder="" />

                          <span>+</span>
                          <IoSearch className="seric" />
                        </div>
                      </div>
                    </div>
                    <div className="emp-op"></div>
                    <div className="one-input-op">
                      <div className="op-side">
                        <label>My Customer</label>
                        <div className="op-f">
                          <select className="op-inp">
                            <option value="">Shipper</option>
                            <option value="shipper1">Shipper 1</option>
                            <option value="shipper2">Shipper 2</option>
                            <option value="shipper3">Shipper 3</option>
                          </select>
                        </div>
                      </div>
                      <div className="op-side">
                        <p className="opzero">My Customer</p>
                        <div className="op-f">
                          <input className="op-inp" type="text" placeholder="" />
                          <FaQuestionCircle className="question" />
                          <span>+</span>
                          <IoSearch className="seric" />
                        </div>
                      </div>
                    </div>
                    <div className="emp-op"></div>
                    <div className="pic-drc">
                      <p>Picup</p>
                      <label htmlFor="pickup">
                        <input type="checkbox" id="pickup" />
                        <span>Include Pickup</span>
                      </label>
                    </div>
                    <div className="emp-op"></div>
                    <div className="second-input-op">
                      <div className="op-side">
                        <label>Main Carrage</label>
                        <div className="flex-operation">
                          <div className="op-f">
                            <input
                              className="op-inp"
                              type="text"
                              placeholder={
                                transport === "ocean"
                                  ? "Loading Port*"
                                  : "Gateway*"
                              }
                            />
                            <IoSearch className="seric" />
                          </div>
                          <div className="op-f">
                            <input
                              className="op-inp"
                              type="text"
                              placeholder={
                                transport === "ocean"
                                  ? "Shipping Line"
                                  : "Flight number"
                              }
                            />
                          </div>
                        </div>
                      </div>
                      <div className="op-side">
                        <div className="flex-operation">
                          <div className="op-f">
                            <input
                              className="op-inp"
                              type="text"
                              placeholder={
                                transport === "ocean"
                                  ? "Discharge Port*"
                                  : "Destination*"
                              }
                            />
                            <IoSearch className="seric" />
                          </div>
                          <div className="op-f">
                            <input
                              className="op-inp"
                              type="text"
                              placeholder={
                                transport === "ocean" ? "Voyage No" : "MAWB"
                              }
                            />
                          </div>
                        </div>
                      </div>
                      <div className="op-side">
                        {transport === "ocean" ? (
                          <div className="flex-operation">
                            <div className="op-f">
                              <input
                                className="op-inp"
                                type="text"
                                placeholder="QBL"
                              />
                              <IoSearch className="seric" />
                            </div>
                            <div className="op-f">
                              <input
                                className="op-inp"
                                type="text"
                                placeholder="Vessel"
                              />
                            </div>
                          </div>
                        ) : (
                          <div className="op-f">
                            <input
                              className="op-inp"
                              type="text"
                              placeholder="Airline"
                            />
                            <IoSearch className="seric" />
                          </div>
                        )}
                      </div>
                    </div>
                    <div className="emp-op"></div>
                    <div className="pic-drc">
                      <p>Delivre</p>
                      <label htmlFor="delivery">
                        <input type="checkbox" id="delivery" />
                        <span>Include Delivre</span>
                      </label>
                    </div>
                    <div className="emp-op"></div>
                    <div className="one-input-op">
                      <div className="op-side">
                        <label>General</label>
                        <div className="op-f">
                          <select className="op-inp">
                            <option value="">Incoterm</option>
                            <option value="shipper1">Incoterm 1</option>
                            <option value="shipper2">Incoterm 2</option>
                            <option value="shipper3">Incoterm 3</option>
                          </select>
                        </div>
                        <div className="op-f">
                          <select className="op-inp">
                            <option value="">Move Type</option>
                            <option value="shipper1">Shipper 1</option>
                            <option value="shipper2">Shipper 2</option>
                            <option value="shipper3">Shipper 3</option>
                          </select>
                        </div>
                        <div className="op-f">
                          <select className="op-inp">
                            <option value="">Salesman Name Surname</option>
                            <option value="shipper1">Shipper 1</option>
                            <option value="shipper2">Shipper 2</option>
                            <option value="shipper3">Shipper 3</option>
                          </select>
                        </div>
                      </div>
                      <div className="op-side">
               
                       <div className="flex-opss">
                                  <p>Freight P/C:</p>
                          <div className="op-fs">
                          
                            <select className="op-inps">
                            
                              <option value="">Collect</option>
                         
                            </select>
                          </div>
                     </div>

                        <div>
                     <div className="flex-opss">
                                  <p>Freight P/C:</p>
                          <div className="op-fs">
                          
                            <select className="op-inps">
                            
                              <option value="">Collect</option>
                         
                            </select>
                          </div>
                     </div>
                        </div>
                      </div>
                    </div>
                    <div className="emp-op"></div>
                    <div className="one-input-op">
                      {transport === 'ocean' ? (
                        <div style={{ width: '100%', paddingLeft: '2%' }}>
                          <label className="eod-label" style={{ marginBottom: 8, display: 'block' }}>Expected Order Details</label>
                          <div style={{ display: 'flex', gap: 32, marginBottom: 6 }}>
                            <span style={{ color: 'black', fontWeight: 500, fontSize: 15, minWidth: 150 }}>Quantity</span>
                            <span style={{ color: 'black', fontWeight: 500, fontSize: 15, minWidth: 250 }}>Package Type</span>
                          </div>
                          {[0,1,2,3].map(i => (
                            <div key={i} style={{ display: 'flex', gap: 32, marginBottom: 12 }}>
                              <input className="op-inp" type="number" style={{ width: '150px', background: '#f5f5f5', borderRadius: 12, border: 'none', height: 43 }} placeholder="" />
                              <select className="op-inp" style={{ width: '250px', background: '#f5f5f5', borderRadius: 12, border: 'none', height: 43 }}>
                                <option value=""> </option>
                                <option value="box">Box</option>
                                <option value="pallet">Pallet</option>
                                <option value="carton">Carton</option>
                              </select>
                            </div>
                          ))}
                        </div>
                      ) : (
                        <div className="op-side">
                          <label>Expected Order Details</label>
                          <p className="black">Please insert totals or Fill Dimensions</p>
                          <div className="op-f">
                            <input
                              className="op-inp"
                              type="text"
                              placeholder={"Gross Weight (KG)"}
                            />
                          </div>
                          <div className="op-f">
                            <input
                              className="op-inp"
                              type="text"
                              placeholder={"Volume (CBM)"}
                            />
                          </div>
                          <div className="op-f">
                            <input
                              className="op-inp"
                              type="text"
                              placeholder={"Chargeable Weight (KG)"}
                            />
                          </div>
                          <div className="op-f">
                            <input
                              className="op-inp"
                              type="text"
                              placeholder={"Number of Packages"}
                            />
                          </div>
                        </div>
                      )}
                      <div className="op-side">
                        <p className="opzero">sa</p>
                        <label
                          htmlFor=""
                          style={{ display: "flex", gap: "10px" }}
                        >
                          <input type="checkbox" id="danger" />
                          <span>Dangerous Goods</span>
                        </label>

                        <div>
                          <div className="op-fat">
                            <input
                              className="op-inpf"
                              type="text"
                              placeholder={"Description of  Goods"}
                            />
                          </div>
                        </div>
                      </div>
                    </div>
                    <div className="emp-op"></div>
                    <div className="one-input-op">
                      <div className="op-side">
                        <label>Additional Fields</label>
                        <div className="op-f">
                          <input
                            className="op-inp"
                            type="text"
                            placeholder={"Agent"}
                          />
                          <IoSearch/>
                
                        </div>
                        <div className="op-f">
                          <input
                            className="op-inp"
                            type="text"
                            placeholder={"Reference1"}
                          />
                        </div>
                        <div className="op-f">
                          <input
                            className="op-inp"
                            type="text"
                            placeholder={"Reference2"}
                          />
                        </div>
                      </div>
                      <div className="op-side">
                        <p className="opzero">My Customer</p>

                        <div className="op-f">
                          <input
                            className="op-inp"
                            type="text"
                            placeholder={"Main Harmonizet"}
                          />
                        </div>
                        <div className="op-f">
                          <input
                            className="op-inp"
                            type="text"
                            placeholder={"Shipment Mode"}
                          />
                        </div>
                        <div className="op-f">
                          <input
                            className="op-inp"
                            type="text"
                            placeholder={"Tracking Number"}
                          />
                        </div>
                      </div>
                      
                      
                    </div>
                    <div className="op-side">
                        <p className="opzero">My Customer</p>

                        <div className="op-fa">
                          <input
                            className="op-inpa"
                            type="text"
                            placeholder={"Notes"}
                          />
                        </div>

                      </div>
                  </div>
                )}
              </div>
              <button className="crt-op">Create</button>
            </Box>
          </Fade>
        </Modal>
      </div>
  </div>
  );
};

export default Operation;
