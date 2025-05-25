import { defineConfig } from "drizzle-kit";

export default defineConfig({
  schema: "./app/features/**/schema.ts", // 데이터베이스 구조를 정의하는 곳
  out: "./app/migrations", // drizzle kit이 생성한 SQL 파일을 저장할 경로
  dialect: "postgresql",
  dbCredentials: {
    url: process.env.DATABASE_URL!,
  },
  verbose: true,
});
