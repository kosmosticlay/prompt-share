CREATE TABLE "prompt_variables" (
	"variable_id" bigint PRIMARY KEY NOT NULL,
	"prompt_id" bigint NOT NULL,
	"name" text NOT NULL,
	"label" text,
	"type" text NOT NULL,
	"description" text,
	"is_required" boolean DEFAULT false NOT NULL,
	"validation" jsonb
);
--> statement-breakpoint
CREATE TABLE "variable_options" (
	"option_id" bigint PRIMARY KEY NOT NULL,
	"variable_id" bigint NOT NULL,
	"label" text,
	"value" text NOT NULL
);
--> statement-breakpoint
ALTER TABLE "prompt_variables" ADD CONSTRAINT "prompt_variables_prompt_id_prompts_prompt_id_fk" FOREIGN KEY ("prompt_id") REFERENCES "public"."prompts"("prompt_id") ON DELETE cascade ON UPDATE no action;--> statement-breakpoint
ALTER TABLE "variable_options" ADD CONSTRAINT "variable_options_variable_id_prompt_variables_variable_id_fk" FOREIGN KEY ("variable_id") REFERENCES "public"."prompt_variables"("variable_id") ON DELETE cascade ON UPDATE no action;