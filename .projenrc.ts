import { awscdk, javascript } from "projen";
const project = new awscdk.AwsCdkTypeScriptApp({
  cdkVersion: "2.138.0",
  defaultReleaseBranch: "main",
  depsUpgradeOptions: { workflow: false },
  eslint: true,
  minNodeVersion: "20.11.1",
  name: "cdk-aws-hybrid-esm-lambda",
  packageManager: javascript.NodePackageManager.PNPM,
  pnpmVersion: "9.0.5",
  prettier: true,
  projenrcTs: true,

  deps: [
    "@aws-sdk/client-ssm",
    "@aws-sdk/client-s3",
    "@aws-sdk/client-sqs",
    "@aws-sdk/client-sns",
    "@aws-sdk/client-dynamodb",
    "@aws-sdk/lib-dynamodb",
    "@types/aws-lambda",
    "@aws-lambda-powertools/logger",
    "@middy/http-error-handler",
    "@middy/core@5.2.3",
  ],
});

project.synth();
