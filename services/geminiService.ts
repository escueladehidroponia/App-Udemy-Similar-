
import { GoogleGenAI } from "@google/genai";
import { Course } from '../types';

if (!process.env.API_KEY) {
  throw new Error("API_KEY environment variable not set");
}

const ai = new GoogleGenAI({ apiKey: process.env.API_KEY });

export const askCourseAssistant = async (course: Course, question: string): Promise<string> => {
  const model = 'gemini-2.5-flash';

  const curriculumContext = course.curriculum.map(section => 
    `Section: ${section.title}\nLectures:\n${section.lectures.map(lecture => `- ${lecture.title} (${lecture.duration})`).join('\n')}`
  ).join('\n\n');

  const systemInstruction = `You are a helpful and knowledgeable course assistant for an online learning platform. Your name is CourseBot.
Your goal is to answer student questions based *only* on the provided course curriculum and description.
Do not invent information or answer questions outside the scope of the provided course material.
If a question cannot be answered from the curriculum, politely state that the information is not covered in the course outline.
Be friendly, concise, and encouraging.
Course Title: ${course.title}
Course Description: ${course.description}
`;

  const prompt = `
HERE IS THE COURSE CURRICULUM:
---
${curriculumContext}
---

Based on the curriculum above, please answer the following student's question:

QUESTION: "${question}"
`;

  try {
    const response = await ai.models.generateContent({
        model: model,
        contents: prompt,
        config: {
            systemInstruction: systemInstruction,
            temperature: 0.5,
            topP: 0.95,
            topK: 64
        }
    });

    return response.text;
  } catch (error) {
    console.error("Error calling Gemini API:", error);
    return "I'm sorry, but I'm having trouble connecting to my knowledge base right now. Please try again in a moment.";
  }
};
