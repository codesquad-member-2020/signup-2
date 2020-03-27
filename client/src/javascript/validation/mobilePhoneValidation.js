import compose from "../../util/compose";
import {
  ALLOWED_MOBILE_PHONE_LENGTH,
  ALLOWED_MOBILE_PHONE_STARTER,
  VALIDATION_MESSAGE
} from "../../constants/constants";
import makePipelineObject from "../../util/validationPipeline";

const { MOBILE_PHONE } = VALIDATION_MESSAGE;

const checkMobilePhoneLength = target => {
  if (!ALLOWED_MOBILE_PHONE_LENGTH.some(length => length === target.length)) {
    return makePipelineObject(
      target,
      false,
      MOBILE_PHONE.NOT_ALLOWED_MOBILE_PHONE_LENGTH
    );
  }
  return makePipelineObject(target, true, MOBILE_PHONE.SAFE_MOBILE_PHONE);
};

const checkMobilePhoneStarter = previousResult => {
  const { target, passedValidation } = previousResult;
  if (!passedValidation) {
    return previousResult;
  }
  const mobilePhoneNumberStarter = target.slice(0, 3);
  if (
    !ALLOWED_MOBILE_PHONE_STARTER.some(
      starter => starter === mobilePhoneNumberStarter
    )
  ) {
    return makePipelineObject(
      target,
      false,
      MOBILE_PHONE.NOT_ALLOWED_MOBILE_PHONE_STARTER
    );
  }
  return previousResult;
};

const composedMobilePhoneValidation = compose(
  checkMobilePhoneLength,
  checkMobilePhoneStarter
);

export default composedMobilePhoneValidation;
