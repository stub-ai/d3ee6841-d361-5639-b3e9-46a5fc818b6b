import { useState } from 'react';

const Calculator = () => {
  const [firstNumber, setFirstNumber] = useState('');
  const [secondNumber, setSecondNumber] = useState('');
  const [operator, setOperator] = useState('');
  const [result, setResult] = useState('');

  const handleNumberClick = (number: string) => {
    if (!operator) {
      setFirstNumber(firstNumber + number);
    } else {
      setSecondNumber(secondNumber + number);
    }
  };

  const handleOperatorClick = (operator: string) => {
    setOperator(operator);
  };

  const calculate = () => {
    const num1 = parseFloat(firstNumber);
    const num2 = parseFloat(secondNumber);

    switch (operator) {
      case '+':
        setResult((num1 + num2).toString());
        break;
      case '-':
        setResult((num1 - num2).toString());
        break;
      case '*':
        setResult((num1 * num2).toString());
        break;
      case '/':
        setResult((num1 / num2).toString());
        break;
      default:
        break;
    }
  };

  const clear = () => {
    setFirstNumber('');
    setSecondNumber('');
    setOperator('');
    setResult('');
  };

  return (
    <div className="bg-white p-4 rounded shadow-lg">
      <h1 className="text-2xl font-bold text-center mb-4">GPT Calculator</h1>
      <div className="flex justify-center items-center mb-4">
        <input
          type="text"
          value={firstNumber}
          readOnly
          className="border-2 border-gray-300 rounded mr-2 p-2 text-center"
        />
        <span className="mx-2">{operator}</span>
        <input
          type="text"
          value={secondNumber}
          readOnly
          className="border-2 border-gray-300 rounded ml-2 p-2 text-center"
        />
      </div>
      <div className="grid grid-cols-4 gap-2">
        {[1, 2, 3, 4, 5, 6, 7, 8, 9, 0].map((number) => (
          <button
            key={number}
            onClick={() => handleNumberClick(number.toString())}
            className="bg-blue-500 text-white rounded p-2"
          >
            {number}
          </button>
        ))}
      </div>
      <div className="flex justify-between mt-4">
        {['+', '-', '*', '/'].map((operator) => (
          <button
            key={operator}
            onClick={() => handleOperatorClick(operator)}
            className="bg-red-500 text-white rounded p-2"
          >
            {operator}
          </button>
        ))}
      </div>
      <div className="flex justify-between mt-4">
        <button onClick={clear} className="bg-yellow-500 text-white rounded p-2">
          Clear
        </button>
        <button onClick={calculate} className="bg-green-500 text-white rounded p-2">
          Calculate
        </button>
      </div>
      {result && (
        <div className="mt-4 text-center">
          <h2 className="text-xl font-bold">Result: {result}</h2>
        </div>
      )}
    </div>
  );
};

export default Calculator;