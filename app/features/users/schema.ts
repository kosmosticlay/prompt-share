import { pgSchema, pgTable, text, timestamp, uuid } from "drizzle-orm/pg-core";

/* Supabase 연결할 때 지울 예정*/
export const users = pgSchema("auth").table("users", {
  id: uuid().primaryKey(),
});

/* (user)profiles */
export const profiles = pgTable("profiles", {
  profile_id: uuid()
    .primaryKey()
    .references(() => users.id, { onDelete: "cascade" }), // 프로필 고유 아이디
  name: text().notNull(), // 이름
  username: text().notNull().unique(), // 유저네임
  email: text().notNull().unique(), // 프로필 이메일
  avatar_url: text(), // 프로필 아바타 이미지 주소
  bio: text(), // 프로필 자기소개
  created_at: timestamp().notNull().defaultNow(), // 프로필 생성 시간
  updated_at: timestamp().notNull().defaultNow(), // 프로필 수정 시간
});
