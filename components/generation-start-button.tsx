import { Button } from "@/components/ui/button";
import { ArrowRightIcon } from "lucide-react";

interface StartButtonProps {
  onClick: () => void;
}
export default function StartButton(props: StartButtonProps) {
  return (
    <Button className="group" onClick={props.onClick}>
      Generate
      <ArrowRightIcon
        className="-me-1 opacity-60 transition-transform group-hover:translate-x-0.5"
        size={16}
        aria-hidden="true"
      />
    </Button>
  );
}
