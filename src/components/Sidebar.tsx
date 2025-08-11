import { useState } from "react";
import { Home2, Wallet, Ranking, Profile } from "iconsax-react";

export default function SideBar() {
  const links = [
    { name: "Home", icon: Home2 },
    { name: "Wallet", icon: Wallet },
    { name: "Leaderboard", icon: Ranking },
    { name: "Profile", icon: Profile },
  ];

  const [activeLink, setActiveLink] = useState("Home");

  return (
    <div
      className="fixed top-0 left-0 h-screen w-[254px] bg-white border-r border-gray-200 py-6 mt-0 space-y-2 px-4 pt-22">
      {links.map((link, idx) => {
        const isActive = activeLink === link.name;
        const IconComponent = link.icon;

        return (
          <div
            onClick={() => setActiveLink(link.name)}
            key={idx}
            className={`h-[50px] w-full rounded-full py-3 px-5 flex gap-3 items-center cursor-pointer transition-colors
              ${isActive ? "bg-[#F58300] text-white" : "hover:bg-gray-200 text-[#919297]"}`}
          >
            <IconComponent
              size={20}
              variant={isActive ? "Bold" : "Linear"}
              color={isActive ? "#fff" : "#919297"}
            />
            <span className="text-sm font-medium">{link.name}</span>
          </div>
        );
      })}
    </div>
  );
}
