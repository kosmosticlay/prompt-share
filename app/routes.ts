import {
  type RouteConfig,
  index,
  prefix,
  route,
} from "@react-router/dev/routes";

export default [
  // 홈 페이지
  index("common/pages/home-page.tsx"),
  // 인증 관련 라우트
  ...prefix("auth", [
    route("login", "features/auth/pages/login-page.tsx"),
    route("logout", "features/auth/pages/logout-page.tsx"),
    route("signup", "features/auth/pages/signup-page.tsx"),
  ]),
  // 검색 관련 라우트
  route("search", "common/pages/search-page.tsx"),
  route("search/:query", "common/pages/search-page.tsx"),
  // 프롬프트 관련 라우트
  ...prefix("prompts", [
    route("create", "features/prompts/pages/prompt-create-page.tsx"),
    ...prefix(":id", [
      index("features/prompts/pages/prompt-detail-page.tsx"),
      route("edit", "features/prompts/pages/prompt-edit-page.tsx"),
      route("settings", "features/prompts/pages/prompt-settings-page.tsx"),
    ]),
  ]),
  // 유저 관련 라우트
  ...prefix("users/:id", [
    index("features/users/pages/users-page.tsx"),
    route("edit", "features/users/pages/user-edit-page.tsx"),
  ]),
] satisfies RouteConfig;
