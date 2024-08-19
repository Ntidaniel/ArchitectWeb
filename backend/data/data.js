const path = require('path');

let icons;
if (typeof window !== 'undefined') {
  // For frontend environment (React)
  icons = {
    IoCallOutline: require("react-icons/io5").IoCallOutline,
    IoLocationOutline: require("react-icons/io5").IoLocationOutline,
    MdOutlineAlternateEmail: require("react-icons/md").MdOutlineAlternateEmail,
    FaYoutube: require("react-icons/fa").FaYoutube,
    FaInstagram: require("react-icons/fa").FaInstagram,
    FaDrawPolygon: require("react-icons/fa").FaDrawPolygon,
    CiLinkedin: require("react-icons/ci").CiLinkedin,
    CiFacebook: require("react-icons/ci").CiFacebook,
    SiBlueprint: require("react-icons/si").SiBlueprint,
    SiHomeassistantcommunitystore: require("react-icons/si").SiHomeassistantcommunitystore,
    AiOutlineFileProtect: require("react-icons/ai").AiOutlineFileProtect,
    IoConstructSharp: require("react-icons/io5").IoConstructSharp,
    GrUserManager: require("react-icons/gr").GrUserManager
  };
} else {
  // For Node.js environment
  icons = {
    IoCallOutline: 'IoCallOutline Placeholder',
    IoLocationOutline: 'IoLocationOutline Placeholder',
    MdOutlineAlternateEmail: 'MdOutlineAlternateEmail Placeholder',
    FaYoutube: 'FaYoutube Placeholder',
    FaInstagram: 'FaInstagram Placeholder',
    FaDrawPolygon: 'FaDrawPolygon Placeholder',
    CiLinkedin: 'CiLinkedin Placeholder',
    CiFacebook: 'CiFacebook Placeholder',
    SiBlueprint: 'SiBlueprint Placeholder',
    SiHomeassistantcommunitystore: 'SiHomeassistantcommunitystore Placeholder',
    AiOutlineFileProtect: 'AiOutlineFileProtect Placeholder',
    IoConstructSharp: 'IoConstructSharp Placeholder',
    GrUserManager: 'GrUserManager Placeholder'
  };
}

// Helper function to get image paths
const getImagePath = (filename) => path.join(__dirname, '/assets', filename);

// Image paths
const images = {
  profile2: getImagePath('profile-2.jpeg'),
  profile3: getImagePath('profile-3.jpeg'),
  profile4: getImagePath('profile-4.jpeg'),
  profile5: getImagePath('profile-5.jpeg'),
  member1: getImagePath('member-1.jpeg'),
  member2: getImagePath('member-2.jpeg'),
  member3: getImagePath('member-3.jpeg'),
  member4: getImagePath('member-4.jpeg'),
  building_5: getImagePath('building-5.jpeg'),
  building_6: getImagePath('building-6.jpeg'),
  building_7: getImagePath('building-7.jpeg'),
  building_8: getImagePath('building-8.jpeg'),
  building_9: getImagePath('building-9.jpeg'),
  building_10: getImagePath('building-10.jpeg'),
  blog_1: getImagePath('blog-1.jpeg'),
  blog_2: getImagePath('blog-2.jpeg'),
  blog_3: getImagePath('blog-3.jpeg')
};

const {
  profile2, profile3, profile4, profile5,
  member1, member2, member3, member4,
  building_5, building_6, building_7,
  building_8, building_9, building_10,
  blog_1, blog_2, blog_3
} = images;

const navTabs = [
  { name: "Home", id: 'header' },
  { name: "About Us", id: 'about' },
  { name: "Services", id: 'services' },
  { name: "Team", id: 'team' },
  { name: "Project", id: 'project' },
  { name: "Testimonial", id: 'testimonial' },
  { name: "Blog", id: 'blog' },
];

const services = [
  {
    title: "General Contracting",
    icon: icons.SiBlueprint,
    description: `This involves overseeing the entire construction project from start to finish, 
        including hiring subcontractors, managing the budget, scheduling, and ensuring that the
        project meets all specifications and regulations.`,
  },
  {
    title: "Design-Build Services",
    icon: icons.FaDrawPolygon,
    description: `This service combines both the design and construction phases into a single 
       contract, streamlining the process and improving communication between the design and
        construction teams.`,
  },
  {
    title: "Project Management",
    icon: icons.GrUserManager,
    description: `Construction companies often provide project management services, which include 
       planning, coordinating, and overseeing projects to ensure they are completed on time, within 
       budget, and to the required quality standards.`,
  },
  {
    title: "Renovation and Remodeling",
    icon: icons.SiHomeassistantcommunitystore,
    description: `Many construction companies specialize in renovation and remodeling services, 
                which involve updating and improving existing structures. This can range from minor 
                repairs to major overhauls of residential, commercial, or industrial properties.`,
  },
  {
    title: "Site Preparation",
    icon: icons.AiOutlineFileProtect,
    description: `Before construction begins, companies often handle site preparation tasks such 
    as land clearing, excavation, grading, and utility installation to ensure the site is ready 
    for building.`,
  },
  {
    title: "Specialty Construction Services",
    icon: icons.IoConstructSharp,
    description: `This can include services like roofing, concrete work, steel erection, plumbing, 
    electrical work, and other specialized trades necessary for specific aspects of the construction project.`,
  },
];

const teams = [
  {
    name: "Eunice",
    role: "Technician",
    image: member1,
    social: [
      { name: "Facebook", icon: icons.CiFacebook, url: "http://facebook.com" },
      { name: "LinkedIn", icon: icons.CiLinkedin, url: "http://linkedin.com" },
      { name: "Youtube", icon: icons.FaYoutube, url: "https://www.youtube.com" },
      { name: "Instagram", icon: icons.FaInstagram, url: "http://instagram.com" },
    ]
  },
  {
    name: "Felixic",
    role: "Technician",
    image: member2,
    social: [
      { name: "Facebook", icon: icons.CiFacebook, url: "http://facebook.com" },
      { name: "LinkedIn", icon: icons.CiLinkedin, url: "http://linkedin.com" },
      { name: "Youtube", icon: icons.FaYoutube, url: "https://www.youtube.com" },
      { name: "Instagram", icon: icons.FaInstagram, url: "http://instagram.com" },
    ]
  },
  {
    name: "Santan Dennise",
    role: "Technician",
    image: member2,
    social: [
      { name: "Facebook", icon: icons.CiFacebook, url: "http://facebook.com" },
      { name: "LinkedIn", icon: icons.CiLinkedin, url: "http://linkedin.com" },
      { name: "Youtube", icon: icons.FaYoutube, url: "https://www.youtube.com" },
      { name: "Instagram", icon: icons.FaInstagram, url: "http://instagram.com" },
    ]
  },
  {
    name: "Isabel",
    role: "Technician",
    image: member3,
    social: [
      { name: "Facebook", icon: icons.CiFacebook, url: "http://facebook.com" },
      { name: "LinkedIn", icon: icons.CiLinkedin, url: "http://linkedin.com" },
      { name: "Youtube", icon: icons.FaYoutube, url: "https://www.youtube.com" },
      { name: "Instagram", icon: icons.FaInstagram, url: "http://instagram.com" },
    ]
  },
  {
    name: "Selinam Donetta",
    role: "Technician",
    image: member3,
    social: [
      { name: "Facebook", icon: icons.CiFacebook, url: "http://facebook.com" },
      { name: "LinkedIn", icon: icons.CiLinkedin, url: "http://linkedin.com" },
      { name: "Youtube", icon: icons.FaYoutube, url: "https://www.youtube.com" },
      { name: "Instagram", icon: icons.FaInstagram, url: "http://instagram.com" },
    ]
  },
  {
    name: "Daniel Godfred",
    role: "Technician",
    image: member4,
    social: [
      { name: "Facebook", icon: icons.CiFacebook, url: "http://facebook.com" },
      { name: "LinkedIn", icon: icons.CiLinkedin, url: "http://linkedin.com" },
      { name: "Youtube", icon: icons.FaYoutube, url: "https://www.youtube.com" },
      { name: "Instagram", icon: icons.FaInstagram, url: "http://instagram.com" },
    ]
  },
  {
    name: "Gryphosa",
    role: "Technician",
    image: member4,
    social: [
      { name: "Facebook", icon: icons.CiFacebook, url: "http://facebook.com" },
      { name: "LinkedIn", icon: icons.CiLinkedin, url: "http://linkedin.com" },
      { name: "Youtube", icon: icons.FaYoutube, url: "https://www.youtube.com" },
      { name: "Instagram", icon: icons.FaInstagram, url: "http://instagram.com" },
    ]
  },
];

const projects = [
  {
    title: "Residential Development Project",
    image: building_5,
    description: `A comprehensive residential development involving the construction of a new 
        housing community from initial site clearing and preparation to final home construction and landscaping`,
  },
  {
    title: "Commercial Office Building",
    image: building_6,
    description: `The construction of a multi-story office building including all 
       architectural and structural design, coordination of specialized trades for 
       HVAC and electrical systems, and complete project oversight.`,
  },
  {
    title: "Retail Space Renovation",
    image: building_7,
    description: `Transforming an outdated retail store into a modern commercial space, 
    involving interior demolition, new layout design, installation of new fixtures, 
    and updating utilities.`,
  },
  {
    title: "Industrial Warehouse Construction",
    image: building_8,
    description: `Building a large-scale industrial warehouse, including land clearing,
     foundation work, steel structure erection, and complete construction management 
     from start to finish.`,
  },
  {
    title: "Historic Building Restoration",
    image: building_9,
    description: `Restoring and renovating a historic building to preserve its architectural integrity while updating it to meet modern standards, involving meticulous 
    craftsmanship and specialized restoration techniques.`,
  },
  {
    title: "Educational Facility Expansion",
    image: building_10,
    description: `Expanding an existing school with new classrooms and facilities, encompassing all phases from initial design and site preparation to construction and 
    final project management to ensure timely completion.`,
  },
];

const testimonial = [
  {
    image: profile2,
    name: 'Lionel Messi',
    review: ` "ExcelsiorTech transformed our vision into reality with impeccable design and attention to detail. Their creativity and professionalism exceeded our expectations. We couldn’t be happier with our new space!" - Lionel Messi.`
  },
  {
    image: profile3,
    name: 'Cristiano Ronaldo',
    review: ` Working with ExcelsiorTech was a fantastic experience. Their architectural expertise and innovative solutions brought our project to life. Highly recommend them for any architectural needs!" - Cristiano Ronaldo.`,
  },
  {
    image: profile4,
    name: 'Jude Bellingham',
    review: ` ExcelsiorTech is a true professional team. Their dedication to perfection and unique design perspective made our project a stunning success. We are thrilled with the outcome!" - Jude Bellingham.`,
  },
  {
    image: profile5,
    name: 'Kylian Mbappe',
    review: `"Exceptional work by ExcelsiorTech. They captured our ideas perfectly and delivered a breathtaking design. Their commitment to quality and client satisfaction is unmatched!" - Kylian Mbappe.`,
  },
];

const blog = [
  {
    title: "Sustainable Architecture: A Green Future",
    description: ` Discover the latest trends in sustainable architecture and how green building practices are shaping the future of construction. Learn about energy-efficient designs, eco-friendly materials, and innovative technologies that reduce the environmental impact of buildings.`,
    image: blog_1
  },
  {
    title: "The Art of Residential Design",
    description: ` Explore the art of residential design and the elements that create a harmonious living space. From layout and lighting to material selection and interior décor, discover how to create a home that reflects your personal style while providing comfort and functionality.`,
    image: blog_2
  },
  {
    title: "Innovative Commercial Spaces",
    description: ` Dive into the world of innovative commercial spaces and how design can influence productivity, collaboration, and customer experience. Learn about the latest trends in office design, retail spaces, and multi-use buildings that prioritize flexibility and adaptability.`,
    image: blog_3
  },
];

const contacts = [
  {
    icon: icons.IoLocationOutline,
    title: "Our Address",
    description: "Accra, Ghana",
  },
  {
    icon: icons.IoCallOutline,
    title: "Call Us",
    description: "+233(0)54 663 5852",
  },
  {
    icon: icons.MdOutlineAlternateEmail,
    title: "Our Email",
    description: "info.excelsiortech@gmail.com",
  },
];

const footer = [
  {
    name: "LinkedIn",
    icon: icons.CiLinkedin,
    url: "http://linkedin.com",
  },
  {
    name: "Facebook",
    icon: icons.CiFacebook,
    url: "http://facebook.com",
  },
  {
    name: "Youtube",
    icon: icons.FaYoutube,
    url: "https://www.youtube.com",
  },
  {
    name: "Instagram",
    icon: icons.FaInstagram,
    url: "http://instagram.com",
  },
];

module.exports = {
  navTabs,
  services,
  teams,
  projects,
  testimonial,
  blog,
  contacts,
//   footer
};
