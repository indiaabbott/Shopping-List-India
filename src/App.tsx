/**
 * Main takeaway: a default JSX element's onClick
 *  can only take a function.
 *
 * Task: try breaking the App by assigning things that
 *  AREN'T functions to any of the button onClicks.
 *
 * Success: be able to articulate why the app does not
 *  compile when passing in the following as onClicks:
 *    - myString
 *    - myFixedNumber
 *    - myRandomNumber
 *    - myReturnValue
 */

/**
 * This demos a few different ways in which you can
 *  pass a function to the onClick of a default element.
 */

function App() {
  /**
   * Section one:  3 x valid function references
   */
  function handleExpressionReference() {
    console.log("From function expression reference");
  }

  const handleArrowFunctionBody = () => {
    console.log("From handle arrow function body");
  };

  const arrowFunctionImplicitReturn = () =>
    console.log("From arrow function implicit return");

  /**
   * Section two: 4 x non-function references
   */

  const myString = "hi";
  const myFixedNumber = 42;

  /**
   * This is NOT a function reference.
   *
   * Our variable is capturing the return value of
   *  executing a function: Math.random(), which
   *  happens to return a number.
   *
   * Therefore, it is a reference to a number.
   */
  const myRandomNumber = Math.random();

  /**
   * This is NOT a function reference.
   *
   * Our variable is capturing the return value of
   *  executing a function: console.log("uh oh"),
   *  which happens to return undefined.
   *
   * Therefore, it is a reference to undefined.
   */
  const myReturnValue = console.log("uh oh");

  return (
    <div>
      <h1>My buttons</h1>
      <button onClick={handleExpressionReference}>
        Function expression reference
      </button>
      <button onClick={handleArrowFunctionBody}>Arrow function body</button>
      <button onClick={arrowFunctionImplicitReturn}>
        Arrow function implicit return
      </button>
    </div>
  );
}

export default App;
