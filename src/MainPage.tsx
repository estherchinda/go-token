import Button from "./components/Button";
import Heading from "./components/Heading";
import Tag from "./components/Tag";
import { Add, ArrowLeft } from "iconsax-react";
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
  const [showMobileDetails, setShowMobileDetails] = useState(false);

  const selectedTask = tasks.find((task) => task.id === activeTab) || null;

  const handleTabClick = (taskId: number) => {
    setActiveTab(taskId);
    setShowMobileDetails(true);
  };

  const handleBackClick = () => {
    setShowMobileDetails(false);
    setActiveTab(0);
  };

  return (
    <section className="bg-white min-h-screen rounded-2xl md:shadow-md p-2 md:p-4 relative overflow-hidden">
      {/* Main content */}
      <div className={`transition-transform duration-300 ease-in-out md:transform-none ${showMobileDetails ? '-translate-x-full md:translate-x-0' : 'translate-x-0'}`}>
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
                  onClick={() => handleTabClick(task.id)}
                />
              ))}
            </div>
          </div>

          {/* details panel - desktop only */}
          <div className="hidden md:block w-full">
            <TaskDetails task={selectedTask} onClick={() => setActiveTab(0)} />
          </div>
        </section>
      </div>

      {/* Mobile overlay details */}
      <div className={`md:hidden absolute inset-0 bg-white transition-transform duration-300 ease-in-out ${showMobileDetails ? 'translate-x-0' : 'translate-x-full'}`}>
        <div className="p-2">
          {/* Back button */}
          <div className="mb-6">
            <button 
              onClick={handleBackClick}
              className="flex items-center gap-2 text-gray-600 hover:text-gray-800 transition-colors"
            >
              <ArrowLeft size={20} color="gray" />
            </button>
          </div>
          
          {/* Task details */}
          <TaskDetails task={selectedTask} onClick={handleBackClick} />
        </div>
      </div>
    </section>
  );
}