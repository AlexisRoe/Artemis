import { ProgressNotification } from "../components/Menu/ProgressNotification";

export default {
  title: "Components/Menu",
  component: ProgressNotification,
};

export const Error = () => <ProgressNotification state="error" />;
export const Loading = () => <ProgressNotification state="loading" />;
