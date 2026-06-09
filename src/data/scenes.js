export const scenes = {
  skyview: {
    id: "skyview",

    title: "Drone View",

    description: "K+N Facility Overview",

    image: "/panoramas/main1.JPG",

    thumbnail: "/panoramas/main1.JPG",

    hotspots: [
      {
        id: "cfs",
        type: "scene",
        label: "KN CFS Polaris",
        target: "cfs",
        yaw: 2.717,
        pitch: 1.319,
      },
    ],
  },

  cfs: {
    id: "cfs",

    title: "KN CFS Polaris",

    description: "Container Freight Station",

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

      {
        id: "unloading",
        type: "scene",
        label: "Unloading Area",
        target: "unloading",
        yaw: 0.5,
        pitch: 0,
      },

      {
        id: "documentation",
        type: "scene",
        label: "Documentation Room",
        target: "documentation",
        yaw: 1.2,
        pitch: 0,
      },

      {
        id: "surveillance",
        type: "scene",
        label: "Surveillance Room",
        target: "surveillance",
        yaw: -1.2,
        pitch: 0,
      },

      {
        id: "drone",
        type: "scene",
        label: "🚁 Drone View",
        target: "skyview",
        yaw: 2.5,
        pitch: 0.2,
      },
    ],
  },

  warehouse: {
    id: "warehouse",

    title: "Warehouse",

    description: "Warehouse Operations",

    image: "/panoramas/main3.JPG",

    thumbnail: "/panoramas/main3.JPG",

    hotspots: [
      {
        id: "unloading",
        type: "scene",
        label: "Unloading Area",
        target: "unloading",
        yaw: 0.4,
        pitch: 0,
      },

      {
        id: "documentation",
        type: "scene",
        label: "Documentation Room",
        target: "documentation",
        yaw: 1.1,
        pitch: 0,
      },

      {
        id: "surveillance",
        type: "scene",
        label: "Surveillance Room",
        target: "surveillance",
        yaw: -1.1,
        pitch: 0,
      },

      {
        id: "hvc",
        type: "scene",
        label: "High Value Cargo",
        target: "highvaluecargo",
        yaw: 2.0,
        pitch: 0,
      },

      {
        id: "loading",
        type: "scene",
        label: "Loading Area",
        target: "loadingarea",
        yaw: -2.0,
        pitch: 0,
      },

      {
        id: "back-cfs",
        type: "scene",
        label: "← KN CFS Polaris",
        target: "cfs",
        yaw: 0,
        pitch: 0,
      },
    ],
  },

  unloading: {
    id: "unloading",

    title: "Unloading Area",

    description: "Unloading Operations",

    image: "/panoramas/main3.JPG",

    thumbnail: "/panoramas/main3.JPG",

    hotspots: [
      {
        id: "back-warehouse",
        type: "scene",
        label: "← Warehouse",
        target: "warehouse",
        yaw: 0,
        pitch: 0,
      },
    ],
  },

  documentation: {
    id: "documentation",

    title: "Documentation Room",

    description: "Documentation Operations",

    image: "/panoramas/main3.JPG",

    thumbnail: "/panoramas/main3.JPG",

    hotspots: [
      {
        id: "back-warehouse",
        type: "scene",
        label: "← Warehouse",
        target: "warehouse",
        yaw: 0,
        pitch: 0,
      },
    ],
  },

  surveillance: {
    id: "surveillance",

    title: "Surveillance Room",

    description: "Surveillance Operations",

    image: "/panoramas/main3.JPG",

    thumbnail: "/panoramas/main3.JPG",

    hotspots: [
      {
        id: "back-warehouse",
        type: "scene",
        label: "← Warehouse",
        target: "warehouse",
        yaw: 0,
        pitch: 0,
      },
    ],
  },

  highvaluecargo: {
    id: "highvaluecargo",

    title: "High Value Cargo",

    description: "High Value Cargo Storage",

    image: "/panoramas/main3.JPG",

    thumbnail: "/panoramas/main3.JPG",

    hotspots: [
      {
        id: "back-warehouse",
        type: "scene",
        label: "← Warehouse",
        target: "warehouse",
        yaw: 0,
        pitch: 0,
      },
    ],
  },

  loadingarea: {
    id: "loadingarea",

    title: "Loading Area",

    description: "Loading Operations",

    image: "/panoramas/main3.JPG",

    thumbnail: "/panoramas/main3.JPG",

    hotspots: [
      {
        id: "back-warehouse",
        type: "scene",
        label: "← Warehouse",
        target: "warehouse",
        yaw: 0,
        pitch: 0,
      },
    ],
  },
};