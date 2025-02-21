import { Button } from "@/components/ui/button";
import { ArrowRightIcon } from "lucide-react";

export default function StartButton() {
  return (
    <Button className="group">
      Generate
      <ArrowRightIcon
        className="-me-1 opacity-60 transition-transform group-hover:translate-x-0.5"
        size={16}
        aria-hidden="true"
      />
    </Button>
  );
}
