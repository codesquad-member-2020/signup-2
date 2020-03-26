import { SELECT_ELEMENT } from "../../util/selector";
import { CSS_ID_CLASS } from "../../constants/constants";

const { REGISTER } = CSS_ID_CLASS;
export const popUpModal = () => {
  SELECT_ELEMENT(`#${REGISTER.MODAL}`).classList.remove(REGISTER.HIDE);
};

export const hideModal = () => {
  SELECT_ELEMENT(`#${REGISTER.MODAL}`).classList.add(REGISTER.HIDE);
};

export const handleScrollEnd = event => {
  const { target } = event;
  if (target.scrollTop + target.clientHeight > target.scrollHeight) {
    const agreementButton = SELECT_ELEMENT(`#${REGISTER.MODAL_BUTTON} button`);
    const targetClassList = agreementButton.classList;
    agreementButton.disabled = false;
    targetClassList.remove(REGISTER.INVALID);
    targetClassList.add(REGISTER.VALID);
  }
};

export const checkAgreementCheckBox = () => {
  SELECT_ELEMENT(`.${REGISTER.MODAL_CLOSE}`).click();
  SELECT_ELEMENT(`#${REGISTER.AGREEMENT_CHECKBOX}`).checked = true;
};
