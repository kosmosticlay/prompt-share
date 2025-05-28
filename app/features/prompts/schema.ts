import {
  bigint,
  boolean,
  pgTable,
  text,
  timestamp,
  uuid,
} from "drizzle-orm/pg-core";
import { profiles } from "../users/schema";

/* prompts */
export const prompts = pgTable("prompts", {
  prompt_id: bigint({ mode: "number" })
    .primaryKey()
    .generatedAlwaysAsIdentity(), // 프롬프트 고유 아이디
  profile_id: uuid()
    .references(() => profiles.profile_id, {
      onDelete: "cascade",
    })
    .notNull(), // 프롬프트 작성자 아이디
  title: text().notNull(), // 프롬프트 제목
  content: text(), // 프롬프트 설명
  tags: text().array(), // 프롬프트 태그
  is_public: boolean().notNull().default(false), // 프롬프트 공개 여부
  text_template: text(), // 프롬프트 텍스트 템플릿
  created_at: timestamp().notNull().defaultNow(), // 프롬프트 생성 시간
  updated_at: timestamp().notNull().defaultNow(), // 프롬프트 수정 시간
});
