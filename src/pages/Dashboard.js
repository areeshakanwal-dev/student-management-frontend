import React, { useState, useEffect } from 'react';
import { useAuth } from '../context/AuthContext';
import api from '../services/api';

const Dashboard = () => {
  const { user } = useAuth();
  const [stats, setStats] = useState({
    total: 0,
    active: 0,
    graduated: 0,
    inactive: 0,
  });
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    fetchStats();
  }, []);

  const fetchStats = async () => {
    try {
      const response = await api.get('/students');
      const students = response.data.data || [];
      const total = students.length;
      const active = students.filter((s) => s.status === 'Active').length;
      const graduated = students.filter((s) => s.status === 'Graduated').length;
      const inactive = students.filter((s) => s.status === 'Inactive').length;
      setStats({ total, active, graduated, inactive });
    } catch (error) {
      console.error('Failed to fetch stats:', error);
    } finally {
      setLoading(false);
    }
  };

  const statsCards = [
    { title: 'Total Students', value: stats.total, icon: '📊', color: 'primary' },
    { title: 'Active', value: stats.active, icon: '✅', color: 'success' },
    { title: 'Graduated', value: stats.graduated, icon: '🎓', color: 'warning' },
    { title: 'Inactive', value: stats.inactive, icon: '⏸️', color: 'danger' },
  ];

  return (
    <div className="dashboard-page">
      <div className="dashboard-header">
        <div>
          <h1>Dashboard</h1>
          <p>Welcome back, {user?.name}! 👋</p>
        </div>
        <div className="dashboard-date">
          {new Date().toLocaleDateString('en-US', { weekday: 'long', year: 'numeric', month: 'long', day: 'numeric' })}
        </div>
      </div>

      <div className="stats-grid">
        {statsCards.map((stat, index) => (
          <div key={index} className={`stat-card ${stat.color}`}>
            <div className="stat-icon">{stat.icon}</div>
            <div className="stat-content">
              <h3>{stat.title}</h3>
              <p className="stat-value">{stat.value}</p>
            </div>
          </div>
        ))}
      </div>

      <div className="quick-actions">
        <h2>Quick Actions</h2>
        <div className="action-cards">
          <a href="/students" className="action-card">
            <span className="action-icon">➕</span>
            <h3>Add Student</h3>
            <p>Add a new student to the system</p>
          </a>
          <a href="/students" className="action-card">
            <span className="action-icon">📋</span>
            <h3>View All Students</h3>
            <p>Manage all registered students</p>
          </a>
        </div>
      </div>
    </div>
  );
};

export default Dashboard;