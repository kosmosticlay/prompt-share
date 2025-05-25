import { Button } from "~/common/components/ui/button";
import { Label } from "~/common/components/ui/label";
import { Input } from "~/common/components/ui/input";
import { Separator } from "~/common/components/ui/separator";

import { isRouteErrorResponse, Link } from "react-router";
import { z } from "zod";

import type { Route } from "./+types/signup-page";

const signupSchema = z
  .object({
    email: z.coerce.string().email(),
    password: z.coerce.string().min(8).max(64),
    confirmPassword: z.coerce.string().min(8).max(64),
    nickname: z.coerce.string().min(2).max(20),
  })
  .refine((data) => data.password === data.confirmPassword, {
    message: "비밀번호가 일치하지 않습니다.",
    path: ["confirmPassword"],
  });

export const loader = () => {
  return null;
};

export default function SignupPage({ loaderData }: Route.ComponentProps) {
  return (
    <div className="container-lg w-fit text-center">
      <div className="flex flex-col md:flex-row items-center md:items-start justify-center md:gap-10">
        {/* 이미지/GIF 섹션 */}
        <aside className="">
          <img
            src="/onboarding.png"
            alt="회원가입 환영 일러스트"
            className="w-[200px] md:w-sm"
            loading="lazy"
          />
        </aside>
        {/* 회원가입 폼 섹션 */}
        <section className="space-y-3 py-6">
          <header className="text-center md:text-left">
            <h2 className="text-3xl font-bold text-foreground">회원가입</h2>
            <p className="mt-2 text-muted-foreground">
              계정을 만들고 나만의 프롬프트를 공유해 보세요.
            </p>
          </header>
          <form className="space-y-2 text-left">
            <div className="space-y-2">
              <Label
                htmlFor="email"
                className="block text-sm font-medium text-foreground"
              >
                이메일
              </Label>
              <Input
                type="email"
                id="email"
                name="email"
                className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                required
                autoComplete="email"
                placeholder="이메일을 입력해주세요."
              />
            </div>

            <div className="space-y-2">
              <Label
                htmlFor="nickname"
                className="block text-sm font-medium text-foreground"
              >
                닉네임
              </Label>
              <Input
                type="text"
                id="nickname"
                name="nickname"
                className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                required
                placeholder="닉네임을 입력해주세요."
              />
            </div>

            <div className="space-y-2">
              <Label
                htmlFor="password"
                className="block text-sm font-medium text-foreground"
              >
                비밀번호
              </Label>
              <Input
                type="password"
                id="password"
                name="password"
                className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                required
                placeholder="비밀번호를 입력해주세요."
              />
              <p className="text-xs text-muted-foreground">
                8자 이상 64자 이하로 입력해주세요.
              </p>
            </div>

            <div className="space-y-2">
              <Label
                htmlFor="confirmPassword"
                className="block text-sm font-medium text-foreground"
              >
                비밀번호 확인
              </Label>
              <Input
                type="password"
                id="confirmPassword"
                name="confirmPassword"
                className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                required
              />
            </div>

            <Button
              variant="outline"
              type="submit"
              className="w-full text-foreground"
            >
              회원가입
            </Button>
          </form>
        </section>
      </div>
      <Link
        to="/auth/login"
        className="custom-link text-sm font-semibold underline"
      >
        이미 계정이 있으신가요?
      </Link>
    </div>
  );
}

export function ErrorBoundary({ error }: Route.ErrorBoundaryProps) {
  if (isRouteErrorResponse(error)) {
    console.log(error.status);
  }
  return <div></div>;
}
