export const drop_down_config = {
  data: {
    shift: [
      {
        value: 1,
        label: "Shift A (9-12)",
      },
      {
        value: 2,
        label: "Shift B (12-3)",
      },
      {
        value: 3,
        label: "Shift C (3-6)",
      },
    ],
    decision: [
      {
        value: 1,
        label: "True",
      },
      {
        value: 0,
        label: "False",
      },
    ],
    product: [
      {
        label: "CLINIC PLUS SACHET",
        value: 77,
      },
      {
        label: "SUNSILK SACHET",
        value: 78,
      },
      {
        label: "TRESSEME SACHET",
        value: 79,
      },
      {
        label: "DOVE SACHET",
        value: 80,
      },
      {
        label: "GLOW AND LOVELY",
        value: 81,
      },
      {
        label: "SHAMPOO",
        value: 82,
      },
      {
        label: "LOTION",
        value: 83,
      },
    ],
    defect_reason: [
      {
        value: "perforation",
        label: "wrong_perforation",
      },
      {
        value: "others",
        label: "wrong_others",
      },
      {
        value: "barcode",
        label: "wrong_barcode",
      },
      {
        value: "material_code",
        label: "wrong_material_code",
      },
      {
        value: "coding",
        label: "wrong_coding",
      },
    ],
  },
};

export const units = {
  data: {
    session_analyzed: {
      value: 200,
      state: null,
      state_value: null,
    },
    passed: {
      value: 5,
      state: null,
      state_value: null,
    },
    failed: {
      value: 5,
      state: null,
      state_value: null,
    },
  },
};

export const getAllSessions = {
  data: [
    {
      id: 1,
      units: 5,
      start_ts: 1721910384686,
      end_ts: 1721922053423,
      product: {
        id: 1,
        label: "CLINIC PLUS",
      },
      variant: {
        id: 1,
        label: "CLINIC PLUS STRONG AND LONG 960X6 ML",
      },
      user: {
        id: 1,
        email: "tester@email.com",
        name: "random user",
      },
    },
    {
      id: 2,
      units: 5,
      start_ts: 1721910384686,
      end_ts: 1721922053423,
      product: {
        id: 1,
        label: "CLINIC PLUS1",
      },
      variant: {
        id: 1,
        label: "CLINIC PLUS STRONG AND LONG 960X6 ML",
      },
      user: {
        id: 1,
        email: "tester@email.com",
        name: "random user",
      },
    },
  ],
};

export const weightChart = {
  data:[
    {
      name: "1",
      weight: 100,
    },
    {
      name: "2",
      weight: 200,
    },
    {
      name: "3",
      weight: 800,
    },
    {
      name: "4",
      weight: 200,
    },
    {
      name: "5",
      weight: 220,
    },
    {
      name: "6",
      weight: 200,
    },
    {
      name: "7",
      weight: 120,
    },
  ]
}

export const perforationChartMock = {
  data:[
    {
      name: "1",
      avg: 4000,
      min: 2400,
      max: 2400,
    },
    {
      name: "2",
      avg: 3000,
      min: 1398,
      max: 2210,
    },
    {
      name: "3",
      avg: 2000,
      min: 9800,
      max: 2290,
    },
    {
      name: "4",
      avg: 2780,
      min: 3908,
      max: 2000,
    },
    {
      name: "5",
      avg: 1890,
      min: 4800,
      max: 2181,
    },
    {
      name: "6",
      avg: 2390,
      min: 3800,
      max: 2500,
    },
    {
      name: "7",
      avg: 3490,
      min: 4300,
      max: 2100,
    },
  ]
}

export const PieChartData = {
  data:[
    { name: "Barcode", value: 400 },
    { name: "Material Code", value: 300 },
    { name: "Coding ", value: 300 },
    { name: "Weight ", value: 200 },
    { name: "Perforation ", value: 200 },
  ]
}

export const DayWiseSession ={
  data: [
    {
      name: "10/04/2024",
      sessions: 10,
    },
    {
      name: "11/04/2024",
      sessions: 2,
    },
    {
      name: "20/04/2024",
      sessions: 6,
    },
    {
      name: "21/04/2024",
      sessions: 7,
    },
    {
      name: "23/04/2024",
      sessions: 15,
    },
    {
      name: "26/04/2024",
      sessions: 23,
    },
    {
      name: "29/04/2024",
      sessions: 6,
    },
  ]
}

export const BarchartSessions = {
  data:[
    {
      name: "Sunsilk Sachet",
      passed: 10,
      failed: 2,
    },
    {
      name: "Tresseme",
      passed: 15,
      failed: 10,
    },
    {
      name: "Sunsilk",
      passed: 20,
      failed: 12,
    },
    {
      name: "Dove",
      passed: 14,
      failed: 8,
    },
  ]
}
