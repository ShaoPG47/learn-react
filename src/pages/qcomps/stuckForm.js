import { useState } from 'react';

export default function Form() {
  // let firstName = '';
  // let lastName = '';
  const [firstName, setFname] = useState('');
  const [lastName, setLname] = useState('');

  function handleFirstNameChange(e) {
    // firstName = e.target.value;
      setFname(e.target.value);
  }

  function handleLastNameChange(e) {
    // lastName = e.target.value;
      setLname(e.target.value);
  }

  function handleReset() {
    // firstName = '';
    // lastName = '';
      setFname('');
      setLname('');
  }

  return (
    <form onSubmit={e => e.preventDefault()}>
      <input
        placeholder="First name"
        value={firstName}
        onChange={handleFirstNameChange}
      />
      <input
        placeholder="Last name"
        value={lastName}
        onChange={handleLastNameChange}
      />
      <h1>Hi, {firstName} {lastName}</h1>
      <button onClick={handleReset}>Reset</button>
    </form>
  );
}
