const App = () => (
    <div>
      <Person name="Christian" age={(32)} hobbies = {["running", "baking", "dancing"]}/>
      <Person name="Wrandy" age={(29)} hobbies = {["video games", "running", "cooking"]}/>
      <Person name="Josh" age={(38)} hobbies = {["tv", "games"]}/>
    </div>
  );
  
  ReactDOM.render(<App/>, document.getElementById("root"));