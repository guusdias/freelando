import { Styles } from "./components/GlobalStyles/Styles";
import { Card } from "./components/GlobalStyles/Card/Card";
import { ThemeProvidering } from "./components/ThemeProvider/ThemeProvidering";

function App() {
  return (
    <div>
      <ThemeProvidering>
        <Styles />
        <Card>
          <h1>freelando</h1>
        </Card>
      </ThemeProvidering>
    </div>
  );
}

export default App;
