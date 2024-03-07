import * as React from "react";
import { format } from "date-fns";

import { Button } from "@/components/ui/button";
import { Calendar } from "@/components/ui/calendar";
import {
  Popover,
  PopoverContent,
  PopoverTrigger,
} from "@/components/ui/popover";

import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";

export enum SelectionType {
  Text = "text",
  Date = "date",
}

interface SelectionProps {
  icon: React.ReactElement;
  title: string;
  type: SelectionType;
  options: string[] | undefined;
}

const Selection = (props: SelectionProps) => {
  const { icon, title, type, options } = props;
  const [date, setDate] = React.useState<Date>();

  return (
    <div className="flex flex-col gap-4 min-w-48 max-w-80">
      <div className="flex gap-2">
        <span>{icon}</span> <span className="font-bold">{title}</span>
      </div>
      {type == SelectionType.Text && (
        <Select>
          <SelectTrigger className="border border-slate-600 focus:outline-none focus:border-none">
            <SelectValue placeholder="..." />
          </SelectTrigger>
          <SelectContent>
            {options?.map((option, index) => (
              <SelectItem
                key={index}
                value={option}
                className="focus:bg-slate-100"
              >
                {option}
              </SelectItem>
            ))}
          </SelectContent>
        </Select>
      )}
      {type == SelectionType.Date && (
        <Popover>
          <PopoverTrigger asChild className=" border border-slate-600">
            <Button
              variant={"outline"}
              className="hover:bg-slate-100 text-left inline-block pr-4"
            >
              {date ? (
                format(date, "PPP")
              ) : (
                <span className="text-slate-600">Pick a date</span>
              )}
            </Button>
          </PopoverTrigger>
          <PopoverContent className="">
            <Calendar
              mode="single"
              selected={date}
              onSelect={setDate}
              initialFocus
            />
          </PopoverContent>
        </Popover>
      )}
    </div>
  );
};

export default Selection;
