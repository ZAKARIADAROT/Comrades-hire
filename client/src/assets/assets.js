import logo from "./logo.svg";
import search_icon from "./search_icon.svg";
import company_icon from "./company_icon.svg";
import microsoft_logo from "./microsoft_logo.svg";
import walmart_logo from "./walmart_logo.svg";
import accenture_logo from "./accenture_logo.png";
import profile_img from "./profile_img.png";
import app_main_img from "./app_main_img.png";
import cross_icon from './cross_icon.svg';
import location_icon from './location_icon.svg';
import money_icon from './money_icon.svg';
import suitcase_icon from './suitcase_icon.svg';
import person_icon from './person_icon.svg';
import upload_area from './upload_area.svg';
import resume_selected from './resume_selected.svg';
import resume_not_selected from './resume_not_selected.svg';
import play_store from './play_store.svg';
import app_store from './app_store.svg';
import back_arrow_icon from './back_arrow_icon.svg';
import left_arrow_icon from './left_arrow_icon.svg';
import right_arrow_icon from './right_arrow_icon.svg';
import facebook_icon from './facebook_icon.svg'
import instagram_icon from './instagram_icon.svg'
import twitter_icon from './twitter_icon.svg'
import home_icon from './home_icon.svg'
import add_icon from './add_icon.svg'
import profile_upload_icon from './profile_upload_icon.svg'
import person_tick_icon from './person_tick_icon.svg'
import resume_download_icon from './resume_download_icon.svg'
import delete_icon from './delete_icon.svg'
import email_icon from './email_icon.svg'
import lock_icon from './lock_icon.svg'
import samsung_logo from './samsung_logo.png'
import adobe_logo from './adobe_logo.png'
import amazon_logo from './amazon_logo.png'

export const assets = {
    logo,
    search_icon,
    cross_icon,
    upload_area,
    company_icon,
    resume_not_selected,
    resume_selected,
    microsoft_logo,
    walmart_logo,
    accenture_logo,
    app_main_img,
    play_store,
    app_store,
    back_arrow_icon,
    left_arrow_icon,
    right_arrow_icon,
    location_icon,
    money_icon,
    suitcase_icon,
    person_icon,
    facebook_icon,
    instagram_icon,
    twitter_icon,
    home_icon,
    add_icon,
    person_tick_icon,
    resume_download_icon,
    profile_img,
    delete_icon,
    profile_upload_icon,
    email_icon,
    lock_icon,
    samsung_logo,
    adobe_logo,
    amazon_logo
}

export const JobCategories = [
    "Programming",
    "Data Science",
    "Designing",
    "Networking",
    "Management",
    "Marketing"
];

export const JobLocations = [
    "Nairobi",
    "Mombasa",
    "Nakuru",
    "Kisumu",
    "Kiambu",
    "Eldoret",
    "Machakos",
    "Naivasha",
    "Kericho"
];

// Sample data for Manage Jobs Page
export const manageJobsData = [
    { _id: 1, title: "Customer Service Representative", date: 1729681667114, location: "Nairobi", applicants: 12 },
    { _id: 2, title: "Retail Sales Assistant", date: 1729681667114, location: "Mombasa", applicants: 8 },
    { _id: 3, title: "Junior Web Developer", date: 1729681667114, location: "Nairobi", applicants: 5 },
    { _id: 4, title: "Social Media Assistant", date: 1729681667114, location: "Kiambu", applicants: 10 }
];

// Sample data for Profile Page
export const jobsApplied = [
    {
        company: 'Amazon',
        title: 'Full Stack Developer',
        location: 'Nairobi',
        date: '22 Aug, 2024',
        status: 'Pending',
        logo: company_icon,
    },
    {
        company: 'Meta',
        title: 'Data Scientist',
        location: 'San Francisco',
        date: '22 Aug, 2024',
        status: 'Rejected',
        logo: company_icon,
    },
    {
        company: 'Google',
        title: 'Marketing Manager',
        location: 'London',
        date: '25 Sep, 2024',
        status: 'Accepted',
        logo: company_icon,
    },
    {
        company: 'Qualcomm',
        title: 'UI/UX Designer',
        location: 'Dubai',
        date: '15 Oct, 2024',
        status: 'Pending',
        logo: company_icon,
    },
    {
        company: 'Microsoft',
        title: 'Full Stack Developer',
        location: 'Mogadishu',
        date: '25 Sep, 2024',
        status: 'Accepted',
        logo: company_icon,
    },
];

export const viewApplicationsPageData = [
    { _id: 1, name: "Richard Sanford", jobTitle: "Full Stack Developer", location: "Bangalore", imgSrc: profile_img },
    { _id: 2, name: "Enrique Murphy", jobTitle: "Data Scientist", location: "San Francisco", imgSrc: profile_img },
    { _id: 3, name: "Alison Powell", jobTitle: "Marketing Manager", location: "London", imgSrc: profile_img },
    { _id: 4, name: "Richard Sanford", jobTitle: "UI/UX Designer", location: "Dubai", imgSrc: profile_img },
    { _id: 5, name: "Enrique Murphy", jobTitle: "Full Stack Developer", location: "Hyderabad", imgSrc: profile_img },
    { _id: 6, name: "Alison Powell", jobTitle: "Data Scientist", location: "New Delhi", imgSrc: profile_img },
    { _id: 7, name: "Richard Sanford", jobTitle: "Marketing Manager", location: "Chennai", imgSrc: profile_img },
];

export const jobsData = [
  {
    _id: '1',
    title: "Customer Service Representative",
    location: "Nairobi",
    level: "Beginner Level",
    companyId: {
      "_id": "c001",
      "name": "Kenya Connect Ltd",
      "email": "careers@kenyaconnect.co.ke",
      "image": company_icon,
    },
    description: `<p>Handle customer inquiries via phone and email, assist with product information and service issues.</p>`,
    salary: 18000,
    date: 1729681667114,
    category: "Management",
  },
  {
    _id: '2',
    title: "Retail Sales Assistant",
    location: "Mombasa",
    level: "Beginner Level",
    companyId: {
      "_id": "c002",
      "name": "Mombasa Traders Ltd",
      "email": "jobs@mombasatraders.co.ke",
      "image": company_icon,
    },
    description: `<p>Assist customers in selecting products, stock shelves, and manage the cash register.</p>`,
    salary: 15000,
    date: 1729681667114,
    category: "Marketing",
  },
  {
    _id: '3',
    title: "Barista",
    location: "Nakuru",
    level: "Beginner Level",
    companyId: {
      "_id": "c003",
      "name": "Coffee Hub Ltd",
      "email": "jobs@coffeehub.co.ke",
      "image": company_icon,
    },
    description: `<p>Prepare and serve coffee and beverages, maintain the café environment, and assist with customer orders.</p>`,
    salary: 14000,
    date: 1729681667114,
    category: "Marketing",
  },
  {
    _id: '4',
    title: "Delivery Rider",
    location: "Kisumu",
    level: "Beginner Level",
    companyId: {
      "_id": "c004",
      "name": "QuickMove Logistics",
      "email": "careers@quickmove.co.ke",
      "image": company_icon,
    },
    description: `<p>Deliver packages within the city, maintain timely schedules, and communicate with clients.</p>`,
    salary: 16000,
    date: 1729681667114,
    category: "Management",
  },
  {
    _id: '5',
    title: "Social Media Assistant",
    location: "Kiambu",
    level: "Beginner Level",
    companyId: {
      "_id": "c005",
      "name": "Creative Media Solutions",
      "email": "hr@creativemedia.co.ke",
      "image": company_icon,
    },
    description: `<p>Assist in content creation, schedule posts, and engage with followers on social media platforms.</p>`,
    salary: 17000,
    date: 1729681667114,
    category: "Marketing",
  },
  {
    _id: '6',
    title: "Data Entry Clerk",
    location: "Machakos",
    level: "Beginner Level",
    companyId: {
      "_id": "c006",
      "name": "TechWorks Ltd",
      "email": "jobs@techworks.co.ke",
      "image": company_icon,
    },
    description: `<p>Enter and maintain company data, verify records, and assist with reporting tasks.</p>`,
    salary: 15000,
    date: 1729681667114,
    category: "Data Science",
  },
  {
    _id: '7',
    title: "Graphic Design Intern",
    location: "Nairobi",
    level: "Beginner Level",
    companyId: {
      "_id": "c007",
      "name": "Pixel Studios",
      "email": "interns@pixelstudios.co.ke",
      "image": company_icon,
    },
    description: `<p>Design marketing materials, social media graphics, and assist with creative campaigns.</p>`,
    salary: 18000,
    date: 1729681667114,
    category: "Designing",
  },
  {
    _id: '8',
    title: "Warehouse Assistant",
    location: "Eldoret",
    level: "Beginner Level",
    companyId: {
      "_id": "c008",
      "name": "AgriSupply Ltd",
      "email": "hr@agrisupply.co.ke",
      "image": company_icon,
    },
    description: `<p>Assist in warehouse operations, manage stock, and prepare orders for delivery.</p>`,
    salary: 15000,
    date: 1729681667114,
    category: "Management",
  },
  {
    _id: '9',
    title: "Junior Web Developer",
    location: "Nairobi",
    level: "Intermediate Level",
    companyId: {
      "_id": "c009",
      "name": "WebTech Solutions",
      "email": "jobs@webtech.co.ke",
      "image": company_icon,
    },
    description: `<p>Assist in building and maintaining websites, troubleshoot code, and support senior developers.</p>`,
    salary: 25000,
    date: 1729681667114,
    category: "Programming",
  },
  {
    _id: '10',
    title: "Fitness Instructor Assistant",
    location: "Mombasa",
    level: "Beginner Level",
    companyId: {
      "_id": "c010",
      "name": "FitZone Gym",
      "email": "careers@fitzone.co.ke",
      "image": company_icon,
    },
    description: `<p>Assist with fitness classes, guide clients on equipment, and maintain the gym environment.</p>`,
    salary: 14000,
    date: 1729681667114,
    category: "Management",
  },
  {
    _id: '11',
    title: "Tour Guide",
    location: "Naivasha",
    level: "Beginner Level",
    companyId: {
      "_id": "c011",
      "name": "Safari Adventures Ltd",
      "email": "hr@safariadventures.co.ke",
      "image": company_icon,
    },
    description: `<p>Guide tourists around attractions, provide information, and ensure safety during tours.</p>`,
    salary: 16000,
    date: 1729681667114,
    category: "Marketing",
  },
  {
    _id: '12',
    title: "Retail Cashier",
    location: "Nakuru",
    level: "Beginner Level",
    companyId: {
      "_id": "c012",
      "name": "QuickMart Stores",
      "email": "jobs@quickmart.co.ke",
      "image": company_icon,
    },
    description: `<p>Handle cash transactions, assist customers, and maintain the store's organization.</p>`,
    salary: 14000,
    date: 1729681667114,
    category: "Management",
  },
  {
    _id: '13',
    title: "Photography Assistant",
    location: "Kisumu",
    level: "Beginner Level",
    companyId: {
      "_id": "c013",
      "name": "ShutterPro Studios",
      "email": "careers@shutterpro.co.ke",
      "image": company_icon,
    },
    description: `<p>Assist photographers in shoots, manage equipment, and edit photos.</p>`,
    salary: 15000,
    date: 1729681667114,
    category: "Designing",
  },
  {
    _id: '14',
    title: "Junior Accountant",
    location: "Kiambu",
    level: "Intermediate Level",
    companyId: {
      "_id": "c014",
      "name": "FinServ Ltd",
      "email": "hr@finserv.co.ke",
      "image": company_icon,
    },
    description: `<p>Assist in bookkeeping, invoices, and financial reporting.</p>`,
    salary: 20000,
    date: 1729681667114,
    category: "Data Science",
  },
  {
    _id: '15',
    title: "Content Writer",
    location: "Nairobi",
    level: "Beginner Level",
    companyId: {
      "_id": "c015",
      "name": "WordCraft Media",
      "email": "jobs@wordcraft.co.ke",
      "image": company_icon,
    },
    description: `<p>Write articles, blog posts, and marketing content for clients.</p>`,
    salary: 17000,
    date: 1729681667114,
    category: "Marketing",
  },
  {
    _id: '16',
    title: "IT Support Assistant",
    location: "Eldoret",
    level: "Beginner Level",
    companyId: {
      "_id": "c016",
      "name": "TechSecure Ltd",
      "email": "support@techsecure.co.ke",
      "image": company_icon,
    },
    description: `<p>Provide IT support to clients, troubleshoot software and hardware issues.</p>`,
    salary: 18000,
    date: 1729681667114,
    category: "Networking",
  },
  {
    _id: '17',
    title: "Junior Marketing Assistant",
    location: "Nakuru",
    level: "Beginner Level",
    companyId: {
      "_id": "c017",
      "name": "MarketPro Ltd",
      "email": "careers@marketpro.co.ke",
      "image": company_icon,
    },
    description: `<p>Assist in marketing campaigns, promotions, and client engagement.</p>`,
    salary: 16000,
    date: 1729681667114,
    category: "Marketing",
  },
  {
    _id: '18',
    title: "Food Delivery Assistant",
    location: "Mombasa",
    level: "Beginner Level",
    companyId: {
      "_id": "c018",
      "name": "QuickEats Ltd",
      "email": "jobs@quickeats.co.ke",
      "image": company_icon,
    },
    description: `<p>Deliver food orders to clients, ensure timely service and good customer relations.</p>`,
    salary: 14000,
    date: 1729681667114,
    category: "Management",
  },
  {
    _id: '19',
    title: "Junior Designer",
    location: "Nairobi",
    level: "Intermediate Level",
    companyId: {
      "_id": "c019",
      "name": "BrightDesigns Ltd",
      "email": "careers@brightdesigns.co.ke",
      "image": company_icon,
    },
    description: `<p>Create visual content for clients, assist senior designers in campaigns.</p>`,
    salary: 18000,
    date: 1729681667114,
    category: "Designing",
  },
  {
    _id: '20',
    title: "Warehouse Inventory Clerk",
    location: "Kericho",
    level: "Beginner Level",
    companyId: {
      "_id": "c020",
      "name": "TeaGrowers Logistics",
      "email": "hr@teagrowers.co.ke",
      "image": company_icon,
    },
    description: `<p>Manage stock records, organize warehouse items, and assist in shipments.</p>`,
    salary: 15000,
    date: 1729681667114,
    category: "Management",
  },
  {
    _id: '21',
    title: "Junior Software Tester",
    location: "Nairobi",
    level: "Intermediate Level",
    companyId: {
      "_id": "c021",
      "name": "SoftTest Solutions",
      "email": "jobs@softtest.co.ke",
      "image": company_icon,
    },
    description: `<p>Test software applications, report bugs, and assist developers with improvements.</p>`,
    salary: 20000,
    date: 1729681667114,
    category: "Programming",
  },
  {
    _id: '22',
    title: "Content Moderator",
    location: "Kisumu",
    level: "Beginner Level",
    companyId: {
      "_id": "c022",
      "name": "SafeNet Media",
      "email": "hr@safenet.co.ke",
      "image": company_icon,
    },
    description: `<p>Monitor and moderate online content to ensure compliance with company policies.</p>`,
    salary: 16000,
    date: 1729681667114,
    category: "Marketing",
  },
  {
    _id: '23',
    title: "Part-Time Event Assistant",
    location: "Kiambu",
    level: "Beginner Level",
    companyId: {
      "_id": "c023",
      "name": "EventMakers Ltd",
      "email": "careers@eventmakers.co.ke",
      "image": company_icon,
    },
    description: `<p>Assist in organizing events, manage logistics, and support clients during event execution.</p>`,
    salary: 15000,
    date: 1729681667114,
    category: "Marketing",
  }
];
