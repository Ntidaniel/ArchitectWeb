const mongoose = require('mongoose');
const Blog = require('./models/Blog');
const Contact = require('./models/Contact');
const Project = require('./models/Project');
const Team = require('./models/Team');
require('dotenv').config();

// Base URL for static assets
const baseURL = 'http://localhost:5000/assets'; // Update port if necessary

// Image URLs
const images = {
    profile2: `${baseURL}/profile-2.jpeg`,
    profile3: `${baseURL}/profile-3.jpeg`,
    profile4: `${baseURL}/profile-4.jpeg`,
    profile5: `${baseURL}/profile-5.jpeg`,
    member1: `${baseURL}/member-1.jpeg`,
    member2: `${baseURL}/member-2.jpeg`,
    member3: `${baseURL}/member-3.jpeg`,
    member4: `${baseURL}/member-4.jpeg`,
    building_5: `${baseURL}/building-5.jpeg`,
    building_6: `${baseURL}/building-6.jpeg`,
    building_7: `${baseURL}/building-7.jpeg`,
    building_8: `${baseURL}/building-8.jpeg`,
    building_9: `${baseURL}/building-9.jpeg`,
    building_10: `${baseURL}/building-10.jpeg`,
    blog_1: `${baseURL}/blog-1.jpeg`,
    blog_2: `${baseURL}/blog-2.jpeg`,
    blog_3: `${baseURL}/blog-3.jpeg`
};

const icons = {
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

const seedData = async () => {
    await mongoose.connect(process.env.MONGO_URI, { useNewUrlParser: true, useUnifiedTopology: true });

    // Clear existing data
    await Blog.deleteMany({});
    await Contact.deleteMany({});
    await Project.deleteMany({});
    await Team.deleteMany({});

    // Add new data
    await Blog.insertMany([
        {
            title: "Sustainable Architecture: A Green Future",
            category: "Architecture",
            image: "https://missionvalleykubota.com/wp-content/uploads/2023/04/construction-site-tractor-1.jpg",
            likeCount: 10,
            commentCount: 2,
        },
        {
            title: "The Art of Residential Design",
            category: "Residential",
            image: "https://apartments.com.gh/oc-content/plugins/blog/img/blog/354.png",
            likeCount: 15,
            commentCount: 5,
        },
        {
            title: "Innovative Commercial Spaces",
            category: "Commercial",
            image: "https://dsuj2mkiosyd2.cloudfront.net/unified-gallery/180625/3484/f4b9ef91/commercial-building_1300-auto.webp?t=1679341620",
            likeCount: 20,
            commentCount: 3,
        },
    ]);

    await Contact.insertMany([
        {
            name: "Our Address",
            value: "Accra, Ghana",
            icon: icons.IoLocationOutline,
        },
        {
            name: "Call Us",
            value: "+233(0)54 663 5852",
            icon: icons.IoCallOutline,
        },
        {
            name: "Our Email",
            value: "info.excelsiortech@gmail.com",
            icon: icons.MdOutlineAlternateEmail,
        },
    ]);

    await Project.insertMany([
        {
            title: "Residential Development Project",
            image: images.building_5,
            description: `A comprehensive residential development involving the construction of a new housing community from initial site clearing and preparation to final home construction and landscaping.`,
        },
        {
            title: "Commercial Office Building",
            image: images.building_6,
            description: `The construction of a multi-story office building including all architectural and structural design, coordination of specialized trades for HVAC and electrical systems, and complete project oversight.`,
        },
        {
            title: "Retail Space Renovation",
            image: images.building_7,
            description: `Transforming an outdated retail store into a modern commercial space, involving interior demolition, new layout design, installation of new fixtures, and updating utilities.`,
        },
        {
            title: "Industrial Warehouse Construction",
            image: images.building_8,
            description: `Building a large-scale industrial warehouse, including land clearing, foundation work, steel structure erection, and complete construction management from start to finish.`,
        },
        {
            title: "Historic Building Restoration",
            image: images.building_9,
            description: `Restoring and renovating a historic building to preserve its architectural integrity while updating it to meet modern standards, involving meticulous craftsmanship and specialized restoration techniques.`,
        },
        {
            title: "Educational Facility Expansion",
            image: images.building_10,
            description: `Expanding an existing school with new classrooms and facilities, encompassing all phases from initial design and site preparation to construction and final project management to ensure timely completion.`,
        },
    ]);

    await Team.insertMany([
        {
            name: "Eunice",
            role: "Technician",
            image: images.member1,
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
            image: images.member2,
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
            image: images.member2,
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
            image: images.member3,
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
            image: images.member3,
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
            image: images.member4,
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
            image: images.member4,
            social: [
                { name: "Facebook", icon: icons.CiFacebook, url: "http://facebook.com" },
                { name: "LinkedIn", icon: icons.CiLinkedin, url: "http://linkedin.com" },
                { name: "Youtube", icon: icons.FaYoutube, url: "https://www.youtube.com" },
                { name: "Instagram", icon: icons.FaInstagram, url: "http://instagram.com" },
            ]
        },
    ]);

    console.log('Database seeded successfully');
    mongoose.connection.close();
};

seedData();
