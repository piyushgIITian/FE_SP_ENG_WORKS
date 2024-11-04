var projects = [
  {
    id: 1,
    name: "Wave Mall",
    description: "This is a PU coating application work.",
    site: "Lucknow - UP.",
    status: "Ongoing",
    area: "700 sqm",
    type: "project",
    work: "PU Coating Application",
    gallery: ["wave_mall1.jpg"],
  },
  {
    id: 2,
    name: "Keystone Resorts",
    description: "",
    area: "1400 sqm",
    status: "Ongoing",
    site: "Udaipur - Rajasthan",
    type: "project",
    work: "Waterproofing and Expansion Joint Work",
    gallery: ["keystone_resort.jpg"],
  },
  {
    id: 3,
    name: "Signature Global",
    description: "",
    area: "700 sqm",
    status: "Completed",
    site: "Manesar - Haryana",
    type: "project",
    work: "EPDM Membrane Application",
    gallery: ["signature_global.jpg"],
  },
];
var clientale = [
  {
    id: 1,
    name: "Medicamen Biotech Ltd",
    description: "",

    status: "Completed",
    site: "Haridwar & Bhiwari",
    type: "clientale",
    work: "Epoxy Flooring",
    // gallery: ["medicamen_biotech.jpg"],
    business_volume: "20 L",
  },
  {
    id: 2,
    name: "A.R.B Bearings",
    description: "",

    status: "Completed",
    site: "Peeragarhi, Delhi",
    type: "clientale",
    work: "Epoxy Flooring",
    // gallery: ["arb_bearings.jpg"],
    business_volume: "10 L",
  },
  {
    id: 3,
    name: "Eastern Bearings Ltd",
    description: "",

    status: "Completed",
    site: "Kundli",
    type: "clientale",
    work: "Epoxy Flooring",
    gallery: ["eastern_bearings.jpg"],
    business_volume: "10 L",
  },
  {
    id: 4,
    name: "Silver Cord Ltd",
    description: "",

    status: "Completed",
    site: "Manesar",
    type: "clientale",
    work: "Waterproofing",
    gallery: ["silver_cord.jpg"],
    business_volume: "8 L",
  },
  {
    id: 5,
    name: "Rama Ply",
    description: "",

    status: "Completed",
    site: "Rudrapur",
    type: "clientale",
    work: "Industrial Flooring",
    gallery: ["rama_ply.jpg"],
    business_volume: "15 L",
  },
  {
    id: 6,
    name: "Venus Stamping Ltd",
    description: "",

    status: "Completed",
    site: "Faridabad",
    type: "clientale",
    work: "Waterproofing",
    gallery: ["venus_stamping.jpg"],
    business_volume: "5 L",
  },
  {
    id: 7,
    name: "Prime Auto",
    description: "",

    status: "Completed",
    site: "Faridabad",
    type: "clientale",
    work: "Waterproofing",
    gallery: ["prime_auto.jpg"],
    business_volume: "10 L",
  },
  {
    id: 8,
    name: "Sunstar Ltd",
    description: "",

    status: "Completed",
    site: "Greater Noida",
    type: "clientale",
    work: "Epoxy Flooring",
    gallery: ["sunstar.jpg"],
    business_volume: "12 L",
  },
  {
    id: 9,
    name: "Phoenix India Ltd",
    description: "",

    status: "Completed",
    site: "Faridabad",
    type: "clientale",
    work: "Waterproofing",
    gallery: ["phoenix_india.jpg"],
    business_volume: "10 L",
  },
  {
    id: 10,
    name: "Jindal Steel",
    description: "",

    status: "Completed",
    site: "Raipur",
    type: "clientale",
    work: "Epoxy Flooring",
    gallery: ["jindal_steel.jpg"],
    business_volume: "14 L",
  },
  {
    id: 11,
    name: "Jindal Saw Pipes",
    description: "",

    status: "Completed",
    site: "Gurgaon",
    type: "clientale",
    work: "Waterproofing",
    gallery: ["jindal_saw_pipes.jpg"],
    business_volume: "8 L",
  },
  {
    id: 12,
    name: "Eros Lakewood City",
    description: "",

    status: "Completed",
    site: "Faridabad",
    type: "clientale",
    work: "Waterproofing",
    gallery: ["eros_lakewood.jpg"],
    business_volume: "13 L",
  },
  {
    id: 13,
    name: "Toyo Engineering India Ltd.",
    description: "",

    status: "Completed",
    site: "Panipat, Refinery",
    type: "clientale",
    work: "Waterproofing",
    gallery: ["toyo_engineering.jpg"],
    business_volume: "12 L",
  },
  {
    id: 14,
    name: "Larsen & Tubro Ltd.",
    description: "",

    status: "Completed",
    site: "Panipat, Refinery",
    type: "clientale",
    work: "Waterproofing",
    gallery: ["larsen_tubro.jpg"],
    business_volume: "12 L",
  },
  {
    id: 15,
    name: "Nicco Construction",
    description: "",

    status: "Completed",
    site: "Panipat, Refinery",
    type: "clientale",
    work: "Waterproofing",
    gallery: ["nicco_construction.jpg"],
    business_volume: "15 L",
  },
  {
    id: 16,
    name: "Aquafil Polymers Ltd.",
    description: "",

    status: "Completed",
    site: "Panipat, Refinery",
    type: "clientale",
    work: "Waterproofing",
    gallery: ["aquafil_polymers.jpg"],
    business_volume: "9 L",
  },
  {
    id: 17,
    name: "Nagarjuna Construction Company",
    description: "",

    status: "Completed",
    site: "Panipat, Refinery",
    type: "clientale",
    work: "Waterproofing",
    gallery: ["nagarjuna_construction.jpg"],
    business_volume: "12 L",
  },
  {
    id: 18,
    name: "Soma Engineering Ltd",
    description: "",

    status: "Completed",
    site: "DMRC, Phase-II",
    type: "clientale",
    work: "Repairs, four UG stations",
    gallery: ["soma_engineering.jpg"],
    business_volume: "68 L",
  },
  {
    id: 19,
    name: "Alpine Samsung HCC",
    description: "",

    status: "Completed",
    site: "DMRC, Phase-II",
    type: "clientale",
    work: "Repairs & D wall cleaning",
    gallery: ["alpine_samsung.jpg"],
    business_volume: "35 L",
  },
  {
    id: 20,
    name: "Skyline Builders Ltd.",
    description: "",

    status: "Completed",
    site: "School Project, Gurgaon",
    type: "clientale",
    work: "Waterproofing",
    gallery: ["skyline_builders.jpg"],
    business_volume: "15 L",
  },
];

var gallery = [];

var services = [
  {
    id: 4,
    name: "Waterproofing Applications",
    description:
      "Provides comprehensive waterproofing solutions to protect structures from water damage, ensuring durability and longevity.",
    type: "services",
  },
  {
    id: 5,
    name: "Repair & Rehabilitation Services",
    description:
      "Offers repair and rehabilitation services to restore structural integrity and functionality of aging or damaged buildings.",
    type: "services",
  },
  {
    id: 6,
    name: "Civil Construction Services",
    description:
      "Specializes in civil construction projects, providing quality and efficiency for residential, commercial, and industrial developments.",
    type: "services",
  },
  {
    id: 7,
    name: "Industrial Flooring Services",
    description:
      "Delivers durable and resilient flooring solutions designed to meet the rigorous demands of industrial environments.",
    type: "services",
  },
  {
    id: 8,
    name: "Expansion Joints Treatment Services",
    description:
      "Provides treatment for expansion joints to accommodate structural movements and prevent cracks in large constructions.",
    type: "services",
  },
  {
    id: 9,
    name: "Core Cutting Services",
    description:
      "Offers precise core cutting solutions for concrete and other materials, supporting a wide range of construction applications.",
    type: "services",
  },
  {
    id: 10,
    name: "Engineering Grouting Services",
    description:
      "Provides specialized grouting services to enhance structural stability, fill voids, and reinforce foundations.",
    type: "services",
  },
  {
    id: 11,
    name: "Wall-Paints Jobs",
    description:
      "Offers professional wall painting services, delivering high-quality finishes and color solutions for various spaces.",
    type: "services",
  },
  {
    id: 12,
    name: "Epoxy Coatings Services",
    description:
      "Applies durable epoxy coatings for surfaces requiring strong, chemical-resistant, and aesthetically pleasing finishes.",
    type: "services",
  },
];

var news = [
  {
    id: 1,
    title: "The Best Places To Start Your Local Listing",
    date: "22/1/2022",
    writer: "Administrator",
    description:
      "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.",
    img: "new-img.png",
    tag: "Finace, Business, Money, Markets, Investing, Economy",
  },
  {
    id: 2,
    title: "The Best Places To Start Your Local Listing",
    date: "22/1/2022",
    writer: "Administrator",
    description:
      "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.",
    img: "new-img.png",
    tag: "Finace, Business, Money, Markets, Investing, Economy",
  },
  {
    id: 3,
    title: "The Best Places To Start Your Local Listing",
    date: "22/1/2022",
    writer: "Administrator",
    description:
      "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.",
    img: "new-img.png",
    tag: "Finace, Business, Money, Markets, Investing, Economy",
  },
  {
    id: 4,
    title: "The Best Places To Start Your Local Listing",
    date: "22/1/2022",
    writer: "Administrator",
    description:
      "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.",
    img: "new-img.png",
    tag: "Finace, Business, Money, Markets, Investing, Economy",
  },
  {
    id: 5,
    title: "The Best Places To Start Your Local Listing",
    date: "22/1/2022",
    writer: "Administrator",
    description:
      "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.",
    img: "new-img.png",
    tag: "Finace, Business, Money, Markets, Investing, Economy",
  },
  {
    id: 6,
    title: "The Best Places To Start Your Local Listing",
    date: "22/1/2022",
    writer: "Administrator",
    description:
      "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.",
    img: "new-img.png",
    tag: "Finace, Business, Money, Markets, Investing, Economy",
  },
  {
    id: 7,
    title: "The Best Places To Start Your Local Listing",
    date: "22/1/2022",
    writer: "Administrator",
    description:
      "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.",
    img: "new-img.png",
    tag: "Finace, Business, Money, Markets, Investing, Economy",
  },
  {
    id: 8,
    title: "The Best Places To Start Your Local Listing",
    date: "22/1/2022",
    writer: "Administrator",
    description:
      "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.",
    img: "new-img.png",
    tag: "Finace, Business, Money, Markets, Investing, Economy",
  },
  {
    id: 9,
    title: "The Best Places To Start Your Local Listing",
    date: "22/1/2022",
    writer: "Administrator",
    description:
      "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.",
    img: "new-img.png",
    tag: "Finace, Business, Money, Markets, Investing, Economy",
  },
];

var gallerydb = [
  {
    id: 1,
    title: "Certificate 1",
    name: "Chryso Istanbul Trip",
    description: "very important certificate",
    gallery: ["certificate1.png"],
    type: "CERTI",
  },
  {
    id: 2,
    title: "Certificate 2",
    name: "Normet",
    description: "very important certificate",
    gallery: ["certificate2.png"],
    type: "CERTI",
  },
  {
    id: 3,
    title: "Gallery Image 1",
    name: "Repair Image 1",
    description: "Image from gallery - repair documentation",
    gallery: ["gallery/gallery1.jpeg"],
    type: "REPAIRS",
  },
  {
    id: 4,
    title: "Gallery Image 2",
    name: "Repair Image 2",
    description: "Image from gallery - repair documentation",
    gallery: ["gallery/gallery2.jpeg"],
    type: "REPAIRS",
  },
  {
    id: 5,
    title: "Gallery Image 3",
    name: "Repair Image 3",
    description: "Image from gallery - repair documentation",
    gallery: ["gallery/gallery3.jpeg"],
    type: "REPAIRS",
  },
  {
    id: 6,
    title: "Gallery Image 4",
    name: "Repair Image 4",
    description: "Image from gallery - repair documentation",
    gallery: ["gallery/gallery4.jpeg"],
    type: "REPAIRS",
  },
  {
    id: 7,
    title: "Gallery Image 5",
    name: "Repair Image 5",
    description: "Image from gallery - repair documentation",
    gallery: ["gallery/gallery5.jpeg"],
    type: "REPAIRS",
  },
  {
    id: 8,
    title: "Gallery Image 6",
    name: "Repair Image 6",
    description: "Image from gallery - repair documentation",
    gallery: ["gallery/gallery6.jpeg"],
    type: "REPAIRS",
  },
  {
    id: 9,
    title: "Gallery Image 7",
    name: "Repair Image 7",
    description: "Image from gallery - repair documentation",
    gallery: ["gallery/gallery7.jpeg"],
    type: "REPAIRS",
  },
];
