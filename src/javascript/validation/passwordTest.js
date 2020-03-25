const compose = require("../../util/util");
const {
  VALIDATION_MESSAGE: { PASSWORD },
  VALIDATION_REGULAR_EXPRESSION,
  ALLOWED_PASSWORD_LENGTH_RANGE
} = require("../../constants/constants");

const checkPasswordLength = password => {
  const [minLength, maxLength] = ALLOWED_PASSWORD_LENGTH_RANGE;
  if (minLength > password.length || password.length > maxLength) {
    return [password, false, PASSWORD.NOT_ALLOWED_LENGTH];
  }
  return [password, true, PASSWORD.SAFE_PASSWORD];
};

const checkPasswordNumber = result => {
  const [password, passedTest] = result;
  if (!passedTest) {
    return result;
  }
  const checkNumber = password.search(
    VALIDATION_REGULAR_EXPRESSION.AT_LEAST_ONE_NUMBER
  );
  if (checkNumber < 0) {
    return [password, false, PASSWORD.AT_LEAST_ONE_NUMBER];
  }
  return result;
};

const checkPasswordEnglish = result => {
  const [password, passedTest] = result;
  if (!passedTest) {
    return result;
  }
  const checkEnglish = password.search(
    VALIDATION_REGULAR_EXPRESSION.AT_LEAST_ONE_ENGLISH_LETTER
  );
  if (checkEnglish < 0) {
    return [password, false, PASSWORD.AT_LEAST_ONE_ENGLISH_LETTER];
  }
  return result;
};

const checkPasswordSpecialLetter = result => {
  const [password, passedTest] = result;
  if (!passedTest) {
    return result;
  }
  const checkSpecialLetter = password.search(
    VALIDATION_REGULAR_EXPRESSION.AT_LEAST_ONE_SPECAIL_CASE
  );
  if (checkSpecialLetter < 0) {
    return [password, false, PASSWORD.AT_LEAST_ONE_SPECIAL_LETTER];
  }
  return result;
};

const composedPasswordTest = compose(
  checkPasswordLength,
  checkPasswordNumber,
  checkPasswordEnglish,
  checkPasswordSpecialLetter
);

module.exports = composedPasswordTest;
