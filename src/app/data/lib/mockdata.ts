import { PropertyProps, CourseProps, BlogsProps } from "../../../types/types";
const multiplyData = <T extends { uniqueId: number }>(data: T[], count: number): T[] => {
  const multiplied = [];
  for (let i = 0; i < count; i++) {
    for (const item of data) {
      multiplied.push({
        ...item,
        uniqueId: parseInt(`${item.uniqueId}${i}`),
      });
    }
  }
  return multiplied;
};


const baseProperties: PropertyProps[] = [
  {
    uniqueId: 101,
    property_name: "Vedavyas-Yoga-Studio",
    property_slug: "graphic-era-university",
    category: "University",
    property_type: "Private",
    property_city: "Dehradun",
    property_state: "Uttarakhand",
    property_country: "India",
    property_logo: ["/img/property-img/property-1.png"],
    property_description: "A leading university in Uttarakhand offering various courses.",
  },
  {
    uniqueId: 102,
    property_name: "YogaVibes Institute",
    property_slug: "yogavibes-institute",
    category: "Institute",
    property_type: "Yoga School",
    property_city: "Rishikesh",
    property_state: "Dehradun ",
    property_country: "Technology",
    property_logo: ["/img/property-img/property-1.png"],
    property_description: "Authentic yoga training in the heart of Rishikesh.",
  },
  {
    uniqueId: 103,
    property_name: "Delhi Technological University",
    property_slug: "delhi-technological-university",
    category: "University",
    property_type: "Public",
    property_city: "New Delhi",
    property_state: "Delhi",
    property_country: "India",
    property_logo: ["/img/property-img/property-1.png"],
    property_description: "A premier engineering university in India.",
  },
];

const baseCourses: CourseProps[] = [
  {
    uniqueId: 201,
    course_name: "Master of Computer Applications",
    course_short_name: "MCA",
    course_level: "Postgraduate",
    course_type: "Computer Science",
    certification_type: "Degree",
    duration: "2 Years",
    course_format: "On-Campus"
  },
  {
    uniqueId: 202,
    course_name: "200-Hour Yoga Teacher Training",
    course_short_name: "200-Hr-YTTC",
    course_level: "Beginner",
    course_type: "Yoga",
    certification_type: "Certificate",
    duration: "1 Month",
    course_format: "In-Person"
  },
  {
    uniqueId: 203,
    course_name: "Bachelor of Technology in AI & ML",
    course_short_name: "B.Tech AI/ML",
    course_level: "Undergraduate",
    course_type: "Engineering",
    certification_type: "Degree",
    duration: "4 Years",
    course_format: "On-Campus"
  },
];

const baseBlogs: BlogsProps[] = [
  {
    uniqueId: 301,
    title: "A Beginner's Guide to Next.js",
    blog: "This is a detailed guide on getting started with Next.js...",
    author_name: "Jane Doe",
    category: ["Technology", "Web Development"],
    tags: ["Next.js", "React", "JavaScript"],
  },
  {
    uniqueId: 302,
    title: "Top 5 Benefits of Daily Yoga",
    blog: "Discover the amazing benefits of incorporating yoga into your daily routine...",
    author_name: "John Smith",
    category: ["Health", "Yoga"],
    tags: ["Wellness", "Fitness", "Mindfulness"],
  },
  {
    uniqueId: 303,
    title: "How to Choose the Right University",
    blog: "Choosing a university is a big decision. Here are some tips...",
    author_name: "Emily White",
    category: ["Education", "Career"],
    tags: ["University", "Students", "Admission"],
  },
];

export const mockProperties: PropertyProps[] = multiplyData(baseProperties, 10);
export const mockCourses: CourseProps[] = multiplyData(baseCourses, 10);
export const mockBlogs: BlogsProps[] = multiplyData(baseBlogs, 10);