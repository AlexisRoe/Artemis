import { PageContainer } from "../components/helper/PageContainer";
import { MainMenu } from "../components/Menu/MainMenu";

export const Main = () => (
  <PageContainer>
    <MainMenu date="01.01.2020" />
  </PageContainer>
);

export default {
  title: "Pages/Main",
  component: Main,
};
