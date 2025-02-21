import { Badge } from "@/components/ui/badge";

export default function ModelStatusBadge() {
  return (
    <Badge variant="outline" className="gap-1.5">
      <span
        className="size-1.5 rounded-full bg-green-500"
        aria-hidden="true"
      ></span>
      Claude 3.5 Sonnet - Ready
    </Badge>
  );
}
