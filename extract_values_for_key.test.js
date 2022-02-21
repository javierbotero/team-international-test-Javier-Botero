import extractValuesForKey from './extract_values_for_key';

test('Extract keys', () => {
  const obj = {
    uuid: 1,
    another: '',
    another: 1,
    uuid: 2,
    other: 'other',
    uuid: 3,
    last: '',
  };

  expect(extractValuesForKey(obj, 'uuid')).toEqual({ '': 3 });
});

test('Extract with nested keys and named object', () => {
  const obj = {
    uuid: 1,
    another: '',
    innerFirst: {
      another: 1,
      uuid: 2,
      innerSecond: {
        other: 'other',
        innerThird: {
          uuid: 3,
        },
      },

    },
    last: '',
  };

  const resultObj = {
    'obj': 1,
    'obj/innerFirst': 2,
    'obj/innerFirst/innerSecond/innerThird': 3,
  };

  expect(extractValuesForKey({obj}, 'uuid')).toEqual(resultObj);
});
  
test('Extract with nested keys and unnamed object', () => {
  const resultObj = {
    '': 1,
    'innerFirst': 2,
    'innerFirst/innerSecond/innerThird': 3,
  };

  expect(extractValuesForKey({
    uuid: 1,
    another: '',
    innerFirst: {
      another: 1,
      uuid: 2,
      innerSecond: {
        other: 'other',
        innerThird: {
          uuid: 3,
        },
      },

    },
    last: '',
  }, 'uuid')).toEqual(resultObj);
});
