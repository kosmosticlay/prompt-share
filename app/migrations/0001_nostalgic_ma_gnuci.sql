ALTER TABLE "prompts" RENAME COLUMN "id" TO "prompmt_id";--> statement-breakpoint
ALTER TABLE "prompts" RENAME COLUMN "user_id" TO "profile_id";--> statement-breakpoint
ALTER TABLE "prompts" ADD CONSTRAINT "prompts_profile_id_profiles_profile_id_fk" FOREIGN KEY ("profile_id") REFERENCES "public"."profiles"("profile_id") ON DELETE cascade ON UPDATE no action;--> statement-breakpoint
ALTER TABLE "prompts" DROP COLUMN "likes";--> statement-breakpoint
ALTER TABLE "prompts" DROP COLUMN "views";