import React from "react";
import Typography from "./component/typography";
import "./App.css";

const Label = ({ text }) => {
  return <label className="component-label">{text}</label>;
};

function App() {
  return (
    <div className="App">
      <header className="App-header">Typography</header>

      <Label text={`<Typography variant="h1" />`} />
      <Typography variant="h1">h1. heading</Typography>

      <Label text={`<Typography variant="h2" />`} />
      <Typography variant="h2">h2. heading</Typography>

      <Label text={`<Typography variant="h3" />`} />
      <Typography variant="h3">h3. heading</Typography>

      <Label text={`<Typography variant="h4" />`} />
      <Typography variant="h4">h4. heading</Typography>

      <Label text={`<Typography variant="h5" />`} />
      <Typography variant="h5">h5. heading</Typography>

      <Label text={`<Typography variant="h6" />`} />
      <Typography variant="h6">h6. heading</Typography>

      <Label text={`<Typography variant="subheading1" />`} />
      <Typography variant="subheading1">Subheading 1</Typography>

      <Label text={`<Typography variant="subheading2" />`} />
      <Typography variant="subheading2">Subheading 2</Typography>

      <Label text={`<Typography variant="body1" />`} />
      <Typography variant="body1">BodyText 1</Typography>

      <Label text={`<Typography variant="body2"/>`} />
      <Typography variant="body2">BodyText 2</Typography>

      <Label text={`<Typography variant="body1" color="primary"/>`} />
      <Typography variant="body1" color="primary">
        BodyText 1
      </Typography>

      <Label text={`<Typography variant="body2" color="error" />`} />
      <Typography variant="body2" color="error">
        BodyText 2
      </Typography>
    </div>
  );
}

export default App;
