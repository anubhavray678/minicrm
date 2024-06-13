// "use client";
// import {
//   LucideIcon,
//   LayoutDashboard,
//   BadgeDollarSign,
//   CircleUserRound,
//   Settings,
//   WalletCards,
// } from "lucide-react";
// import SidebarItem from "./item";

// const items = [
//   {
//     name: "Dashboard",
//     path: "/dashboard",
//     icon: LayoutDashboard,
//   },
//   {
//     name: "Transaction",
//     path: "/transaction",
//     icon: BadgeDollarSign,
//   },
//   {
//     name: "Payment",
//     path: "/payment",
//     icon: WalletCards,
//   },
//   {
//     name: "Accounts",
//     path: "/accounts",
//     icon: CircleUserRound,
//   },
//   {
//     name: "Settings",
//     path: "/settings",
//     icon: Settings,
//     items: [
//       {
//         name: "General",
//         path: "/settings",
//       },
//       {
//         name: "Security",
//         path: "/settings/security",
//       },
//       {
//         name: "Notifications",
//         path: "/settings/notifications",
//       },
//     ],
//   },
// ];

// const Sidebar = () => {
//   return (
//     <div className="fixed top-0 left-0 h-screen w-64 bg-blue-700 shadow-lg z-10 p-4 text-white">
//       <div className="flex flex-col space-y-10 w-full">
//         <h1 className="flex items-center p-3 rounded-lg hover:bg-sidebar-background cursor-pointer hover:text-sidebar-active justify-between">
//           miniCRM
//         </h1>
//         <div className="flex flex-col space-y-2">
//           {items.map((item, index) => (
//             <SidebarItem key={index} item={item} />
//           ))}
//         </div>
//       </div>
//     </div>
//   );
// };

// export default Sidebar;
"use client";

import { useRouter } from "next/navigation";
import {
  LucideIcon,
  LayoutDashboard,
  BadgeDollarSign,
  CircleUserRound,
  Settings,
  WalletCards,
} from "lucide-react";
import SidebarItem from "./item";

const items = [
  {
    name: "Dashboard",
    path: "/dashboard",
    icon: LayoutDashboard,
  },
  {
    name: "Transaction",
    path: "/transaction",
    icon: BadgeDollarSign,
  },
  {
    name: "Payment",
    path: "/payment",
    icon: WalletCards,
  },
  {
    name: "Accounts",
    path: "/accounts",
    icon: CircleUserRound,
  },
  {
    name: "Settings",
    path: "/settings",
    icon: Settings,
    items: [
      {
        name: "General",
        path: "/settings",
      },
      {
        name: "Security",
        path: "/settings/security",
      },
      {
        name: "Notifications",
        path: "/settings/notifications",
      },
    ],
  },
];

const Sidebar = () => {
  const router = useRouter();

  // Check if the current path is "/"
  if (router.pathname === "/") {
    return null; // Don't render the sidebar on the root route
  }

  return (
    <div className="fixed top-0 left-0 h-screen w-64 bg-red-50 shadow-lg z-10 p-4">
      <div className="flex flex-col space-y-10 w-full">
        <h1 className="flex items-center p-3 rounded-lg hover:bg-sidebar-background cursor-pointer hover:text-sidebar-active justify-between">
          miniCRM
        </h1>
        <div className="flex flex-col space-y-2">
          {items.map((item, index) => (
            <SidebarItem key={index} item={item} />
          ))}
        </div>
      </div>
    </div>
  );
};

export default Sidebar;
