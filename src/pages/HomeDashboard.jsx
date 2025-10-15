//  # IMPORT HOOKS
import { useEffect } from "react";
import useRequest from "../hooks/useRequest";

export default function HomeDashboard() {
  const { getPosts } = useRequest();

  useEffect(() => {
    getPosts();
  }, []);

  return "Dash";
}
