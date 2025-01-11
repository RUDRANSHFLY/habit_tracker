import React from "react";

const NavBar = () => {
  const options: Intl.DateTimeFormatOptions = {
    weekday: "short",
    day: "numeric",
    month: "long",
    year: "numeric",
  };
  const localDate = new Date().toLocaleDateString("en-US", options);
  const username = "John Doe";

  
  return (
    <header className={"flex flex-col gap-2"}>
      <p className={"text-lg"}>{localDate}</p>
      <h1 className={"text-2xl font-medium  "}>
        Hello,
        <span className={"text-orange-500"}> {username}!</span>
      </h1>
    </header>
  );
};

export default NavBar;
