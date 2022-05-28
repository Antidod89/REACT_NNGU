import React, { useState } from 'react';
import TestPageComponnent from './components/TestPageComponent';

const TestPage = () => {
  const [isShow, setIsShow] = useState(true);
  return (
    <>
      <button type="button" onClick={() => setIsShow((prev) => !prev)}>
        Показать или скрыть компонент
      </button>
      <hr />
      {isShow && <TestPageComponnent />}
    </>
  );
};

export default TestPage;
