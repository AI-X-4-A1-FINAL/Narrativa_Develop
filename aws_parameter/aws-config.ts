import { SSM } from '@aws-sdk/client-ssm';

export const ssm = new SSM({
    region: 'ap-northeast-2'
});