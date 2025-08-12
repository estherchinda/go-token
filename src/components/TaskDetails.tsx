import type { TaskTypes } from "../types/task";
import { CloseCircle, Folder, DocumentText } from "iconsax-react";
import Heading from "./Heading";
import Button from "./Button";
import FileUpload from "./FileUpload";
import { survey } from "../lib/demo-data";

type DetailsProps = {
  task: TaskTypes | null;
  onClick?: () => void;
};

export default function TaskDetails({ task, onClick }: DetailsProps) {

  const joinedUsers = [
    { id: 1, image: '/woman.svg' },
    { id: 2, image: '/woman.svg' },
    { id: 3, image: '/woman.svg' },
  ]

  if (!task)
    return (
      <div className="flex flex-col justify-center items-center h-[50vh]">
        <Folder color="#F58300" size={100} variant="Bold" />
        <Heading heading="Open a tab to see more details" />
      </div>
    );
  return (
    <div className="space-y-6">
      {/* task details and close button */}
      <div className="flex justify-between items-center">
        <Heading heading="Task Details" className="text-[#393A3F]" />
        <CloseCircle onClick={onClick} size={20} color="#393A3F" className="hidden md:block" />
      </div>

      {/* status and joined members */}
      <div className="flex justify-between items-center =">
        <p className="text-[#393A3F] text-sm leading-5 space-x-2">
          <span className="font-normal">Status:</span>
          <span className="font-bold">{task.status}</span>
        </p>
        <div className="flex items-center gap-2">
          <div className="w-14 flex items-center">
            {joinedUsers.map(user => (
              <img key={user.id} src={user.image} alt="User" className="h-[34px] w-[34px] rounded-full border border-[#FFFFFF] -ml-4" />
            ))}
          </div>
          <p className="text-xs text-[#75767B]">11/30 Joined</p>
        </div>
      </div>

      {/* campaign topic */}
      <h2 className="text-[#393A3F] font-bold text-[28px] leading-11">
        Campaign Topic
      </h2>
      <p className="text-sm text-[#55565B]">
        This Survey is about {task.title}.
      </p>

      {/* instructions */}
      <div className="md:h-[265px] h-full w-full bg-[#F3F4F6] p-5 rounded-2xl space-y-2.5 my-4">
        <div className="gap-2 flex items-center">
            <DocumentText color="#F69626" size={30} variant="Bold" />
            <h2 className="text-[#393A3F] text-xl font-bold leading-[32px]">Instructions</h2>
        </div>
        <ol className="space-y-2 mt-2 list-decimal ml-5 text-[#393A3F] text-sm leading-6">
            {survey.map((s) => (
                <li key={s.id}>{s.instruction}</li>
            ))}
        </ol>
      </div>

      {/* rewards section */}
      <div className="flex items-center justify-between my-10">
        <Heading heading="Rewards:" className="text-[#393A3F]" />
        <div className="flex gap-2 items-center">
          <div className="flex gap-1 items-center">
            <img src="/fox.svg" alt="Mask" />
            <p className="text-sm text-[#F69626] font-bold">{task.count}</p>
          </div>
          <div className="flex justify-center items-center bg-[#F4EDFD82] border border-[#F3F4F9] h-5 w-14 rounded-full py-0.5 px-1.5">
            <span className="text-[#3C3C43] font-bold text-xs leading-5">
              ~${task.amount}
            </span>
          </div>
        </div>
      </div>

      {/* link button */}
      <div className="mt-4">
        <Button content="Link Instagram" />
      </div>

        {/* file upload */}
      <div className="mx-auto flex justify-center items-center mt-10">
        <FileUpload />
      </div>
    </div>
  );
}
