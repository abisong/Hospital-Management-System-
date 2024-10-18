import React, { useState } from 'react';
import { Calendar, Users, Plus, Trash2, Edit } from 'lucide-react';

interface Appointment {
  id: number;
  patientName: string;
  doctorName: string;
  date: string;
  time: string;
}

interface Patient {
  id: number;
  name: string;
  age: number;
  contactNumber: string;
}

const ReceptionistDashboard: React.FC = () => {
  const [activeTab, setActiveTab] = useState('appointments');

  return (
    <div>
      <h1 className="text-3xl font-bold mb-6">Receptionist Dashboard</h1>
      <div className="flex mb-4">
        <button
          className={`mr-2 px-4 py-2 rounded ${activeTab === 'appointments' ? 'bg-blue-600 text-white' : 'bg-gray-200'}`}
          onClick={() => setActiveTab('appointments')}
        >
          <Calendar className="inline-block mr-2" />
          Appointments
        </button>
        <button
          className={`px-4 py-2 rounded ${activeTab === 'patients' ? 'bg-blue-600 text-white' : 'bg-gray-200'}`}
          onClick={() => setActiveTab('patients')}
        >
          <Users className="inline-block mr-2" />
          Patients
        </button>
      </div>
      <div className="bg-white p-6 rounded shadow">
        {activeTab === 'appointments' && <AppointmentManagement />}
        {activeTab === 'patients' && <PatientManagement />}
      </div>
    </div>
  );
};

const AppointmentManagement: React.FC = () => {
  const [appointments, setAppointments] = useState<Appointment[]>([
    { id: 1, patientName: 'John Smith', doctorName: 'Dr. Jane Smith', date: '2023-04-15', time: '10:00 AM' },
    { id: 2, patientName: 'Emma Brown', doctorName: 'Dr. John Doe', date: '2023-04-16', time: '2:00 PM' },
  ]);
  const [newAppointment, setNewAppointment] = useState({ patientName: '', doctorName: '', date: '', time: '' });

  const addAppointment = () => {
    if (newAppointment.patientName && newAppointment.doctorName && newAppointment.date && newAppointment.time) {
      setAppointments([...appointments, { id: Date.now(), ...newAppointment }]);
      setNewAppointment({ patientName: '', doctorName: '', date: '', time: '' });
    }
  };

  const deleteAppointment = (id: number) => {
    setAppointments(appointments.filter(appointment => appointment.id !== id));
  };

  return (
    <div>
      <h2 className="text-2xl font-bold mb-4">Appointment Management</h2>
      <div className="mb-4 flex flex-wrap">
        <input
          type="text"
          placeholder="Patient Name"
          className="mr-2 mb-2 px-2 py-1 border rounded"
          value={newAppointment.patientName}
          onChange={(e) => setNewAppointment({ ...newAppointment, patientName: e.target.value })}
        />
        <input
          type="text"
          placeholder="Doctor Name"
          className="mr-2 mb-2 px-2 py-1 border rounded"
          value={newAppointment.doctorName}
          onChange={(e) => setNewAppointment({ ...newAppointment, doctorName: e.target.value })}
        />
        <input
          type="date"
          className="mr-2 mb-2 px-2 py-1 border rounded"
          value={newAppointment.date}
          onChange={(e) => setNewAppointment({ ...newAppointment, date: e.target.value })}
        />
        <input
          type="time"
          className="mr-2 mb-2 px-2 py-1 border rounded"
          value={newAppointment.time}
          onChange={(e) => setNewAppointment({ ...newAppointment, time: e.target.value })}
        />
        <button onClick={addAppointment} className="bg-green-500 text-white px-2 py-1 rounded">
          <Plus size={20} />
        </button>
      </div>
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

const PatientManagement: React.FC = () => {
  const [patients, setPatients] = useState<Patient[]>([
    { id: 1, name: 'John Smith', age: 45, contactNumber: '123-456-7890' },
    { id: 2, name: 'Emma Brown', age: 32, contactNumber: '098-765-4321' },
  ]);
  const [newPatient, setNewPatient] = useState({ name: '', age: '', contactNumber: '' });

  const addPatient = () => {
    if (newPatient.name && newPatient.age && newPatient.contactNumber) {
      setPatients([...patients, { id: Date.now(), ...newPatient, age: parseInt(newPatient.age) }]);
      setNewPatient({ name: '', age: '', contactNumber: '' });
    }
  };

  const deletePatient = (id: number) => {
    setPatients(patients.filter(patient => patient.id !== id));
  };

  return (
    <div>
      <h2 className="text-2xl font-bold mb-4">Patient Management</h2>
      <div className="mb-4 flex flex-wrap">
        <input
          type="text"
          placeholder="Patient Name"
          className="mr-2 mb-2 px-2 py-1 border rounded"
          value={newPatient.name}
          onChange={(e) => setNewPatient({ ...newPatient, name: e.target.value })}
        />
        <input
          type="number"
          placeholder="Age"
          className="mr-2 mb-2 px-2 py-1 border rounded"
          value={newPatient.age}
          onChange={(e) => setNewPatient({ ...newPatient, age: e.target.value })}
        />
        <input
          type="text"
          placeholder="Contact Number"
          className="mr-2 mb-2 px-2 py-1 border rounded"
          value={newPatient.contactNumber}
          onChange={(e) => setNewPatient({ ...newPatient, contactNumber: e.target.value })}
        />
        <button onClick={addPatient} className="bg-green-500 text-white px-2 py-1 rounded">
          <Plus size={20} />
        </button>
      </div>
      <table className="w-full">
        <thead>
          <tr>
            <th className="text-left">Name</th>
            <th className="text-left">Age</th>
            <th className="text-left">Contact Number</th>
            <th className="text-left">Actions</th>
          </tr>
        </thead>
        <tbody>
          {patients.map(patient => (
            <tr key={patient.id}>
              <td>{patient.name}</td>
              <td>{patient.age}</td>
              <td>{patient.contactNumber}</td>
              <td>
                <button onClick={() => deletePatient(patient.id)} className="text-red-500">
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

export default ReceptionistDashboard;