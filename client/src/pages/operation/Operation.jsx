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

const Operation = () => {
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

  return (
    <>
      <div className="full-op">
        <h1>New Direct Shipment</h1>
        <Button onClick={handleOpen}>Modal</Button>

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
            <Box sx={style}>
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
              </div>
              <button className="crt-op">Create</button>
            </Box>
          </Fade>
        </Modal>
      </div>
    </>
  );
};

export default Operation;