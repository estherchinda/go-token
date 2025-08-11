import Button from "./components/Button";
import Heading from "./components/Heading";
import Tag from "./components/Tag";
import { Add } from "iconsax-react";
import { tasks } from "./lib/demo-data";
import ListTab from "./components/ListTab";
import { useState } from "react";
import TaskDetails from "./components/TaskDetails";

export default function MainPage() {
  const tags = [
    { id: 1, title: "All" },
    { id: 2, title: "Social" },
    { id: 3, title: "Content" },
    { id: 4, title: "Apps" },
    { id: 5, title: "Survey & Polls" },
  ];

  const [activeTab, setActiveTab] = useState(1);

  const selectedTask = tasks.find((task) => task.id === activeTab) || null;
  return (
    <section className="bg-white min-h-screen rounded-2xl md:shadow-md p-2 md:p-4">
      {/* filter and create task button */}
      <div className="flex flex-col md:flex-row gap-5 md:gap-0 justify-between items-center">
        <Tag tags={tags} />
        <div className="w-full md:w-[180px]">
          <Button content="Create Task" icon={<Add color="#fff" size={20} />} />
        </div>
      </div>

      {/* lists */}
      <section className="flex flex-col md:flex-row flex-1 gap-8 items-start mt-10">
        <div className="w-full">
          <Heading heading="Task Timeline" />
          <div className="space-y-4 mt-5">
            {tasks.map((task) => (
              <ListTab
                key={task.id}
                title={task.title}
                subtitle={task.subtitle}
                amount={task.amount}
                count={task.count}
                onClick={() => setActiveTab(task.id)}
              />
            ))}
          </div>
        </div>

        {/* details panel */}
        <div className="w-full">
          <TaskDetails task={selectedTask} onClick={() => setActiveTab(0)} />
        </div>
      </section>
    </section>
  );
}
