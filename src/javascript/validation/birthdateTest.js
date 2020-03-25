const compose = require("../../util/util");
const moment = require("moment");
const {
  VALIDATION_MESSAGE: { BIRTHDATE }
} = require("../../constants/constants");

const checkDateValidity = birthdateString => {
  const birthdate = moment(birthdateString);
  if (!birthdate.isValid()) {
    return [birthdate, false, BIRTHDATE.NOT_ALLOWED_DATE];
  }
  return [birthdate, true, ""];
};

const checkUnderFifteen = result => {
  const [birthdate, passedTest] = result;
  if (!passedTest) {
    return result;
  }

  const fifteenYearBefore = moment().subtract(15, "years");
  if (moment.max(birthdate, fifteenYearBefore).isSame(birthdate)) {
    return [birthdate, false, BIRTHDATE.UNDER_FIFTEEN];
  }
  return result;
};

const checkOverNintyNine = result => {
  const [birthdate, passedTest] = result;
  if (!passedTest) {
    return result;
  }
  const nintyNineYearBefore = moment().subtract(99, "years");
  if (moment.min(birthdate, nintyNineYearBefore).isSame(birthdate)) {
    return [birthdate, false, BIRTHDATE.OVER_NINTYNINE];
  }
  return result;
};

const composedBirthdateTest = compose(
  checkDateValidity,
  checkUnderFifteen,
  checkOverNintyNine
);

module.exports = composedBirthdateTest;
