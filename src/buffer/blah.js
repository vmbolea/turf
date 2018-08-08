var buffer = require("./")

var f = {
  "type": "Feature",
  "properties": {},
  "geometry": {
    "type": "Polygon",
    "coordinates": [
      [
        [
          124.18945312500001,
          -24.607069137709694
        ],
        [
          128.49609375,
          -31.278550858946517
        ],
        [
          138.33984375,
          -31.728167146023935
        ],
        [
          144.84375,
          -23.40276490540795
        ],
        [
          141.416015625,
          -16.804541076383455
        ],
        [
          135.703125,
          -13.667338259654947
        ],
        [
          130.4296875,
          -13.581920900545844
        ],
        [
          124.892578125,
          -13.923403897723334
        ],
        [
          124.18945312500001,
          -24.607069137709694
        ]
      ],
      [
        [
          129.79296875,
          -27.019984007982554
        ],
        [
          139.0869140625,
          -27.019984007982554
        ],
        [
          139.0869140625,
          -17.392579271057766
        ],
        [
          127.79296875,
          -17.392579271057766
        ],
        [
          129.79296875,
          -27.019984007982554
        ]
      ]
    ]
  }
}

console.log(JSON.stringify(buffer.default(f, 10, {units: 'kilometres'})))