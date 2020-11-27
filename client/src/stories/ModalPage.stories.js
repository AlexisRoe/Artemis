import { ModalNotification } from "../components/Menu/ModalNotification";

export const Modal = () => (
  <ModalNotification
    informations={[
      {
        titel: "Telekom Team 1",
        content: "Room Exchange from Room 1 to Room 2",
        link: "ObjectID",
        section: "Rooms",
      },
      {
        titel: "Telekom Team 1",
        content: "Convention starts later",
        link: "ObjectID",
        section: "Shedule",
      },
    ]}
  />
);

export default {
  title: "Pages/Modal",
  component: Modal,
};
