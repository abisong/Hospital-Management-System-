import React, { useState } from 'react';
import { Calendar, Users, Clock } from 'lucide-react';

interface Appointment {
  id: number;
  patientName: string;
  date: string;
  time: string;
}

interface Patient {
  id: number;
  name: string;
  age: number;
  lastVisit: string;
}

const DoctorDashboard: React.FC = () => {
  const [activeTab, setActiveTab] = useState('appointments');

  return (
    <div>
      <h1 className="text-3xl font-bold mb-6">Doctor Dashboard</h1>
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
        {activeTab === 'appointments' && <AppointmentList />}
        {activeTab === 'patients' && <PatientList />}
      </div>
    </div>
  );
};

const AppointmentList: React.FC = () => {
  const [appointments, setAppointments] = useState<Appointment[]>([
    { id: 1, patientName: 'John Smith', date: '2023-04-15', time: '10:00 AM' },
    { id: 2, patientName: 'Emma Brown', date: '2023-04-15', time: '11:30 AM' },
    { id: 3, patientName: 'Michael Johnson', date: '2023-04-16', time: '2:00 PM' },
  ]);

  return (
    <div>
      <h2 className="text-2xl font-bold mb-4">Upcoming Appointments</h2>
      <table className="w-full">
        <thead>
          <tr>
            <th className="text-left">Patient Name</th>
            <th className="text-left">Date</th>
            <th className="text-left">Time</th>
          </tr>
        </thead>
        <tbody>
          {appointments.map(appointment => (
            <tr key={appointment.id}>
              <td>{appointment.patientName}</td>
              <td>{appointment.date}</td>
              <td>{appointment.time}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

const PatientList: React.FC = () => {
  const [patients, setPatients] = useState<Patient[]>([
    { id: 1, name: 'John Smith', age: 45, lastVisit: '2023-03-20' },
    { id: 2, name: 'Emma Brown', age: 32, lastVisit: '2023-04-01' },
    { id: 3, name: 'Michael Johnson', age: 58, lastVisit: '2023-03-15' },
  ]);

  return (
    <div>
      <h2 className="text-2xl font-bold mb-4">Patient List</h2>
      <table className="w-full">
        <thead>
          <tr>
            <th className="text-left">Name</th>
            <th className="text-left">Age</th>
            <th className="text-left">Last Visit</th>
          </tr>
        </thead>
        <tbody>
          {patients.map(patient => (
            <tr key={patient.id}>
              <td>{patient.name}</td>
              <td>{patient.age}</td>
              <td>{patient.lastVisit}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default DoctorDashboard;