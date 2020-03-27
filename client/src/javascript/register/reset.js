import { clearTags } from "./interests";
import { SELECT_ELEMENT, SELECT_ELEMENT_ALL } from "../../util/selector";

const handleReset = e => {
  e.preventDefault();
  console.log("hello");
  clearTags();
  [...SELECT_ELEMENT_ALL(".status-text")].forEach(element => {
    if (!element.classList.contains("hide")) {
      element.classList.add("hide");
    }
  });
  SELECT_ELEMENT("form").reset();
};

export default handleReset;
