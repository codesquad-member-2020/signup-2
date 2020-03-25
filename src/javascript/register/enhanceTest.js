import { SELECT_ELEMENT } from "../../util/selector";

const caseOfPassword = (result, classList) => {
  classList.contains("hide") && classList.remove("hide");
  if (result) {
    classList.contains("warning") && classList.remove("warning");
    classList.add("safe");
    return;
  }
  classList.contains("safe") && classList.remove("safe");
  classList.add("warning");
};

function handleTestResult(target, result, message) {
  const id = target.id || target;
  const warningMessageElement = SELECT_ELEMENT(`#${id}-warning-message`);
  warningMessageElement.innerHTML = message;

  if (target.id && target.id === "password") {
    caseOfPassword(result, warningMessageElement.classList);
    return;
  }

  if (!result && warningMessageElement.classList.contains("hide")) {
    warningMessageElement.classList.remove("hide");
    return;
  }

  if (result && !warningMessageElement.classList.contains("hide")) {
    warningMessageElement.classList.add("hide");
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
        const [result, message] = test(...selectorValueArray);
        handleTestResult(target, result, message);
      };
    };
  };
}
