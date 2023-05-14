import { __ } from "@wordpress/i18n";
import { useState } from "react";
import Networks from "./Networks";
import General from "./General";
import CategoryTagLock from "./CategoryTagLock"; // new import
import "../../scss/admin/style.scss";

function App() {
  const [currentTab, setCurrentTab] = useState("general");

  return (
    <>
      <div className="wrap">
        <h2 className="unlock-settings-heading">
          {__("Unlock Protocol", "unlock-protocol")}
        </h2>

        <div className="settings_container">
          <div className="left-menu">
            <ul>
              <li
                className={"general" === currentTab ? "active" : ""}
                onClick={() => setCurrentTab("general")}
              >
                {__("General", "unlock-protocol")}
              </li>

              <li
                className={"networks" === currentTab ? "active" : ""}
                onClick={() => setCurrentTab("networks")}
              >
                {__("Networks", "unlock-protocol")}
              </li>

              <li
                className={"category-tag-lock" === currentTab ? "active" : ""}
                onClick={() => setCurrentTab("category-tag-lock")}
              >
                {__("Category/Tag Lock", "unlock-protocol")} {/* new tab */}
              </li>
            </ul>
          </div>

          <div className="right-content">
            {"general" === currentTab ? <General /> : ""}
            {"networks" === currentTab ? <Networks /> : ""}
            {"category-tag-lock" === currentTab ? <CategoryTagLock /> : ""} {/* new condition */}
          </div>
        </div>
      </div>
    </>
  );
}

export default App;
