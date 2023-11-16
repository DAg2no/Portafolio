import { useState } from "react";

 export const [isDrawerOpen, setIsDrawerOpen] = useState(false);

 export const toggleDrawer = () => {
  setIsDrawerOpen(!isDrawerOpen);
};

