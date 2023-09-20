import React from "react";
import Links from "@/src/components/Links";
import { LinksLayout } from "../components/Layout";

function links() {
  return <Links />;
}

links.Layout = LinksLayout;

export default links;
