import compose from "../../util/compose";
import moment from "moment";
import { VALIDATION_MESSAGE } from "../../constants/constants";
import makePipelineObject from "../../util/validationPipeline";

const { BIRTHDATE } = VALIDATION_MESSAGE;

export const checkDateValidity = targetBirthdate => {
  const [year, month, day] = targetBirthdate;
  const birthdateString = `${year}-${month}-${day}`;
  if (!year || !month || !day) {
    return makePipelineObject(
      birthdateString,
      false,
      BIRTHDATE.NOT_ALLOWED_DATE
    );
  }
  const birthdate = moment(birthdateString, "YYYY-MM-DD");
  if (!birthdate.isValid()) {
    return makePipelineObject(birthdate, false, BIRTHDATE.NOT_ALLOWED_DATE);
  }
  return makePipelineObject(birthdate, true, "");
};

const checkUnderFifteen = previousResult => {
  const { target, passedValidation } = previousResult;
  if (!passedValidation) {
    return previousResult;
  }
  const fifteenYearBefore = moment().subtract(15, "years");
  if (moment.max(target, fifteenYearBefore).isSame(target)) {
    return makePipelineObject(target, false, BIRTHDATE.UNDER_FIFTEEN);
  }
  return previousResult;
};

const checkOverNintyNine = previousResult => {
  const { target, passedValidation } = previousResult;
  if (!passedValidation) {
    return previousResult;
  }
  const nintyNineYearBefore = moment().subtract(99, "years");
  if (moment.min(target, nintyNineYearBefore).isSame(target)) {
    return makePipelineObject(target, false, BIRTHDATE.OVER_NINTYNINE);
  }
  return previousResult;
};

export const composedBirthdateValidation = compose(
  checkDateValidity,
  checkUnderFifteen,
  checkOverNintyNine
);

export default composedBirthdateValidation;
