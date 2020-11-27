import { NotificationArea } from "../components/Menu/NotificationArea";

export default {
  title: "Components/Menu",
  component: NotificationArea,
};

const args = {
  arrowleft: true,
  arrowright: true,
  filter: true,
};

export const NotificationAreas = () => <NotificationArea {...args} />;
