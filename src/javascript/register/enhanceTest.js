import { SELECT_ELEMENT } from "../../util/selector";
import { CSS_ID_CLASS } from "../../constants/constants";

const { REGISTER } = CSS_ID_CLASS;

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
    const [result, message] = test(target.value);

    handleTestResult(target, result, message);
  };
}

export function withTestAndSelector(test) {
  return function(selector) {
    return function(event) {
      const { target } = event;
      const compareValue = SELECT_ELEMENT(selector).value;
      const [result, message] = test(target.value, compareValue);

      handleTestResult(target, result, message);
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
        const [result, message] = test(selectorValueArray);
        handleTestResult(target, result, message);
      };
    };
  };
}
