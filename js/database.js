/**
 * SP Engineering Works - Database
 * Contains project data, client information, services, and news
 */

var projects = [
  {
    id: 1,
    name: "Wave Mall",
    description: "Commercial mall waterproofing project featuring high-performance polyurethane coating application. The project involved surface preparation, primer application, and multiple coats of PU to ensure long-lasting protection against water ingress. Special attention was given to expansion joints and critical areas to ensure complete waterproofing integrity.",
    site: "Lucknow - UP",
    status: "Ongoing",
    area: "700 sqm",
    type: "project",
    work: "PU Coating Application",
    gallery: ["wave_mall1.jpg"],
    completion_date: "Expected December 2025"
  },
  {
    id: 2,
    name: "Keystone Resorts",
    description: "Comprehensive waterproofing and expansion joint treatment for a luxury resort property. The project includes treatment of terraces, swimming pools, and basement areas using advanced crystalline waterproofing systems. Expansion joints are being treated with high-grade elastomeric sealants to accommodate structural movements while maintaining watertight integrity.",
    area: "1400 sqm",
    status: "Ongoing",
    site: "Udaipur - Rajasthan",
    type: "project",
    work: "Waterproofing and Expansion Joint Work",
    gallery: ["keystone_resort.jpg"],
    completion_date: "Expected March 2024"
  },
  {
    id: 3,
    name: "Signature Global",
    description: "EPDM membrane waterproofing application for a residential complex. The project involved installation of high-quality EPDM sheets with heat-welded seams to create a seamless waterproofing layer. The membrane provides excellent weather resistance, UV stability, and long service life, protecting the structure from water damage for years to come.",
    area: "700 sqm",
    status: "Completed",
    site: "Manesar - Haryana",
    type: "project",
    work: "EPDM Membrane Application",
    gallery: ["signature_global.jpg"],
    completion_date: "August 2025"
  },
  {
    id: 4,
    name: "Metro Station Rehabilitation",
    description: "Structural rehabilitation and waterproofing of underground metro station. The project involved crack injection, concrete repairs, and application of specialized waterproofing systems to prevent water ingress in the underground structure. Advanced polymer-modified cementitious coatings were used to ensure long-term durability.",
    area: "2500 sqm",
    status: "Completed",
    site: "Delhi NCR",
    type: "project",
    work: "Structural Repairs and Waterproofing",
    gallery: ["build1.jpeg"],
    completion_date: "January 2025"
  },
  {
    id: 5,
    name: "Industrial Facility Flooring",
    description: "High-performance epoxy flooring application for a manufacturing facility. The project included floor preparation, crack treatment, primer application, and multiple coats of industrial-grade epoxy with anti-slip additives. The flooring system provides chemical resistance, durability, and easy maintenance for heavy industrial use.",
    area: "3200 sqm",
    status: "Completed",
    site: "Gurgaon - Haryana",
    type: "project",
    work: "Epoxy Flooring",
    gallery: ["build2.png"],
    completion_date: "November 2022"
  }
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
  {
    id: 21,
    name: "Ansals Properties & Infrastructure",
    description: "",
    status: "Completed",
    site: "Delhi",
    type: "clientale",
    work: "Building Repairs & Strengthening",
    business_volume: "20 L",
  },
  {
    id: 22,
    name: "Hotel Radisson Blue",
    description: "",
    status: "Completed",
    site: "Delhi",
    type: "clientale",
    work: "Building Repairs & Strengthening",
    business_volume: "18 L",
  },
  {
    id: 23,
    name: "Pratibha-CRFG JV, CC-01",
    description: "",
    status: "Completed",
    site: "DMRC, Phase-III",
    type: "clientale",
    work: "D Wall Repairs",
    business_volume: "1.15 Cr",
  },
  {
    id: 24,
    name: "L & T CC-17 & CC-28",
    description: "",
    status: "Completed",
    site: "DMRC, Phase-III",
    type: "clientale",
    work: "Segmental Repairs",
    business_volume: "75 L",
  },
  {
    id: 25,
    name: "FEMC Pratibha JV- CC-23",
    description: "",
    status: "Completed",
    site: "DMRC, Phase-III",
    type: "clientale",
    work: "Waterproofing & Repairs",
    business_volume: "200 L",
  },
  {
    id: 26,
    name: "Ayushman Infratech- Sharnam",
    description: "",
    status: "Completed",
    site: "Noida",
    type: "clientale",
    work: "Structural Strengthning",
    business_volume: "35 L",
  },
  {
    id: 27,
    name: "GYT-TPL",
    description: "",
    status: "Completed",
    site: "DMRC, Phase-III",
    type: "clientale",
    work: "Segmental Repairs",
    business_volume: "50 L",
  },
  {
    id: 28,
    name: "YFC Projects, CC-86",
    description: "",
    status: "Completed",
    site: "DMRC, Phase-III",
    type: "clientale",
    work: "Structural Repairs",
    business_volume: "25 L",
  },
  {
    id: 29,
    name: "Roca Bathroom Fitting",
    description: "",
    status: "Completed",
    site: "Industrial, Alwar",
    type: "clientale",
    work: "Terrace Waterproofing",
    business_volume: "15 L",
  },
  {
    id: 30,
    name: "Gulermak TPL JV",
    description: "",
    status: "Completed",
    site: "Luckhnow Metro",
    type: "clientale",
    work: "Structural Repairs",
    business_volume: "300 L",
  },
  {
    id: 31,
    name: "Napino Auto & Electronics",
    description: "",
    status: "Completed",
    site: "Manesar",
    type: "clientale",
    work: "Terrace Waterproofing",
    business_volume: "35 L",
  },
  {
    id: 32,
    name: "Hyatt Regency",
    description: "",
    status: "Completed",
    site: "Luckhnow",
    type: "clientale",
    work: "Waterproofing",
    business_volume: "90 L",
  },
  {
    id: 33,
    name: "IIT Delhi",
    description: "",
    status: "Completed",
    site: "Delhi",
    type: "clientale",
    work: "Terrace Waterproofing",
    business_volume: "20 L",
  },
  {
    id: 34,
    name: "Corona Housing Pvt Ltd",
    description: "",
    status: "Ongoing",
    site: "Gurgaon",
    type: "clientale",
    work: "Sunken Portion & Podium Slab waterproofing",
    business_volume: "50 L",
  },
  {
    id: 35,
    name: "Signature Global",
    description: "",
    status: "Ongoing",
    site: "Manesar",
    type: "clientale",
    work: "Sunken Portion & Watertank Waterproofing",
    business_volume: "40 L",
  },
  {
    id: 36,
    name: "Hyatt Regency",
    description: "",
    status: "Completed",
    site: "Ahmedabad",
    type: "clientale",
    work: "Waterproofing",
    business_volume: "80 L",
  },
  {
    id: 37,
    name: "Key Stone Projects",
    description: "",
    status: "Ongoing",
    site: "Udaipur",
    type: "clientale",
    work: "Terrace, Swimming Pool, Toilets Waterproofing",
    business_volume: "200 L",
  },
  {
    id: 38,
    name: "Hyatt Regency",
    description: "",
    status: "Ongoing",
    site: "Raipur, Chatisgarh",
    type: "clientale",
    work: "Strengthning and waterproofing",
    business_volume: "50 L",
  }
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
    title: "SP Engineering Works Completes Major Metro Station Rehabilitation Project",
    date: "15/02/2024",
    writer: "Technical Team",
    description:
      "SP Engineering Works has successfully completed a major rehabilitation project for an underground metro station in Delhi NCR. The project involved comprehensive waterproofing and structural repairs to address water ingress issues that had been affecting the station's operations. Using advanced polymer-modified cementitious coatings and crack injection techniques, our team was able to completely seal the structure against water penetration. The project was completed ahead of schedule and has been praised for its quality and effectiveness by the metro authorities.",
    img: "new-img.png",
    tag: "Projects, Waterproofing, Structural Repairs",
  },
  {
    id: 2,
    title: "New Eco-Friendly Waterproofing Solutions Added to Our Service Portfolio",
    date: "28/01/2024",
    writer: "Product Development Team",
    description:
      "SP Engineering Works is proud to announce the addition of new eco-friendly waterproofing solutions to our service portfolio. These innovative products are free from harmful chemicals and VOCs, making them safer for both the environment and building occupants. The new solutions offer the same high level of performance as traditional products while reducing environmental impact. This addition reflects our commitment to sustainable construction practices and responsible business operations. Contact us to learn more about these green alternatives for your next project.",
    img: "new-img.png",
    tag: "Products, Sustainability, Innovation",
  },
  {
    id: 3,
    title: "SP Engineering Works Expands Operations to Southern India",
    date: "10/12/2025",
    writer: "Management Team",
    description:
      "We are excited to announce the expansion of our operations to Southern India, with new offices opening in Bangalore and Chennai. This strategic expansion allows us to better serve clients across the country and take on projects in the rapidly growing southern market. The new offices are fully staffed with experienced professionals and equipped with the latest technology to ensure the same high quality of service that our clients have come to expect. This expansion marks a significant milestone in our company's growth journey.",
    img: "new-img.png",
    tag: "Company News, Expansion, Growth",
  },
  {
    id: 4,
    title: "Advanced Training Program Completed by Technical Team",
    date: "05/11/2025",
    writer: "HR Department",
    description:
      "Our technical team has successfully completed an advanced training program on the latest waterproofing and epoxy flooring technologies. The intensive two-week program, conducted in collaboration with international experts, covered cutting-edge application techniques, troubleshooting, and quality control measures. This investment in our team's skills ensures that we remain at the forefront of the industry and continue to deliver exceptional results for our clients. The newly acquired knowledge is already being implemented in our ongoing projects.",
    img: "new-img.png",
    tag: "Training, Skills Development, Technology",
  },
  {
    id: 5,
    title: "SP Engineering Works Awarded ISO 9001:2015 Certification",
    date: "20/10/2025",
    writer: "Quality Assurance Team",
    description:
      "We are proud to announce that SP Engineering Works has been awarded ISO 9001:2015 certification for our quality management system. This certification recognizes our commitment to maintaining the highest standards in all aspects of our operations, from project planning and execution to customer service and continuous improvement. The rigorous certification process involved a comprehensive audit of our procedures, documentation, and quality control measures. This achievement reflects our dedication to excellence and provides our clients with additional assurance of our capability to deliver quality services consistently.",
    img: "new-img.png",
    tag: "Certification, Quality Management, Achievement",
  },
  {
    id: 6,
    title: "New Project: Waterproofing for Luxury Residential Complex",
    date: "15/09/2025",
    writer: "Project Management Team",
    description:
      "SP Engineering Works has been awarded a major contract for comprehensive waterproofing of a luxury residential complex in Gurgaon. The project encompasses basement waterproofing, terrace treatment, and bathroom waterproofing for over 200 premium apartments. Our team will be implementing a combination of crystalline waterproofing systems and flexible membrane solutions to ensure long-lasting protection against water ingress. The project is scheduled to commence next month and will be executed in phases over a period of six months.",
    img: "new-img.png",
    tag: "Projects, Residential, Waterproofing",
  }
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
