import { MoonIcon } from "lucide-react";
import LogoMedium from "./logo/logo-md";
import {
  NavigationMenu,
  NavigationMenuContent,
  NavigationMenuItem,
  NavigationMenuLink,
  NavigationMenuList,
  NavigationMenuTrigger,
} from "./ui/navigation-menu";
import { Button } from "./ui/button";
import { Link } from "react-router";
import { Separator } from "./ui/separator";
import LogoSm from "./logo/logo-sm";
import { Avatar, AvatarFallback, AvatarImage } from "./ui/avatar";

const navigationMenus = [
  {
    name: "프롬프트",
    to: "/search",
    items: [
      {
        name: "프롬프트 상세 검색하기",
        to: "/search",
        description: "키워드, 카테고리, 태그로 원하는 프롬프트를 찾아보세요!",
      },
      {
        name: "새 프롬프트 생성하기",
        to: "/prompts/create",
        description: "나만의 특별한 프롬프트를 만들고 커뮤니티와 공유해보세요!",
      },
    ],
  },
  {
    name: "마이페이지",
    to: "/my",
    items: [
      {
        name: "내 프로필",
        to: "/my/profile",
        description: "내 프로필 정보를 확인할 수 있어요.",
      },
      {
        name: "내 프롬프트 목록",
        to: "/my/prompts",
        description: "내가 만든 프롬프트들을 한눈에 모아서 관리해보세요.",
      },
      {
        name: "찜한 프롬프트 목록",
        to: "/my/favorites",
        description: "마음에 드는 프롬프트들을 저장하고 언제든 활용해보세요.",
      },
      {
        name: "팔로워/팔로잉 목록",
        to: "/my/relations",
        description:
          "나와 비슷한 프롬프트 스타일을 가진 사용자들을 만나보세요.",
      },
    ],
  },
];

export default function Navigation({ isLoggedIn }: { isLoggedIn: boolean }) {
  return (
    <nav className="absolute h-16 top-0 z-50 w-full min-w-sm">
      <div className="h-16 flex items-center justify-between px-5">
        {/* 네비게이션바 왼쪽 메뉴 */}
        <div className="flex items-center gap-2 md:gap-4">
          {/* 로고 */}
          <LogoSm className="md:hidden" />
          <LogoMedium className="hidden md:flex" />
          {/* 구분선 */}
          <div className="h-8">
            <Separator orientation="vertical" className="hidden md:block" />
          </div>
          <NavigationMenu>
            <NavigationMenuList>
              {/* 프롬프트 메뉴 */}
              <NavigationMenuItem>
                <Link to={navigationMenus[0].to}>
                  <NavigationMenuTrigger className="cursor-pointer">
                    {navigationMenus[0].name}
                  </NavigationMenuTrigger>
                </Link>
                <NavigationMenuContent>
                  <ul className="md:w-[380px] w-[200px] grid md:grid-cols-2 grid-cols-1 gap-2 ">
                    {navigationMenus[0].items.map((item) => (
                      <NavigationMenuLink asChild key={item.name}>
                        <Link to={item.to}>
                          <div className="flex flex-col justify-end md:h-[152px]">
                            <span className="font-bold"> {item.name}</span>
                            <span className="md:block hidden text-sm text-gray-500">
                              {item.description}
                            </span>
                          </div>
                        </Link>
                      </NavigationMenuLink>
                    ))}
                  </ul>
                </NavigationMenuContent>
              </NavigationMenuItem>

              {/* 마이페이지 메뉴 */}
              {isLoggedIn && (
                <NavigationMenuItem>
                  <Link to={navigationMenus[1].to}>
                    <NavigationMenuTrigger className="cursor-pointer">
                      {navigationMenus[1].name}
                    </NavigationMenuTrigger>
                  </Link>
                  <NavigationMenuContent>
                    <ul className="md:w-[380px] w-[200px] grid md:grid-cols-2 grid-cols-1 gap-2">
                      {navigationMenus[1].items.map((item) => (
                        <NavigationMenuLink asChild key={item.name}>
                          <Link to={item.to}>
                            <span className="font-bold"> {item.name}</span>
                            <span className="md:block hidden text-sm text-gray-500">
                              {item.description}
                            </span>
                          </Link>
                        </NavigationMenuLink>
                      ))}
                    </ul>
                  </NavigationMenuContent>
                </NavigationMenuItem>
              )}
            </NavigationMenuList>
          </NavigationMenu>
        </div>
        {/* 네비게이션바 오른쪽 메뉴 */}
        <div className="flex items-center gap-2">
          {/* <MoonIcon className="size-5" /> */}
          {isLoggedIn ? (
            <Link to="/my">
              <Avatar className="size-10">
                <AvatarImage src="https://github.com/shadcn.png" />
                <AvatarFallback>CN</AvatarFallback>
              </Avatar>
            </Link>
          ) : (
            <div className="flex items-center gap-2">
              <Button asChild variant="outline">
                <Link to="/auth/login">로그인</Link>
              </Button>
              <Button asChild variant="outline">
                <Link to="/auth/signup">회원가입</Link>
              </Button>
            </div>
          )}
        </div>
      </div>
    </nav>
  );
}
