import { NotificationArea } from "./NotificationArea";

export default {
  title: "Components/DataLists",
  component: NotificationArea,
};

const args = {
  arrowleft: true,
  arrowright: true,
  filter: true,
};

export const NotificationAreas = () => <NotificationArea {...args} />;
