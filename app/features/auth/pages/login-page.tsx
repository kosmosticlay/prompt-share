import { Button } from "~/common/components/ui/button";
import { Label } from "~/common/components/ui/label";
import { Input } from "~/common/components/ui/input";
import { Separator } from "~/common/components/ui/separator";

import { isRouteErrorResponse, Link } from "react-router";
import { z } from "zod";

import type { Route } from "./+types/login-page";

// import { DateTime } from "luxon";

const loginSchema = z.object({
  email: z.coerce.string().email(),
  password: z.coerce.string().min(8).max(64),
});

export const loader = () => {
  // const loginTime = DateTime.now().setZone("Asia/Seoul").toISO();
  // console.log(loginTime);
  return null;
};

export default function LoginPage({ loaderData }: Route.ComponentProps) {
  return (
    <div className="container-lg w-fit text-center">
      <div className="flex flex-col md:flex-row items-center md:items-start justify-center md:gap-10">
        {/* 이미지/GIF 섹션 */}
        <aside className="">
          <img
            src="/onboarding.png"
            alt="로그인 환영 일러스트"
            className="w-[200px] md:w-sm "
            loading="lazy"
          />
        </aside>
        {/* 로그인 폼 섹션 */}
        <section className="space-y-3 py-6">
          <header className="text-center md:text-left ">
            <h2 className="text-3xl font-bold text-foreground">로그인</h2>
            <p className="mt-2 text-muted-foreground">
              로그인을 하고 나만의 프롬프트를 만들어 보세요.
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
              />
            </div>

            <div className="space-y-2 relative">
              <Label
                htmlFor="password"
                className="block text-sm font-medium text-foreground"
              >
                비밀번호
              </Label>
              <Link
                to="/auth/forgot-password"
                className="font-semibold absolute right-0 top-1 text-xs text-muted-foreground hover:text-primary-purple"
              >
                비밀번호 찾기
              </Link>
              <Input
                type="password"
                id="password"
                name="password"
                className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                required
              />
            </div>

            <Button
              variant="outline"
              type="submit"
              className="w-full text-foreground"
            >
              로그인
            </Button>
          </form>
          <Separator />
          <Button variant="outline" className="w-full text-foreground">
            <span>구글 로그인</span>
          </Button>
        </section>
      </div>
      <Link
        to="/auth/signup"
        className="custom-link text-sm font-semibold underline "
      >
        아직 계정이 없으신가요?
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
