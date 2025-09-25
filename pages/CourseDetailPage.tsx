
import React from 'react';
import { useParams, Link } from 'react-router-dom';
import { mockCourses } from '../data/mockCourses';
import StarRating from '../components/StarRating';
import CourseCurriculum from '../components/CourseCurriculum';
import CourseAssistant from '../components/CourseAssistant';

const CourseDetailPage: React.FC = () => {
  const { courseId } = useParams<{ courseId: string }>();
  const course = mockCourses.find(c => c.id === courseId);

  if (!course) {
    return (
      <div className="text-center py-20">
        <h2 className="text-3xl font-bold text-gray-800">Course not found</h2>
        <p className="text-gray-500 mt-4">The course you are looking for does not exist.</p>
        <Link to="/" className="mt-6 inline-block bg-indigo-600 text-white font-semibold py-2 px-4 rounded-lg hover:bg-indigo-700 transition-colors">
          Back to Courses
        </Link>
      </div>
    );
  }

  return (
    <div className="max-w-7xl mx-auto">
      <div className="bg-gray-800 text-white -mx-4 -mt-8 sm:-mx-6 lg:-mx-8 p-8 md:p-12 shadow-lg">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <p className="text-sm font-semibold text-indigo-300 uppercase tracking-wider">{course.category}</p>
            <h1 className="text-3xl md:text-4xl font-extrabold mt-2">{course.title}</h1>
            <p className="mt-4 text-lg text-gray-300 max-w-3xl">{course.description}</p>
            <div className="mt-4 flex items-center space-x-4">
                <div className="flex items-center space-x-1">
                    <span className="font-bold text-amber-400 text-lg">{course.rating.toFixed(1)}</span>
                    <StarRating rating={course.rating} />
                </div>
                <span className="text-gray-400">({course.reviews.toLocaleString()} ratings)</span>
                <span className="text-gray-300">Created by <span className="font-semibold text-white">{course.instructor}</span></span>
            </div>
        </div>
      </div>
      
      <div className="mt-8 grid grid-cols-1 lg:grid-cols-3 gap-8 lg:gap-12">
        <div className="lg:col-span-2">
            <div className="bg-white p-6 rounded-lg shadow-md border border-gray-200">
                <h2 className="text-2xl font-bold text-gray-800 mb-4">Course Description</h2>
                <p className="text-gray-600 leading-relaxed whitespace-pre-wrap">{course.longDescription}</p>
            </div>
            <div className="mt-8">
                 <h2 className="text-2xl font-bold text-gray-800 mb-4">Course Content</h2>
                <CourseCurriculum curriculum={course.curriculum} />
            </div>
        </div>
        
        <div className="lg:col-span-1 space-y-8">
             <div className="bg-white rounded-lg shadow-lg border border-gray-200 overflow-hidden">
                <img src={course.imageUrl} alt={course.title} className="w-full h-48 object-cover"/>
                <div className="p-6">
                    <p className="text-4xl font-bold text-gray-800">${course.price}</p>
                    <button className="mt-4 w-full bg-indigo-600 text-white font-bold py-3 px-4 rounded-lg hover:bg-indigo-700 transition-all duration-300 transform hover:scale-105">
                        Add to Cart
                    </button>
                    <button className="mt-2 w-full bg-gray-200 text-gray-800 font-bold py-3 px-4 rounded-lg hover:bg-gray-300 transition-colors">
                        Buy Now
                    </button>
                </div>
            </div>
            <CourseAssistant course={course} />
        </div>
      </div>
    </div>
  );
};

export default CourseDetailPage;
