export default function sum(arg1) {
  const isFunc = (arg) => typeof arg === 'function';
  let total = isFunc(arg1) ? 0 : arg1;
  const printVal = (fn, val) => {
    fn(val);
    return val;
  };

  const addValues = (arg2) => {
    if (!isFunc(arg2)) { total += arg2; }
    return isFunc(arg2) ? printVal(arg2, total) : addValues;
  };

  return isFunc(arg1) ? addValues(arg1) : addValues;
}
