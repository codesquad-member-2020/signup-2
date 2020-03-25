const {
  passwordTest,
  idTest,
  emailTest,
  mobilePhoneNumberTest
} = require("../src/javascript/validation.js");

const { PASSWORD_ERROR_MESSAGE } = require("../src/constants/constants");

describe("id test - 실패 경우", () => {
  test("5자리가 안 되는 경우", () => {
    expect(idTest("abc")).toEqual(false);
  });

  test("20자리가 넘는 경우", () => {
    expect(idTest("123aabcn1932kjalJ32412@")).toEqual(false);
  });

  test("허용되지 않는 문자가 들어간 경우 - 스페이스", () => {
    expect(idTest(" 123jkafnmb")).toEqual(false);
  });

  test("허용되지 않는 문자가 들어간 경우 - ,", () => {
    expect(idTest("123ksja,dif")).toEqual(false);
  });
});

describe("id test - 성공 경우", () => {
  test("id 성공 경우", () => {
    expect(idTest("abc123!@#")).toEqual(true);
  });
});

describe("password test - 실패 경우", () => {
  test("8자리가 안 되는 경우", () => {
    expect(passwordTest("123asd")).toEqual([
      false,
      PASSWORD_ERROR_MESSAGE.NOT_ALLOWED_LENGTH
    ]);
  });

  test("16자리가 넘는 경우", () => {
    expect(passwordTest("123asd123897129837")).toEqual([
      false,
      PASSWORD_ERROR_MESSAGE.NOT_ALLOWED_LENGTH
    ]);
  });

  test("숫자가 하나도 없는 경우", () => {
    expect(passwordTest("asdf!qwe@#")).toEqual([
      false,
      PASSWORD_ERROR_MESSAGE.AT_LEAST_ONE_NUMBER
    ]);
  });

  test("문자가 하나도 없는 경우", () => {
    expect(passwordTest("123!2315#")).toEqual([
      false,
      PASSWORD_ERROR_MESSAGE.AT_LEAST_ONE_ENGLISH_LETTER
    ]);
  });

  test("특수 문자가 하나도 없는 경우", () => {
    expect(passwordTest("asdfa123123")).toEqual([
      false,
      PASSWORD_ERROR_MESSAGE.AT_LEAST_ONE_SPECIAL_LETTER
    ]);
  });
});

describe("password test - 성공 경우", () => {
  test("password test - 성공 경우", () => {
    expect(passwordTest("asd123!@#")).toEqual(true);
  })
})

describe("email test - 실패 경우", () => {
  test("@가 없는 경우", () => {
    expect(emailTest("abc123!naver.com")).toEqual(false);
  });
  test("host가 없는 경우", () => {
    expect(emailTest("@naver.com")).toEqual(false);
  });
  test("domain이 없는 경우", () => {
    expect(emailTest("abc123@")).toEqual(false);
  });
  test("허용되지 않은 특수문자를 사용할 경우", () => {
    expect(emailTest("abc1$23@naver.com")).toEqual(false);
  });
  test("host 형식을 갖추지 못할 경우 - 1", () => {
    expect(emailTest("abc1$23@naver")).toEqual(false);
  });
  test("host 형식을 갖추지 못할 경우 - 2", () => {
    expect(emailTest("abc1$23@.com")).toEqual(false);
  });
});

describe("email test - 성공 경우", () => {
  test("email 성공 경우", () => {
    expect(emailTest("abc123@naver.com")).toEqual(true);
  });
});

describe("mobile phone test - 실패 경우",  () => {
   test("허락되지 않은 번호로 시작하는 경우 - 1", () => {
     expect(mobilePhoneNumberTest("192391239")).toEqual(false);
   });

   test("허락되지 않은 번호로 시작하는 경우 - 2", () =>{
     expect(mobilePhoneNumberTest("a12382383")).toEqual(false)
   });

   test("10자리 혹은 11자리보다 짧은 경우", () => {
     expect(mobilePhoneNumberTest("01029319")).toEqual(false);
   });

   test("10자리 혹은 11자리보다 긴 경우", () => {
     expect(mobilePhoneNumberTest("010249120481")).toEqual(false);
   });
});

describe("mobile phone test - 성공 경우", () => {
  test("mobile phone 성공 경우", () => {
    expect(mobilePhoneNumberTest("01023912912")).toEqual(true);
  });
});