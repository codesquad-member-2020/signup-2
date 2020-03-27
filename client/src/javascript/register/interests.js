import { SELECT_ELEMENT } from "../../util/selector";

const tagContainer = SELECT_ELEMENT(".tag-container");
const input = SELECT_ELEMENT(".tag-container input");

let tags = [];

const createTag = label => {
  const div = document.createElement("div");
  div.setAttribute("class", "tag");
  const span = document.createElement("span");
  span.innerHTML = label;
  const closeIcon = document.createElement("i");
  closeIcon.innerHTML = "close";
  closeIcon.setAttribute("class", "material-icons");
  closeIcon.setAttribute("data-item", label);
  div.appendChild(span);
  div.appendChild(closeIcon);
  return div;
};

export const clearTags = () => {
  document.querySelectorAll(".tag").forEach(tag => {
    tag.parentElement.removeChild(tag);
  });
};

const addTags = () => {
  clearTags();
  tags
    .slice()
    .reverse()
    .forEach(tag => {
      tagContainer.prepend(createTag(tag));
    });
};

const isValidTagNumber = () => {
  const targetClassList = SELECT_ELEMENT("#interests-warning-message")
    .classList;
  if (tags.length >= 3) {
    if (!targetClassList.contains("hide")) {
      targetClassList.add("hide");
    }
  } else {
    if (targetClassList.contains("hide")) targetClassList.remove("hide");
  }
};

export const handleKeyUp = e => {
  if (e.key === ",") {
    const { value } = e.target;
    const withoutComma = value.slice(0, value.length - 1);
    [withoutComma].forEach(tag => {
      tags.push(tag);
    });

    addTags();
    input.value = "";
    isValidTagNumber();
    return;
  }
  if (e.key === "Backspace") {
    clearTags();
    tags.pop();
    tags
      .slice()
      .reverse()
      .forEach(tag => {
        tagContainer.prepend(createTag(tag));
      });
    isValidTagNumber();
  }
};

export const handleClick = e => {
  if (e.target.tagName === "I") {
    const tagLabel = e.target.getAttribute("data-item");
    const index = tags.indexOf(tagLabel);
    tags = [...tags.slice(0, index), ...tags.slice(index + 1)];
    addTags();
  }
};
