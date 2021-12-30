import Header from "./components/Header";
import { OuterLayout } from "./styles/layout"
import CardSection from "./components/CardSection";
import ChartSection from "./components/ChartSection";
import styled from "styled-components";
import ChatSection from "./components/ChatSection";
import PaySection from "./components/PaySection";
import Opinion from "./components/Opinion";
import Footer from "./components/Footer";

function App() {
  return (
    <div className="app">
      <OuterLayout >
        <Header />
        <MainStyle>
          <CardSection />
          <ChartSection />
          <ChatSection />
          <PaySection />
          <Opinion />
        </MainStyle>
        <Footer />
      </OuterLayout>
    </div>
  );
}

const MainStyle = styled.main`
  
`

export default App;
