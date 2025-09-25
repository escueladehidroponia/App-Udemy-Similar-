
import React, { useState, useMemo } from 'react';
import { mockCourses } from '../data/mockCourses';
import CourseCard from '../components/CourseCard';

const HomePage: React.FC = () => {
  const [searchTerm, setSearchTerm] = useState('');

  const filteredCourses = useMemo(() => {
    if (!searchTerm) {
      return mockCourses;
    }
    return mockCourses.filter(course =>
      course.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
      course.instructor.toLowerCase().includes(searchTerm.toLowerCase()) ||
      course.category.toLowerCase().includes(searchTerm.toLowerCase())
    );
  }, [searchTerm]);

  return (
    <div className="space-y-8">
      <div className="text-center">
        <h1 className="text-4xl md:text-5xl font-extrabold text-gray-900 tracking-tight">
          Welcome to <span className="text-indigo-600">CoursePlat AI</span>
        </h1>
        <p className="mt-4 max-w-2xl mx-auto text-lg text-gray-500">
          Explore our expert-led courses and find your next learning adventure.
        </p>
      </div>

      <div className="max-w-xl mx-auto">
        <input
          type="text"
          placeholder="Search for courses, instructors, or categories..."
          value={searchTerm}
          onChange={(e) => setSearchTerm(e.target.value)}
          className="w-full px-4 py-3 border border-gray-300 rounded-full shadow-sm focus:ring-2 focus:ring-indigo-500 focus:border-indigo-500 transition duration-150 ease-in-out"
        />
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-8">
        {filteredCourses.map(course => (
          <CourseCard key={course.id} course={course} />
        ))}
      </div>
       {filteredCourses.length === 0 && (
        <div className="text-center col-span-full py-16">
            <h3 className="text-2xl font-semibold text-gray-700">No Courses Found</h3>
            <p className="text-gray-500 mt-2">Try adjusting your search term.</p>
        </div>
       )}
    </div>
  );
};

export default HomePage;
