import { SELECT_ELEMENT, SELECT_ELEMENT_ALL } from "../../util/selector";
import compose from "../../util/compose";

const hasFulfilledRequirements = e => {
  e.preventDefault();
  return [...SELECT_ELEMENT_ALL(".status-text")]
    .map(element => {
      if (element.id === "password-warning-message") {
        return element.classList.contains("safe");
      }
      return element.classList.contains("hide");
    })
    .some(isFulfilled => isFulfilled === false);
};

const hasCheckedAgreement = previousResult => {
  if (!previousResult) {
    return previousResult;
  }
  return SELECT_ELEMENT("#agreement-checkbox").checked === true;
};

const hasWrittenName = previousResult => {
  if (!previousResult) {
    return previousResult;
  }
  return SELECT_ELEMENT("#name").value !== "";
};

const hasSelectedSex = previousResult => {
  if (!previousResult) {
    return previousResult;
  }
  return SELECT_ELEMENT("#sex").value !== "";
};

const printResult = previousResult => {
  console.log(previousResult);
};

const composedCheckRequirements = compose(
  hasFulfilledRequirements,
  hasCheckedAgreement,
  hasWrittenName,
  hasSelectedSex,
  printResult
);

export default composedCheckRequirements;
