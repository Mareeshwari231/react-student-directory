import React, { useState } from "react";
import StudentCard from "./StudentCard";

export default function App() {
  // State for the list of students
  const [students, setStudents] = useState([]);
  // State for the input values
  const [name, setName] = useState("");
  const [course, setCourse] = useState("");

  // Add student
  const addStudent = () => {
    if (!name.trim() || !course.trim()) return; // prevent empty entries
    setStudents([...students, { id: Date.now(), name, course }]);
    setName("");
    setCourse("");
  };

  // Delete student
  const deleteStudent = (id) => {
    setStudents(students.filter((student) => student.id !== id));
  };

  return (
    <div>
      <h1>Student Directory</h1>

      {/* Input fields */}
      <input
        type="text"
        placeholder="Student Name"
        value={name}
        onChange={(e) => setName(e.target.value)}
      />
      <input
        type="text"
        placeholder="Course"
        value={course}
        onChange={(e) => setCourse(e.target.value)}
      />
      <button onClick={addStudent}>Add</button>

      {/* Student list */}
      {students.length === 0 ? (
        <p>No students yet.</p>
      ) : (
        students.map((student) => (
          <StudentCard
            key={student.id}
            name={student.name}
            course={student.course}
            onDelete={() => deleteStudent(student.id)}
          />
        ))
      )}
    </div>
  );
}
