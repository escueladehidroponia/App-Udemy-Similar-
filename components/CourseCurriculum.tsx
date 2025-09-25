
import React from 'react';
import { Section } from '../types';

interface CourseCurriculumProps {
  curriculum: Section[];
}

const CourseCurriculum: React.FC<CourseCurriculumProps> = ({ curriculum }) => {
  const totalLectures = curriculum.reduce((sum, section) => sum + section.lectures.length, 0);

  return (
    <div className="border border-gray-200 rounded-lg">
      <div className="p-4 bg-gray-50 rounded-t-lg border-b border-gray-200">
        <h3 className="font-bold text-lg">Curriculum</h3>
        <p className="text-sm text-gray-500">{curriculum.length} sections • {totalLectures} lectures</p>
      </div>
      {curriculum.map((section, index) => (
        <details key={section.id} className="group" open={index === 0}>
          <summary className="flex justify-between items-center p-4 cursor-pointer hover:bg-gray-100 transition-colors border-b border-gray-200 list-none">
            <span className="font-semibold">{section.title}</span>
            <div className="flex items-center">
              <span className="text-sm text-gray-500 mr-4">{section.lectures.length} lectures</span>
              <svg className="w-5 h-5 text-gray-500 transform transition-transform group-open:rotate-180" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 9l-7 7-7-7"></path></svg>
            </div>
          </summary>
          <ul className="p-4 bg-white">
            {section.lectures.map(lecture => (
              <li key={lecture.id} className="flex justify-between items-center py-2 border-b border-gray-100 last:border-b-0">
                <div className="flex items-center">
                  <svg className="w-4 h-4 text-gray-400 mr-3" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M14.752 11.168l-3.197-2.132A1 1 0 0010 9.87v4.263a1 1 0 001.555.832l3.197-2.132a1 1 0 000-1.664z"></path><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M21 12a9 9 0 11-18 0 9 9 0 0118 0z"></path></svg>
                  <span className="text-gray-700">{lecture.title}</span>
                </div>
                <span className="text-sm text-gray-500">{lecture.duration}</span>
              </li>
            ))}
          </ul>
        </details>
      ))}
    </div>
  );
};

export default CourseCurriculum;
