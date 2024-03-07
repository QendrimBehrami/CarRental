import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";

interface SelectionProps {
  icon: React.ReactElement;
  title: string;
  type: string | Date;
  options: string[];
}

const Selection = (props: SelectionProps) => {
  const { icon, title, type, options } = props;
  return (
    <div className="flex flex-col gap-4 min-w-60">
      <div className="flex gap-2">
        <span>{icon}</span> <span className="font-bold">{title}</span>
      </div>
      {type == "text" && (
        <Select>
          <SelectTrigger className="border border-slate-600 focus:outline-none focus:border-none">
            <SelectValue placeholder="..." />
          </SelectTrigger>
          <SelectContent>
            {options.map((option, index) => (
              <SelectItem
                key={index}
                value={option}
                className="focus:bg-slate-200"
              >
                {option}
              </SelectItem>
            ))}
          </SelectContent>
        </Select>
      )}
    </div>
  );
};

export default Selection;
