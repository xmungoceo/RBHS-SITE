'use client';

import React from 'react';
import { motion } from 'framer-motion';
import Navigation from '@/components/Navigation';
import Footer from '@/components/Footer';

const PatientInfoPage = () => {
  return (
    <main className="min-h-screen bg-riverbend-off-white">
      <Navigation />
      <div className="py-12 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
          >
            <h1 className="text-4xl font-bold text-gray-900 mb-8">Patient Information</h1>
            
            <div className="grid gap-8 md:grid-cols-2">
              <div className="bg-white p-6 rounded-lg shadow-sm">
                <h2 className="text-2xl font-semibold text-riverbend-teal mb-4">Preparing for Your Visit</h2>
                <ul className="space-y-3">
                  <li>• Please arrive 15 minutes before your scheduled appointment</li>
                  <li>• Bring a valid photo ID and insurance card</li>
                  <li>• Wear comfortable clothing without metal components</li>
                  <li>• Remove all jewelry and metal objects before the scan</li>
                  <li>• Bring any previous imaging results if available</li>
                </ul>
              </div>

              <div className="bg-white p-6 rounded-lg shadow-sm">
                <h2 className="text-2xl font-semibold text-riverbend-teal mb-4">Required Documents</h2>
                <ul className="space-y-3">
                  <li>• Completed patient registration form</li>
                  <li>• Insurance information</li>
                  <li>• Medical history</li>
                  <li>• List of current medications</li>
                  <li>• Physician referral or prescription for imaging</li>
                </ul>
              </div>

              <div className="bg-white p-6 rounded-lg shadow-sm">
                <h2 className="text-2xl font-semibold text-riverbend-teal mb-4">Insurance & Payment</h2>
                <p className="mb-4">We accept most major insurance plans. Please contact our office to verify your coverage.</p>
                <p>Payment options include:</p>
                <ul className="mt-2 space-y-2">
                  <li>• Most major insurance plans</li>
                  <li>• Medicare and Medicaid</li>
                  <li>• Self-pay options with flexible payment plans</li>
                  <li>• Major credit cards</li>
                </ul>
              </div>

              <div className="bg-white p-6 rounded-lg shadow-sm">
                <h2 className="text-2xl font-semibold text-riverbend-teal mb-4">After Your Exam</h2>
                <ul className="space-y-3">
                  <li>• Results are typically available within 24-48 hours</li>
                  <li>• Reports are sent directly to your referring physician</li>
                  <li>• You can request a copy of your images on CD</li>
                  <li>• Follow-up appointments can be scheduled if needed</li>
                </ul>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
      <Footer />
    </main>
  );
};

export default PatientInfoPage; 