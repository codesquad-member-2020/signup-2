const compose = require("../../util/util");
const {
  ALLOWED_MOBILE_PHONE_LENGTH,
  ALLOWED_MOBILE_PHONE_STARTER,
  VALIDATION_MESSAGE: { MOBILE_PHONE }
} = require("../../constants/constants");

const checkMobilePhoneLength = mobilePhoneNumber => {
  if (
    !ALLOWED_MOBILE_PHONE_LENGTH.some(
      length => length === mobilePhoneNumber.length
    )
  ) {
    return [
      mobilePhoneNumber,
      false,
      MOBILE_PHONE.NOT_ALLOWED_MOBILE_PHONE_LENGTH
    ];
  }
  return [mobilePhoneNumber, true, MOBILE_PHONE.SAFE_MOBILE_PHONE];
};

const checkMobilePhoneStarter = result => {
  const [mobilePhoneNumber, passedTest] = result;
  if (!passedTest) {
    return result;
  }
  const mobilePhoneNumberStarter = mobilePhoneNumber.slice(0, 3);
  if (
    !ALLOWED_MOBILE_PHONE_STARTER.some(
      starter => starter === mobilePhoneNumberStarter
    )
  ) {
    return [
      mobilePhoneNumber,
      false,
      MOBILE_PHONE.NOT_ALLOWED_MOBILE_PHONE_STARTER
    ];
  }
  return result;
};

const composedMobilePhoneTest = compose(
  checkMobilePhoneLength,
  checkMobilePhoneStarter
);

module.exports = composedMobilePhoneTest;
