import { VALIDATION_MESSAGE, VALIDATION_REG } from "../../constants/constants";
import composedPasswordValidation from "./passwordValidation";
import composedMobilePhoneValidation from "./mobilePhoneValidation";
import composedBirthdateValidation from "./birthdateValidation";
import makePipelineObject from "../../util/validationPipeline";

const { ID, EMAIL, PASSWORD_CHECK } = VALIDATION_MESSAGE;

export const passwordTest = password => {
  const { passedValidation, message } = composedPasswordValidation(password);
  return { passedValidation, message };
};

export const passwordCheckTest = (password, targetPassword) => {
  if (password === targetPassword) {
    return makePipelineObject(password, true, PASSWORD_CHECK.SAME_PASSWORD);
  }
  return makePipelineObject(password, false, PASSWORD_CHECK.NOT_SAME_PASSWORD);
};

export const idTest = id => {
  const result = VALIDATION_REG.ID_RULE.test(id);
  if (result) {
    return makePipelineObject(id, true, ID.SAFE_ID);
  }
  return makePipelineObject(id, false, ID.NOT_ALLOWED_ID);
};

export const emailTest = email => {
  const result = VALIDATION_REG.EMAIL_RULE.test(email);
  if (result) {
    return makePipelineObject(email, true, EMAIL.SAFE_EMAIL);
  }
  return makePipelineObject(email, false, EMAIL.NOT_VALID_EMAIL);
};

export const mobilePhoneNumberTest = mobilePhoneNumber => {
  const { passedValidation, message } = composedMobilePhoneValidation(
    mobilePhoneNumber
  );
  return { passedValidation, message };
};

export const birthdateTest = birthdate => {
  const { passedValidation, message } = composedBirthdateValidation(birthdate);
  return { passedValidation, message };
};
