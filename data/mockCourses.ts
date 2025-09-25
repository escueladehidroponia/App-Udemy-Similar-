
import { Course } from '../types';

export const mockCourses: Course[] = [
  {
    id: 'react-complete-guide',
    title: 'React - The Complete Guide (incl Hooks, Router, Redux)',
    instructor: 'Maximilian Schwarzmüller',
    description: 'Dive in and learn React.js from scratch! Learn Reactjs, Hooks, Redux, React Router, Next.js, Best Practices and way more!',
    longDescription: 'This course is your ultimate guide to mastering React.js. We will start from the very basics, understanding what React is and how it works. Then we will move on to advanced topics like state management with Redux, routing with React Router, and even touch upon server-side rendering with Next.js. By the end of this course, you will be able to build complex and scalable web applications with React.',
    rating: 4.8,
    reviews: 188345,
    price: 84.99,
    imageUrl: 'https://picsum.photos/seed/react/600/400',
    category: 'Web Development',
    curriculum: [
      {
        id: 's1',
        title: 'Getting Started',
        lectures: [
          { id: 'l1-1', title: 'Course Introduction', duration: '08:54' },
          { id: 'l1-2', title: 'What is React?', duration: '12:30' },
          { id: 'l1-3', title: 'Setting up the Development Environment', duration: '15:10' },
        ],
      },
      {
        id: 's2',
        title: 'React Basics & Working with Components',
        lectures: [
          { id: 'l2-1', title: 'Understanding JSX', duration: '10:22' },
          { id: 'l2-2', title: 'Functional vs. Class Components', duration: '14:05' },
          { id: 'l2-3', title: 'Handling Events', duration: '09:45' },
        ],
      },
      {
        id: 's3',
        title: 'State and Props',
        lectures: [
          { id: 'l3-1', title: 'Introducing "useState" Hook', duration: '18:15' },
          { id: 'l3-2', title: 'Passing Data with Props', duration: '22:00' },
          { id: 'l3-3', title: 'Lifting State Up', duration: '11:30' },
        ],
      },
    ],
  },
  {
    id: 'python-for-everybody',
    title: 'Python for Everybody Specialization',
    instructor: 'Dr. Charles Severance',
    description: 'This Specialization builds on the success of the Python for Everybody course and will introduce fundamental programming concepts including data structures, networked application program interfaces, and databases, using the Python programming language.',
    longDescription: 'Learn the fundamentals of programming with one of the most popular and versatile languages, Python. This course will take you from a complete beginner to a confident programmer. You will learn about variables, conditional execution, repeated execution, and how we use functions. This course covers chapters 1-5 of the "Python for Everybody" textbook.',
    rating: 4.9,
    reviews: 250102,
    price: 49.99,
    imageUrl: 'https://picsum.photos/seed/python/600/400',
    category: 'Programming',
    curriculum: [
      {
        id: 's1',
        title: 'Introduction to Python',
        lectures: [
          { id: 'l1-1', title: 'Why we Program', duration: '10:00' },
          { id: 'l1-2', title: 'Installing Python', duration: '07:30' },
        ],
      },
      {
        id: 's2',
        title: 'Variables and Expressions',
        lectures: [
          { id: 'l2-1', title: 'Variables, Expressions, and Statements', duration: '15:00' },
          { id: 'l2-2', title: 'User Input', duration: '08:45' },
        ],
      },
    ],
  },
  {
    id: 'ux-design-fundamentals',
    title: 'UX Design Fundamentals',
    instructor: 'Joe Natoli',
    description: 'Learn the principles of User Experience (UX) Design and apply them to create intuitive and user-friendly digital products.',
    longDescription: 'This course provides a comprehensive introduction to the field of UX design. You will learn about the importance of user research, how to create user personas and journey maps, and the fundamentals of information architecture and wireframing. The course is packed with real-world examples and hands-on exercises to help you build a strong foundation in UX.',
    rating: 4.7,
    reviews: 45231,
    price: 79.99,
    imageUrl: 'https://picsum.photos/seed/ux/600/400',
    category: 'Design',
    curriculum: [
      {
        id: 's1',
        title: 'Introduction to UX Design',
        lectures: [
          { id: 'l1-1', title: 'What is UX?', duration: '11:20' },
          { id: 'l1-2', title: 'The UX Design Process', duration: '14:55' },
        ],
      },
      {
        id: 's2',
        title: 'User Research',
        lectures: [
          { id: 'l2-1', title: 'Conducting User Interviews', duration: '20:10' },
          { id: 'l2-2', title: 'Creating User Personas', duration: '16:30' },
        ],
      },
    ],
  },
  {
    id: 'aws-certified-solutions-architect',
    title: 'AWS Certified Solutions Architect - Associate 2024',
    instructor: 'Stephane Maarek',
    description: 'Pass the AWS Certified Solutions Architect - Associate exam. Learn all about AWS, and be ready for your career!',
    longDescription: 'Prepare for the AWS Certified Solutions Architect - Associate exam with this comprehensive and up-to-date course. We cover all the key services, including EC2, S3, RDS, VPC, and more. With a mix of theory lectures, hands-on labs, and practice exams, you will gain the knowledge and confidence needed to pass the exam and excel in a cloud computing career.',
    rating: 4.7,
    reviews: 215432,
    price: 94.99,
    imageUrl: 'https://picsum.photos/seed/aws/600/400',
    category: 'IT & Software',
    curriculum: [
      {
        id: 's1',
        title: 'Introduction to AWS',
        lectures: [
          { id: 'l1-1', title: 'What is Cloud Computing?', duration: '09:15' },
          { id: 'l1-2', title: 'AWS Global Infrastructure', duration: '12:40' },
        ],
      },
      {
        id: 's2',
        title: 'Identity and Access Management (IAM)',
        lectures: [
          { id: 'l2-1', title: 'Users, Groups, Roles, and Policies', duration: '25:00' },
          { id: 'l2-2', title: 'IAM Best Practices', duration: '10:50' },
        ],
      },
    ],
  },
];
