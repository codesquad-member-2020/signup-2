import compose from "../../util/compose";
import {
  VALIDATION_MESSAGE,
  VALIDATION_REG,
  ALLOWED_PASSWORD_LENGTH_RANGE
} from "../../constants/constants";
import makePipelineObject from "../../util/validationPipeline";

const { PASSWORD } = VALIDATION_MESSAGE;

const checkPasswordLength = target => {
  const [minLength, maxLength] = ALLOWED_PASSWORD_LENGTH_RANGE;
  if (minLength > target.length || target.length > maxLength) {
    return makePipelineObject(target, false, PASSWORD.NOT_ALLOWED_LENGTH);
  }
  return makePipelineObject(target, true, PASSWORD.SAFE_PASSWORD);
};

const checkPasswordNumber = previousResult => {
  const { target, passedValidation } = previousResult;
  if (!passedValidation) {
    return previousResult;
  }
  const checkNumber = target.search(VALIDATION_REG.AT_LEAST_ONE_NUMBER);
  if (checkNumber < 0) {
    return makePipelineObject(target, false, PASSWORD.AT_LEAST_ONE_NUMBER);
  }
  return previousResult;
};

const checkPasswordEnglish = previousResult => {
  const { target, passedValidation } = previousResult;
  if (!passedValidation) {
    return previousResult;
  }
  const checkEnglish = target.search(
    VALIDATION_REG.AT_LEAST_ONE_ENGLISH_LETTER
  );
  if (checkEnglish < 0) {
    return makePipelineObject(
      target,
      false,
      PASSWORD.AT_LEAST_ONE_ENGLISH_LETTER
    );
  }
  return previousResult;
};

const checkPasswordSpecialLetter = previousResult => {
  const { target, passedValidation } = previousResult;
  if (!passedValidation) {
    return previousResult;
  }
  const checkSpecialLetter = target.search(
    VALIDATION_REG.AT_LEAST_ONE_SPECAIL_CASE
  );
  if (checkSpecialLetter < 0) {
    return makePipelineObject(
      target,
      false,
      PASSWORD.AT_LEAST_ONE_SPECIAL_LETTER
    );
  }
  return previousResult;
};

const composedPasswordValidation = compose(
  checkPasswordLength,
  checkPasswordNumber,
  checkPasswordEnglish,
  checkPasswordSpecialLetter
);

export default composedPasswordValidation;
