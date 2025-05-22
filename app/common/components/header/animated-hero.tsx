import { Form, Link } from "react-router";
import { Button } from "../ui/button";
import { SparklesIcon } from "lucide-react";

export default function AnimatedHero() {
  return (
    <div className="bg-background h-[500px] w-screen flex flex-col items-center justify-end py-10">
      <Form></Form>
      <Button className="button-accent group ">
        <Link
          to="/search"
          className="text-foreground flex w-full bg-background rounded-full px-14 py-2.5 items-center group-hover:bg-transparent delay-50 group-hover:text-white"
        >
          <SparklesIcon className="size-5 mr-2" />
          <span>나한테 꼭 맞는 프롬프트 찾기</span>
        </Link>
      </Button>
    </div>
  );
}
