import {
  idTest,
  passwordTest,
  passwordCheckTest,
  emailTest,
  mobilePhoneNumberTest,
  birthdateTest
} from "../validation/validation";
import { SELECT_ELEMENT } from "../../util/selector";
import {
  withTest,
  withTestAndSelector,
  withTestAndSelectors,
  idExistInServer
} from "./enhanceTest";
import {
  hideModal,
  popUpModal,
  handleScrollEnd,
  checkAgreementCheckBox
} from "./modalCallback";
import composedCheckRequirements from "./requestRegister";
import { CSS_ID_CLASS } from "../../constants/constants";

const { REGISTER } = CSS_ID_CLASS;

const idInputWithTest = withTest(idTest);
const emailInputWithTest = withTest(emailTest);
const mobilePhoneNumberInputWithTest = withTest(mobilePhoneNumberTest);
const passwordInputWithTest = withTest(passwordTest);
const passwordCheckInputWithTest = withTestAndSelector(passwordCheckTest)(
  `#${REGISTER.PASSWORD}`
);
const birthdateCheckInputWithTest = withTestAndSelectors(birthdateTest)(
  REGISTER.BIRTHDATE
)(`#${REGISTER.YEAR}`, `#${REGISTER.MONTH}`, `#${REGISTER.DAY}`);

SELECT_ELEMENT(`#${REGISTER.ID}`).addEventListener("input", idInputWithTest);
SELECT_ELEMENT(`#${REGISTER.ID}`).addEventListener("change", idExistInServer);
SELECT_ELEMENT(`#${REGISTER.EMAIL}`).addEventListener(
  "input",
  emailInputWithTest
);
SELECT_ELEMENT(`#${REGISTER.MOBILE_PHONE_NUMBER}`).addEventListener(
  "input",
  mobilePhoneNumberInputWithTest
);
SELECT_ELEMENT(`#${REGISTER.PASSWORD}`).addEventListener(
  "input",
  passwordInputWithTest
);
SELECT_ELEMENT(`#${REGISTER.PASSWORD_CHECK}`).addEventListener(
  "input",
  passwordCheckInputWithTest
);
SELECT_ELEMENT(`#${REGISTER.YEAR}`).addEventListener(
  "change",
  birthdateCheckInputWithTest
);
SELECT_ELEMENT(`#${REGISTER.MONTH}`).addEventListener(
  "change",
  birthdateCheckInputWithTest
);
SELECT_ELEMENT(`#${REGISTER.DAY}`).addEventListener(
  "change",
  birthdateCheckInputWithTest
);

SELECT_ELEMENT(`#${REGISTER.AGREEMENT}`).addEventListener("click", popUpModal);

SELECT_ELEMENT(`.${REGISTER.MODAL_CLOSE}`).addEventListener("click", hideModal);

SELECT_ELEMENT(`#${REGISTER.PRIVACY_AGREEMENT}`).addEventListener(
  "scroll",
  handleScrollEnd
);

SELECT_ELEMENT(`#${REGISTER.MODAL_BUTTON}`).addEventListener(
  "click",
  checkAgreementCheckBox
);

SELECT_ELEMENT(`form`).addEventListener("submit", composedCheckRequirements);

const tagContainer = document.querySelector(".tag-container");
const input = document.querySelector(".tag-container input");

let tags = [];

function createTag(label) {
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
}

function clearTags() {
  document.querySelectorAll(".tag").forEach(tag => {
    tag.parentElement.removeChild(tag);
  });
}

function addTags() {
  clearTags();
  tags
    .slice()
    .reverse()
    .forEach(tag => {
      tagContainer.prepend(createTag(tag));
    });
}

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

input.addEventListener("keyup", e => {
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
});
document.addEventListener("click", e => {
  if (e.target.tagName === "I") {
    const tagLabel = e.target.getAttribute("data-item");
    const index = tags.indexOf(tagLabel);
    tags = [...tags.slice(0, index), ...tags.slice(index + 1)];
    addTags();
  }
});

input.focus();
