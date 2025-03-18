import { exctractTestCaseCode } from "@/lib/utils";

enum TestType {
  RestAssured = "restassured",
  Unit = "unit",
}

interface SendRequestProps {
  testType: string;
  prompt: string;
  setIsLoading: (isLoading: boolean) => void;
  setOuputCode: (outputCode: string) => void;
}

export const sendRequest = async ({
  testType,
  prompt,
  setIsLoading,
  setOuputCode,
}: SendRequestProps) => {
  setIsLoading(true);
  const isValidTestType = Object.values(TestType).includes(
    testType as TestType
  );

  if (!isValidTestType) {
    throw new Error(
      `Invalid testType: ${testType}. Expected values are: ${Object.values(
        TestType
      ).join(", ")}`
    );
  }

  const api = `/api/${testType}`;

  const response = await fetch(api, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify({
      api_code: prompt,
    }),
  });

  if (response.status !== 200) {
    setIsLoading(false);
    throw new Error(`Request failed with status ${response.status}`);
  }

  const data = await response.json();
  //   console.log(data);
  const codeFilter = exctractTestCaseCode(data.generated_test);
  setOuputCode(codeFilter[0]);
  setIsLoading(false);
};
