import {useEffect, useRef, useState} from 'react';

enum Operator {
  add = '+',
  subtract = '-',
  multiply = 'x',
  divide = '÷',
}

export const useCalculator = () => {
  const [formula, setformula] = useState('');

  const [number, setnumber] = useState('0');
  const [prevNumber, setprevNumber] = useState('0');

  const lastOpertion = useRef<Operator | undefined>(undefined);

  // manejar la formula
  useEffect(() => {
    if (lastOpertion.current) {
      const firstFormula = formula.split(' ').at(0); //tomo la primer posicion
      setformula(`${firstFormula} ${lastOpertion.current} ${number}`);
    } else {
      setformula(number);
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [number]);

  // manejo el calculo en digitacion de la formula
  useEffect(() => {
    const restul = calculateSubResult();
    if (lastOpertion.current) {
      setprevNumber(`${restul}`);
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [formula]);

  // limpia la calculador
  const clean = () => {
    setnumber('0');
    setprevNumber('0');
    lastOpertion.current = undefined;
    setformula('');
  };

  // borra el ultimo numero de la calculador
  const deleteOperation = () => {
    if (number.length === 1 || (number.length === 2 && number.includes('-'))) {
      return setnumber('0');
    }

    if (number === '0') {
      return;
    }

    return setnumber(number.slice(0, number.length - 1));
  };

  //agrega el signo
  const toggleSign = () => {
    if (number.includes('-')) {
      return setnumber(number.replace('-', ''));
    }
    setnumber('-' + number);
  };

  const buildNumber = (numberString: string) => {
    if (number.includes('.') && numberString === '.') {
      return;
    }

    if (number.startsWith('0') || number.startsWith('-0')) {
      // Punto decimal
      if (numberString === '.') {
        return setnumber(number + numberString);
      }

      // evaluar si es otro cero y no hay punto
      if (numberString === '0' && number.includes('.')) {
        return setnumber(number + numberString);
      }

      // evaluar si es diferente de cero, no hay punto, y es el primer numero
      if (numberString !== '0' && !number.includes('.')) {
        return setnumber(numberString);
      }

      // evitar el 0000000000
      if (numberString === '0' && !number.includes('.')) {
        return;
      }

      return setnumber(number + numberString);
    }
    setnumber(number + numberString);
  };

  const setLastNumber = () => {
    calculateResult(); // ayuda a calcular sobre una operacion ya hecha

    if (number.endsWith('.')) {
      setprevNumber(number.slice(0, -1));
    } else {
      setprevNumber(number);
    }
    setnumber('0');
  };

  const devideOperation = () => {
    setLastNumber();
    lastOpertion.current = Operator.divide;
  };
  const addOperation = () => {
    setLastNumber();
    lastOpertion.current = Operator.add;
  };
  const subtractOperation = () => {
    setLastNumber();
    lastOpertion.current = Operator.subtract;
  };
  const multiplyOperation = () => {
    setLastNumber();
    lastOpertion.current = Operator.multiply;
  };

  const calculateSubResult = (): number => {
    // const num1 = Number(number); //Nan
    // const num2 = Number(prevNumber); //Nan

    const [firstValue, operator, secondValue] = formula.split(' ');

    const num1 = Number(firstValue); //Nan
    const num2 = Number(secondValue); //Nan

    if (isNaN(num2)) {
      return num1;
    }

    switch (operator /*lastOpertion.current*/) {
      case Operator.add:
        // setnumber(`${num1 + num2}`);
        // setprevNumber('0');
        return num1 + num2;
      //break;
      case Operator.subtract:
        // setnumber(`${num2 - num1}`);
        // setprevNumber('0');
        return num1 - num2;
      // break;
      case Operator.multiply:
        // setnumber(`${num1 * num2}`);
        // setprevNumber('0');
        return num1 * num2;
      // break;
      case Operator.divide:
        // setnumber(`${num2 / num1}`);
        // setprevNumber('0');
        return num1 / num2;
      // break;

      default:
        throw new Error('operacion no implementada');
    }
  };

  const calculateResult = () => {
    const result = calculateSubResult();
    setformula(`${result}`);
    lastOpertion.current = undefined;
    setprevNumber('0');
  };

  return {
    // Properties
    number,
    prevNumber,
    formula,
    // Methods
    buildNumber,
    toggleSign,
    clean,
    deleteOperation,
    devideOperation,
    addOperation,
    subtractOperation,
    multiplyOperation,
    calculateResult,
  };
};
