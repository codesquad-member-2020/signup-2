import { VALIDATION_MESSAGE, VALIDATION_REG } from "../../constants/constants";
import composedPasswordTest from "./passwordTest";
import composedMobilePhoneTest from "./mobilePhoneTest";
import composedBirthdateTest from "./birthdateTest";

const { ID, EMAIL, PASSWORD_CHECK } = VALIDATION_MESSAGE;

export const passwordTest = password => {
  const [_, result, message] = composedPasswordTest(password);
  return [result, message];
};

export const passwordCheckTest = (password, targetPassword) => {
  if (password === targetPassword) {
    return [true, PASSWORD_CHECK.SAME_PASSWORD];
  }
  return [false, PASSWORD_CHECK.NOT_SAME_PASSWORD];
};

export const idTest = id => {
  const result = VALIDATION_REG.ID_RULE.test(id);
  if (result) {
    return [true, ID.SAFE_ID];
  }
  return [false, ID.NOT_ALLOWED_ID];
};

export const emailTest = email => {
  const result = VALIDATION_REG.EMAIL_RULE.test(email);
  if (result) {
    return [true, EMAIL.SAFE_EMAIL];
  }
  return [false, EMAIL.NOT_VALID_EMAIL];
};

export const mobilePhoneNumberTest = mobilePhoneNumber => {
  const [_, result, message] = composedMobilePhoneTest(mobilePhoneNumber);
  return [result, message];
};

export const birthdateTest = birthdate => {
  const [_, result, message] = composedBirthdateTest(birthdate);
  return [result, message];
};
