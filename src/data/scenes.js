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
        type: "scene",
        label: "Unloading Area",
        target: "unloading",
        yaw: -1.114,
        pitch: 0.007,
      },

      {
        id: "documentation",
        type: "scene",
        label: "Documentation Room",
        target: "documentation",
        yaw: 0.111, 
        pitch: -0.011,
      },

      {
        id: "surveillance",
        type: "scene",
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
        type: "scene",
        label: "Unloading Area",
        target: "unloading",
        yaw: -1.060, 
        pitch: 0.126,
      },

      {
        id: "documentation",
        type: "scene",
        label: "Documentation Room",
        target: "documentation",
        yaw: -2.121, 
        pitch: 0.190,
      },

      {
        id: "surveillance",
        type: "scene",
        label: "Surveillance Room",
        target: "surveillance",
        yaw: -1.952, 
        pitch: 0.110,
      },

      {
        id: "hvc",
        type: "scene",
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
    image: "/panoramas/loadingarea.webp",
    thumbnail: "/panoramas/loadingarea.webp",
    hotspots: [
      {
        id: "warehouse",
        type: "scene",
        label: "Warehouse",
        target: "warehouse",
        yaw: 1.317, pitch: 0.865
      },
      {
        id: "cfs",
        type: "scene",
        label: "KN CFS Polaris",
        target: "cfs",
        yaw: 1.317, pitch: 0.265
      },
      {
        id: "drone",
        type: "scene",
        label: "🚁 Drone View",
        target: "skyview",
        yaw: 1.4,
        pitch: -0.3,
      },
    ],
  },

  unloading: {
    id: "unloading",
    title: "Unloading Area",
    description: "Container & Cargo Receiving",
    image: "/panoramas/unloadingarea.webp",
    thumbnail: "/panoramas/unloadingarea.webp",
    hotspots: [
      {
        id: "warehouse",
        type: "scene",
        label: "Warehouse",
        target: "warehouse",
        yaw: -2.807, pitch: 0.329
      },
      {
        id: "cfs",
        type: "scene",
        label: "KN CFS Polaris",
        target: "cfs",
        yaw: -0.479, pitch: 0.202
      },
    ],
  },

  surveillance: {
    id: "surveillance",
    title: "Surveillance Room",
    description: "24/7 Security Operations",
    image: "/panoramas/Survroom.webp",
    thumbnail: "/panoramas/Survroom.webp",
    hotspots: [
      {
        id: "warehouse",
        type: "scene",
        label: "Warehouse",
        target: "warehouse",
        yaw: -1.850, pitch: 0.329
      }, 
    ],
  },

  documentation: {
    id: "documentation",
    title: "Documentation Room",
    description: "Customs & Processing Center",
    image: "/panoramas/Documentationroom.webp",
    thumbnail: "/panoramas/Documentationroom.webp",
    hotspots: [
      {
        id: "warehouse",
        type: "scene",
        label: "Warehouse",
        target: "warehouse",
        yaw: -2.661, pitch: 0.009
      },
    ],
  },

  highvaluecargo: {
    id: "highvaluecargo",
    title: "High Value Cargo",
    description: "Secure Premium Cargo Vault",
    image: "/panoramas/main1.webp",
    thumbnail: "/panoramas/main1.webp",
    hotspots: [
      {
        id: "warehouse",
        type: "scene",
        label: "Warehouse",
        target: "warehouse",
        yaw: 0.0,
        pitch: 0.1,
      },
    ],
  },
};