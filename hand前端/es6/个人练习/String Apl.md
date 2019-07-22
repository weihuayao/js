includes
```
// 63: String - `includes()` 
// To do: make all tests pass, leave the assert lines unchanged!
// Follow the hints of the failure messages!

describe('`string.includes()` determines if a string can be found inside another one', function() {
  describe('finding a single character', function() {
    it('can be done (a character is also a string, in JS)', function() {
     // const searchString = 'a';
      const searchString = 'x';
      assert.equal('xyz'.includes(searchString), true);
    });
    it('reports false if character was not found', function() {
    //  const expected = '???';
    const expected = false;
      assert.equal('xyz'.includes('abc'), expected);
    });
  });
  describe('find a string', function() {
    it('that matches exactly', function() {
      //const findSome = findMe => 'xyz'.includes;
      const findSome = findMe => 'xyz'.includes(findMe);
      assert.equal(findSome('xyz'), true);
    });
  });
  describe('search for an empty string, is always true', function() {
    it('in an empty string', function() {
    //  const emptyString = ' ';
        const emptyString = ''
      assert.equal(''.includes(emptyString), true);
    });
    it('in `abc`', function() {
     // const actual =_.includes('');
       const actual ='abc'.includes('');
      assert.equal(actual, true);
    });
  });
  describe('special/corner cases', function() {
    it('search for `undefined` in a string fails', function() {
      //const findInAbc = (what) => 'abc'.includes();
      const findInAbc = (what) => 'abc'.includes(undefined);
      assert.equal(findInAbc(undefined), false);
    });
    it('searches are case-sensitive', function() {
     // const findInAbc = (what) => 'abc'.inkludez(what);
     const findInAbc = (what) => 'abc'.includes(what);
      assert.equal(findInAbc('A'), false);
    });
    it('must NOT be a regular expression', function() {
      //const regExp = '';
      const regExp = /.*/;
      assert.throws(() => {''.includes(regExp)});
    });
    describe('coerces the searched "thing" into a string', function() {
      it('e.g. from a number', function() {
        const actual = '123'.includes(4);
        // assert.equal(actual, true);
        assert.equal(actual, false);
      });
      it('e.g. from an array', function() {
        // const actual = '123'.includes([1,2,3]);
         const actual = '1,2,3,4'.includes([1,2,3]);
        assert.equal(actual, true);
      });
      it('e.g. from an object, with a `toString()` method', function() {
        const objWithToString = {toString: () => ""};
         assert.equal('123'.includes(objWithToString), true);
      });
    });
  });
  describe('takes a position from where to start searching', function() {
    it('does not find `a` after position 1 in `abc`', function() {
      // const position = 0;
      const position = 1;
      assert.equal('abc'.includes('a', position), false);
    });
    it('even the position gets coerced', function() {
     // const findAtPosition = position => 'xyz'.includes('x', pos);
      const findAtPosition = position => 'xyz'.includes('x', position);
      assert.equal(findAtPosition('2'), false);
    });
    describe('invalid positions get converted to 0', function() {
      it('e.g. `undefined`', function() {
      //  const findAtPosition = (pos=2) => 'xyz'.includes('x', pos);
        const findAtPosition = (pos) => 'xyz'.includes('x', pos);
        assert.equal(findAtPosition(undefined), true);
      });
      it('negative numbers', function() {
      //  const findAtPosition = (pos) => 'xyz'.includes('x', -pos);
      const findAtPosition = (pos) => 'xyz'.includes('x', pos);
        assert.equal(findAtPosition(-2), true);
      });
      it('NaN', function() {
      //  const findAtPosition = (pos) => 'xyz'.includes('x', 1);
        const findAtPosition = (pos) => 'xyz'.includes('x', pos);
        assert.equal(findAtPosition(NaN), true);
      });
    });
  });
});

```
string.repeat(count)

```
// 71: String - `repeat()` 
// To do: make all tests pass, leave the assert lines unchanged!
// Follow the hints of the failure messages!

describe('`str.repeat(x)` concatenates `x` copies of `str` and returns it', function() {
  describe('the 1st parameter the count', function() {
    it('if missing, returns an empty string', function() {
      // const what = 'one'.repeat(23);
      const what = 'one'.repeat(0);
      assert.equal(what, '');
    });
    it('when `1`, the string stays the same', function() {
      // const what = 'one'.repeat();
      const what = 'one'.repeat(1);
      assert.equal(what, 'one');
    });
    it('for `3` the string `x` becomes `xxx`', function() {
     //  const actual = 'x'.REPEAT(1);
      const actual = 'x'.repeat(3);
      assert.equal(actual, 'xxx');
    });
    it('for `0` an empty string is returned', function() {
     //  const repeatCount = 1;
      const repeatCount = 0;
      assert.equal('shrink'.repeat(repeatCount), '');
    });
    describe('the count is not a number', () => {
      it('such as a string "3", it gets converted to an int', function() {
        // const repeated = 'three'.repeat('2');
        const repeated = 'three'.repeat('3');
        assert.equal(repeated, 'threethreethree');
      });
      it('a hex looking number as a string "0xA", it gets converted to an int', function() {
        // const repeated = 'x'.repeat('0A');
        const repeated = 'x'.repeat('0xA');
        assert.equal('xxxxxxxxxx', repeated);
      });
      it('and does not look like a number, it behaves like 0', function() {
      //  const repeated = 'x'.repeat('23');
          const repeated = 'x'.repeat('0');
          assert.equal('', repeated);
      });
    });
  }); 
  describe('throws an error for', function() {
    it('a count of <0', function() {
     //  const belowZero = 1;
      const belowZero = -1;
      assert.throws(() => { ''.repeat(belowZero); }, RangeError);
    });
    it('a count of +Infinty', function() {
     //  let infinity = 'infinity';
      let infinity = 'Infinity';
      assert.throws(() => { ''.repeat(infinity); }, RangeError);
    });
  });
  describe('accepts everything that can be coerced to a string', function() {
    it('e.g. a boolean', function() {
      // let aBool = true;
      let aBool = false;
      assert.equal(String.prototype.repeat.call(aBool, 2), 'falsefalse');
    });
    it('e.g. a number', function() {
      // let aNumber;I
      let aNumber = 1;
      assert.equal(String.prototype.repeat.call(aNumber, 2), '11');
    });
  });
  describe('for my own (string) class', function() {
    it('calls `toString()` to make it a string', function() {
    //  class MyString { toString() { return 'my string'; } }
      class MyString { toString() { return ''; } }
      const expectedString = '';
      assert.equal(String(new MyString()).repeat(1), expectedString);
    });
    it('`toString()` is only called once', function() {
      let counter = 1;
      class X {
        toString() {
          return counter++;
        }
      }
    //  let repeated = new X().repeat(2);
      let repeated = String(new X()).repeat(2);
      assert.equal(repeated, 11);
    });
  });
});

```

starWith
```
// 72: String - `startsWith()` 
// To do: make all tests pass, leave the assert lines unchanged!
// Follow the hints of the failure messages!

describe('`str.startsWith(searchString)` determines whether `str` begins with `searchString`.', function() {
  const s = 'the string s';
  describe('the 1st parameter, the string to search for', function() {
    it('can be just a character', function() {
     // const actual = s.starts_with('t');
     const actual = s.startsWith('t');
      assert.equal(actual, true);
    });
    it('can be a string', function() {
      // const expected = '???';
      const expected = true;
      assert.equal(s.startsWith('the'), expected);
    });
    it('can contain unicode characters', function() {
      //const nuclear = 'NO ☢ NO';
       const nuclear = '☢ NO';
      assert.equal(nuclear.startsWith('☢'), true);
    });
    it('a regular expression throws a TypeError', function() {
      // const aRegExp = "";
      const aRegExp = /the/; //startsWith 和正则 出现 TypeError
      assert.throws(() => {''.startsWith(aRegExp)}, TypeError);
    });
  });
  describe('the 2nd parameter, the position where to start searching from', function() {
    it('e.g. find "str" at position 4', function() {
      // const position = 3;
      const position = 4;
      assert.equal(s.startsWith('str', position), true);
    });
    it('for `undefined` is the same as 0', function() {
     //  const _undefined_ = '1';
      const _undefined_ = '0';
      assert.equal(s.startsWith('the', _undefined_), true);
    });
    it('the parameter gets converted to an int', function() {
     // const position = 'four';
     const position = '4';
      assert.equal(s.startsWith('str', position), true);
    });
    it('a value larger than the string`s length, returns false', function() {
      // const expected = true;
     const expected = false;
     // or 
     // assert.equal(s.startsWith(' ',3), expected)
     assert.equal(s.startsWith(' ', s.length + 1), expected);
    });
  });
  describe('this functionality can be used on non-strings too', function() {
    it('e.g. a boolean', function() {
      
      // let aBool;
      let aBool = false;
      assert.equal(String.prototype.startsWith.call(aBool, 'false'), true);
    });
    it('e.g. a number', function() {
      // let aNumber = 19;
      let aNumber = '19';
      assert.equal(String.prototype.startsWith.call(aNumber + 84, '1984'), true);
    });
    it('also using the position works', function() {
      // const position = 0;
      const position = 1;
      assert.equal(String.prototype.startsWith.call(1994, '99', position), true);
    });
  });
});

```
endWith
```
// 74: String - `endsWith()` 
// To do: make all tests pass, leave the assert lines unchanged!
// Follow the hints of the failure messages!

describe('`str.endsWith(searchString)` determines whether `str` ends with `searchString`', function() {
  const s = 'el fin';
  describe('the 1st parameter the string to search for', function() {
    it('can be a character', function() {
      // const doesEndWith = s.doesItReallyEndWith('n');
      const doesEndWith = s.endsWith('n');
      assert.equal(doesEndWith, true);
    });
    it('can be a string', function() {
      // const expected = false;
      const expected = true;
      assert.equal(s.endsWith('fin'), expected);
    });
    it('can contain unicode characters', function() {
       // const nuclear = 'NO ☢ Oh NO!';
       const nuclear = "NO ☢";
      assert.equal(nuclear.endsWith('☢'), true);
    });
    it('a regular expression throws a TypeError', function() {
    //   const aRegExp = '/the/';
      const aRegExp = /the/;
      assert.throws(() => {" ".endsWith(aRegExp)}, TypeError);
    });
  });
  describe('the 2nd parameter, the position where the search ends (as if the string was only that long)', function() {
    it('find "el" at a substring of the length 2', function() {
      // const endPos = 0;
      const endPos = 2;
      assert.equal(s.endsWith('el', endPos), true);
    });
    it('`undefined` uses the entire string', function() {
      // const _undefined_ = 'i would like to be undefined';
      const _undefined_ = undefined;
      assert.equal(s.endsWith('fin', _undefined_), true);
    });
    it('the parameter gets coerced to an integer (e.g. "5" becomes 5)', function() {
     //  const position = 'five';
      const position = '5';
      assert.equal(s.endsWith('fi', position), true);
    });
    describe('value less than 0', function() {
      it('returns `true`, when searching for an empty string', function() {
        // const emptyString = '??';
        const emptyString = ''
        assert.equal('1'.endsWith(emptyString, -1), true);
      });
      it('return `false`, when searching for a non-empty string', function() {
        // const notEmpty = '';
        const notEmpty = '342';
        assert.equal('1'.endsWith(notEmpty, -1), false);
      });
    });
  });
  describe('this functionality can be used on non-strings too', function() {
    it('e.g. a boolean', function() {
      // let aBool = true;
      let aBool = false;
      assert.equal(String.prototype.endsWith.call(aBool, 'lse'), true);
    });
    it('e.g. a number', function() {
     //  let aNumber = 0;
     let aNumber = 84
      assert.equal(String.prototype.endsWith.call(aNumber + 1900, 84), true);
    });
    it('also using the position works', function() {
      // const position = '??';
      const position = '3';
      assert.equal(String.prototype.endsWith.call(1994, '99', position), true);
    });
  });
});
```