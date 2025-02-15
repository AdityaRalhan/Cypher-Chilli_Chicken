"use client";
import React, { useState } from "react";
import {
  AlertTriangle,
  FileText,
  MapPin,
  Phone,
  Shield,
  Users,
} from "lucide-react";
import Link from "next/link";
import MapStations from "@/app/HelpingComponents/MapStations";

const CitizenDashboard = () => {
  const [complaintProgress, setComplaintProgress] = useState("In Review");

  const emergencyContacts = [
    { title: "Police Emergency", number: "100" },
    { title: "Women Helpline", number: "1091" },
    { title: "Traffic Help", number: "1073" },
    { title: "Maternal and child help", number: "102" },
    { title: "Ambulance", number: "108" },
  ];

  const recentAlerts = [
    {
      type: "Traffic",
      message: "Heavy congestion on MG Road - Please take alternate routes",
      time: "2 hours ago",
    },
    {
      type: "Safety",
      message: "Increased pickpocketing reported in Central Market area",
      time: "5 hours ago",
    },
  ];

  return (
    <div className="min-h-screen bg-gradient-to-b from-gray-900 to-blue-900">
      <nav className="bg-gray-900/50 backdrop-blur-md border-b border-blue-500/20 sticky top-0 z-10">
        <div className="max-w-7xl mx-auto px-4 py-4 flex items-center justify-between">
          <div className="flex items-center space-x-2">
            <Shield className="text-blue-400 h-8 w-8" />
            <span className="text-2xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-blue-400 to-cyan-300">
              Citizen Portal
            </span>
          </div>
          <div className="flex items-center space-x-4">
            <div className="h-8 w-8 rounded-full bg-gradient-to-r from-cyan-500 to-blue-500 flex items-center justify-center">
              <Users className="h-5 w-5 text-white" />
            </div>
          </div>
        </div>
      </nav>

      <div className="max-w-7xl mx-auto px-4 py-8 space-y-8">
        {/* Quick Actions */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {/* Report Incident Card */}
<div className="bg-gradient-to-r from-blue-600 to-indigo-600 rounded-xl p-6 text-white border border-blue-400/20 hover:shadow-lg hover:shadow-blue-500/20 transform hover:-translate-y-1 transition-all duration-300 flex justify-center items-center">
  <div className="flex flex-col items-center text-center space-y-4">
    <div className="bg-white/10 p-3 rounded-lg">
      <AlertTriangle className="h-6 w-6 text-white" />
    </div>
    <div>
      <h2 className="text-xl font-semibold">Report Incident</h2>
      <Link href="/supportPages/CitizenReport">
        <button className="mt-4 w-full bg-white/10 hover:bg-white/20 text-white py-2 rounded-lg font-semibold transition-colors">
          File New Report
        </button>
      </Link>
    </div>
  </div>
  

          </div>

          {/* Track Complaint Card */}
          <div className="bg-gradient-to-r from-cyan-600 to-blue-700 rounded-xl p-6 text-white border border-blue-400/20 hover:shadow-lg hover:shadow-blue-500/20 transform hover:-translate-y-1 transition-all duration-300">
            <div className="flex items-center space-x-4">
              <div className="bg-white/10 p-3 rounded-lg">
                <FileText className="h-6 w-6 text-white" />
              </div>
              <div className="flex-1">
                <h2 className="text-xl font-semibold">Track Complaint</h2>
                <div className="mt-4">
                  {/* Display Complaint Progress */}
                  <div className="flex items-center justify-between p-3 rounded-lg bg-white/5 hover:bg-white/10 transition-colors">
                    <span className="text-blue-200">Complaint Status</span>
                    <span className="text-white font-semibold">
                      {complaintProgress}
                    </span>
                  </div>

                  {/* Button to Change Progress (Example) */}
                  <button
                    className="mt-4 w-full bg-white/10 hover:bg-white/20 text-white py-2 rounded-lg font-semibold transition-colors"
                    onClick={() => setComplaintProgress("Resolved")}
                  >
                    Mark as Resolved
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Nearest Station Card (Moved below and larger) */}
        <div className="bg-gradient-to-r from-teal-600 to-cyan-700 rounded-xl p-6 text-white border border-blue-400/20 hover:shadow-lg hover:shadow-blue-500/20 transform hover:-translate-y-1 transition-all duration-300 lg:col-span-3">
          <div className="flex items-center space-x-4">
            <div className="bg-white/10 p-3 rounded-lg">
              <MapPin className="h-6 w-6 text-white" />
            </div>
            <div>
              <h2 className="text-xl font-semibold">Nearest Station</h2>
            </div>
          </div>

          <div className="mt-4">
            <MapStations />{" "}
            {/* Your MapStations component directly rendered here */}
          </div>
        </div>

        {/* Main Content */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {/* Emergency Contacts */}
          <div className="bg-gray-900/50 backdrop-blur-md rounded-xl p-6 text-white border border-blue-400/20">
            <div className="flex items-center space-x-4 mb-6">
              <div className="bg-white/10 p-3 rounded-lg">
                <Phone className="h-6 w-6 text-white" />
              </div>
              <h2 className="text-xl font-semibold">Emergency Contacts</h2>
            </div>
            <div className="space-y-4">
              {emergencyContacts.map((contact, index) => (
                <div
                  key={index}
                  className="flex justify-between items-center p-3 rounded-lg bg-white/5 hover:bg-white/10 transition-colors"
                >
                  <span className="text-blue-200">{contact.title}</span>
                  <span className="text-white font-semibold">
                    {contact.number}
                  </span>
                </div>
              ))}
            </div>
          </div>

          {/* Safety Alerts */}
          <div className="bg-gray-900/50 backdrop-blur-md rounded-xl p-6 text-white border border-blue-400/20 col-span-2">
            <div className="flex items-center space-x-4 mb-6">
              <div className="bg-white/10 p-3 rounded-lg">
                <Shield className="h-6 w-6 text-white" />
              </div>
              <h2 className="text-xl font-semibold">Safety Alerts</h2>
            </div>
            <div className="space-y-4">
              {recentAlerts.map((alert, index) => (
                <div
                  key={index}
                  className="bg-white/5 hover:bg-white/10 p-4 rounded-lg transition-all duration-300"
                >
                  <div className="flex justify-between items-start">
                    <div>
                      <span className="text-sm text-blue-300">
                        {alert.type}
                      </span>
                      <p className="mt-1 text-blue-100">{alert.message}</p>
                    </div>
                    <span className="text-sm text-blue-300">{alert.time}</span>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CitizenDashboard;
