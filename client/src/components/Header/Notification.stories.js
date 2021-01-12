import NotificationHeader from "./Notification";

export const NotificationBar = (args) => {
  const NotificationMessage = () => {
    if (args.isError) {
      return "An Error accured";
    } else {
      return args.message;
    }
  };

  return (
    <NotificationHeader error={args.isError} message={NotificationMessage()} />
  );
};

export default {
  title: "Components/Header",
  components: NotificationBar,
  argTypes: {
    animation: {
      table: {
        disable: true,
      },
    },
    date: {
      table: {
        disable: true,
      },
    },
    title: {
      table: {
        disable: true,
      },
    },
  },
};

NotificationBar.args = {
  isError: true,
  message: "loading ...",
};
