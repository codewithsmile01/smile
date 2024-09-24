import { cn } from "@/lib/utils";

export const BentoGrid = ({
  className,
  children
}) => {
  return (
    (<div
      className={cn(
        "w-full flex sm:flex-col md:flex-row flex-wrap gap-4 bg-transparent mx-auto ",
        className
      )}>
      {children}
    </div>)
  );
};

export const BentoGridItem = ({
  className,
  duration,
  company,
  location,
  position,
  jobprofile,
  header
}) => {
  return (
    (<div
      className={cn(
        "row-span-1 rounded-xl group/bento hover:shadow-xl transition duration-200 shadow-input dark:shadow-none p-4 dark:bg-black dark:border-white/[0.2] bg-transparent shadow-lg font-bold text-2xl border border-red-600 bg-slate-400 justify-between flex flex-col space-y-4",
        className
      )}>
      {header}
      <div className="group-hover/bento:translate-x-2 text-blue-600 transition duration-200">
        {duration}
        <div
          className="font-sans font-bold text-amber-600 dark:text-neutral-200 mb-2 mt-2">
          {company}
        </div>
        <div
          className="font-sans font-normal text-green-700 text-xs dark:text-neutral-300">
          {location}
        </div>
        <div
          className="font-sans font-normal text-green-700 text-xs dark:text-neutral-300">
          {position}
        </div>
        <div
          className="font-sans font-normal text-green-700 text-xs dark:text-neutral-300">
          {jobprofile}
        </div>
      </div>
    </div>)
  );
};
