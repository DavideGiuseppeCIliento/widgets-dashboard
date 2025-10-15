// # IMPORT HOOKS
import useRequest from "../hooks/useRequest";

export default function HomeDashboard() {
  const { news } = useRequest();
  console.log(news);
  return "HOME DASH";
}
