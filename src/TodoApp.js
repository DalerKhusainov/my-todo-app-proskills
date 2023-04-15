import ContentArea from "./components/content-area/ContentArea";
import Header from "./components/header/Header";
import { initialMessage } from "./functions/functions";
import { alertMessageText } from "./configs/config";

initialMessage(alertMessageText);

const TodoApp = () => {
  return (
    <>
      <Header />
      <ContentArea />
    </>
  );
};

export default TodoApp;
