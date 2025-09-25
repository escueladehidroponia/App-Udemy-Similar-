
import React from 'react';
import { Link } from 'react-router-dom';
import { Course } from '../types';
import StarRating from './StarRating';

interface CourseCardProps {
  course: Course;
}

const CourseCard: React.FC<CourseCardProps> = ({ course }) => {
  return (
    <Link to={`/course/${course.id}`} className="block group">
      <div className="bg-white rounded-lg shadow-md overflow-hidden h-full flex flex-col transition-all duration-300 hover:shadow-xl hover:-translate-y-1">
        <img className="h-40 w-full object-cover" src={course.imageUrl} alt={course.title} />
        <div className="p-4 flex flex-col flex-grow">
          <h3 className="text-lg font-semibold text-gray-800 group-hover:text-indigo-600 transition-colors truncate">{course.title}</h3>
          <p className="text-sm text-gray-500 mt-1">{course.instructor}</p>
          <div className="flex items-center mt-2">
            <span className="text-amber-500 font-bold mr-1">{course.rating.toFixed(1)}</span>
            <StarRating rating={course.rating} />
            <span className="text-xs text-gray-400 ml-2">({course.reviews.toLocaleString()})</span>
          </div>
          <div className="mt-auto pt-4">
             <p className="text-xl font-bold text-gray-800">${course.price}</p>
          </div>
        </div>
      </div>
    </Link>
  );
};

export default CourseCard;
