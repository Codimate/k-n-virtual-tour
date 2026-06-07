export const scenes = {
  skyview: {
    id: "skyview",

    title: "Sky View",

    description: "K+N Facility Overview",

    image: "/panoramas/main1.JPG",

    thumbnail: "/panoramas/main1.JPG",

    hotspots: [
      {
        id: "docks",

        type: "scene",

        label: "Docks",

        target: "docks",

        yaw: 0.036,

        pitch: 0.868,
      },
    ],
  },

  docks: {
    id: "docks",

    title: "Docks",

    description: "Dock Operations",

    image: "/panoramas/main2.JPG",

    thumbnail: "/panoramas/main2.JPG",

    hotspots: [
      {
        id: "warehouse",

        type: "scene",

        label: "Warehouse",

        target: "warehouse",

        yaw: -0.256,

        pitch: -0.016,
      },
    ],
  },

  warehouse: {
    id: "warehouse",

    title: "Warehouse",

    description: "Warehouse Operations",

    image: "/panoramas/main3.JPG",

    thumbnail: "/panoramas/main3.JPG",

    hotspots: [],
  },
};