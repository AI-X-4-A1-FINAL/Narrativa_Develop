import { SSM, Parameter } from '@aws-sdk/client-ssm';
import * as fs from 'fs';
import * as path from 'path';

function sanitizeEnvValue(value: string): string {
    // 특수문자 처리 및 따옴표로 값 감싸기
    return `"${value.replace(/"/g, '\\"')}"`;
}

export async function generateEnvFile(): Promise<void> {
    console.log('Starting to fetch parameters...');
    
    const ssm = new SSM({ region: 'ap-northeast-2' });
    let allParameters: Parameter[] = [];
    let nextToken: string | undefined;

    try {
        do {
            console.log('Fetching parameters from AWS Parameter Store...');
            const response = await ssm.getParametersByPath({
                Path: '/narrativa/dev/',
                Recursive: true,
                WithDecryption: true,
                MaxResults: 10,
                NextToken: nextToken
            });

            if (response.Parameters) {
                allParameters = [...allParameters, ...response.Parameters];
            }
            
            nextToken = response.NextToken;
            console.log(`Fetched ${response.Parameters?.length || 0} parameters. More: ${nextToken ? 'Yes' : 'No'}`);
            
        } while (nextToken);

        console.log('Total parameters received:', allParameters.length);

        if (allParameters.length === 0) {
            throw new Error('No parameters found');
        }

        // 환경변수 형식으로 변환
        const envContent = allParameters.map(param => {
            const name = param.Name?.split('/').pop() || '';
            const value = param.Value ? sanitizeEnvValue(param.Value) : '""';
            console.log(`Processing parameter: ${name}`);
            return `${name}=${value}`;
        }).join('\n');

        // .env 파일 생성
        const envPath = path.join(__dirname, '..', '.env');
        console.log('Writing to .env file at:', envPath);
        fs.writeFileSync(envPath, envContent);
        console.log('Successfully created .env file');

        // 생성된 내용 확인 (비밀값은 가림)
        console.log('Created environment variables:');
        allParameters.forEach(param => {
            const name = param.Name?.split('/').pop() || '';
            console.log(`${name}=********`);
        });

    } catch (error) {
        console.error('Detailed error:', error);
        if (error instanceof Error) {
            console.error('Error message:', error.message);
            console.error('Error stack:', error.stack);
        }
        process.exit(1);
    }
}

// 직접 실행을 위한 코드 추가
if (require.main === module) {
    generateEnvFile()
        .then(() => console.log('Completed successfully'))
        .catch(error => {
            console.error('Failed to generate env file:', error);
            process.exit(1);
        });
}