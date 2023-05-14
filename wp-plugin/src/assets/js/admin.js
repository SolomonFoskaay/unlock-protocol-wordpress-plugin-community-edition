/**
 * External dependencies
 */
import $ from "jquery";

/**
 * WordPress dependencies
 */
const { render } = wp.element;
import App from "./admin/App";

let rtDevSiteAlertContainer = document.getElementById(
  "unlock-protocol-container"
);

if (rtDevSiteAlertContainer) {
  render(<App />, rtDevSiteAlertContainer);
}
