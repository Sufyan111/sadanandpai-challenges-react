import React from "react";
import MenuItem from "./MenuItem";

const NestedDropdown = () => {
  const menuData = [
    {
      id: "software-dev",
      label: "Software Development",
      children: [
        {
          id: "web-design",
          label: "Web design",
          children: [],
        },
        {
          id: "web-dev",
          label: "Web development",
          children: [
            {
              id: "frontend",
              label: "Frontend",
              children: [],
            },
            {
              id: "backend",
              label: "Backend",
              children: [
                {
                  id: "nodejs",
                  label: "NodeJS",
                  children: [],
                },
                {
                  id: "php",
                  label: "PHP",
                  children: [],
                },
                {
                  id: "java",
                  label: "JAVA",
                  children: [],
                },
              ],
            },
          ],
        },
      ],
    },
  ];

  return (
    <div>
      NestedDropdown
      {menuData.map((m) => {
        return <MenuItem item={m} />;
      })}
    </div>
  );
};

export default NestedDropdown;
