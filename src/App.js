import { Styles } from "./components/GlobalStyles/Styles";
import { Card } from "./components/GlobalStyles/Card/Card";
import { Header } from "./components/Header/Header";
import { Typography } from "./components/Typography/Typography";
import { ThemeProvidering } from "./components/ThemeProvider/ThemeProvidering";
import { TextField } from "./components/TextField/TextField";

function App() {
  return (
    <div>
      <ThemeProvidering>
        <Header />
        <Styles />
        <Card>
          <Typography variant="h1" component="h1">
            <h1>freelando</h1>
          </Typography>
          <Typography variant="body" component="body">
            Crie seu perfil gratuitamente para começar a trabalhar com os
            melhores freelancers. Em seguida, você poderá dar mais detalhes
            sobre suas demandas e sobre sua forma de trabalho.
          </Typography>
          <TextField title='Nome Completo'></TextField>
        </Card>
      </ThemeProvidering>
    </div>
  );
}

export default App;
