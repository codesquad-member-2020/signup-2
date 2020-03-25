const {
  passwordTest,
  idTest,
  emailTest,
  mobilePhoneNumberTest,
  birthdateTest
} = require("../src/javascript/validation/validation");

const {
  VALIDATION_MESSAGE: { ID, PASSWORD, EMAIL, MOBILE_PHONE, BIRTHDATE }
} = require("../src/constants/constants");

describe("id test - 실패 경우", () => {
  test("5자리가 안 되는 경우", () => {
    expect(idTest("abc")).toEqual([false, ID.NOT_ALLOWED_ID]);
  });

  test("20자리가 넘는 경우", () => {
    expect(idTest("123aabcn1932kjalJ32412@")).toEqual([
      false,
      ID.NOT_ALLOWED_ID
    ]);
  });

  test("허용되지 않는 문자가 들어간 경우 - 스페이스", () => {
    expect(idTest(" 123jkafnmb")).toEqual([false, ID.NOT_ALLOWED_ID]);
  });

  test("허용되지 않는 문자가 들어간 경우 - ,", () => {
    expect(idTest("123ksja,dif")).toEqual([false, ID.NOT_ALLOWED_ID]);
  });
});

describe("id test - 성공 경우", () => {
  test("id 성공 경우", () => {
    expect(idTest("abc123!@#")).toEqual([true, ID.SAFE_ID]);
  });
});

describe("password test - 실패 경우", () => {
  test("8자리가 안 되는 경우", () => {
    expect(passwordTest("123asd")).toEqual([
      false,
      PASSWORD.NOT_ALLOWED_LENGTH
    ]);
  });

  test("16자리가 넘는 경우", () => {
    expect(passwordTest("123asd123897129837")).toEqual([
      false,
      PASSWORD.NOT_ALLOWED_LENGTH
    ]);
  });

  test("숫자가 하나도 없는 경우", () => {
    expect(passwordTest("asdf!qwe@#")).toEqual([
      false,
      PASSWORD.AT_LEAST_ONE_NUMBER
    ]);
  });

  test("문자가 하나도 없는 경우", () => {
    expect(passwordTest("123!2315#")).toEqual([
      false,
      PASSWORD.AT_LEAST_ONE_ENGLISH_LETTER
    ]);
  });

  test("특수 문자가 하나도 없는 경우", () => {
    expect(passwordTest("asdfa123123")).toEqual([
      false,
      PASSWORD.AT_LEAST_ONE_SPECIAL_LETTER
    ]);
  });
});

describe("password test - 성공 경우", () => {
  test("password test - 성공 경우", () => {
    expect(passwordTest("asd123!@#")).toEqual([true, PASSWORD.SAFE_PASSWORD]);
  });
});

describe("email test - 실패 경우", () => {
  test("@가 없는 경우", () => {
    expect(emailTest("abc123!naver.com")).toEqual([
      false,
      EMAIL.NOT_VALID_EMAIL
    ]);
  });
  test("host가 없는 경우", () => {
    expect(emailTest("@naver.com")).toEqual([false, EMAIL.NOT_VALID_EMAIL]);
  });
  test("domain이 없는 경우", () => {
    expect(emailTest("abc123@")).toEqual([false, EMAIL.NOT_VALID_EMAIL]);
  });
  test("허용되지 않은 특수문자를 사용할 경우", () => {
    expect(emailTest("abc1$23@naver.com")).toEqual([
      false,
      EMAIL.NOT_VALID_EMAIL
    ]);
  });
  test("host 형식을 갖추지 못할 경우 - 1", () => {
    expect(emailTest("abc1$23@naver")).toEqual([false, EMAIL.NOT_VALID_EMAIL]);
  });
  test("host 형식을 갖추지 못할 경우 - 2", () => {
    expect(emailTest("abc1$23@.com")).toEqual([false, EMAIL.NOT_VALID_EMAIL]);
  });
});

describe("email test - 성공 경우", () => {
  test("email 성공 경우", () => {
    expect(emailTest("abc123@naver.com")).toEqual([true, EMAIL.SAFE_EMAIL]);
  });
});

describe("mobile phone test - 실패 경우", () => {
  test("허락되지 않은 번호로 시작하는 경우 - 1", () => {
    expect(mobilePhoneNumberTest("1923791239")).toEqual([
      false,
      MOBILE_PHONE.NOT_ALLOWED_MOBILE_PHONE_STARTER
    ]);
  });

  test("허락되지 않은 번호로 시작하는 경우 - 2", () => {
    expect(mobilePhoneNumberTest("a123823831")).toEqual([
      false,
      MOBILE_PHONE.NOT_ALLOWED_MOBILE_PHONE_STARTER
    ]);
  });

  test("10자리 혹은 11자리보다 짧은 경우", () => {
    expect(mobilePhoneNumberTest("01029319")).toEqual([
      false,
      MOBILE_PHONE.NOT_ALLOWED_MOBILE_PHONE_LENGTH
    ]);
  });

  test("10자리 혹은 11자리보다 긴 경우", () => {
    expect(mobilePhoneNumberTest("010249120481")).toEqual([
      false,
      MOBILE_PHONE.NOT_ALLOWED_MOBILE_PHONE_LENGTH
    ]);
  });
});

describe("mobile phone test - 성공 경우", () => {
  test("mobile phone 성공 경우", () => {
    expect(mobilePhoneNumberTest("01023912912")).toEqual([
      true,
      MOBILE_PHONE.SAFE_MOBILE_PHONE
    ]);
  });
});

describe("birth date test - 실패 경우", () => {
  test("없는 날짜일 경우 - 1", () => {
    expect(birthdateTest(["2019", "03", "32"])).toEqual([
      false,
      "날짜를 확인해주세요"
    ]);
  });

  test("없는 날짜일 경우 (윤년이 없는 경우) - 2", () => {
    expect(birthdateTest(["2019", "02", "29"])).toEqual([
      false,
      "날짜를 확인해주세요"
    ]);
  });

  test("만 15세가 안 됐을 경우", () => {
    expect(birthdateTest(["2017", "03", "01"])).toEqual([
      false,
      "만 15세 이상만 가입할 수 있습니다."
    ]);
  });

  test("만 99세가 넘었을 경우", () => {
    expect(birthdateTest(["1919", "03", "01"])).toEqual([
      false,
      "만 99세 이하만 가입할 수 있습니다."
    ]);
  });
});

describe("birth date test - 성공 경우", () => {
  test("birth date test - 성공 경우", () => {
    expect(birthdateTest(["1980", "05", "18"])).toEqual([true, ""]);
  });
});
