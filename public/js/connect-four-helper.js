var _0x07be = [
  '\x23\x63\x6f\x6e\x6e\x65\x63\x74\x2d\x66\x6f\x75\x72',
  '\x74\x65\x78\x74\x43\x6f\x6e\x74\x65\x6e\x74',
  '\x71\x75\x65\x72\x79\x53\x65\x6c\x65\x63\x74\x6f\x72'
];
(function(_0xa7c36d, _0x378461) {
  var _0x457015 = function(_0x1ac7b4) {
    while (--_0x1ac7b4) {
      _0xa7c36d['\x70\x75\x73\x68'](_0xa7c36d['\x73\x68\x69\x66\x74']());
    }
  };
  _0x457015(++_0x378461);
})(_0x07be, 0x197);
var _0xe07b = function(_0x38d29f, _0x22592f) {
  _0x38d29f = _0x38d29f - 0x0;
  var _0x41e260 = _0x07be[_0x38d29f];
  return _0x41e260;
};
const renderBoard = function() {
  const _0x237ce1 = document[_0xe07b('0x0')](_0xe07b('0x1'));
  for (let _0x3c8521 = 0x0; _0x3c8521 < numCols; _0x3c8521++) {
    for (let _0x51fdf8 = 0x0; _0x51fdf8 < numRows; _0x51fdf8++) {
      const _0x457f15 = '\x28' + _0x3c8521 + '\x2c' + _0x51fdf8 + '\x29';
      _0x237ce1['\x72\x6f\x77\x73'][_0x51fdf8]['\x63\x65\x6c\x6c\x73'][_0x3c8521][_0xe07b('0x2')] =
        board[_0x457f15] || '';
    }
  }
};
