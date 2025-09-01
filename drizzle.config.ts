import type { Config } from 'drizzle-kit';

export default {
    schema: './src/db/schema.ts',
    out: './drizzle/migrations',
    driver: 'd1-http',
    dbCredentials: {
        accountId: '0fa04f93e0bd52fbfbba54b2f31cf7ce',
        databaseId: '4f9c38ce-e305-44fe-83e0-69a6a6b0b50b',
        token: 'xWtnI8zkM5od2zE482MCYR5o9EHJOjG2sNHKxKto',
    },
    dialect: 'sqlite'
} satisfies Config;
