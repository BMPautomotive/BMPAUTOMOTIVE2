import React, { useState } from 'react';

interface BookingFormProps {
  serviceType: string;
}

export default function BookingForm({ serviceType }: BookingFormProps) {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    date: '',
    notes: ''
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Here you would typically send the booking request to your backend
    console.log('Booking submitted:', formData);
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  return (
    <div className="bg-white/5 rounded-lg p-6">
      <h2 className="text-2xl font-semibold text-white mb-4">Book Your Service</h2>
      <form onSubmit={handleSubmit} className="space-y-4">
        <div>
          <label className="block text-gray-300 mb-2">Name</label>
          <input
            type="text"
            name="name"
            value={formData.name}
            onChange={handleChange}
            className="w-full px-4 py-2 rounded-lg bg-white/5 border border-white/10 text-white"
            placeholder="Your Name"
            required
          />
        </div>
        <div>
          <label className="block text-gray-300 mb-2">Email</label>
          <input
            type="email"
            name="email"
            value={formData.email}
            onChange={handleChange}
            className="w-full px-4 py-2 rounded-lg bg-white/5 border border-white/10 text-white"
            placeholder="Your Email"
            required
          />
        </div>
        <div>
          <label className="block text-gray-300 mb-2">Phone</label>
          <input
            type="tel"
            name="phone"
            value={formData.phone}
            onChange={handleChange}
            className="w-full px-4 py-2 rounded-lg bg-white/5 border border-white/10 text-white"
            placeholder="Your Phone"
            required
          />
        </div>
        <div>
          <label className="block text-gray-300 mb-2">Preferred Date</label>
          <input
            type="date"
            name="date"
            value={formData.date}
            onChange={handleChange}
            className="w-full px-4 py-2 rounded-lg bg-white/5 border border-white/10 text-white"
            required
          />
        </div>
        <div>
          <label className="block text-gray-300 mb-2">Additional Notes</label>
          <textarea
            name="notes"
            value={formData.notes}
            onChange={handleChange}
            className="w-full px-4 py-2 rounded-lg bg-white/5 border border-white/10 text-white"
            placeholder="Please provide any additional information about your service needs"
            rows={4}
          />
        </div>
        <button
          type="submit"
          className="w-full px-6 py-2 bg-m-red text-white rounded-lg hover:bg-red-700 transition-colors duration-300"
        >
          Request Booking
        </button>
      </form>
      <p className="text-gray-400 text-sm mt-4">
        * After submitting your request, our team will contact you to confirm the exact time slot and discuss your service needs.
      </p>
    </div>
  );
} 