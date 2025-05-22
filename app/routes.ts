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
  route("search/:keyword?", "common/pages/search-page.tsx"),
  // 프롬프트 관련 라우트
  ...prefix("prompts", [
    route("create", "features/prompts/pages/prompt-create-page.tsx"), // 프롬프트 생성
    ...prefix(":id", [
      index("features/prompts/pages/prompt-detail-page.tsx"), // 프롬프트 상세
      route("edit", "features/prompts/pages/prompt-edit-page.tsx"), // 프롬프트 수정
      route("settings", "features/prompts/pages/prompt-settings-page.tsx"), // 프롬프트 다운로드 설정
    ]),
  ]),
  // My 관련 라우트
  ...prefix("my", [
    index("features/my/pages/my-page.tsx"), // 마이페이지 메인
    route("profile", "features/my/pages/my-profile-page.tsx"), // 내 프로필
    route("relations", "features/my/pages/my-relations-page.tsx"), // 나의 팔로워/팔로잉(탭) 목록
    route("prompts", "features/my/pages/my-prompts-page.tsx"), // 내가 생성한 프롬프트 목록
    route("favorites", "features/my/pages/my-favorites-page.tsx"), // 찜한 프롬프트 목록
  ]),
  // 프로필 관련 라우트
  ...prefix("users/:id", [
    index("features/users/pages/user-detail-page.tsx"), // 프로필 상세
    route("edit", "features/users/pages/user-edit-page.tsx"), // 프로필 수정
  ]),
] satisfies RouteConfig;
