import { Tabs, Tab } from "@mui/material";
import { useState } from "react";

const SidebarTabs = () => {
  const [value, setValue] = useState(0);
  const handleChange = (_: React.SyntheticEvent, newValue: number) => {
    setValue(newValue);
  };

  const tabProps = [
    { label: "Home", id: "home" },
    { label: "Experience", id: "experience" },
    { label: "Skills", id: "skills" },
    { label: "Projects", id: "projects" },
    { label: "Resume", id: "resume" },
  ];

  return (
    <Tabs
      sx={{ alignSelf: "center" }}
      value={value}
      onChange={handleChange}
      orientation="vertical"
      variant="scrollable"
      slotProps={{
        indicator: {
          style: { display: "none" },
        },
      }}
    >
      {tabProps.map((tab, index) => (
        <Tab
          key={tab.id}
          label={tab.label}
          component="a"
          href={`#${tab.id}`}
          data-to-scrollspy-id={tab.id}
          onClick={(e) => {
            e.preventDefault();
            const target = document.getElementById(tab.id);
            if (target) {
              const offset =
                target.getBoundingClientRect().top + window.scrollY - 20;
              window.scrollTo({ top: offset, behavior: "smooth" });
              setValue(index);
            }
          }}
        />
      ))}
    </Tabs>
  );
};

export default SidebarTabs;
