export {};

declare global{
    namespace NodeJS {
        interface ProcessEnv{
            DATABASE_URL: string;
            SHADOW_DATABASE_URL: string;
            PORT: number;
            TOKEN_SECRET: string;
            SENDGRID_API: string
        }
    }
}