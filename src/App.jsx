// Custom Components
import DashBoard from "./components/DashBoard";
import Header from "./components/Header";

// Constants
import { Titles } from "./utils/constants";

// Styles
import { Toaster } from "sonner";

function App() {
  return (
    <>
      <Header title={Titles.HEADER_TITLE} />
      <DashBoard />
      <Toaster position="bottom-center" />
    </>
  );
}

export default App;
