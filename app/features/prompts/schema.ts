import {
  bigint,
  boolean,
  jsonb,
  pgTable,
  text,
  timestamp,
  uuid,
} from "drizzle-orm/pg-core";
import { profiles } from "../users/schema";

/* prompts / 프롬프트 */
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

/* prompt_variables / 프롬프트 변수 */
export const promptVariables = pgTable("prompt_variables", {
  variable_id: bigint({ mode: "number" })
    .primaryKey()
    .generatedAlwaysAsIdentity(), // 변수 고유 아이디
  prompt_id: bigint({ mode: "number" })
    .notNull()
    .references(() => prompts.prompt_id, { onDelete: "cascade" }), // 프롬프트 고유 아이디
  name: text().notNull(), // 변수 이름
  label: text("label"), // 사용자에게 보여질 라벨명
  type: text().notNull(), // 변수 타입 (예: "select", "text", "multi-select")
  description: text(), // 변수 설명
  is_required: boolean().notNull().default(false), // 변수 필수 여부
  validation: jsonb("validation"), // { min: 1, max: 100 }, { minDate: "2024-01-01" } 등
});

/* variable_options / 변수 옵션 */
export const variableOptions = pgTable("variable_options", {
  option_id: bigint("option_id", { mode: "number" })
    .primaryKey()
    .generatedAlwaysAsIdentity(), // 옵션 고유 아이디
  variable_id: bigint("variable_id", { mode: "number" })
    .notNull()
    .references(() => promptVariables.variable_id, { onDelete: "cascade" }), // 변수 고유 아이디
  label: text("label"), // 옵션 라벨
  value: text("value").notNull(), // 옵션 값
});
