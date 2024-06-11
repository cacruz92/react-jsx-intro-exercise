const App = () => (
    <div>
      <FirstComponent />
      <NamedComponent name="Christian"/>
    </div>
  );
  
  ReactDOM.render(<App/>, document.getElementById("root"));