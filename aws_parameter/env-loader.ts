import { ssm } from './aws-config';
import { GetParametersByPathCommand } from '@aws-sdk/client-ssm';
import * as fs from 'fs';
import * as path from 'path';

// 내보낼 인터페이스 정의
export interface EnvironmentVariables {
    [key: string]: string;
}

// 파라미터 가져오는 함수
async function getParameters(): Promise<EnvironmentVariables> {
    try {
        const command = new GetParametersByPathCommand({
            Path: '/narrativa/dev/',
            Recursive: true,
            WithDecryption: true
        });

        const response = await ssm.send(command);
        const envVars: EnvironmentVariables = {};

        response.Parameters?.forEach(param => {
            const key = param.Name?.split('/').pop() || '';
            envVars[key] = param.Value || '';
        });

        return envVars;
    } catch (error) {
        console.error('Error fetching parameters:', error);
        throw error;
    }
}

// 환경변수 파일 생성 함수를 export
export async function generateEnvFile(): Promise<void> {
    try {
        const parameters = await getParameters();
        const envContent = Object.entries(parameters)
            .map(([key, value]) => `${key}=${value}`)
            .join('\n');

        const envPath = path.join(__dirname, '..', '.env');
        fs.writeFileSync(envPath, envContent);
        console.log('Successfully created .env file');
    } catch (error) {
        console.error('Failed to create .env file:', error);
        process.exit(1);
    }
}

// getParameters 함수도 export (필요한 경우 사용)
export { getParameters };