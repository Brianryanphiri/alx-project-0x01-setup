import React, { useState, useEffect } from "react";
import { UserData, UserModalProps } from "@/interfaces";

const UserModal: React.FC<UserModalProps> = ({
  isOpen,
  onClose,
  onSubmit,
  initialData = null,
}) => {
  const [user, setUser] = useState<UserData>({
    name: "",
    username: "",
    email: "",
    address: {
      street: "",
      suite: "",
      city: "",
      zipcode: "",
      geo: {
        lat: "",
        lng: "",
      },
    },
    phone: "",
    website: "",
    company: {
      name: "",
      catchPhrase: "",
      bs: "",
    },
  });

  useEffect(() => {
    if (initialData) {
      setUser(initialData);
    } else {
      setUser({
        name: "",
        username: "",
        email: "",
        address: {
          street: "",
          suite: "",
          city: "",
          zipcode: "",
          geo: {
            lat: "",
            lng: "",
          },
        },
        phone: "",
        website: "",
        company: {
          name: "",
          catchPhrase: "",
          bs: "",
        },
      });
    }
  }, [initialData]);

  if (!isOpen) return null;

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    const { name, value } = e.target;

    // Handle nested fields (address and company)
    if (name.startsWith("address.")) {
      const field = name.split(".")[1];
      setUser((prev) => ({
        ...prev,
        address: { ...prev.address, [field]: value },
      }));
    } else if (name.startsWith("geo.")) {
      const field = name.split(".")[1];
      setUser((prev) => ({
        ...prev,
        address: {
          ...prev.address,
          geo: { ...prev.address.geo, [field]: value },
        },
      }));
    } else if (name.startsWith("company.")) {
      const field = name.split(".")[1];
      setUser((prev) => ({
        ...prev,
        company: { ...prev.company, [field]: value },
      }));
    } else {
      setUser((prev) => ({ ...prev, [name]: value }));
    }
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    onSubmit(user);
    onClose();
  };

  return (
    <div className="fixed inset-0 bg-gray-900 bg-opacity-50 flex justify-center items-center z-50">
      <div className="bg-white rounded-lg p-8 shadow-lg w-full max-w-lg max-h-[90vh] overflow-auto">
        <h2 className="text-2xl font-bold mb-4 text-gray-800">Add New User</h2>
        <form onSubmit={handleSubmit} className="space-y-4">
          {/* Basic Info */}
          <div>
            <label className="block font-medium text-gray-700">Name</label>
            <input
              name="name"
              value={user.name}
              onChange={handleChange}
              required
              className="w-full px-3 py-2 border rounded focus:outline-none focus:ring-2 focus:ring-blue-500"
            />
          </div>
          <div>
            <label className="block font-medium text-gray-700">Username</label>
            <input
              name="username"
              value={user.username}
              onChange={handleChange}
              required
              className="w-full px-3 py-2 border rounded focus:outline-none focus:ring-2 focus:ring-blue-500"
            />
          </div>
          <div>
            <label className="block font-medium text-gray-700">Email</label>
            <input
              name="email"
              type="email"
              value={user.email}
              onChange={handleChange}
              required
              className="w-full px-3 py-2 border rounded focus:outline-none focus:ring-2 focus:ring-blue-500"
            />
          </div>

          {/* Address */}
          <div>
            <label className="block font-semibold text-gray-700 mb-1">Address</label>
            <input
              name="address.street"
              placeholder="Street"
              value={user.address.street}
              onChange={handleChange}
              className="w-full px-3 py-2 mb-2 border rounded focus:outline-none focus:ring-2 focus:ring-blue-500"
            />
            <input
              name="address.suite"
              placeholder="Suite"
              value={user.address.suite}
              onChange={handleChange}
              className="w-full px-3 py-2 mb-2 border rounded focus:outline-none focus:ring-2 focus:ring-blue-500"
            />
            <input
              name="address.city"
              placeholder="City"
              value={user.address.city}
              onChange={handleChange}
              className="w-full px-3 py-2 mb-2 border rounded focus:outline-none focus:ring-2 focus:ring-blue-500"
            />
            <input
              name="address.zipcode"
              placeholder="Zipcode"
              value={user.address.zipcode}
              onChange={handleChange}
              className="w-full px-3 py-2 mb-2 border rounded focus:outline-none focus:ring-2 focus:ring-blue-500"
            />

            {/* Geo */}
            <div className="flex space-x-2">
              <input
                name="geo.lat"
                placeholder="Latitude"
                value={user.address.geo.lat}
                onChange={handleChange}
                className="w-1/2 px-3 py-2 border rounded focus:outline-none focus:ring-2 focus:ring-blue-500"
              />
              <input
                name="geo.lng"
                placeholder="Longitude"
                value={user.address.geo.lng}
                onChange={handleChange}
                className="w-1/2 px-3 py-2 border rounded focus:outline-none focus:ring-2 focus:ring-blue-500"
              />
            </div>
          </div>

          {/* Phone, Website */}
          <div>
            <label className="block font-medium text-gray-700">Phone</label>
            <input
              name="phone"
              value={user.phone}
              onChange={handleChange}
              className="w-full px-3 py-2 border rounded focus:outline-none focus:ring-2 focus:ring-blue-500"
            />
          </div>
          <div>
            <label className="block font-medium text-gray-700">Website</label>
            <input
              name="website"
              value={user.website}
              onChange={handleChange}
              className="w-full px-3 py-2 border rounded focus:outline-none focus:ring-2 focus:ring-blue-500"
            />
          </div>

          {/* Company */}
          <div>
            <label className="block font-semibold text-gray-700 mb-1">Company</label>
            <input
              name="company.name"
              placeholder="Name"
              value={user.company.name}
              onChange={handleChange}
              className="w-full px-3 py-2 mb-2 border rounded focus:outline-none focus:ring-2 focus:ring-blue-500"
            />
            <input
              name="company.catchPhrase"
              placeholder="Catch Phrase"
              value={user.company.catchPhrase}
              onChange={handleChange}
              className="w-full px-3 py-2 mb-2 border rounded focus:outline-none focus:ring-2 focus:ring-blue-500"
            />
            <input
              name="company.bs"
              placeholder="Business"
              value={user.company.bs}
              onChange={handleChange}
              className="w-full px-3 py-2 border rounded focus:outline-none focus:ring-2 focus:ring-blue-500"
            />
          </div>

          {/* Buttons */}
          <div className="flex justify-between items-center mt-4">
            <button
              type="button"
              onClick={onClose}
              className="px-4 py-2 text-gray-600 hover:text-gray-800 focus:outline-none"
            >
              Cancel
            </button>
            <button
              type="submit"
              className="px-6 py-2 bg-blue-500 text-white rounded-lg hover:bg-blue-600 transition"
            >
              Add User
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default UserModal;
