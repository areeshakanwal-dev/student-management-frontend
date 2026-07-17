import React, { useState, useEffect } from 'react';
import api from '../services/api';
import StudentForm from '../components/students/StudentForm';
import StudentList from '../components/students/StudentList';
// ✅ Import the Edit Modal
import EditStudentModal from '../components/students/EditStudentModal';

const Students = () => {
  const [students, setStudents] = useState([]);
  const [loading, setLoading] = useState(true);
  const [formLoading, setFormLoading] = useState(false);
  // ✅ State for edit modal
  const [editingStudent, setEditingStudent] = useState(null);
  const [showEditModal, setShowEditModal] = useState(false);
  const [formData, setFormData] = useState({
    fullName: '',
    email: '',
    phoneNumber: '',
    course: '',
    batch: '',
    status: 'Active',
  });

  const fetchStudents = async () => {
    setLoading(true);
    try {
      const response = await api.get('/students');
      setStudents(response.data.data || []);
    } catch (error) {
      console.error('Failed to fetch students:', error);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchStudents();
  }, []);

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setFormLoading(true);
    try {
      await api.post('/students', formData);
      setFormData({
        fullName: '',
        email: '',
        phoneNumber: '',
        course: '',
        batch: '',
        status: 'Active',
      });
      await fetchStudents();
      alert('✅ Student added successfully!');
    } catch (error) {
      alert(error.response?.data?.error || 'Failed to add student');
    } finally {
      setFormLoading(false);
    }
  };

  // ✅ Handle Edit - Opens the modal
  const handleEdit = (student) => {
    setEditingStudent(student);
    setShowEditModal(true);
  };

  // ✅ Handle Update - Called after successful update
  const handleUpdate = async () => {
    await fetchStudents();
    setShowEditModal(false);
    setEditingStudent(null);
  };

  // ✅ Handle Close Modal
  const handleCloseModal = () => {
    setShowEditModal(false);
    setEditingStudent(null);
  };

  const handleDelete = async (id) => {
    if (!window.confirm('Are you sure you want to delete this student?')) return;
    try {
      await api.delete(`/students/${id}`);
      await fetchStudents();
      alert('🗑️ Student deleted successfully!');
    } catch (error) {
      alert(error.response?.data?.error || 'Failed to delete student');
    }
  };

  const handleUpdateStatus = async (id, status) => {
    try {
      await api.put(`/students/${id}`, { status });
      await fetchStudents();
      alert(`✅ Student status updated to ${status}!`);
    } catch (error) {
      alert(error.response?.data?.error || 'Failed to update student');
    }
  };

  if (loading) return <div className="loading">Loading students...</div>;

  return (
    <div className="students-page">
      <div className="page-header">
        <h1>Student Management</h1>
        <p>Add, view, and manage all students</p>
      </div>

      <StudentForm
        formData={formData}
        onChange={handleChange}
        onSubmit={handleSubmit}
        loading={formLoading}
      />

      <StudentList
        students={students}
        onDelete={handleDelete}
        onUpdateStatus={handleUpdateStatus}
        onEdit={handleEdit}  // ✅ Pass the edit handler
        loading={loading}
      />

      {/* ✅ Edit Student Modal */}
      {showEditModal && (
        <EditStudentModal
          student={editingStudent}
          onClose={handleCloseModal}
          onUpdate={handleUpdate}
        />
      )}
    </div>
  );
};

export default Students;