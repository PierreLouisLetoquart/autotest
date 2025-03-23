import { exctractTestCaseCode } from "@/lib/utils";
import { toast } from "sonner";

enum TestType {
  RestAssured = "restassured",
  Unit = "unit",
}

interface SendRequestProps {
  testType: string;
  prompt: string;
  outputCode: string;
  setIsLoading: (isLoading: boolean) => void;
  setOuputCode: (outputCode: string) => void;
}

export const sendRequest = async ({
  testType,
  prompt,
  outputCode,
  setIsLoading,
  setOuputCode,
}: SendRequestProps) => {
  setIsLoading(true);
  const isValidTestType = Object.values(TestType).includes(
    testType as TestType
  );

  if (outputCode !== "") {
    setOuputCode("");
  }

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
    toast.error("Failed to send request to the server", {
      description: `Request failed with status ${response.status}`,
    });
    throw new Error(`Request failed with status ${response.status}`);
  }

  const data = await response.json();
  const codeFilter = exctractTestCaseCode(data.generated_test);
  setOuputCode(codeFilter[0]);
  setIsLoading(false);
};
