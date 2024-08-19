import { AiOutlineFileProtect } from "react-icons/ai";
import { CiFacebook, CiLinkedin } from "react-icons/ci";
import { FaDrawPolygon, FaInstagram, FaYoutube } from "react-icons/fa";
import { GrUserManager } from "react-icons/gr";
import { IoCallOutline, IoConstructSharp, IoLocationOutline } from "react-icons/io5";
import { MdOutlineAlternateEmail } from "react-icons/md";
import { SiBlueprint, SiHomeassistantcommunitystore } from "react-icons/si";
import {
  blog_1, blog_2, blog_3,
  building_10,
  building_5, building_6,
  building_7, building_8, building_9,
  member1, member2, member3, member4,
  profile2, profile3, profile4, profile5
} from "./assets";
        

export const navTabs = [
    {name:"Home",id:'header'},
    {name:"About Us",id:'about'},
    {name:"Services",id:'services'},
    {name:"Team",id:'team'},
    {name:"Project",id:'project'},
    {name:"Testimonial",id:'testimonial'},
    {name:"Blog",id:'blog'},
];

export const services = [
  {
    name:"General Contracting",
    icon:<SiBlueprint/>,
    description:`This involves overseeing the entire construction project from start to finish, 
        including hiring subcontractors, managing the budget, scheduling, and ensuring that the
        project meets all specifications and regulations.`,
  },
  {
    name:"Design-Build Services",
    icon:<FaDrawPolygon/>,
    description:`This service combines both the design and construction phases into a single 
       contract, streamlining the process and improving communication between the design and
        construction teams.

    `,
  },
  {
    name:"Project Management",
    icon:<GrUserManager/>,
    description:`Construction companies often provide project management services, which include 
       planning, coordinating, and overseeing projects to ensure they are completed on time, within 
       budget, and to the required quality standards.`,
  },
  {
    name:"Renovation and Remodeling",
    icon:<SiHomeassistantcommunitystore/>,
    description:`Many construction companies specialize in renovation and remodeling services, 
                which involve updating and improving existing structures. This can range from minor 
                repairs to major overhauls of residential, commercial, or industrial properties.`,
  },
  {
    name:"Site Preparation",
    icon:<AiOutlineFileProtect/>,
    description:`Before construction begins, companies often handle site preparation tasks such 
    as land clearing, excavation, grading, and utility installation to ensure the site is ready 
    for building.`,
  },
  {
    name:"Specialty Construction Services",
    icon:<IoConstructSharp/>,
    description:`This can include services like roofing, concrete work, steel erection, plumbing, 
    electrical work, and other specialized trades necessary for specific aspects of the construction project.`,
  },
]

export const teams = [
  {
    name:"Eunice",
    title:"Technician",
    profile:member1,
    social:[
      {name:"Facebook",icon:<CiFacebook/>,url:"http://facebook.com"},
      {name:"LinkedIn",icon:<CiLinkedin/>,url:"http://linkedin.com"},
      {name:"Youtube",icon:<FaYoutube/>,url:"https://www.youtube.com"},
      {name:"Instagram",icon:<FaInstagram/>,url:"http://instagram.com"},
    ]
  },
  {
    name:"Felixic",
    title:"Technician",
    profile:member2,
    social:[
      {name:"Facebook",icon:<CiFacebook/>,url:"http://facebook.com"},
      {name:"LinkedIn",icon:<CiLinkedin/>,url:"http://linkedin.com"},
      {name:"Youtube",icon:<FaYoutube/>,url:"https://www.youtube.com"},
      {name:"Instagram",icon:<FaInstagram/>,url:"http://instagram.com"},
    ]
  },
  {
    name:"Santan Dennise",
    title:"Technician",
    profile:member2,
    social:[
      {name:"Facebook",icon:<CiFacebook/>,url:"http://facebook.com"},
      {name:"LinkedIn",icon:<CiLinkedin/>,url:"http://linkedin.com"},
      {name:"Youtube",icon:<FaYoutube/>,url:"https://www.youtube.com"},
      {name:"Instagram",icon:<FaInstagram/>,url:"http://instagram.com"},
    ]
  },
  {
    name:"Isabel",
    title:"Technician",
    profile:member3,
    social:[
      {name:"Facebook",icon:<CiFacebook/>,url:"http://facebook.com"},
      {name:"LinkedIn",icon:<CiLinkedin/>,url:"http://linkedin.com"},
      {name:"Youtube",icon:<FaYoutube/>,url:"https://www.youtube.com"},
      {name:"Instagram",icon:<FaInstagram/>,url:"http://instagram.com"},
    ]
  },
  {
    name:"Selinam Donetta",
    title:"Technician",
    profile:member3,
    social:[
      {name:"Facebook",icon:<CiFacebook/>,url:"http://facebook.com"},
      {name:"LinkedIn",icon:<CiLinkedin/>,url:"http://linkedin.com"},
      {name:"Youtube",icon:<FaYoutube/>,url:"https://www.youtube.com"},
      {name:"Instagram",icon:<FaInstagram/>,url:"http://instagram.com"},
    ]
  },
  {
    name:"Daniel Godfred",
    title:"Technician",
    profile:member4,
    social:[
      {name:"Facebook",icon:<CiFacebook/>,url:"http://facebook.com"},
      {name:"LinkedIn",icon:<CiLinkedin/>,url:"http://linkedin.com"},
      {name:"Youtube",icon:<FaYoutube/>,url:"https://www.youtube.com"},
      {name:"Instagram",icon:<FaInstagram/>,url:"http://instagram.com"},
    ]
  },
  {
    name:"Gryphosa",
    title:"Technician",
    profile:member4,
    social:[
      {name:"Facebook",icon:<CiFacebook/>,url:"http://facebook.com"},
      {name:"LinkedIn",icon:<CiLinkedin/>,url:"http://linkedin.com"},
      {name:"Youtube",icon:<FaYoutube/>,url:"https://www.youtube.com"},
      {name:"Instagram",icon:<FaInstagram/>,url:"http://instagram.com"},
    ]
  },
  
]

export const projects = [
  {
    title:"Residential Development Project",
    image:building_5,
    description:`A comprehensive residential development involving the construction of a new 
        housing community from initial site clearing and preparation to final home construction and landscaping`,
  },
  {
    title:"Commercial Office Building",
    image:building_6,
    description:`The construction of a multi-story office building including all 
       architectural and structural design, coordination of specialized trades for 
       HVAC and electrical systems, and complete project oversight.`,
  },
  {
    title:"Retail Space Renovation",
    image:building_7,
    description:`Transforming an outdated retail store into a modern commercial space, 
    involving interior demolition, new layout design, installation of new fixtures, 
    and updating utilities.`,
  },
  {
    title:"Industrial Warehouse Construction",
    image:building_8,
    description:`Building a large-scale industrial warehouse, including land clearing,
     foundation work, steel structure erection, and complete construction management 
     from start to finish.`,
  },
  {
    title:"Historic Building Restoration",
    image:building_9,
    description:`Restoring and renovating a historic building to preserve its architectural integrity while updating it to meet modern standards, involving meticulous 
    craftsmanship and specialized restoration techniques.`,
  },
  {
    title:"Educational Facility Expansion",
    image:building_10,
    description:`Expanding an existing school with new classrooms and facilities, encompassing all phases from initial design and site preparation to construction and 
    final project management to ensure timely completion.`,
  },
];


export const testimonial = [
  {
    image:profile2,
    name:'Lionel Messi',
    review:` "ExcelsiorTech transformed our vision into reality with impeccable design and attention to detail. Their creativity and professionalism exceeded our expectations. We couldn’t be happier with our new space!" - Lionel Messi.`
  },
  {
    image:profile3,
    name:'Cristiano Ronaldo',
    review:` Working with ExcelsiorTech was a fantastic experience. Their architectural expertise and innovative solutions brought our project to life. Highly recommend them for any architectural needs!" - Cristiano Ronaldo.

`
  },
  {
    image:profile4,
    name:'Jude Bellingham',
    review:` ExcelsiorTech is a true professional team. Their dedication to perfection and unique design perspective made our project a stunning success. We are thrilled with the outcome!" - Jude Bellingham.`
  },
  {
    image:profile5,
    name:'Kylain Mbappe',
    review:` From concept to completion, ExcelsiorTech was exceptional. Their ability to understand our needs and deliver a beautiful, functional design was outstanding. We are grateful for their expertise." - Kylain Mbappe.

`
  }

];


export const blogs = [
  {
    title: "Sustainable Building Practices: The Future of Construction",
    author: "Maya Collins",
    blog: blog_1,
    date: "2024-07-02",
    description: "Explore the latest trends in sustainable building practices, from energy-efficient designs to eco-friendly materials. Learn how the future of construction is shaping up to be greener and more sustainable than ever before.",
    url: "https://mbdesignandbuild.wordpress.com/2024/08/19/architect-website/"
  },
  {
    title: "Urban Architecture: Balancing Aesthetics and Functionality",
    author: "Alexander Reed",
    blog: blog_2,
    date: "2024-06-18",
    description: "Dive into the world of urban architecture and discover how architects are striking the perfect balance between aesthetics and functionality. This article highlights the challenges and triumphs of designing for densely populated urban environments.",
    url: "https://mbdesignandbuild.wordpress.com/2024/08/19/urban-architecture-balancing-aesthetics-and-functionality/"
  },
  {
    title: "Innovative Technologies in Modern Construction",
    author: "Sophia Martinez",
    blog: blog_3,
    date: "2024-06-28",
    description: "Stay ahead of the curve with this overview of the latest innovative technologies revolutionizing the construction industry. From 3D printing to advanced robotics, discover how these advancements are shaping the future of building.",
    url: "https://mbdesignandbuild.wordpress.com/2024/08/19/innovative-technologies-in-modern-construction/"
  },
];


export const contacts = [
  {
    name:"Email",
    value:"felixic99@gmail.com",
    icon:<MdOutlineAlternateEmail />,
  },
  {
    name:"Phone Number",
    value:"+233 24 540 2719",
    icon:<IoCallOutline/>,
  },
  {
    name:"Address",
    value:"University of Ghana, Legon, Accra",
    icon:<IoLocationOutline/>,
  },
]


export const footer = [
    {
      name:"Explore",
      routes:[
        {name:"Privacy Policy"},
        {name:"Terms and Conditions"},
        {name:"Cookie Policy"},
      ]
    },
    {
        name:"Section",
        routes:[
          {name:"Home",id:'header'},
          {name:"About Us",id:'about'},
          {name:"Services",id:'services'},
          {name:"Team",id:'team'},
          {name:"Project",id:'project'},
          {name:"Testimonial",id:'testimonial'},
          {name:"Blog",id:'blog'},
        ]
      },
]


