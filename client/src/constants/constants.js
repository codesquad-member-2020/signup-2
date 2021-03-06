export const ALLOWED_MOBILE_PHONE_STARTER = ["010", "011", "017", "019"];

export const ALLOWED_MOBILE_PHONE_LENGTH = [10, 11];

export const ALLOWED_PASSWORD_LENGTH_RANGE = [8, 16];

export const VALIDATION_MESSAGE = {
  ID: {
    NOT_ALLOWED_ID: " 5~20자 영소대문자, 숫자, 특수기호로 이루어져야 합니다",
    EXISTING_ID: "이미 사용 중인 아이디입니다.",
    SAFE_ID: "사용해도 되는 아이디입니다."
  },
  PASSWORD: {
    NOT_ALLOWED_LENGTH: "8자 이상 16자 이하로 입력해주세요.",
    AT_LEAST_ONE_ENGLISH_LETTER: "영문 문자를 최소 1자 이상 포함해주세요.",
    AT_LEAST_ONE_NUMBER: "숫자를 최소 1자 이상 포함해주세요.",
    AT_LEAST_ONE_SPECIAL_LETTER: "특수문자를 최소 1자 이상 포함해주세요.",
    SAFE_PASSWORD: "사용해도 되는 비밀번호입니다."
  },
  EMAIL: {
    NOT_VALID_EMAIL: "이메일 주소를 다시 확인해주세요.",
    SAFE_EMAIL: "사용해도 되는 이메일입니다."
  },
  MOBILE_PHONE: {
    NOT_ALLOWED_MOBILE_PHONE_LENGTH:
      "핸드폰 번호의 길이는 10자리 혹은 11자리입니다.",
    NOT_ALLOWED_MOBILE_PHONE_STARTER: "010, 011, 017, 019로 시작해야 합니다.",
    SAFE_MOBILE_PHONE: "사용해도 되는 핸드폰 번호입니다."
  },
  PASSWORD_CHECK: {
    NOT_SAME_PASSWORD: "비밀번호가 일치하지 않습니다.",
    SAME_PASSWORD: "비밀번호가 일치합니다."
  },
  BIRTHDATE: {
    NOT_ALLOWED_DATE: "날짜를 확인해주세요",
    UNDER_FIFTEEN: "만 15세 이상만 가입할 수 있습니다.",
    OVER_NINTYNINE: "만 99세 이하만 가입할 수 있습니다.",
    SAFE_BIRTHDATE: "가입해도 좋은 생일입니다."
  },
  BEFORE_SUBMIT: {
    CHECK_AGAIN: "입력 항목을 다시 확인해주세요."
  },
  AFTER_SUBMIT: {
    FAILED: "회원 가입에 실패했습니다."
  },
  LOGIN: {
    FAILED: "로그인에 실패했습니다."
  }
};

export const VALIDATION_REG = {
  //출처: https://hee-kkk.tistory.com/22 [개발, 개발 누가 말했나]
  AT_LEAST_ONE_NUMBER: /[0-9]/g,
  AT_LEAST_ONE_ENGLISH_LETTER: /[a-zA-z]/gi,
  AT_LEAST_ONE_SPECAIL_CASE: /[!@#$%^&*\-\_]/gi,
  ID_RULE: /^[a-zA-Z0-9$@$!%*#?&\-]{5,20}$/,
  // 출처: https://epthffh.tistory.com/entry/비밀번호-정규식 [물고기 개발자의 블로그]
  EMAIL_RULE: /^[0-9a-zA-Z]([-_.]?[0-9a-zA-Z])*@[0-9a-zA-Z]([-_.]?[0-9a-zA-Z])*.[a-zA-Z]{2,3}$/i
};

export const CSS_ID_CLASS = {
  REGISTER: {
    PASSWORD: "password",
    PASSWORD_CHECK: "password-check",
    EMAIL: "email",
    HIDE: "hide",
    SAFE: "safe",
    WARNING: "warning",
    BIRTHDATE: "birthdate",
    YEAR: "year",
    MONTH: "month",
    DAY: "day",
    ID: "id",
    MODAL: "modal",
    MOBILE_PHONE_NUMBER: "mobile-phone-number",
    AGREEMENT: "agreement",
    MODAL_CLOSE: "modal-close",
    PRIVACY_AGREEMENT: "privacy-agreement",
    MODAL_BUTTON: "modal-button",
    VALID: "valid",
    INVALID: "invalid",
    MODAL_BUTTON: "modal-button",
    AGREEMENT_CHECKBOX: "agreement-checkbox"
  }
};

export const API = {
  LOGIN: "api/auth/login",
  REGISTER_USER: "api/users",
  LOOK_UP_USER: id => `api/users/signup-check?type=accountId&value=${id}`
};

export const STATUS_CODE = {
  ID_EXIST: 200,
  ID_NOT_EXIST: 204,
  SUCCESSFULLY_CREATED_USER: 201,
  FAILED_CREATING_USER: 500,
  LOGIN_SUCCESS: 202,
  PASSWORD_NOT_MATCHED: 401
};
