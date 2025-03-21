"use server";

import { connectToDB } from "../mongoose";
import TestCase from "../models/testcase.model";

interface Params {
  testType: string;
  sourceCode: string;
  testCase: string;
}

export async function createTestCase({
  testType,
  sourceCode,
  testCase,
}: Params) {
  try {
    connectToDB();
    await TestCase.create({
      testType,
      sourceCode,
      testCase,
    });
    return { success: true };
  } catch (error: unknown) {
    throw new Error(`Failed to create test case: ${error}`);
  }
}
