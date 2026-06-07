export const scenes = {
  warehouse: {
    id: "warehouse",

    title: "Warehouse",

    description: "Main warehouse area",

    image: "/panoramas/main1.JPG",

    thumbnail: "/panoramas/main1.JPG",

    hotspots: [
      {
        id: "dock",
        type: "scene",
        label: "Go To Dock",
        target: "dock",
        yaw: 0.8,
        pitch: 0,
      },
    ],
  },

  dock: {
    id: "dock",

    title: "Dock",

    description: "Loading area",

    image: "/panoramas/main2.JPG",

    thumbnail: "/panoramas/main2.JPG",

    hotspots: [
      {
        id: "warehouse",
        type: "scene",
        label: "Back To Warehouse",
        target: "warehouse",
        yaw: 0,
        pitch: 0,
      },
    ],
  },
};