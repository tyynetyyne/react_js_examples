import React from "react";

function Course({ course }) {
  return (
    <tr>
      <td>{course.name}</td>
      <td>{course.instructor}</td>
      <td>{course.location}</td>
    </tr>
  );
}

function Courses({ courses, show }) {
  // console.log("courses", courses);
  if (show) {
    return (
      <div className="courses">
        <table>
          <thead>
            <th>Kurssi</th>
            <th>Opettaja</th>
            <th>Luokka</th>
          </thead>
          <tbody>
            {courses.map(course => (
              <Course course={course} />
            ))}
          </tbody>
        </table>
      </div>
    );
  } else {
    return <div />;
  }
}

export default Courses;
