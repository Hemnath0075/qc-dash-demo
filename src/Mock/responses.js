export const getAllProducts = {
  data: [
    {
      id: "1",
      label: "Product 1",
      ts: "1718363840000",
    },
  ],
};

export const getAllVariants = {
  data: [
    {
      id: "1",
      product_id: "1",
      label: "Variant 1",
      ts: "1718481886000",
    },
    {
      id: "2",
      product_id: "1",
      label: "product1.1",
      ts: "1718482845801",
    },
  ],
};

export const getProductDetails = {
  data: {
    product: {
      id: 2,
      label: "GLOW AND LOVELY",
      variant: {
        id: 2,
        label: "GAL 25gm  Advanced Multivitamin",
        properties: [
          {
            id: 6,
            label: "Price",
            property_type: "coding",
            value_type: "detection",
            value: "48",
          },
          {
            id: 7,
            label: "Manufacturing Date",
            property_type: "coding",
            value_type: "detection",
            value: "24/07/24",
          },
          {
            id: 8,
            label: "Expiry Date",
            property_type: "coding",
            value_type: "detection",
            value: "23/07/25",
          },
          {
            id: 9,
            label: "Batch Code",
            property_type: "coding",
            value_type: "detection",
            value: "A103B",
          },
          {
            id: 10,
            label: "Factory Code",
            property_type: "coding",
            value_type: "detection",
            value: "P034D",
          },
          {
            id: 11,
            label: "USP",
            property_type: "coding",
            value_type: "detection",
            value: "49",
          },
          {
            id: 12,
            label: "Front",
            property_type: "material_code",
            value_type: "detection",
            value: "H388T",
          },
          {
            id: 13,
            label: "Back",
            property_type: "material_code",
            value_type: "detection",
            value: "L175R",
          },
          {
            id: 14,
            label: "Tare Weight",
            property_type: "tare_weight",
            value_type: "static",
            value: "115.6",
          },
          {
            id: 15,
            label: "Barcode",
            property_type: "barcode",
            value_type: "detection",
            value: "928349083247",
          },
          {
            id: 16,
            label: "Target Weight",
            property_type: "target_weight",
            value_type: "detection",
            value: "98.6",
          },
          {
            id: 16,
            label: "Target Weight",
            property_type: "PQS",
            value_type: "PQS Carton",
            value: "98.6",
          },
          {
            id: 17,
            label: "Is the color matched?",
            property_type: "others",
            value_type: "manual",
            value: "0",
          },
          {
            id: 18,
            label: "Is the perfume/flavour correct ?",
            property_type: "others",
            value_type: "manual",
            value: "1",
          },
        ],
      },
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
  ],
};

export const getAllUnitsSessionDetails = {
  data: {
    id: 38,
    properties: [
      { label: "Barcode", type: "barcode" },
      { label: "Weight", type: "target_weight" },
      { label: "Perforation", type: "perforation" },
      { label: "Others", type: "others" },
      { label: "Material Code", type: "material_code" },
      { label: "PQS Carton", type: "pqs_carton" },
      { label: "PQS Tube", type: "pqs_tube" },
    ],
    units: [
      {
        id: 52,
        properties: [
          {
            id: 348,
            status: "success",
            label: "Is the perfume/flavour correct?",
            type: "others",
            value_type: "manual",
            value: "1",
            detected_value: "1",
            verdict: 1,
          },
          {
            id: 341,
            status: "success",
            label: "Front Face",
            type: "pqs_tube",
            value_type: "detection",
            value: "1",
            detected_value: null,
            verdict: 1,
          },
          {
            id: 341,
            status: "success",
            label: "Back Face",
            type: "pqs_tube",
            value_type: "detection",
            value: "1",
            detected_value: null,
            verdict: 1,
          },
          {
            id: 341,
            status: "success",
            label: "Left Face",
            type: "pqs_tube",
            value_type: "detection",
            value: "1",
            detected_value: "1",
            verdict: 1,
          },
          {
            id: 341,
            status: "success",
            label: "Right Face",
            type: "pqs_tube",
            value_type: "detection",
            value: "1",
            detected_value: null,
            verdict: 0,
          },
          {
            id: 341,
            status: "success",
            label: "Top Face",
            type: "pqs_tube",
            value_type: "detection",
            value: "1",
            detected_value: null,
            verdict: 0,
          },
          {
            id: 341,
            status: "success",
            label: "Bottom Face",
            type: "pqs_tube",
            value_type: "detection",
            value: "1",
            detected_value: null,
            verdict: 1,
          },
          

          {
            id: 341,
            status: "success",
            label: "Front Face",
            type: "pqs_carton",
            value_type: "detection",
            value: "1",
            detected_value: "1",
            verdict: 1,
          },
          {
            id: 341,
            status: "success",
            label: "Back Face",
            type: "pqs_carton",
            value_type: "detection",
            value: "1",
            detected_value: "1",
            verdict: 1,
          },
          {
            id: 341,
            status: "success",
            label: "Left Face",
            type: "pqs_carton",
            value_type: "detection",
            value: "1",
            detected_value: null,
            verdict: 1,
          },
          {
            id: 341,
            status: "success",
            label: "Right Face",
            type: "pqs_carton",
            value_type: "detection",
            value: "1",
            detected_value: null,
            verdict: 1,
          },
          {
            id: 341,
            status: "success",
            label: "Top Face",
            type: "pqs_carton",
            value_type: "detection",
            value: "1",
            detected_value: null,
            verdict: 1,
          },
          {
            id: 341,
            status: "success",
            label: "Bottom Face",
            type: "pqs_carton",
            value_type: "detection",
            value: "1",
            detected_value: "1",
            verdict: 0,
          },
          {
            id: 348,
            status: "success",
            label: "Front",
            type: "material_code",
            value_type: "detection",
            value: "1",
            detected_value: "1",
            verdict: 1,
          },

          {
            id: 347,
            status: "success",
            label: "Is the color matched?",
            type: "others",
            value_type: "manual",
            value: "1",
            detected_value: "1",
            verdict: 1,
          },
          {
            id: 346,
            status: "success",
            label: "Raw",
            type: "perforation",
            value_type: "detection",
            value: null,
            detected_value: "1.55,2.29,1.48,2.77,1.27,1.61,2.15,1.73",
            verdict: 0,
          },
          {
            id: 345,
            status: "success",
            label: "Avg",
            type: "perforation",
            value_type: "detection",
            value: null,
            detected_value: "1.85625",
            verdict: 0,
          },
          {
            id: 344,
            status: "success",
            label: "Max",
            type: "perforation",
            value_type: "detection",
            value: null,
            detected_value: "2.77",
            verdict: 0,
          },
          {
            id: 343,
            status: "success",
            label: "Min",
            type: "perforation",
            value_type: "detection",
            value: null,
            detected_value: "1.27",
            verdict: 0,
          },
          {
            id: 342,
            status: "success",
            label: "Weight",
            type: "target_weight",
            value_type: "detection",
            value: "104.896",
            detected_value: "105.39",
            verdict: 1,
          },
          {
            id: 341,
            status: "success",
            label: "Barcode",
            type: "barcode",
            value_type: "detection",
            value: "8901030937132",
            detected_value: "8901030937132",
            verdict: 1,
          },
        ],
      },
    ],
  },
};

export const analyzeBarCode = {
  data: 1,
};

export const getBarCode = {
  data: 18901030937139,
};

export const getSpecificSession = {
  data: {
    id: 1,
    properties: [
      {
        label: "barcode",
        type: "barcode",
      },
      {
        label: "target_weight",
        type: "target_weight",
      },
      {
        label: "Perforation",
        type: "perforation",
      },
      {
        label: "Is the color matched?",
        type: "others",
      },
      {
        label: "Is the perfume/flavour correct ?",
        type: "others",
      },
    ],
    units: [
      {
        id: 1,
        properties: [
          {
            status: "idle",
            label: "Is the perfume/flavour correct ?",
            type: "others",
            value_type: "manual",
            value: "1",
            detected_value: null,
            verdict: null,
          },
          {
            status: "idle",
            label: "Is the color matched?",
            type: "others",
            value_type: "manual",
            value: "0",
            detected_value: null,
            verdict: null,
          },
          {
            status: "idle",
            label: "Perforation",
            type: "perforation",
            value_type: "detection",
            value: "54",
            detected_value: null,
            verdict: null,
          },
          {
            status: "idle",
            label: "Tare Weight",
            type: "tare_weight",
            value_type: "static",
            value: "115.6",
            detected_value: null,
            verdict: null,
          },
          {
            status: "idle",
            label: "target_weight",
            type: "target_weight",
            value_type: "detection",
            value: "98.6",
            detected_value: null,
            verdict: null,
          },
          {
            status: "idle",
            label: "usp",
            type: "usp",
            value_type: "static",
            value: "49",
            detected_value: null,
            verdict: null,
          },
          {
            status: "idle",
            label: "back",
            type: "material_code",
            value_type: "static",
            value: "L175R",
            detected_value: null,
            verdict: null,
          },
          {
            status: "idle",
            label: "front",
            type: "material_code",
            value_type: "static",
            value: "H388T",
            detected_value: null,
            verdict: null,
          },
          {
            status: "idle",
            label: "barcode",
            type: "barcode",
            value_type: "detection",
            value: "928349083247",
            detected_value: null,
            verdict: null,
          },
          {
            status: "idle",
            label: "factory_code",
            type: "factory_code",
            value_type: "static",
            value: "P034D",
            detected_value: null,
            verdict: null,
          },
          {
            status: "idle",
            label: "batch_code",
            type: "batch_code",
            value_type: "static",
            value: "A103B",
            detected_value: null,
            verdict: null,
          },
          {
            status: "idle",
            label: "expiry_date",
            type: "expiry_date",
            value_type: "static",
            value: "23/07/25",
            detected_value: null,
            verdict: null,
          },
          {
            status: "idle",
            label: "manufacturing_date",
            type: "manufacturing_date",
            value_type: "static",
            value: "24/07/24",
            detected_value: null,
            verdict: null,
          },
          {
            status: "idle",
            label: "price",
            type: "price",
            value_type: "static",
            value: "48",
            detected_value: null,
            verdict: null,
          },
        ],
      },
      {
        id: 2,
        properties: [
          {
            status: "idle",
            label: "Is the perfume/flavour correct ?",
            type: "others",
            value_type: "manual",
            value: "1",
            detected_value: null,
            verdict: null,
          },
          {
            status: "idle",
            label: "Is the color matched?",
            type: "others",
            value_type: "manual",
            value: "0",
            detected_value: null,
            verdict: null,
          },
          {
            status: "idle",
            label: "Perforation",
            type: "perforation",
            value_type: "detection",
            value: "54",
            detected_value: null,
            verdict: null,
          },
          {
            status: "idle",
            label: "Tare Weight",
            type: "tare_weight",
            value_type: "static",
            value: "115.6",
            detected_value: null,
            verdict: null,
          },
          {
            status: "idle",
            label: "target_weight",
            type: "target_weight",
            value_type: "detection",
            value: "98.6",
            detected_value: null,
            verdict: null,
          },
          {
            status: "idle",
            label: "usp",
            type: "usp",
            value_type: "static",
            value: "49",
            detected_value: null,
            verdict: null,
          },
          {
            status: "idle",
            label: "back",
            type: "material_code",
            value_type: "static",
            value: "L175R",
            detected_value: null,
            verdict: null,
          },
          {
            status: "idle",
            label: "front",
            type: "material_code",
            value_type: "static",
            value: "H388T",
            detected_value: null,
            verdict: null,
          },
          {
            status: "idle",
            label: "barcode",
            type: "barcode",
            value_type: "detection",
            value: "928349083247",
            detected_value: null,
            verdict: null,
          },
          {
            status: "idle",
            label: "factory_code",
            type: "factory_code",
            value_type: "static",
            value: "P034D",
            detected_value: null,
            verdict: null,
          },
          {
            status: "idle",
            label: "batch_code",
            type: "batch_code",
            value_type: "static",
            value: "A103B",
            detected_value: null,
            verdict: null,
          },
          {
            status: "idle",
            label: "expiry_date",
            type: "expiry_date",
            value_type: "static",
            value: "23/07/25",
            detected_value: null,
            verdict: null,
          },
          {
            status: "idle",
            label: "manufacturing_date",
            type: "manufacturing_date",
            value_type: "static",
            value: "24/07/24",
            detected_value: null,
            verdict: null,
          },
          {
            status: "idle",
            label: "price",
            type: "price",
            value_type: "static",
            value: "48",
            detected_value: null,
            verdict: null,
          },
        ],
      },
      {
        id: 3,
        properties: [
          {
            status: "idle",
            label: "Is the perfume/flavour correct ?",
            type: "others",
            value_type: "manual",
            value: "1",
            detected_value: null,
            verdict: null,
          },
          {
            status: "idle",
            label: "Is the color matched?",
            type: "others",
            value_type: "manual",
            value: "0",
            detected_value: null,
            verdict: null,
          },
          {
            status: "idle",
            label: "Perforation",
            type: "perforation",
            value_type: "detection",
            value: "54",
            detected_value: null,
            verdict: null,
          },
          {
            status: "idle",
            label: "Tare Weight",
            type: "tare_weight",
            value_type: "static",
            value: "115.6",
            detected_value: null,
            verdict: null,
          },
          {
            status: "idle",
            label: "target_weight",
            type: "target_weight",
            value_type: "detection",
            value: "98.6",
            detected_value: null,
            verdict: null,
          },
          {
            status: "idle",
            label: "usp",
            type: "usp",
            value_type: "static",
            value: "49",
            detected_value: null,
            verdict: null,
          },
          {
            status: "idle",
            label: "back",
            type: "material_code",
            value_type: "static",
            value: "L175R",
            detected_value: null,
            verdict: null,
          },
          {
            status: "idle",
            label: "front",
            type: "material_code",
            value_type: "static",
            value: "H388T",
            detected_value: null,
            verdict: null,
          },
          {
            status: "idle",
            label: "barcode",
            type: "barcode",
            value_type: "detection",
            value: "9940069115",
            detected_value: null,
            verdict: null,
          },
          {
            status: "idle",
            label: "factory_code",
            type: "factory_code",
            value_type: "static",
            value: "P034D",
            detected_value: null,
            verdict: null,
          },
          {
            status: "idle",
            label: "batch_code",
            type: "batch_code",
            value_type: "static",
            value: "A103B",
            detected_value: null,
            verdict: null,
          },
          {
            status: "idle",
            label: "expiry_date",
            type: "expiry_date",
            value_type: "static",
            value: "23/07/25",
            detected_value: null,
            verdict: null,
          },
          {
            status: "idle",
            label: "manufacturing_date",
            type: "manufacturing_date",
            value_type: "static",
            value: "24/07/24",
            detected_value: null,
            verdict: null,
          },
          {
            status: "idle",
            label: "price",
            type: "price",
            value_type: "static",
            value: "48",
            detected_value: null,
            verdict: null,
          },
        ],
      },
      {
        id: 4,
        properties: [
          {
            status: "idle",
            label: "Is the perfume/flavour correct ?",
            type: "others",
            value_type: "manual",
            value: "1",
            detected_value: null,
            verdict: null,
          },
          {
            status: "idle",
            label: "Is the color matched?",
            type: "others",
            value_type: "manual",
            value: "0",
            detected_value: null,
            verdict: null,
          },
          {
            status: "idle",
            label: "Perforation",
            type: "perforation",
            value_type: "detection",
            value: "54",
            detected_value: null,
            verdict: null,
          },
          {
            status: "idle",
            label: "Tare Weight",
            type: "tare_weight",
            value_type: "static",
            value: "115.6",
            detected_value: null,
            verdict: null,
          },
          {
            status: "idle",
            label: "target_weight",
            type: "target_weight",
            value_type: "detection",
            value: "98.6",
            detected_value: null,
            verdict: null,
          },
          {
            status: "idle",
            label: "usp",
            type: "usp",
            value_type: "static",
            value: "49",
            detected_value: null,
            verdict: null,
          },
          {
            status: "idle",
            label: "back",
            type: "material_code",
            value_type: "static",
            value: "L175R",
            detected_value: null,
            verdict: null,
          },
          {
            status: "idle",
            label: "front",
            type: "material_code",
            value_type: "static",
            value: "H388T",
            detected_value: null,
            verdict: null,
          },
          {
            status: "idle",
            label: "barcode",
            type: "barcode",
            value_type: "detection",
            value: "928349083247",
            detected_value: null,
            verdict: null,
          },
          {
            status: "idle",
            label: "factory_code",
            type: "factory_code",
            value_type: "static",
            value: "P034D",
            detected_value: null,
            verdict: null,
          },
          {
            status: "idle",
            label: "batch_code",
            type: "batch_code",
            value_type: "static",
            value: "A103B",
            detected_value: null,
            verdict: null,
          },
          {
            status: "idle",
            label: "expiry_date",
            type: "expiry_date",
            value_type: "static",
            value: "23/07/25",
            detected_value: null,
            verdict: null,
          },
          {
            status: "idle",
            label: "manufacturing_date",
            type: "manufacturing_date",
            value_type: "static",
            value: "24/07/24",
            detected_value: null,
            verdict: null,
          },
          {
            status: "idle",
            label: "price",
            type: "price",
            value_type: "static",
            value: "48",
            detected_value: null,
            verdict: null,
          },
        ],
      },
      {
        id: 5,
        properties: [
          {
            status: "idle",
            label: "Is the perfume/flavour correct ?",
            type: "others",
            value_type: "manual",
            value: "1",
            detected_value: null,
            verdict: null,
          },
          {
            status: "idle",
            label: "Is the color matched?",
            type: "others",
            value_type: "manual",
            value: "0",
            detected_value: null,
            verdict: null,
          },
          {
            status: "idle",
            label: "Perforation",
            type: "perforation",
            value_type: "detection",
            value: "54",
            detected_value: null,
            verdict: null,
          },
          {
            status: "idle",
            label: "Tare Weight",
            type: "tare_weight",
            value_type: "static",
            value: "115.6",
            detected_value: null,
            verdict: null,
          },
          {
            status: "idle",
            label: "target_weight",
            type: "target_weight",
            value_type: "detection",
            value: "98.6",
            detected_value: null,
            verdict: null,
          },
          {
            status: "idle",
            label: "usp",
            type: "usp",
            value_type: "static",
            value: "49",
            detected_value: null,
            verdict: null,
          },
          {
            status: "idle",
            label: "back",
            type: "material_code",
            value_type: "static",
            value: "L175R",
            detected_value: null,
            verdict: null,
          },
          {
            status: "idle",
            label: "front",
            type: "material_code",
            value_type: "static",
            value: "H388T",
            detected_value: null,
            verdict: null,
          },
          {
            status: "idle",
            label: "barcode",
            type: "barcode",
            value_type: "detection",
            value: "928349083247",
            detected_value: null,
            verdict: null,
          },
          {
            status: "idle",
            label: "factory_code",
            type: "factory_code",
            value_type: "static",
            value: "P034D",
            detected_value: null,
            verdict: null,
          },
          {
            status: "idle",
            label: "batch_code",
            type: "batch_code",
            value_type: "static",
            value: "A103B",
            detected_value: null,
            verdict: null,
          },
          {
            status: "idle",
            label: "expiry_date",
            type: "expiry_date",
            value_type: "static",
            value: "23/07/25",
            detected_value: null,
            verdict: null,
          },
          {
            status: "idle",
            label: "manufacturing_date",
            type: "manufacturing_date",
            value_type: "static",
            value: "24/07/24",
            detected_value: null,
            verdict: null,
          },
          {
            status: "idle",
            label: "price",
            type: "price",
            value_type: "static",
            value: "48",
            detected_value: null,
            verdict: null,
          },
        ],
      },
    ],
  },
};

// {
//   id: 341,
//   status: "success",
//   label: "Front Face",
//   type: "pqs_carton",
//   value_type: "manual",
//   value: "1",
//   detected_value: "1",
//   verdict: 1,
// },
// {
//   id: 341,
//   status: "success",
//   label: "Back Face",
//   type: "pqs_carton",
//   value_type: "manual",
//   value: "1",
//   detected_value: null,
//   verdict: 1,
// },
// {
//   id: 341,
//   status: "success",
//   label: "Left Face",
//   type: "pqs_carton",
//   value_type: "manual",
//   value: "1",
//   detected_value: null,
//   verdict: 1,
// },
// {
//   id: 341,
//   status: "success",
//   label: "Right Face",
//   type: "pqs_carton",
//   value_type: "manual",
//   value: "1",
//   detected_value: null,
//   verdict: 1,
// },
// {
//   id: 341,
//   status: "success",
//   label: "Top Face",
//   type: "pqs_carton",
//   value_type: "manual",
//   value: "1",
//   detected_value: null,
//   verdict: 1,
// },
// {
//   id: 341,
//   status: "success",
//   label: "Bottom Face",
//   type: "pqs_carton",
//   value_type: "manual",
//   value: "1",
//   detected_value: "1",
//   verdict: 1,
// },