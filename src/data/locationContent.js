/**
 * locationContent.js
 * ──────────────────
 * Data-driven content for the Information Modal system.
 * Each key matches a hotspot target ID in scenes.js.
 *
 * To add a new location:
 *   1. Add an entry here with the desired content blocks.
 *   2. In scenes.js, set the hotspot type to "info" and target to the key below.
 *   That's it — the modal will render automatically.
 */

export const locationContent = {
  /* ──────────────────────────────────────────────────────────
   * ENTRANCE GATE / CFS OPERATIONS
   * ────────────────────────────────────────────────────────── */
  cfs: {
    id: "cfs",
    title: "KN CFS Polaris – Entrance Gate",
    subtitle: "Container Freight Station & Main Access Control",
    accent: "#0054a6", // K+N Blue

    overview: {
      icon: "🏭",
      text: "Kuehne+Nagel CFS strategically locates just 14 kilometres from Nhava Sheva port. It is one of the biggest and stronger CFS operators in Nhava Sheva area, with a 75-acre facility with around 3,000 ground slots and capacity exceeding 30,000 TEUs. Polaris CFS has 3 full-rake rail sidings, enabling direct movement of containers between JNPT and inland container depots (ICDs), which reduces road dependency, transit time, and congestion.",
    },

    features: [
      {
        icon: "🚛",
        title: "Automated Gate Clearance",
        description:
          "ANPR camera systems automatically identify incoming trucks and verify booking details before granting entry.",
      },
      {
        icon: "🛡️",
        title: "Security Verification",
        description:
          "24/7 security checkpoint verifying container seals, driver credentials, and safety compliance.",
      },
      {
        icon: "⚖️",
        title: "Weighbridge Integration",
        description:
          "Integrated automated weighbridges record container and vehicle gross weights immediately upon entry.",
      },
      {
        icon: "📱",
        title: "Digital Slot Booking",
        description:
          "Pre-booked arrival time slots optimize truck turnaround times and reduce gate congestion.",
      },
    ],

    process: [
      {
        step: 1,
        title: "Approach & ANPR Scan",
        description: "Truck license plates and container numbers are automatically scanned at entry.",
      },
      {
        step: 2,
        title: "Security Check",
        description: "Driver ID and container seal numbers are verified against manifest data.",
      },
      {
        step: 3,
        title: "Weighing & Directing",
        description: "Gross weight is captured and the driver is directed to the designated unloading bay.",
      },
      {
        step: 4,
        title: "Gate Pass Issuance",
        description: "Digital pass generated for seamless departure clearance post-loading/unloading.",
      },
    ],

    stats: [
      { value: "24/7", label: "Operations", icon: "⏰" },
      { value: "50K+", label: "Containers / Year", icon: "📦" },
      { value: "< 3 mins", label: "Avg. Check-In", icon: "⏱️" },
      { value: "100%", label: "Tracked Cargo", icon: "📍" },
    ],

    gallery: ["/panoramas/main2.JPG"],
    video: "/videos/Entrence_Video.mp4",

    additionalInfo: {
      title: "Facility Capabilities",
      content:
        "The entrance gate integrates documentation, surveillance, unloading, loading, and warehouse operations into a unified logistics ecosystem designed for efficiency, security, and real-time visibility.",
    },
  },

  /* ──────────────────────────────────────────────────────────
   * DOCUMENTATION ROOM
   * ────────────────────────────────────────────────────────── */
  documentation: {
    id: "documentation",
    title: "Documentation Room",
    subtitle: "Precision Document Management & Customs Processing",
    accent: "#0a84ff", // iOS blue

    overview: {
      icon: "📋",
      text: "This is Kuehne+Nagel Office with dedicated KN employees and Surveyor team ensuring smooth shipment management, documentation, and the precise delivery of every shipment. Beyond simply processing paperwork, they serve as the digital hub, working on KN WMS to provide visibility and the first quality gateway for our customers' goods.",
    },

    features: [
      {
        icon: "🔍",
        title: "Digital Scanning",
        description:
          "High-speed document scanners digitize every incoming document within seconds, creating searchable digital archives.",
      },
      {
        icon: "🛃",
        title: "Customs Integration",
        description:
          "Real-time integration with customs authorities enables instant clearance processing and automated duty calculations.",
      },
      {
        icon: "🔒",
        title: "Secure Storage",
        description:
          "Climate-controlled vault for sensitive trade documents with biometric access control and fire suppression.",
      },
      {
        icon: "📊",
        title: "Analytics Dashboard",
        description:
          "Live tracking of document processing times, clearance rates, and compliance metrics across all shipments.",
      },
    ],

    process: [
      {
        step: 1,
        title: "Receive",
        description: "Documents arrive via courier, email, or EDI and are logged into the system.",
      },
      {
        step: 2,
        title: "Verify",
        description: "Automated checks validate completeness, accuracy, and regulatory compliance.",
      },
      {
        step: 3,
        title: "Process",
        description: "Customs declarations are filed and duties calculated through integrated systems.",
      },
      {
        step: 4,
        title: "Archive",
        description: "Completed documents are digitally archived with full audit trail for 7+ years.",
      },
    ],

    stats: [
      { value: "10,000+", label: "Documents / Day", icon: "📄" },
      { value: "99.8%", label: "Accuracy Rate", icon: "✅" },
      { value: "< 2 hrs", label: "Avg. Clearance", icon: "⏱️" },
      { value: "24/7", label: "Operations", icon: "🌐" },
    ],

    gallery: ["/images/doc_room_gallery.png"],
    video: "/videos/office.mp4",

    additionalInfo: {
      title: "Compliance & Certifications",
      content:
        "Our documentation center is ISO 9001:2015 certified and fully compliant with AEO (Authorized Economic Operator) standards. We maintain partnerships with over 40 customs authorities worldwide, ensuring seamless cross-border documentation processing.",
    },
  },

  /* ──────────────────────────────────────────────────────────
   * SURVEILLANCE ROOM
   * ────────────────────────────────────────────────────────── */
  surveillance: {
    id: "surveillance",
    title: "Surveillance Room",
    subtitle: "24/7 Security Monitoring & Smart Analytics",
    accent: "#30d158", // iOS green

    overview: {
      icon: "🛡️",
      text: "The Surveillance Room provides comprehensive security coverage for the entire KN CFS Polaris facility. Equipped with AI-powered video analytics, motion detection, and real-time alert systems, our security team monitors every zone around the clock. The facility uses enterprise-grade CCTV infrastructure with redundant storage and instant playback capabilities.",
    },

    features: [
      {
        icon: "🤖",
        title: "AI Video Analytics",
        description:
          "Machine learning algorithms detect anomalies, unauthorized access, and safety violations in real-time.",
      },
      {
        icon: "📹",
        title: "4K Camera Network",
        description:
          "Over 200 high-definition cameras covering every zone — indoor, outdoor, loading docks, and perimeter fencing.",
      },
      {
        icon: "🚨",
        title: "Instant Alerts",
        description:
          "Automated alert system triggers notifications to security staff, management, and local authorities when needed.",
      },
      {
        icon: "💾",
        title: "90-Day Retention",
        description:
          "All footage is stored on redundant NVR systems with 90-day retention and cloud backup for critical events.",
      },
    ],

    process: [
      {
        step: 1,
        title: "Monitor",
        description: "AI-assisted live monitoring of all camera feeds with anomaly detection.",
      },
      {
        step: 2,
        title: "Detect",
        description: "Smart algorithms flag suspicious activity and trigger instant alerts.",
      },
      {
        step: 3,
        title: "Respond",
        description: "Security teams are dispatched within 60 seconds of any confirmed alert.",
      },
      {
        step: 4,
        title: "Report",
        description: "Detailed incident reports with video evidence are generated automatically.",
      },
    ],

    stats: [
      { value: "200+", label: "Cameras Active", icon: "📹" },
      { value: "< 60s", label: "Response Time", icon: "⚡" },
      { value: "99.99%", label: "Uptime", icon: "🟢" },
      { value: "90 Days", label: "Footage Stored", icon: "💾" },
    ],

    gallery: ["/images/surveillance_gallery.png"],
    video: "/videos/Survi.mp4",

    additionalInfo: {
      title: "Security Certifications",
      content:
        "Our surveillance infrastructure meets TAPA FSR Level A standards — the highest security certification for freight and logistics facilities. All security personnel are trained and certified to international standards.",
    },
  },

  /* ──────────────────────────────────────────────────────────
   * HIGH VALUE CARGO
   * ────────────────────────────────────────────────────────── */
  highvaluecargo: {
    id: "highvaluecargo",
    title: "High Value Cargo",
    subtitle: "Premium Secure Storage for Valuable Shipments",
    accent: "#ffd60a", // iOS yellow

    overview: {
      icon: "💎",
      text: "The High Value Cargo area is a specially fortified zone within the warehouse designed for storing and handling premium, sensitive, and high-value goods. From electronics and pharmaceuticals to luxury goods and aerospace components, this area provides maximum security with climate-controlled environments and restricted access protocols.",
    },

    features: [
      {
        icon: "🔐",
        title: "Biometric Access",
        description:
          "Multi-factor authentication including fingerprint, retina scan, and badge verification at every entry point.",
      },
      {
        icon: "🌡️",
        title: "Climate Control",
        description:
          "Precision temperature (15–25°C) and humidity (40–60%) control for sensitive goods like pharmaceuticals.",
      },
      {
        icon: "📦",
        title: "Cage Storage",
        description:
          "Individual locked cage units with dedicated CCTV coverage and tamper-evident seals for each shipment.",
      },
      {
        icon: "📋",
        title: "Chain of Custody",
        description:
          "Digital chain-of-custody logging captures every hand-off with photo evidence and timestamps.",
      },
    ],

    process: [
      {
        step: 1,
        title: "Intake",
        description: "Shipments are inspected, photographed, and logged with detailed condition reports.",
      },
      {
        step: 2,
        title: "Secure",
        description: "Items are placed in assigned cage units with tamper-evident seals applied.",
      },
      {
        step: 3,
        title: "Monitor",
        description: "Continuous CCTV and sensor monitoring with real-time alerts for any anomalies.",
      },
      {
        step: 4,
        title: "Release",
        description: "Authorized release requires dual-signature verification and photographic confirmation.",
      },
    ],

    stats: [
      { value: "$50M+", label: "Cargo Value / Month", icon: "💰" },
      { value: "Zero", label: "Loss Record", icon: "🏆" },
      { value: "100%", label: "CCTV Coverage", icon: "📹" },
      { value: "TAPA-A", label: "Certified", icon: "🛡️" },
    ],

    gallery: ["/images/hvc_gallery.png"],
    video: "/videos/hvc.mp4",

    additionalInfo: {
      title: "Insurance & Liability",
      content:
        "All high-value cargo is covered under our comprehensive marine and warehouse insurance policy. We maintain dedicated liability coverage for goods valued up to $10M per shipment, with additional coverage available on request.",
    },
  },
/* ──────────────────────────────────────────────────────────
 * UNLOADING AREA
 * ────────────────────────────────────────────────────────── */
unloading: {
  id: "unloading",
  title: "Unloading Area",
  subtitle: "Efficient Container & Cargo Receiving Operations",
  accent: "#ff9f0a", // iOS orange

  overview: {
    icon: "🏗️",
    paragraph1: "The unloading platform is the first precision gateway for cargo entering our secure storage area. Through the combination of people, process, and technology, PDA operations, we ensure this stage is safe, efficient, accurate, and transparent, truly achieving your cargo in our hands.",
    paragraph2: "Once the cargo is received at the CFS, shipping documents like, invoice, packing list and shipping bill are checked. Physical verification of the cartons is conducted, which includes:",
    points: [
      "Number of cartons",
      "Check cartons labels and markings",
      "Measuring, weighment & sorting basis requirement",
      "Outer Audit / Cargo Condition Check, which will include Examination for torn, crushed, wet, tampered, or damaged cartons",
      "Recording of discrepancies and damages"
    ],
    footer: "Finally, Issuance of a cargo receipt or discrepancy report."
  },

  features: [
    {
      icon: "🚛",
      title: "Multi-Dock Bays",
      description:
        "12 dedicated dock bays with hydraulic levelers accommodate vehicles from small vans to 40ft container trucks.",
    },
    {
      icon: "⚖️",
      title: "Weighbridge System",
      description:
        "Integrated weighbridge captures gross and tare weights for every vehicle, ensuring accurate cargo records.",
    },
    {
      icon: "📱",
      title: "Digital Check-In",
      description:
        "Drivers use a mobile app for appointment scheduling, gate pass generation, and real-time status updates.",
    },
    {
      icon: "🔬",
      title: "Quality Inspection",
      description:
        "Incoming cargo undergoes visual and dimensional inspection with photographic documentation of condition.",
    },
  ],

  process: [
    {
      step: 1,
      title: "Arrival",
      description: "Vehicles are checked in, weighed, and directed to assigned dock bays.",
    },
    {
      step: 2,
      title: "Unload",
      description: "Cargo is carefully unloaded using appropriate equipment based on type and weight.",
    },
    {
      step: 3,
      title: "Inspect",
      description: "Each item is inspected for damage, counted, and matched against shipping documents.",
    },
    {
      step: 4,
      title: "Stage",
      description: "Verified cargo is staged in designated zones for putaway into the warehouse.",
    },
  ],

  stats: [
    { value: "150+", label: "Trucks / Day", icon: "🚛" },
    { value: "12", label: "Dock Bays", icon: "🏭" },
    { value: "< 45 min", label: "Avg. Turnaround", icon: "⏱️" },
    { value: "98.5%", label: "On-Time Unloads", icon: "📊" },
  ],

  gallery: ["/images/unloading_img1.JPG", "/images/unloading_img2.JPG"],
  video: ["/videos/IMG_3078.MOV", "/videos/IMG_3080.MOV"],

  additionalInfo: {
    title: "Safety Standards",
    content:
      "The unloading area maintains a zero-incident safety record. All personnel are required to wear PPE including high-visibility vests, steel-toe boots, and hard hats. Speed limits are enforced via automated monitoring and regular safety drills are conducted monthly.",
  },
},
  /* ──────────────────────────────────────────────────────────
   * LOADING AREA
   * ────────────────────────────────────────────────────────── */
  loadingarea: {
    id: "loadingarea",
    title: "Loading Area",
    subtitle: "Outbound Dispatch & Shipment Consolidation",
    accent: "#bf5af2", // iOS purple

    overview: {
      icon: "📦",
      text: "The stuffing process is the final physical gateway before cargo leaves our control for long-term transport. Our goal is to ensure that goods are loaded in the safest, most stable, and most economical manner through rigorous standards, and standardized operations. All container load plans are imported from the Kuehne Nagel WMS.",
    },

    features: [
      {
        icon: "🗺️",
        title: "Route Optimization",
        description:
          "AI-powered route planning consolidates shipments by destination, reducing transit time and fuel consumption.",
      },
      {
        icon: "🏷️",
        title: "Smart Labeling",
        description:
          "Automated labeling stations print and apply barcodes, RFID tags, and shipping labels at high speed.",
      },
      {
        icon: "📐",
        title: "Load Planning",
        description:
          "3D load planning software maximizes container utilization while respecting weight limits and stacking rules.",
      },
      {
        icon: "✅",
        title: "Final QC Check",
        description:
          "Every outbound shipment undergoes a final quality control scan to verify accuracy before truck sealing.",
      },
    ],

    process: [
      {
        step: 1,
        title: "Pick",
        description: "Orders are picked from warehouse locations using handheld RF scanners.",
      },
      {
        step: 2,
        title: "Consolidate",
        description: "Shipments are grouped by destination and consolidated for optimal loading.",
      },
      {
        step: 3,
        title: "Load",
        description: "Cargo is loaded per 3D plan with real-time weight and balance verification.",
      },
      {
        step: 4,
        title: "Dispatch",
        description: "Sealed trucks depart with digital proof-of-loading and GPS tracking activated.",
      },
    ],

    stats: [
      { value: "200+", label: "Dispatches / Day", icon: "🚚" },
      { value: "95%", label: "Container Utilization", icon: "📦" },
      { value: "99.2%", label: "Order Accuracy", icon: "✅" },
      { value: "< 30 min", label: "Load Time", icon: "⏱️" },
    ],

    gallery: ["/images/unloading_gallery.png"],
    video: "/videos/loading_1.mp4",

    additionalInfo: {
      title: "Sustainability Initiatives",
      content:
        "Our loading operations prioritize sustainability through route consolidation (reducing empty miles by 35%), reusable packaging materials, and electric forklift fleets. We track and report carbon emissions per shipment as part of our commitment to K+N's Net Zero 2050 target.",
    },
  },

  /* ──────────────────────────────────────────────────────────
   * SKYVIEW
   * ────────────────────────────────────────────────────────── */
  skyview: {
    id: "skyview",
    title: "K+N Facility Overview",
    subtitle: "Aerial Perspective of the Logistics Campus",
    accent: "#0a84ff",

    overview: {
      icon: "🚁",
      text: "The drone view provides a complete overview of the KN CFS Polaris facility, highlighting key operational zones, warehouse infrastructure, cargo movement areas, and transportation connectivity.",
    },

    stats: [
      { value: "360°", label: "Facility Visibility", icon: "👁️" },
      { value: "24/7", label: "Operations", icon: "⏰" },
      { value: "100%", label: "Cargo Tracking", icon: "📦" },
      { value: "ISO", label: "Standards", icon: "✅" },
    ],

    gallery: ["/panoramas/main1.JPG"],

    additionalInfo: {
      title: "Facility Overview",
      content:
        "The KN CFS Polaris facility is designed to support end-to-end logistics operations, including cargo handling, customs clearance, storage, consolidation, and dispatch.",
    },
  },

  /* ──────────────────────────────────────────────────────────
   * WAREHOUSE
   * ────────────────────────────────────────────────────────── */
  warehouse: {
    id: "warehouse",
    title: "Warehouse Operations",
    subtitle: "Secure Storage & Inventory Management",
    accent: "#30d158",

    overview: {
      icon: "🏢",
      text: "Through systematic management we transform cargo from temporary receiving into secure, organized, and highly traceable inventory assets. In this process, goods transition from materials to precisely accessible, data-transparent, and absolutely secure assets. We feature 24/7 full CCTV coverage, infrared alarms, smoke detectors, and intelligent monitoring alert systems. This is the digital value we provide that goes beyond traditional warehousing.",
    },

    stats: [
      { value: "24/7", label: "Operations", icon: "⏰" },
      { value: "99.9%", label: "Inventory Accuracy", icon: "📊" },
      { value: "Secure", label: "Storage Zones", icon: "🔒" },
      { value: "Real-Time", label: "Tracking", icon: "📍" },
    ],

    gallery: ["/images/warehouse_img1.JPG", "/images/warehouse_img1.JPG"],
    video: "/videos/warehouse_1.mp4",

    additionalInfo: {
      title: "Warehouse Overview",
      content:
        "The warehouse is equipped to support high-volume storage, inventory visibility, cargo segregation, and efficient movement of goods between inbound and outbound logistics operations.",
    },
  },
};