import { BookmarkIcon, MessageSquareIcon } from "lucide-react";
import { Link } from "react-router";
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "~/common/components/ui/card";
import { Button } from "~/common/components/ui/button";
import { Separator } from "~/common/components/ui/separator";
import {
  Avatar,
  AvatarFallback,
  AvatarImage,
} from "~/common/components/ui/avatar";
interface PromptCardProps {
  id: string;
  title: string;
  description: string;
  imageUrl: string;
  tags: string[];
  commentCount: number;
  bookmarkCount: number;
  createdAt: string;
  author: {
    name: string;
    avatarUrl?: string;
  };
}

export function PromptCard({
  id,
  title,
  description,
  imageUrl,
  tags,
  commentCount,
  bookmarkCount,
  createdAt,
  author,
}: PromptCardProps) {
  return (
    <Link to={`/prompts/${id}`}>
      <Card className="py-0 overflow-hidden pb-4">
        <div className="py-6 relative h-40">
          <CardHeader className="flex items-start justify-between">
            <img
              src={imageUrl}
              alt="card-image"
              className="w-full h-full object-cover absolute inset-0 z-0 brightness-75"
            />
            <div className="line-clamp-2 h-fit flex flex-wrap gap-2 pb-2 z-10">
              {tags.map(
                (tag, index) =>
                  index < 3 && (
                    <span
                      key={tag}
                      className="px-2 py-1 bg-background/80 text-foreground rounded-full text-xs"
                    >
                      {tag}
                    </span>
                  )
              )}
            </div>
            <Button
              onClick={(e) => {
                e.preventDefault();
                e.stopPropagation();
                // 여기에 북마크 관련 로직 추후 추가
              }}
              variant="default"
              className="z-10 text-background absolute right-0 top-4"
            >
              <BookmarkIcon className="size-6 text-white" />
            </Button>
          </CardHeader>
        </div>
        <CardContent>
          <CardTitle className="line-clamp-1">{title}</CardTitle>
          <CardDescription className="line-clamp-3 leading-5">
            {description}
          </CardDescription>
          <div className="mt-4 flex justify-between items-center">
            <div className="flex gap-3">
              <p className="text-xs text-muted-foreground">2025년 1월 12일</p>
              <p className="text-xs text-muted-foreground flex gap-0.5">
                <span>{commentCount}</span>
                <MessageSquareIcon className="size-4 fill-muted-foreground" />
              </p>
              <p className="text-xs text-muted-foreground flex gap-0.5">
                <span>{bookmarkCount}</span>
                <BookmarkIcon className="size-4 fill-muted-foreground" />
              </p>
            </div>
          </div>
        </CardContent>
        <div className="px-4">
          <Separator />
        </div>
        <CardFooter className="flex">
          <div className="flex gap-2 items-center">
            <Avatar className="w-6 h-6">
              <AvatarImage src={author.avatarUrl} />
              <AvatarFallback>?</AvatarFallback>
            </Avatar>
            <p className="text-sm line-clamp-1">{author.name}</p>
          </div>
        </CardFooter>
      </Card>
    </Link>
  );
}
