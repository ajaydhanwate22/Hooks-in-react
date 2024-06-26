import './App.css';
import Footer from './Component/Footer';
import Profile from './Component/Profile';
import Usecallback from './Component/Usecallback';
import Usecontext from './Component/Usecontext';
import Useeffect from './Component/Useeffect';
import Usememo from './Component/Usememo';
import Usereducer from './Component/Usereducer';
import Useref from './Component/Useref';
import Usestate from './Component/Usestate';

function App() {
  return (
    <>
      {/* whats is hooks? */}
      {/* 1>hooks are special function that allows us to use state and other react feautures in fuctional commponent */}
      {/* 2>hooks are the functons that makes functional component work like class component. */}
      {/* 3>hooks made react fnctional component so easy to use.*/}
      {/* 4>developers prefer fuctional  component over class component*/}


      {/* benefits of hooks*/}
      {/* react hook simplify the code,improves the readablity,reuseblity and overall performance of the application.*/}


      {/* most commaenly used hooks: */}
      {/* 1>usestate   2>useeffect    3>useRef   4>useMemo  5>usecallback    6>usecontext    7>usereducer     8>useLayputeffect    9>custom hook */}
      <div className="container">
        <Usestate />
        <Useeffect />
        <Useref />
        <Usememo/>
        <Usecallback/>
        <Usecontext/>
        <Profile/>
        <Footer/>
        <Usereducer/>
      </div>

    </>
  );
}

export default App;
