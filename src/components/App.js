import React, { useRef, useState } from 'react';
import './../styles/App.css';

const App = () => {
  const inputRefs = useRef({
    name: null,
    address: null,
    email: null,
    mobile: null
  });

  const [errorName, setErrorName] = useState('');
  const [errorAdd, setErrorAdd] = useState('');
  const [errorEmail, setErrorEmail] = useState('');
  const [errorMobile, setErrorMobile] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();

    setErrorName('');
    setErrorAdd('');
    setErrorEmail('');
    setErrorMobile('');

    const name = inputRefs.current.name.value.trim();
    const address = inputRefs.current.address.value.trim();
    const email = inputRefs.current.email.value.trim();
    const mobile = inputRefs.current.mobile.value.trim();

    let isValid = true;

    // Name validation
    if (!/^[a-zA-Z\s]+$/.test(name)) {
      setErrorName("Name should contain only letters");
      isValid = false;
    }

    // Address validation
    if (!/^[a-zA-Z0-9\s]+$/.test(address)) {
      setErrorAdd("Address should not contain special characters");
      isValid = false;
    }

    // Email validation
    if (!email.includes("@") || !email.includes(".com")) {
      setErrorEmail("Email should contain @ and .com");
      isValid = false;
    }

    // Mobile validation
    if (mobile.length > 10 || !/^\d+$/.test(mobile)) {
      setErrorMobile("Mobile number should not be more than 10 characters");
      isValid = false;
    }

    if (isValid) {
      alert("Form submitted successfully!");

      // Clear input fields manually
      inputRefs.current.name.value = '';
      inputRefs.current.address.value = '';
      inputRefs.current.email.value = '';
      inputRefs.current.mobile.value = '';
    }
  };

  return (
    <div>
      <form onSubmit={handleSubmit}>
        <label>Name</label>
        <input type="text" name="name" ref={el => inputRefs.current.name = el} />
        <p className="errorMessage" style={{ color: 'red' }}>{errorName}</p>

        <label>Address</label>
        <input type="text" name="address" ref={el => inputRefs.current.address = el} />
        <p className="errorMessage" style={{ color: 'red' }}>{errorAdd}</p>

        <label>Email</label>
        <input type="text" name="email" ref={el => inputRefs.current.email = el} />
        <p className="errorMessage" style={{ color: 'red' }}>{errorEmail}</p>

        <label>Mobile</label>
        <input type="text" name="mobile" ref={el => inputRefs.current.mobile = el} />
        <p className="errorMessage" style={{ color: 'red' }}>{errorMobile}</p>

        <button type="submit">Submit</button>
      </form>
    </div>
  );
};

export default App;
