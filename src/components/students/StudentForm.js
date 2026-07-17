import React from 'react';

const StudentForm = ({ formData, onChange, onSubmit, loading }) => {
  return (
    <div className="student-form-container">
      <h2>Add New Student</h2>
      <form onSubmit={onSubmit} className="student-form">
        <div className="form-row">
          <div className="form-group">
            <label>Full Name</label>
            <input
              type="text"
              name="fullName"
              placeholder="Enter full name"
              value={formData.fullName}
              onChange={onChange}
              required
            />
          </div>
          <div className="form-group">
            <label>Email</label>
            <input
              type="email"
              name="email"
              placeholder="Enter email address"
              value={formData.email}
              onChange={onChange}
              required
            />
          </div>
        </div>

        <div className="form-row">
          <div className="form-group">
            <label>Phone Number</label>
            <input
              type="tel"
              name="phoneNumber"
              placeholder="Enter phone number"
              value={formData.phoneNumber}
              onChange={onChange}
              required
            />
          </div>
          <div className="form-group">
            <label>Course</label>
            <input
              type="text"
              name="course"
              placeholder="Enter course name"
              value={formData.course}
              onChange={onChange}
              required
            />
          </div>
        </div>

        <div className="form-row">
          <div className="form-group">
            <label>Batch</label>
            <input
              type="text"
              name="batch"
              placeholder="Enter batch (e.g., 2024-A)"
              value={formData.batch}
              onChange={onChange}
              required
            />
          </div>
          <div className="form-group">
            <label>Status</label>
            <select name="status" value={formData.status} onChange={onChange}>
              <option value="Active">Active</option>
              <option value="Inactive">Inactive</option>
              <option value="Graduated">Graduated</option>
              <option value="Suspended">Suspended</option>
            </select>
          </div>
        </div>

        <button type="submit" className="btn btn-primary" disabled={loading}>
          {loading ? 'Adding...' : '+ Add Student'}
        </button>
      </form>
    </div>
  );
};

export default StudentForm;