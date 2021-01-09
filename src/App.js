import React from 'react';
import './App.css';

import PersonCard from './components/PersonCard';


function App() {
  return (
    <div className="app">
      {/* firstName,lastName,age,hairColor are properties that we pass into the PersonCard component when we construct a new PersonCard like we do below */}
      {/* they are immutable and can not be changed from within the component. they are used just to pass information into the component */}
      <PersonCard firstName={"Jane"} lastName={"Doe"} age={45} hairColor={"Black"}/>
      <PersonCard firstName={"John"} lastName={"Smith"} age={88} hairColor={"Brown"}/>
      <PersonCard firstName={"Millard"} lastName={"Fillmore"} age={50} hairColor={"Brown"}/>
      <PersonCard firstName={"Maria"} lastName={"Smith"} age={62} hairColor={"Black"}/>

    </div>
  );
}

export default App;
