import { NUMBER } from '../constants/baseball.js';

const DECIMAL = 10;

function isNumber(input) {
  return !Number.isNaN(parseInt(input, DECIMAL));
}

function isInRange(input) {
  return input.length === NUMBER.LENGTH;
}

export default function validateBaseballUserInput(input) {
  if (!isNumber(input)) return false;
  if (!isInRange(input)) return false;
  return true;
}
