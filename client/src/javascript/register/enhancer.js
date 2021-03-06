import { SELECT_ELEMENT } from "../../util/selector";
import { CSS_ID_CLASS, VALIDATION_MESSAGE } from "../../constants/constants";
import { idExist } from "../validation/idValidation";

const { REGISTER } = CSS_ID_CLASS;

export const idExistInServer = async e => {
  const warningMessageElement = SELECT_ELEMENT(`#id-warning-message`);
  if (!warningMessageElement.classList.contains("hide")) {
    return;
  }
  const { target } = e;
  const id = target.value;
  const isValid = await idExist(id);
  const message = isValid
    ? VALIDATION_MESSAGE.SAFE_ID
    : VALIDATION_MESSAGE.EXISTING_ID;
  handleTestResult(target, isValid, message);
};

const caseOfPassword = (result, classList) => {
  classList.contains(REGISTER.HIDE) && classList.remove(REGISTER.HIDE);
  if (result) {
    classList.contains(REGISTER.WARNING) && classList.remove(REGISTER.WARNING);
    classList.add(REGISTER.SAFE);
    return;
  }
  classList.contains(REGISTER.SAFE) && classList.remove(REGISTER.SAFE);
  classList.add(REGISTER.WARNING);
};

function handleTestResult(target, result, message) {
  const id = target.id || target;
  const warningMessageElement = SELECT_ELEMENT(`#${id}-warning-message`);
  warningMessageElement.innerHTML = message;

  if (target.id && target.id === REGISTER.PASSWORD) {
    caseOfPassword(result, warningMessageElement.classList);
    return;
  }

  if (!result && warningMessageElement.classList.contains(REGISTER.HIDE)) {
    warningMessageElement.classList.remove(REGISTER.HIDE);
    return;
  }

  if (result && !warningMessageElement.classList.contains(REGISTER.HIDE)) {
    warningMessageElement.classList.add(REGISTER.HIDE);
  }
}

export function withTest(test) {
  return function(event) {
    const { target } = event;
    const { passedValidation, message } = test(target.value);

    handleTestResult(target, passedValidation, message);
  };
}

export function withTestAndSelector(test) {
  return function(selector) {
    return function(event) {
      const { target } = event;
      const compareValue = SELECT_ELEMENT(selector).value;
      const { passedValidation, message } = test(target.value, compareValue);

      handleTestResult(target, passedValidation, message);
    };
  };
}

export function withTestAndSelectors(test) {
  return function(target) {
    return function() {
      const selectorArray = Array.prototype.slice.call(arguments);
      return function(event) {
        const selectorValueArray = selectorArray.map(
          selector => SELECT_ELEMENT(selector).value
        );
        const { passedValidation, message } = test(selectorValueArray);
        handleTestResult(target, passedValidation, message);
      };
    };
  };
}
