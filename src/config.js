const dev = {
  s3: {
    REGION: "us-east-1",
    BUCKET: "notes-app-2-api-dev-attachmentsbucket-1xmf88s7mpq9n"
  },
  apiGateway: {
    REGION: "us-east-1",
    URL: "YOUR_DEV_API_GATEWAY_URL"
  },
  cognito: {
    REGION: "us-east-1",
    USER_POOL_ID: "us-east-1_YSawoqjlj",
    APP_CLIENT_ID: "118uj4jhfo5ockacpeu27elha3",
    IDENTITY_POOL_ID: "us-east-1:52cdeb96-e6bd-4a39-8e9c-611cbb121015"
  },
  STRIPE_KEY: "pk_test_qljjLmdcLnSbFUom9lN5mUew",
};

const prod = {
  s3: {
    REGION: "us-east-1",
    BUCKET: "notes-app-2-api-prod-attachmentsbucket-1e79adi9qegqm"
  },
  apiGateway: {
    REGION: "us-east-1",
    URL: "YOUR_PROD_API_GATEWAY_URL"
  },
  cognito: {
    REGION: "us-east-1",
    USER_POOL_ID: "us-east-1_UdJ235T81",
    APP_CLIENT_ID: "7arvjc2m0gtdj7svsnhm39b7bp",
    IDENTITY_POOL_ID: "us-east-1:63884672-cfd9-415f-8b84-237fa112da51"
  },
  STRIPE_KEY: "pk_test_qljjLmdcLnSbFUom9lN5mUew",
};

// Default to dev if not set
const config = process.env.REACT_APP_STAGE === 'prod'
  ? prod
  : dev;

export default {
  // Add common config values here
  MAX_ATTACHMENT_SIZE: 5000000,
  ...config
};