export type Course = {
  id: string;
  title: string;
  description: string;
  categoryId: string;
  teacherId: string;
  studentsCount: number;
};

export type CreateCourseInput = {
  title: string;
  description: string;
  categoryId: string;
};
