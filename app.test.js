/**
 * @jest-environment jsdom
 */
const fs = require("fs");
const path = require("path");
require("@testing-library/jest-dom");
const { fireEvent, getByText } = require("@testing-library/dom");

const html = fs.readFileSync(path.resolve(__dirname, "./index.html"), "utf8");

describe("Button click behavior", () => {
  let container;
  beforeEach(() => {
    document.body.innerHTML = html;
    require("./script.js");
    container = document.body;
  });

  test("clicking the button shows hidden text", () => {
    const button = getByText(container, "Click Me");
    const textElement = getByText(container, "Hello from CircleCI!");
    expect(textElement).not.toBeVisible();
    fireEvent.click(button);
    expect(textElement).toBeVisible();
  });
});
