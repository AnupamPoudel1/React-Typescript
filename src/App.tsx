import FirstComponent from './learnings/01-returns';
import SecondComponent from './learnings/02-props';
import ThirdComponent from './learnings/03-state';
import FourthComponent from './learnings/04-events';

function App() {

  return (
    <>
      {/* React Typescript Events Example */}
      <FourthComponent />

      {/* React Typescript State Example */}
      <ThirdComponent />

      {/* We cannot directly write these children components in Typescrpt */}
      {/* We have to first define the children as ReactNode Props */}
      <SecondComponent name='Anupam' id={1}>
        <h1>Hello World</h1>
      </SecondComponent>
      <SecondComponent name='Rose' id={1.1} />

      <FirstComponent />
    </>
  )
}

export default App
