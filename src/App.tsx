import FirstComponent from './learnings/01-returns';
import SecondComponent from './learnings/02-props';
import ThirdComponent from './learnings/03-state';
import FourthComponent from './learnings/04-events';
import FifthComponent from './learnings/05-challenge';

function App() {

  return (
    <>
      {/* Challenge in React Typescript */}
      {/* In this challenge we need to keep two components basic and advance */}
      {/* Basic components contain username only and advanced component contain username and email */}
      {/* So this is not the exact way to complete the challenge as: */}
      {/* The email is optional so we can either give the email or not give email in both and basic and advanced type */}
      {/* But the main point is not to keep email optional and basic should only contain username and advanced should contain username and email */}
      <FifthComponent type='basic' username='anupam' />
      <FifthComponent type='advance' username='rose' email='ghimirerose78@gmail.com' />

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
