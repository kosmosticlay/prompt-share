import { BookmarkIcon, MessageSquareIcon } from "lucide-react";
import AnimatedHero from "../components/header/animated-hero";
import { Separator } from "../components/ui/separator";
import { PromptCard } from "~/features/prompts/components/prompt-card";

const tagLists = [
  "이것은 태그 1입니다.",
  "태그2",
  "태그3일까나",
  "태그4",
  "태그5",
];

export default function HomePage() {
  return (
    <>
      <AnimatedHero />
      <div className="container-lg py-10 space-y-10 px-5">
        <h2 className="text-2xl font-bold">최근 등록된 프롬프트 목록</h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4">
          <PromptCard
            id="123456"
            title="Neque porro quisquam est qui dolorem ipsum quia dolor sit amet, consectetur"
            description="Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged."
            imageUrl="/20250506_174552.jpg"
            tags={tagLists}
            commentCount={3}
            bookmarkCount={3}
            createdAt="2일 전"
            author={{
              name: "일이삼사오육칠팔구십일이삼사오육칠팔구십일이삼사오육칠팔구십",
              avatarUrl: "https://github.com/shadcn.png",
            }}
          />
          {/* {Array.from({ length: 10 }).map((_, index) => (
            ))} */}
        </div>
      </div>
    </>
  );
}
