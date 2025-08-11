import { useState } from "react";

interface TagTypes {
  title: string;
  id: number;
}

type TagProps = {
  tags: Array<TagTypes>;
};

export default function Tag({ tags }: TagProps) {
  const [isActive, setActiveTab] = useState(1);

  return (
    <div className="gap-x-4 flex justify-center">
      {tags.map((tag) => {
        const active = isActive === tag.id;
        return (
          <div
            onClick={() => setActiveTab(tag.id)}
            key={tag.id}
            className={`w-full h-11 rounded-full flex justify-center items-center text-sm whitespace-nowrap py-2 px-4 cursor-pointer ${
              active
                ? "border border-[#F69626] text-[#F69626]"
                : "bg-[#F3F4F6] text-[#55565B]"
            }`}
          >
            {tag.title}
          </div>
        );
      })}
    </div>
  );
}
