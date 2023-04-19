import React, { useState } from "react";
import SayHi from "./SayHi";
import "../../styles/Tabs.scss";

const Contact = () => {
  const [activeTab, setActiveTab] = useState("say-hi");

  const handleTabChange = (tabName) => {
    setActiveTab(tabName);
  };

  return (
    <div className="tabs-container flex justify-center">
      {/**at div#form w-1/3 only when Submit Music and Submit Image is disabled   */}
      <div id="form" className="tabs mx-4 lg:mx-0 w-full lg:w-1/3">
        <ul className="tab-list text-white font-montserrat">
          <li
            className={`tab  ${activeTab === "say-hi" ? "active" : ""}`}
            onClick={() => handleTabChange("say-hi")}
          >
            Say Hi
          </li>
          {/* <li
            className={`tab  ${activeTab === "submit-music" ? "active" : ""}`}
            onClick={() => handleTabChange("submit-music")}
          >
            Submit Music
          </li>
          <li
            className={`tab ${activeTab === "submit-image" ? "active" : ""}`}
            onClick={() => handleTabChange("submit-image")}
          >
            Submit Image
          </li> */}
        </ul>
        <div className="tab-contents">
          <div
            className={`tab-content ${activeTab === "say-hi" ? "active" : ""}`}
          >
            <SayHi />
          </div>
          <div
            className={`tab-content ${
              activeTab === "submit-music" ? "active" : ""
            }`}
          >
            <div>Audio Form</div>
          </div>
          <div
            className={`tab-content ${
              activeTab === "submit-image" ? "active" : ""
            }`}
          >
            <div>Image Form</div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Contact;
