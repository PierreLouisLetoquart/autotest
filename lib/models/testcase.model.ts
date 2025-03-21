import mongoose from "mongoose";

const testCaseSchema = new mongoose.Schema({
  testType: {
    type: String,
    required: true,
  },
  sourceCode: {
    type: String,
    required: true,
  },
  testCase: {
    type: String,
    required: true,
  },
  createdAt: {
    type: Date,
    default: Date.now,
  },
});

const TestCase =
  mongoose.models.TestCase || mongoose.model("Testcase", testCaseSchema);

export default TestCase;
