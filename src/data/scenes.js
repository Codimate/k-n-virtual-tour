/**
 * scenes.js
 * ─────────
 * Scene definitions for the 360° virtual tour.
 *
 * Only scenes with REAL panorama images are kept as navigable scenes.
 * Locations without dedicated panoramas use type: "info" hotspots,
 * which open the InformationModal overlay instead of navigating.
 */

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
        yaw: 3.049,
        pitch: 1.546,
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
        type: "info",
        label: "Unloading Area",
        target: "unloading",
        yaw: -1.114,
        pitch: 0.007,
      },

      {
        id: "documentation",
        type: "info",
        label: "Documentation Room",
        target: "documentation",
        yaw: -0.001, 
        pitch: -0.011,
      },

      {
        id: "surveillance",
        type: "info",
        label: "Surveillance Room",
        target: "surveillance",
        yaw: 0.501, 
        pitch: -0.011,
      },

      {
        id: "drone",
        type: "scene",
        label: "🚁 Drone View",
        target: "skyview",
        yaw: -1.741, pitch: -0.638
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
        type: "info",
        label: "Unloading Area",
        target: "unloading",
        yaw: -1.711, 
        pitch: 0.126,
      },

      {
        id: "documentation",
        type: "info",
        label: "Documentation Room",
        target: "documentation",
        yaw: -2.00, 
        pitch: -0.044,
      },

      {
        id: "surveillance",
        type: "info",
        label: "Surveillance Room",
        target: "surveillance",
        yaw: -2.172, 
        pitch: 0.014,
      },

      {
        id: "hvc",
        type: "info",
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
        yaw: 1.0,
        pitch: 0.1,
      },

      {
        id: "back-cfs",
        type: "scene",
        label: "← KN CFS Polaris",
        target: "cfs",
        yaw: -1.609, pitch: -0.67
      },
    ],
  },

  loadingarea: {
    id: "loadingarea",
    title: "Loading Area",
    description: "Loading and Dispatch Area",
    image: "/panoramas/main2.JPG",
    thumbnail: "/panoramas/main2.JPG",
    hotspots: [
      {
        id: "warehouse",
        type: "scene",
        label: "Warehouse",
        target: "warehouse",
        yaw: -0.8,
        pitch: 0.0,
      },
      {
        id: "cfs",
        type: "scene",
        label: "KN CFS Polaris",
        target: "cfs",
        yaw: 0.0,
        pitch: 0.0,
      },
      {
        id: "drone",
        type: "scene",
        label: "🚁 Drone View",
        target: "skyview",
        yaw: 0.8,
        pitch: -0.3,
      },
    ],
  },
};