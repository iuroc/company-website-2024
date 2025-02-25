/** 根据亮度判断是否可用于白字的背景 */
const isDarkColor = (r: number, g: number, b: number, threshold: number = 128) => {
    const luminance = 0.299 * r + 0.587 * g + 0.114 * b
    return luminance < threshold
}

/** 获取背景颜色 RGB 列表 */
export const getBGColor = () => {
    return colors.filter(color => {
        return isDarkColor(...color)
    })
}

/** 随机获取一个数组元素 */
export const getRandItem = <T>(items: T[]): T => {
    const length = items.length
    const randIndex = Math.floor(Math.random() * length)
    return items[randIndex]
}

/** 随机获取 RGB 背景颜色 */
export const getRandBGColor = () => getRandItem(getBGColor())

/** 颜色来源：http://zhongguose.com/colors.json */
export const colors: [number, number, number][] = [
    [
        249,
        244,
        220
    ],
    [
        249,
        236,
        195
    ],
    [
        248,
        223,
        114
    ],
    [
        248,
        223,
        112
    ],
    [
        251,
        218,
        65
    ],
    [
        254,
        215,
        26
    ],
    [
        247,
        222,
        152
    ],
    [
        248,
        216,
        106
    ],
    [
        252,
        211,
        55
    ],
    [
        252,
        210,
        23
    ],
    [
        254,
        209,
        16
    ],
    [
        246,
        222,
        173
    ],
    [
        247,
        218,
        148
    ],
    [
        249,
        211,
        103
    ],
    [
        251,
        205,
        49
    ],
    [
        252,
        203,
        22
    ],
    [
        254,
        204,
        17
    ],
    [
        251,
        200,
        47
    ],
    [
        252,
        197,
        21
    ],
    [
        252,
        195,
        7
    ],
    [
        248,
        195,
        135
    ],
    [
        247,
        193,
        115
    ],
    [
        251,
        185,
        41
    ],
    [
        251,
        182,
        18
    ],
    [
        252,
        183,
        10
    ],
    [
        249,
        166,
        51
    ],
    [
        251,
        164,
        20
    ],
    [
        252,
        161,
        6
    ],
    [
        252,
        161,
        4
    ],
    [
        252,
        140,
        35
    ],
    [
        250,
        142,
        22
    ],
    [
        255,
        153,
        0
    ],
    [
        251,
        139,
        5
    ],
    [
        233,
        221,
        182
    ],
    [
        238,
        208,
        69
    ],
    [
        242,
        206,
        43
    ],
    [
        241,
        202,
        23
    ],
    [
        221,
        200,
        113
    ],
    [
        223,
        194,
        67
    ],
    [
        226,
        192,
        39
    ],
    [
        228,
        191,
        17
    ],
    [
        210,
        180,
        44
    ],
    [
        210,
        177,
        22
    ],
    [
        183,
        174,
        143
    ],
    [
        173,
        158,
        85
    ],
    [
        142,
        128,
        75
    ],
    [
        136,
        115,
        34
    ],
    [
        134,
        112,
        24
    ],
    [
        104,
        94,
        72
    ],
    [
        105,
        94,
        69
    ],
    [
        100,
        88,
        34
    ],
    [
        94,
        83,
        20
    ],
    [
        249,
        241,
        219
    ],
    [
        248,
        232,
        193
    ],
    [
        249,
        215,
        112
    ],
    [
        255,
        201,
        12
    ],
    [
        242,
        230,
        206
    ],
    [
        240,
        214,
        149
    ],
    [
        244,
        206,
        105
    ],
    [
        246,
        196,
        48
    ],
    [
        249,
        193,
        22
    ],
    [
        249,
        189,
        16
    ],
    [
        229,
        211,
        170
    ],
    [
        232,
        176,
        4
    ],
    [
        235,
        177,
        13
    ],
    [
        217,
        164,
        14
    ],
    [
        181,
        170,
        144
    ],
    [
        182,
        164,
        118
    ],
    [
        183,
        141,
        18
    ],
    [
        135,
        114,
        62
    ],
    [
        135,
        104,
        24
    ],
    [
        138,
        105,
        19
    ],
    [
        74,
        64,
        53
    ],
    [
        77,
        64,
        48
    ],
    [
        88,
        71,
        23
    ],
    [
        91,
        73,
        19
    ],
    [
        249,
        223,
        205
    ],
    [
        248,
        224,
        176
    ],
    [
        249,
        210,
        125
    ],
    [
        254,
        186,
        7
    ],
    [
        243,
        191,
        76
    ],
    [
        248,
        188,
        49
    ],
    [
        226,
        193,
        124
    ],
    [
        229,
        183,
        81
    ],
    [
        234,
        173,
        26
    ],
    [
        214,
        160,
        29
    ],
    [
        180,
        169,
        146
    ],
    [
        183,
        139,
        38
    ],
    [
        130,
        107,
        72
    ],
    [
        128,
        99,
        50
    ],
    [
        129,
        95,
        37
    ],
    [
        131,
        94,
        29
    ],
    [
        79,
        64,
        50
    ],
    [
        80,
        62,
        42
    ],
    [
        81,
        60,
        32
    ],
    [
        83,
        60,
        27
    ],
    [
        85,
        59,
        24
    ],
    [
        251,
        242,
        227
    ],
    [
        249,
        232,
        208
    ],
    [
        249,
        203,
        139
    ],
    [
        251,
        185,
        87
    ],
    [
        255,
        166,
        15
    ],
    [
        244,
        168,
        58
    ],
    [
        227,
        189,
        141
    ],
    [
        231,
        162,
        63
    ],
    [
        218,
        164,
        90
    ],
    [
        222,
        158,
        68
    ],
    [
        220,
        145,
        35
    ],
    [
        192,
        147,
        81
    ],
    [
        151,
        132,
        108
    ],
    [
        152,
        101,
        36
    ],
    [
        102,
        70,
        42
    ],
    [
        93,
        61,
        33
    ],
    [
        92,
        55,
        25
    ],
    [
        251,
        236,
        222
    ],
    [
        248,
        179,
        127
    ],
    [
        249,
        125,
        28
    ],
    [
        250,
        126,
        35
    ],
    [
        247,
        205,
        188
    ],
    [
        246,
        206,
        193
    ],
    [
        240,
        148,
        93
    ],
    [
        240,
        173,
        160
    ],
    [
        238,
        170,
        156
    ],
    [
        238,
        160,
        140
    ],
    [
        234,
        137,
        88
    ],
    [
        242,
        118,
        53
    ],
    [
        248,
        107,
        29
    ],
    [
        239,
        111,
        72
    ],
    [
        239,
        99,
        43
    ],
    [
        241,
        68,
        29
    ],
    [
        240,
        75,
        34
    ],
    [
        242,
        72,
        27
    ],
    [
        243,
        71,
        24
    ],
    [
        244,
        62,
        6
    ],
    [
        237,
        81,
        38
    ],
    [
        240,
        156,
        90
    ],
    [
        242,
        123,
        31
    ],
    [
        217,
        145,
        86
    ],
    [
        219,
        133,
        64
    ],
    [
        222,
        118,
        34
    ],
    [
        193,
        178,
        163
    ],
    [
        190,
        126,
        74
    ],
    [
        193,
        101,
        26
    ],
    [
        145,
        128,
        114
    ],
    [
        154,
        136,
        120
    ],
    [
        148,
        88,
        51
    ],
    [
        150,
        77,
        34
    ],
    [
        149,
        68,
        22
    ],
    [
        98,
        73,
        65
    ],
    [
        100,
        72,
        61
    ],
    [
        113,
        54,
        29
    ],
    [
        117,
        49,
        23
    ],
    [
        115,
        46,
        18
    ],
    [
        252,
        99,
        21
    ],
    [
        232,
        180,
        154
    ],
    [
        228,
        104,
        40
    ],
    [
        216,
        89,
        22
    ],
    [
        183,
        160,
        145
    ],
    [
        183,
        81,
        29
    ],
    [
        139,
        97,
        77
    ],
    [
        140,
        75,
        49
    ],
    [
        135,
        61,
        36
    ],
    [
        136,
        58,
        30
    ],
    [
        91,
        66,
        58
    ],
    [
        96,
        61,
        48
    ],
    [
        103,
        52,
        36
    ],
    [
        101,
        43,
        28
    ],
    [
        105,
        42,
        27
    ],
    [
        251,
        153,
        104
    ],
    [
        252,
        121,
        48
    ],
    [
        237,
        195,
        174
    ],
    [
        225,
        103,
        35
    ],
    [
        212,
        196,
        183
    ],
    [
        207,
        117,
        67
    ],
    [
        205,
        98,
        39
    ],
    [
        170,
        106,
        76
    ],
    [
        166,
        82,
        44
    ],
    [
        119,
        61,
        49
    ],
    [
        72,
        51,
        50
    ],
    [
        175,
        46,
        43
    ],
    [
        72,
        37,
        34
    ],
    [
        72,
        30,
        28
    ],
    [
        251,
        238,
        226
    ],
    [
        246,
        220,
        206
    ],
    [
        247,
        207,
        186
    ],
    [
        246,
        173,
        143
    ],
    [
        246,
        140,
        96
    ],
    [
        249,
        114,
        61
    ],
    [
        250,
        93,
        25
    ],
    [
        238,
        128,
        85
    ],
    [
        207,
        72,
        19
    ],
    [
        184,
        148,
        133
    ],
    [
        177,
        75,
        40
    ],
    [
        134,
        48,
        32
    ],
    [
        134,
        38,
        23
    ],
    [
        89,
        38,
        32
    ],
    [
        90,
        31,
        27
    ],
    [
        92,
        30,
        25
    ],
    [
        244,
        199,
        186
    ],
    [
        241,
        118,
        102
    ],
    [
        241,
        86,
        66
    ],
    [
        245,
        57,
        28
    ],
    [
        242,
        90,
        71
    ],
    [
        243,
        59,
        31
    ],
    [
        242,
        185,
        178
    ],
    [
        241,
        151,
        144
    ],
    [
        240,
        90,
        70
    ],
    [
        242,
        62,
        35
    ],
    [
        242,
        202,
        201
    ],
    [
        239,
        175,
        173
    ],
    [
        241,
        144,
        140
    ],
    [
        240,
        63,
        36
    ],
    [
        240,
        161,
        168
    ],
    [
        241,
        147,
        156
    ],
    [
        240,
        124,
        130
    ],
    [
        240,
        74,
        58
    ],
    [
        241,
        60,
        34
    ],
    [
        231,
        124,
        142
    ],
    [
        237,
        90,
        101
    ],
    [
        237,
        72,
        69
    ],
    [
        237,
        59,
        47
    ],
    [
        237,
        51,
        33
    ],
    [
        238,
        72,
        102
    ],
    [
        238,
        72,
        99
    ],
    [
        239,
        71,
        93
    ],
    [
        238,
        63,
        77
    ],
    [
        237,
        51,
        51
    ],
    [
        236,
        43,
        36
    ],
    [
        235,
        38,
        26
    ],
    [
        222,
        42,
        24
    ],
    [
        212,
        37,
        23
    ],
    [
        171,
        55,
        47
    ],
    [
        172,
        31,
        24
    ],
    [
        93,
        49,
        49
    ],
    [
        92,
        34,
        35
    ],
    [
        90,
        25,
        27
    ],
    [
        90,
        18,
        22
    ],
    [
        238,
        162,
        164
    ],
    [
        237,
        85,
        106
    ],
    [
        240,
        55,
        82
    ],
    [
        192,
        72,
        81
    ],
    [
        192,
        44,
        56
    ],
    [
        167,
        83,
        90
    ],
    [
        124,
        24,
        35
    ],
    [
        76,
        31,
        36
    ],
    [
        77,
        16,
        24
    ],
    [
        238,
        39,
        70
    ],
    [
        222,
        28,
        49
    ],
    [
        209,
        26,
        45
    ],
    [
        196,
        90,
        101
    ],
    [
        194,
        31,
        48
    ],
    [
        166,
        27,
        41
    ],
    [
        137,
        78,
        84
    ],
    [
        130,
        32,
        43
    ],
    [
        130,
        17,
        31
    ],
    [
        84,
        30,
        36
    ],
    [
        80,
        10,
        22
    ],
    [
        248,
        235,
        230
    ],
    [
        236,
        118,
        150
    ],
    [
        239,
        52,
        115
    ],
    [
        234,
        114,
        147
    ],
    [
        236,
        155,
        173
    ],
    [
        235,
        80,
        126
    ],
    [
        237,
        47,
        106
    ],
    [
        238,
        184,
        195
    ],
    [
        234,
        81,
        127
    ],
    [
        241,
        196,
        205
    ],
    [
        236,
        138,
        164
    ],
    [
        206,
        87,
        109
    ],
    [
        237,
        157,
        178
    ],
    [
        239,
        130,
        160
    ],
    [
        235,
        60,
        112
    ],
    [
        236,
        44,
        100
    ],
    [
        227,
        180,
        184
    ],
    [
        204,
        22,
        58
    ],
    [
        194,
        124,
        136
    ],
    [
        191,
        53,
        83
    ],
    [
        115,
        87,
        92
    ],
    [
        98,
        22,
        36
    ],
    [
        99,
        7,
        28
    ],
    [
        54,
        40,
        43
    ],
    [
        48,
        22,
        28
    ],
    [
        43,
        18,
        22
    ],
    [
        45,
        12,
        19
    ],
    [
        206,
        94,
        138
    ],
    [
        236,
        78,
        138
    ],
    [
        238,
        44,
        121
    ],
    [
        149,
        28,
        72
    ],
    [
        98,
        29,
        52
    ],
    [
        98,
        16,
        46
    ],
    [
        56,
        33,
        41
    ],
    [
        56,
        25,
        36
    ],
    [
        51,
        20,
        30
    ],
    [
        49,
        15,
        27
    ],
    [
        238,
        166,
        183
    ],
    [
        239,
        73,
        139
    ],
    [
        222,
        120,
        151
    ],
    [
        222,
        63,
        124
    ],
    [
        209,
        60,
        116
    ],
    [
        197,
        112,
        139
    ],
    [
        168,
        69,
        107
    ],
    [
        75,
        30,
        47
    ],
    [
        70,
        22,
        41
    ],
    [
        68,
        14,
        37
    ],
    [
        240,
        201,
        207
    ],
    [
        235,
        160,
        179
    ],
    [
        236,
        45,
        122
    ],
    [
        225,
        108,
        150
    ],
    [
        237,
        227,
        231
    ],
    [
        233,
        215,
        223
    ],
    [
        210,
        86,
        140
    ],
    [
        210,
        53,
        125
    ],
    [
        209,
        194,
        211
    ],
    [
        200,
        173,
        196
    ],
    [
        192,
        142,
        175
    ],
    [
        186,
        47,
        123
    ],
    [
        128,
        118,
        163
    ],
    [
        128,
        109,
        158
    ],
    [
        129,
        92,
        148
    ],
    [
        129,
        60,
        133
    ],
    [
        126,
        22,
        113
    ],
    [
        233,
        204,
        211
    ],
    [
        210,
        118,
        163
    ],
    [
        204,
        85,
        149
    ],
    [
        230,
        210,
        213
    ],
    [
        195,
        86,
        145
    ],
    [
        192,
        111,
        152
    ],
    [
        189,
        174,
        173
    ],
    [
        181,
        152,
        161
    ],
    [
        155,
        30,
        100
    ],
    [
        133,
        109,
        114
    ],
    [
        79,
        56,
        62
    ],
    [
        72,
        41,
        54
    ],
    [
        242,
        231,
        229
    ],
    [
        224,
        200,
        209
    ],
    [
        188,
        132,
        168
    ],
    [
        173,
        101,
        152
    ],
    [
        163,
        92,
        143
    ],
    [
        152,
        54,
        128
    ],
    [
        139,
        38,
        113
    ],
    [
        137,
        66,
        118
    ],
    [
        126,
        32,
        101
    ],
    [
        104,
        23,
        82
    ],
    [
        93,
        63,
        81
    ],
    [
        78,
        42,
        64
    ],
    [
        65,
        28,
        53
    ],
    [
        54,
        41,
        47
    ],
    [
        30,
        19,
        29
    ],
    [
        28,
        13,
        26
    ],
    [
        241,
        240,
        237
    ],
    [
        226,
        225,
        228
    ],
    [
        204,
        204,
        214
    ],
    [
        167,
        168,
        189
    ],
    [
        97,
        100,
        159
    ],
    [
        116,
        117,
        155
    ],
    [
        207,
        204,
        201
    ],
    [
        82,
        82,
        136
    ],
    [
        46,
        49,
        124
    ],
    [
        122,
        115,
        116
    ],
    [
        48,
        47,
        75
    ],
    [
        62,
        56,
        65
    ],
    [
        50,
        47,
        59
    ],
    [
        34,
        32,
        46
    ],
    [
        31,
        32,
        64
    ],
    [
        19,
        17,
        36
    ],
    [
        39,
        117,
        182
    ],
    [
        36,
        116,
        181
    ],
    [
        208,
        223,
        230
    ],
    [
        147,
        181,
        207
    ],
    [
        97,
        154,
        195
    ],
    [
        35,
        118,
        183
    ],
    [
        86,
        152,
        195
    ],
    [
        33,
        119,
        184
    ],
    [
        176,
        213,
        223
    ],
    [
        138,
        188,
        209
    ],
    [
        102,
        169,
        201
    ],
    [
        41,
        131,
        187
    ],
    [
        23,
        114,
        180
    ],
    [
        99,
        187,
        208
    ],
    [
        92,
        179,
        204
    ],
    [
        36,
        134,
        185
    ],
    [
        22,
        119,
        179
    ],
    [
        18,
        107,
        174
    ],
    [
        34,
        162,
        195
    ],
    [
        26,
        148,
        188
    ],
    [
        21,
        139,
        184
    ],
    [
        17,
        119,
        176
    ],
    [
        15,
        89,
        164
    ],
    [
        43,
        115,
        175
    ],
    [
        205,
        209,
        211
    ],
    [
        49,
        112,
        167
    ],
    [
        94,
        97,
        109
    ],
    [
        71,
        81,
        100
    ],
    [
        255,
        254,
        250
    ],
    [
        53,
        51,
        60
    ],
    [
        15,
        20,
        35
    ],
    [
        186,
        204,
        217
    ],
    [
        143,
        178,
        201
    ],
    [
        22,
        97,
        171
    ],
    [
        196,
        203,
        207
    ],
    [
        21,
        85,
        154
    ],
    [
        78,
        124,
        161
    ],
    [
        52,
        108,
        156
    ],
    [
        47,
        47,
        53
    ],
    [
        45,
        46,
        54
    ],
    [
        19,
        24,
        36
    ],
    [
        216,
        227,
        231
    ],
    [
        195,
        215,
        223
    ],
    [
        47,
        144,
        185
    ],
    [
        23,
        129,
        181
    ],
    [
        199,
        210,
        212
    ],
    [
        17,
        101,
        154
    ],
    [
        192,
        196,
        195
    ],
    [
        178,
        187,
        190
    ],
    [
        94,
        121,
        135
    ],
    [
        20,
        74,
        116
    ],
    [
        116,
        120,
        122
    ],
    [
        73,
        92,
        105
    ],
    [
        71,
        72,
        76
    ],
    [
        43,
        51,
        62
    ],
    [
        28,
        41,
        56
    ],
    [
        20,
        35,
        52
    ],
    [
        16,
        31,
        48
    ],
    [
        238,
        247,
        242
    ],
    [
        198,
        230,
        232
    ],
    [
        147,
        213,
        220
    ],
    [
        81,
        196,
        211
    ],
    [
        41,
        183,
        203
    ],
    [
        14,
        176,
        201
    ],
    [
        16,
        174,
        194
    ],
    [
        87,
        195,
        194
    ],
    [
        185,
        222,
        201
    ],
    [
        131,
        203,
        172
    ],
    [
        18,
        170,
        156
    ],
    [
        102,
        193,
        140
    ],
    [
        93,
        190,
        138
    ],
    [
        85,
        187,
        138
    ],
    [
        69,
        183,
        135
    ],
    [
        43,
        174,
        133
    ],
    [
        27,
        167,
        132
    ],
    [
        18,
        161,
        130
    ],
    [
        196,
        215,
        214
    ],
    [
        30,
        158,
        179
    ],
    [
        15,
        149,
        176
    ],
    [
        20,
        145,
        168
    ],
    [
        124,
        171,
        177
    ],
    [
        164,
        172,
        167
    ],
    [
        134,
        157,
        157
    ],
    [
        100,
        142,
        147
    ],
    [
        59,
        129,
        140
    ],
    [
        18,
        110,
        130
    ],
    [
        115,
        124,
        123
    ],
    [
        97,
        113,
        114
    ],
    [
        19,
        72,
        87
    ],
    [
        71,
        75,
        76
    ],
    [
        33,
        55,
        61
    ],
    [
        19,
        44,
        51
    ],
    [
        164,
        202,
        182
    ],
    [
        44,
        150,
        120
    ],
    [
        154,
        190,
        175
    ],
    [
        105,
        167,
        148
    ],
    [
        146,
        179,
        165
    ],
    [
        36,
        128,
        103
    ],
    [
        66,
        134,
        117
    ],
    [
        159,
        163,
        154
    ],
    [
        138,
        152,
        142
    ],
    [
        112,
        136,
        125
    ],
    [
        73,
        117,
        104
    ],
    [
        93,
        101,
        95
    ],
    [
        49,
        74,
        67
    ],
    [
        34,
        62,
        54
    ],
    [
        26,
        59,
        50
    ],
    [
        54,
        52,
        51
    ],
    [
        31,
        38,
        35
    ],
    [
        20,
        30,
        27
    ],
    [
        198,
        223,
        200
    ],
    [
        158,
        204,
        171
    ],
    [
        104,
        184,
        142
    ],
    [
        32,
        161,
        98
    ],
    [
        97,
        172,
        133
    ],
    [
        64,
        160,
        112
    ],
    [
        34,
        148,
        83
    ],
    [
        202,
        211,
        195
    ],
    [
        60,
        149,
        102
    ],
    [
        32,
        137,
        77
    ],
    [
        131,
        167,
        141
    ],
    [
        87,
        149,
        114
    ],
    [
        32,
        127,
        76
    ],
    [
        110,
        139,
        116
    ],
    [
        26,
        104,
        64
    ],
    [
        94,
        102,
        91
    ],
    [
        72,
        91,
        77
    ],
    [
        57,
        55,
        51
    ],
    [
        55,
        56,
        52
    ],
    [
        43,
        49,
        44
    ],
    [
        21,
        35,
        27
    ],
    [
        240,
        245,
        229
    ],
    [
        223,
        236,
        213
    ],
    [
        173,
        213,
        162
    ],
    [
        65,
        179,
        73
    ],
    [
        67,
        178,
        68
    ],
    [
        65,
        174,
        60
    ],
    [
        226,
        231,
        191
    ],
    [
        208,
        222,
        170
    ],
    [
        178,
        207,
        135
    ],
    [
        140,
        194,
        105
    ],
    [
        183,
        208,
        122
    ],
    [
        210,
        217,
        122
    ],
    [
        186,
        207,
        101
    ],
    [
        150,
        194,
        78
    ],
    [
        226,
        216,
        73
    ],
    [
        190,
        201,
        54
    ],
    [
        91,
        174,
        35
    ],
    [
        37,
        61,
        36
    ],
    [
        255,
        254,
        248
    ],
    [
        248,
        244,
        237
    ],
    [
        255,
        254,
        249
    ],
    [
        247,
        244,
        237
    ],
    [
        228,
        223,
        215
    ],
    [
        218,
        212,
        203
    ],
    [
        187,
        181,
        172
    ],
    [
        187,
        181,
        172
    ],
    [
        134,
        126,
        118
    ],
    [
        132,
        124,
        116
    ],
    [
        128,
        118,
        110
    ],
    [
        129,
        119,
        110
    ]
]