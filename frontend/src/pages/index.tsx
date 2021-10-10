import React from "react";
import type { NextPage } from "next";
import { Lottery } from "components/Lottery";

const Home: NextPage = () => {
  return <Lottery participantsCount={10} balance={5} />;
};

export default Home;
