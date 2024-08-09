import FirstComponent from './learnings/01-returns';
import SecondComponent from './learnings/02-props';
import ThirdComponent from './learnings/03-state';
import FourthComponent from './learnings/04-events';
import FifthComponent from './learnings/05-challenge';
import FifthCorrect from './learnings/05-correctChallange';
import SixthComponent from './learnings/06-context';
import SeventhComponent from './learnings/07-reducers';
import EighthComponent from './learnings/08-fetch';
import NinthComponent from './learnings/09-reduxtoolkit';
import FinalTask from './learnings/10-task';

function App() {


  return (
    <div className='overflow-hidden'>
      <div className='flex flex-col justify-center items-center bg-black text-white p-10'>
        <h1 className="font-extrabold text-3xl">React Typescript</h1>
      </div>

      {/* Final Task in Learning React Typescript */}
      <FinalTask />

      {/* Redux Toolkit Examples in React Typescript */}
      <NinthComponent />

      {/* Fetching API in React Typescript */}
      <EighthComponent />

      {/* Recuders in React Typescript */}
      <SeventhComponent />

      {/* Context API using react typescript */}
      <SixthComponent />

      {/* Correct Way to complete the challenge */}
      <div className='flex flex-col justify-center items-center bg-gray-100 p-10'>
        <p className='font-bold text-xl'>Challenge - Correct Way</p>
        <FifthCorrect type='basic' username='anupam' />
        <FifthCorrect type='advance' username='rose' email='ghimirerose@gmail.com' />
      </div>

      {/* Challenge in React Typescript */}
      {/* In this challenge we need to keep two components basic and advance */}
      {/* Basic components contain username only and advanced component contain username and email */}
      {/* So this is not the exact way to complete the challenge as: */}
      {/* The email is optional so we can either give the email or not give email in both and basic and advanced type */}
      {/* But the main point is not to keep email optional and basic should only contain username and advanced should contain username and email */}
      <div className='flex flex-col justify-center items-center bg-gray-200 p-10'>
        <p className='font-bold text-xl'>Challenge</p>
        <FifthComponent type='basic' username='anupam' />
        <FifthComponent type='advance' username='rose' email='ghimirerose78@gmail.com' />
      </div>

      {/* React Typescript Events Example */}
      <FourthComponent />

      {/* React Typescript State Example */}
      <ThirdComponent />

      {/* We cannot directly write these children components in Typescrpt */}
      {/* We have to first define the children as ReactNode Props */}
      <div className='flex flex-col justify-center items-center bg-gray-100 p-10'>
        <p className="font-bold text-xl">Props</p>
        <SecondComponent name='Anupam' id={1}>
          <h1>Hello World</h1>
        </SecondComponent>
        <SecondComponent name='Rose' id={1.1} />
      </div>

      <FirstComponent />
    </div>
  )
}

export default App
