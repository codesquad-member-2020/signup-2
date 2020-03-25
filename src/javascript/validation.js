const {
  ALLOWED_MOBILE_PHONE_LENGTH,
  ALLOWED_MOBILE_PHONE_STARTER,
  PASSWORD_ERROR_MESSAGE,
  PASSWORD_LENGTH_RANGE
} = require("../constants/constants");

//출처: https://hee-kkk.tistory.com/22 [개발, 개발 누가 말했나]
const passwordAtLeastOneNumberRules = /[0-9]/g;
const passwordAtLeastOneEnglishLetterRules = /[a-zA-z]/gi;
const passwordAtLeastOneSpecialLetterRules = /[!@#$%^&*\-\_]/gi;
const idRules = /^[a-zA-Z0-9$@$!%*#?&\-]{5,20}$/;

// 출처: https://epthffh.tistory.com/entry/비밀번호-정규식 [물고기 개발자의 블로그]
const emailRules = /^[0-9a-zA-Z]([-_.]?[0-9a-zA-Z])*@[0-9a-zA-Z]([-_.]?[0-9a-zA-Z])*.[a-zA-Z]{2,3}$/i;

const passwordTest = password => {
  const [minLength, maxLength] = PASSWORD_LENGTH_RANGE;
  if (minLength > password.length || password.length > maxLength) {
    return [false, PASSWORD_ERROR_MESSAGE.NOT_ALLOWED_LENGTH];
  }
  const checkNumber = password.search(passwordAtLeastOneNumberRules);
  if (checkNumber < 0) {
    return [false, PASSWORD_ERROR_MESSAGE.AT_LEAST_ONE_NUMBER];
  }

  const checkEnglish = password.search(passwordAtLeastOneEnglishLetterRules);
  if (checkEnglish < 0) {
    return [false, PASSWORD_ERROR_MESSAGE.AT_LEAST_ONE_ENGLISH_LETTER];
  }

  const checkSpecialLetter = password.search(
    passwordAtLeastOneSpecialLetterRules
  );

  if (checkSpecialLetter < 0) {
    return [false, PASSWORD_ERROR_MESSAGE.AT_LEAST_ONE_SPECIAL_LETTER];
  }

  return true;
};

const passwordCheckTest = password => targetPassword =>
  password === targetPassword;
const idTest = id => idRules.test(id);
const emailTest = email => emailRules.test(email);
const mobilePhoneNumberTest = mobilePhoneNumber => {
  if (
    !ALLOWED_MOBILE_PHONE_LENGTH.some(
      length => length === mobilePhoneNumber.length
    )
  ) {
    return false;
  }

  const mobilePhoneNumberStarter = mobilePhoneNumber.slice(0, 3);
  if (
    !ALLOWED_MOBILE_PHONE_STARTER.some(
      starter => starter === mobilePhoneNumberStarter
    )
  ) {
    return false;
  }
  return true;
};

module.exports = {
  passwordTest,
  passwordCheckTest,
  idTest,
  emailTest,
  mobilePhoneNumberTest
};
