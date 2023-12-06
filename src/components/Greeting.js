import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { fetchGreeting } from '../store/greetingSlice';

const Greeting = () => {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(fetchGreeting());
  }, [dispatch]);

  const greetingx = useSelector((state) => state.greeting.greeting) ?? '';

  return (
    <>
      <h1>{greetingx}</h1>
      <h2>Welcome!</h2>
    </>

  );
};

export default Greeting;
