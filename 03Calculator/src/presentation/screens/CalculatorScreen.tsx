import React from 'react';
import {StyleSheet, Text, View} from 'react-native';
import {colors, stylesGlobal} from '../../config/theme/AppTheme';
import {CalculatorButton} from '../components/CalculatorButton';
import {useCalculator} from '../hooks/useCalculator';

export const CalculatorScreen = () => {
  const {
    // number,
    prevNumber,
    formula,
    buildNumber,
    toggleSign,
    clean,
    deleteOperation,
    devideOperation,
    addOperation,
    subtractOperation,
    multiplyOperation,
    calculateResult,
  } = useCalculator();

  return (
    <View style={stylesGlobal.calculatorContainer}>
      <View style={styleLocal.container}>
        <Text
          adjustsFontSizeToFit
          numberOfLines={1}
          style={stylesGlobal.mainsResult}>
          {formula}
        </Text>
        {formula === prevNumber ? (
          <Text style={stylesGlobal.subResult}> </Text>
        ) : (
          <Text
            adjustsFontSizeToFit
            numberOfLines={1}
            style={stylesGlobal.subResult}>
            {/* {prevNumber === '0' ? ' ' : prevNumber} */} {/*No es necesaria la condicion*/}
          </Text>
        )}
      </View>

      <View style={stylesGlobal.row}>
        <CalculatorButton
          onPress={() => clean()}
          label="C"
          color={colors.lightGray}
          blackText
        />
        <CalculatorButton
          onPress={() => toggleSign()}
          label="+/-"
          color={colors.lightGray}
          blackText
        />
        <CalculatorButton
          onPress={() => deleteOperation()}
          label="del"
          color={colors.lightGray}
          blackText
        />
        <CalculatorButton
          onPress={() => devideOperation()}
          label="÷"
          color={colors.orange}
        />
      </View>

      <View style={stylesGlobal.row}>
        <CalculatorButton onPress={() => buildNumber('7')} label="7" />
        <CalculatorButton onPress={() => buildNumber('8')} label="8" />
        <CalculatorButton onPress={() => buildNumber('9')} label="9" />
        <CalculatorButton
          onPress={() => multiplyOperation()}
          label="x"
          color={colors.orange}
        />
      </View>

      <View style={stylesGlobal.row}>
        <CalculatorButton onPress={() => buildNumber('4')} label="4" />
        <CalculatorButton onPress={() => buildNumber('5')} label="5" />
        <CalculatorButton onPress={() => buildNumber('6')} label="6" />
        <CalculatorButton
          onPress={() => subtractOperation()}
          label="-"
          color={colors.orange}
        />
      </View>

      <View style={stylesGlobal.row}>
        <CalculatorButton onPress={() => buildNumber('1')} label="1" />
        <CalculatorButton onPress={() => buildNumber('2')} label="2" />
        <CalculatorButton onPress={() => buildNumber('3')} label="3" />
        <CalculatorButton
          onPress={() => addOperation()}
          label="+"
          color={colors.orange}
        />
      </View>

      <View style={stylesGlobal.row}>
        <CalculatorButton
          onPress={() => buildNumber('0')}
          label="0"
          doubleSize
        />
        <CalculatorButton onPress={() => buildNumber('.')} label="." />
        <CalculatorButton
          onPress={() => calculateResult()}
          label="="
          color={colors.orange}
        />
      </View>
    </View>
  );
};

export const styleLocal = StyleSheet.create({
  container: {
    paddingHorizontal: 30,
    paddingBottom: 20,
  },
});
