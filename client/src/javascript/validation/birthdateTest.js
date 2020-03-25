import compose from "../../util/compose";
import moment from "moment";
import { VALIDATION_MESSAGE } from "../../constants/constants";

const { BIRTHDATE } = VALIDATION_MESSAGE;

export const checkDateValidity = targetBirthdate => {
  const [year, month, day] = targetBirthdate;
  if (!year || !month || !day) {
    return [birthdate, false, BIRTHDATE.NOT_ALLOWED_DATE];
  }
  const birthdateString = `${year}-${month}-${day}`;
  const birthdate = moment(birthdateString, "YYYY-MM-DD");
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

export const composedBirthdateTest = compose(
  checkDateValidity,
  checkUnderFifteen,
  checkOverNintyNine
);

export default composedBirthdateTest;
