import logoSrc from "../../assets/logo/logo-artemis.png";
import { Article, Button, InformationContainer } from ".";

export const HeaderBar = (args) => {
  const HeaderTitle = () => {
    if (!args.title) {
      return "Artemis";
    } else {
      return args.title;
    }
  };

  const ConvertDate = () => {
    if (!args.date) {
      return "01.01.2021";
    }

    console.log(args.date);

    const date = new Date(args.date);
    return new Intl.DateTimeFormat("de-DE", {
      year: "numeric",
      month: "2-digit",
      day: "numeric",
    }).format(date);
  };

  return (
    <header>
      <Article>
        <InformationContainer>
          <h2>{ConvertDate()}</h2>
          <h2>{HeaderTitle()}</h2>
        </InformationContainer>
        <Button>
          <img src={logoSrc} alt="open/close main menu" />
        </Button>
      </Article>
    </header>
  );
};

export default {
  title: "Components/Header",
  components: HeaderBar,
  argTypes: {
    animation: {
      table: {
        disable: true,
      },
    },
    date: {
      control: {
        type: "date",
      },
      table: {
        disable: false,
      },
    },
    title: {
      control: {
        type: "text",
      },
      table: {
        disable: false,
      },
    },
  },
};

// HeaderBar.args = {
//   date: "01.01.2020",
// };
