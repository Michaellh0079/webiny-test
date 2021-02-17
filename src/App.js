import "./styles.css";

export default function App() {
  return (
    <div className="App">
      <h1>Webiny-Test</h1>
      <h2>Still testing</h2>

      <form>
      <label for="fname">First name:</label>
      <input type="text" id="fname" name="fname"></input>
      <br></br>
      <label for="lname">Last name:</label>
      <input type="text" id="lname" name="lname"></input>
      <br></br>
      <label for="email">Email:</label>
      <input type="text" id="email" name="email"></input>
      
      
      </form>
    </div>
  );
}
