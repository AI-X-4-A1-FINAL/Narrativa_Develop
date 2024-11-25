import { generateEnvFile } from './env-loader';

const main = async () => {
    try {
        await generateEnvFile();
        console.log('Environment variables successfully loaded');
    } catch (error) {
        console.error('Failed to load environment variables:', error);
        process.exit(1);
    }
};

main();