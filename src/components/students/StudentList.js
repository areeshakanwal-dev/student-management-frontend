import React from 'react';

// ✅ Add onEdit to the props
const StudentList = ({ students, onDelete, onUpdateStatus, onEdit, loading }) => {
  if (loading) {
    return <div className="loading">Loading students...</div>;
  }

  if (!students || students.length === 0) {
    return (
      <div className="empty-state">
        <p>No students found. Add your first student!</p>
      </div>
    );
  }

  return (
    <div className="student-list-container">
      <div className="list-header">
        <h2>All Students</h2>
        <span className="student-count">{students.length} students</span>
      </div>

      <div className="table-wrapper">
        <table className="student-table">
          <thead>
            <tr>
              <th>Name</th>
              <th>Email</th>
              <th>Phone</th>
              <th>Course</th>
              <th>Batch</th>
              <th>Status</th>
              <th>Actions</th>
            </tr>
          </thead>
          <tbody>
            {students.map((student) => (
              <tr key={student._id}>
                <td className="student-name">{student.fullName}</td>
                <td>{student.email}</td>
                <td>{student.phoneNumber}</td>
                <td>{student.course}</td>
                <td>{student.batch}</td>
                <td>
                  <span className={`status-badge ${student.status.toLowerCase()}`}>
                    {student.status}
                  </span>
                </td>
                <td>
                  <div className="action-group">
                    {/* ✅ Edit Button */}
                    <button
                      onClick={() => onEdit(student)}
                      className="btn btn-edit"
                      title="Edit Student"
                    >
                      ✏️
                    </button>
                    <button
                      onClick={() => onUpdateStatus(student._id, 'Graduated')}
                      className="btn btn-graduate"
                      title="Mark as Graduated"
                    >
                      🎓
                    </button>
                    <button
                      onClick={() => onUpdateStatus(student._id, 'Inactive')}
                      className="btn btn-inactive"
                      title="Mark as Inactive"
                    >
                      ⏸️
                    </button>
                    <button
                      onClick={() => onDelete(student._id)}
                      className="btn btn-delete"
                      title="Delete Student"
                    >
                      🗑️
                    </button>
                  </div>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default StudentList;