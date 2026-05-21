import { SectionLabel } from "./SectionLabel";
import { Button } from "./Button";
import { FadeInWhenVisible } from "./FadeInWhenVisible";

interface SectionHeaderProps {
  label: string;
  title: string;
  onViewAll?: () => void;
}

export function SectionHeader({ label, title, onViewAll }: SectionHeaderProps) {
  return (
    <FadeInWhenVisible className="flex flex-col md:flex-row md:items-end justify-between mb-16 gap-6">
      <div>
        <SectionLabel>{label}</SectionLabel>
        <h2 className="text-display-md text-stone-900  ">{title}</h2>
      </div>
      <Button variant="ghost" onClick={onViewAll} className="hover:opacity-50">
        View All →
      </Button>
    </FadeInWhenVisible>
  );
}
