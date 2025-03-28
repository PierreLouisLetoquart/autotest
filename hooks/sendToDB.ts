import { createTestCase } from "@/lib/actions/testcase.actions";
import { toast } from "sonner";

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

  const promise = () =>
    new Promise(async (resolve) =>
      resolve(
        await createTestCase({
          testType,
          sourceCode: prompt,
          testCase: testCaseGenerated,
        })
      )
    );

  toast.promise(promise, {
    loading: "Loading...",
    success: () => {
      return `Test case saved to database`;
    },
    error: "Failed to save test case to database",
  });

  setIsLoading(false);
};
