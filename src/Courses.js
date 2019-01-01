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
            <tr>
              <th>Kurssi</th>
              <th>Opettaja</th>
              <th>Luokka</th>
            </tr>
          </thead>
          <tbody>
            {courses.map(course => (
              <Course course={course} key={course.id} />
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
