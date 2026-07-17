import React from 'react';

const StudentCard = ({ student }) => {
  return (
    <div className="student-card">
      <h3>{student.fullName}</h3>
      <p><strong>Email:</strong> {student.email}</p>
      <p><strong>Phone:</strong> {student.phoneNumber}</p>
      <p><strong>Course:</strong> {student.course}</p>
      <p><strong>Batch:</strong> {student.batch}</p>
      <p><strong>Status:</strong> <span className={`status-badge ${student.status.toLowerCase()}`}>{student.status}</span></p>
    </div>
  );
};

export default StudentCard;