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

    image: "/panoramas/main1.webp",

    thumbnail: "/panoramas/main1.webp",

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

    image: "/panoramas/main2.webp",

    thumbnail: "/panoramas/main2.webp",

    hotspots: [
      {
        id: "warehouse",
        type: "scene",
        label: "Warehouse",
        target: "warehouse",
        yaw: -0.200,
        pitch: 0.056,
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
        yaw: 0.111, 
        pitch: -0.011,
      },

      {
        id: "surveillance",
        type: "info",
        label: "Surveillance Room",
        target: "surveillance",
        yaw: 0.611, 
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

    image: "/panoramas/main3.webp",

    thumbnail: "/panoramas/main3.webp",

    hotspots: [
      {
        id: "unloading",
        type: "info",
        label: "Unloading Area",
        target: "unloading",
        yaw: -1.060, 
        pitch: 0.126,
      },

      {
        id: "documentation",
        type: "info",
        label: "Documentation Room",
        target: "documentation",
        yaw: -2.121, 
        pitch: 0.190,
      },

      {
        id: "surveillance",
        type: "info",
        label: "Surveillance Room",
        target: "surveillance",
        yaw: -1.952, 
        pitch: 0.110,
      },

      {
        id: "hvc",
        type: "info",
        label: "High Value Cargo",
        target: "highvaluecargo",
        yaw: 2.3,
        pitch: 0.120,
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
        yaw: -1.630, 
        pitch: 0.126,
      },
    ],
  },

  loadingarea: {
    id: "loadingarea",
    title: "Loading Area",
    description: "Loading and Dispatch Area",
    image: "/panoramas/main2.webp",
    thumbnail: "/panoramas/main2.webp",
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