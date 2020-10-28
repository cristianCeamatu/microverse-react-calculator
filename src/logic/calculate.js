import operate from './operate';

const calculate = ({ total, next, operation }, buttonName) => {
  if (buttonName === '+/-') {
    if (total && !next) {
      return { total: total * -1, operation };
    }
    if (next) {
      return { next: next * -1, total, operation };
    }
    return;
  }
  if (buttonName === '%') {
    if (total && !next) {
      return { total: total * 100, operation };
    }
    if (next) {
      return { next: next * 100, total, operation };
    }
    return;
  }
  if (buttonName === '.') {
    if (!total && !next) {
      return { total: '0.', operation };
    }
    if (total && !next && total.indexOf('.') === -1) {
      return { total: `${total}.`, operation };
    }
    if (next && next.indexOf('.') === -1) {
      return { next: `${next}.`, total, operation };
    }
    return;
  }
  if (buttonName === 'AC') {
    return { total: '', next: '', operation: '' };
  }
};

export default calculate;
