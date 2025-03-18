import { createTestCase } from "@/lib/actions/testcase.actions";

interface sendToDbProps {
  testType: string;
  prompt: string;
  testCaseGenerated: string;
  setIsLoading: (isLoading: boolean) => void;
}

export const sendToDB = async ({
  testType,
  prompt,
  testCaseGenerated,
  setIsLoading,
}: sendToDbProps) => {
  setIsLoading(true);

  await createTestCase({
    testType,
    sourceCode: prompt,
    testCase: testCaseGenerated,
  });

  alert("Test case saved to database");

  setIsLoading(false);
};
