import React, { useState } from 'react';
import { Users, UserPlus, Calendar, Plus, Trash2, Edit } from 'lucide-react';

interface Doctor {
  id: number;
  name: string;
  specialization: string;
}

interface Receptionist {
  id: number;
  name: string;
  shift: string;
}

interface Appointment {
  id: number;
  patientName: string;
  doctorName: string;
  date: string;
  time: string;
}

const AdminDashboard: React.FC = () => {
  const [activeTab, setActiveTab] = useState('doctors');

  return (
    <div>
      <h1 className="text-3xl font-bold mb-6">Admin Dashboard</h1>
      <div className="flex mb-4">
        <button
          className={`mr-2 px-4 py-2 rounded ${activeTab === 'doctors' ? 'bg-blue-600 text-white' : 'bg-gray-200'}`}
          onClick={() => setActiveTab('doctors')}
        >
          <Users className="inline-block mr-2" />
          Doctors
        </button>
        <button
          className={`mr-2 px-4 py-2 rounded ${activeTab === 'receptionists' ? 'bg-blue-600 text-white' : 'bg-gray-200'}`}
          onClick={() => setActiveTab('receptionists')}
        >
          <UserPlus className="inline-block mr-2" />
          Receptionists
        </button>
        <button
          className={`px-4 py-2 rounded ${activeTab === 'appointments' ? 'bg-blue-600 text-white' : 'bg-gray-200'}`}
          onClick={() => setActiveTab('appointments')}
        >
          <Calendar className="inline-block mr-2" />
          Appointments
        </button>
      </div>
      <div className="bg-white p-6 rounded shadow">
        {activeTab === 'doctors' && <DoctorManagement />}
        {activeTab === 'receptionists' && <ReceptionistManagement />}
        {activeTab === 'appointments' && <AppointmentManagement />}
      </div>
    </div>
  );
};

const DoctorManagement: React.FC = () => {
  const [doctors, setDoctors] = useState<Doctor[]>([
    { id: 1, name: 'Dr. John Doe', specialization: 'Cardiology' },
    { id: 2, name: 'Dr. Jane Smith', specialization: 'Pediatrics' },
  ]);
  const [newDoctor, setNewDoctor] = useState({ name: '', specialization: '' });

  const addDoctor = () => {
    if (newDoctor.name && newDoctor.specialization) {
      setDoctors([...doctors, { id: Date.now(), ...newDoctor }]);
      setNewDoctor({ name: '', specialization: '' });
    }
  };

  const deleteDoctor = (id: number) => {
    setDoctors(doctors.filter(doctor => doctor.id !== id));
  };

  return (
    <div>
      <h2 className="text-2xl font-bold mb-4">Doctor Management</h2>
      <div className="mb-4 flex">
        <input
          type="text"
          placeholder="Doctor Name"
          className="mr-2 px-2 py-1 border rounded"
          value={newDoctor.name}
          onChange={(e) => setNewDoctor({ ...newDoctor, name: e.target.value })}
        />
        <input
          type="text"
          placeholder="Specialization"
          className="mr-2 px-2 py-1 border rounded"
          value={newDoctor.specialization}
          onChange={(e) => setNewDoctor({ ...newDoctor, specialization: e.target.value })}
        />
        <button onClick={addDoctor} className="bg-green-500 text-white px-2 py-1 rounded">
          <Plus size={20} />
        </button>
      </div>
      <table className="w-full">
        <thead>
          <tr>
            <th className="text-left">Name</th>
            <th className="text-left">Specialization</th>
            <th className="text-left">Actions</th>
          </tr>
        </thead>
        <tbody>
          {doctors.map(doctor => (
            <tr key={doctor.id}>
              <td>{doctor.name}</td>
              <td>{doctor.specialization}</td>
              <td>
                <button onClick={() => deleteDoctor(doctor.id)} className="text-red-500">
                  <Trash2 size={20} />
                </button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

const ReceptionistManagement: React.FC = () => {
  const [receptionists, setReceptionists] = useState<Receptionist[]>([
    { id: 1, name: 'Alice Johnson', shift: 'Morning' },
    { id: 2, name: 'Bob Williams', shift: 'Evening' },
  ]);
  const [newReceptionist, setNewReceptionist] = useState({ name: '', shift: '' });

  const addReceptionist = () => {
    if (newReceptionist.name && newReceptionist.shift) {
      setReceptionists([...receptionists, { id: Date.now(), ...newReceptionist }]);
      setNewReceptionist({ name: '', shift: '' });
    }
  };

  const deleteReceptionist = (id: number) => {
    setReceptionists(receptionists.filter(receptionist => receptionist.id !== id));
  };

  return (
    <div>
      <h2 className="text-2xl font-bold mb-4">Receptionist Management</h2>
      <div className="mb-4 flex">
        <input
          type="text"
          placeholder="Receptionist Name"
          className="mr-2 px-2 py-1 border rounded"
          value={newReceptionist.name}
          onChange={(e) => setNewReceptionist({ ...newReceptionist, name: e.target.value })}
        />
        <input
          type="text"
          placeholder="Shift"
          className="mr-2 px-2 py-1 border rounded"
          value={newReceptionist.shift}
          onChange={(e) => setNewReceptionist({ ...newReceptionist, shift: e.target.value })}
        />
        <button onClick={addReceptionist} className="bg-green-500 text-white px-2 py-1 rounded">
          <Plus size={20} />
        </button>
      </div>
      <table className="w-full">
        <thead>
          <tr>
            <th className="text-left">Name</th>
            <th className="text-left">Shift</th>
            <th className="text-left">Actions</th>
          </tr>
        </thead>
        <tbody>
          {receptionists.map(receptionist => (
            <tr key={receptionist.id}>
              <td>{receptionist.name}</td>
              <td>{receptionist.shift}</td>
              <td>
                <button onClick={() => deleteReceptionist(receptionist.id)} className="text-red-500">
                  <Trash2 size={20} />
                </button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

const AppointmentManagement: React.FC = () => {
  const [appointments, setAppointments] = useState<Appointment[]>([
    { id: 1, patientName: 'John Smith', doctorName: 'Dr. Jane Smith', date: '2023-04-15', time: '10:00 AM' },
    { id: 2, patientName: 'Emma Brown', doctorName: 'Dr. John Doe', date: '2023-04-16', time: '2:00 PM' },
  ]);

  const deleteAppointment = (id: number) => {
    setAppointments(appointments.filter(appointment => appointment.id !== id));
  };

  return (
    <div>
      <h2 className="text-2xl font-bold mb-4">Appointment Management</h2>
      <table className="w-full">
        <thead>
          <tr>
            <th className="text-left">Patient</th>
            <th className="text-left">Doctor</th>
            <th className="text-left">Date</th>
            <th className="text-left">Time</th>
            <th className="text-left">Actions</th>
          </tr>
        </thead>
        <tbody>
          {appointments.map(appointment => (
            <tr key={appointment.id}>
              <td>{appointment.patientName}</td>
              <td>{appointment.doctorName}</td>
              <td>{appointment.date}</td>
              <td>{appointment.time}</td>
              <td>
                <button onClick={() => deleteAppointment(appointment.id)} className="text-red-500">
                  <Trash2 size={20} />
                </button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default AdminDashboard;