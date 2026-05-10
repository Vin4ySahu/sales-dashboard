import React, { useEffect, useMemo, useState } from "react";
import MainLayout from "../layout/MainLayout";
import axios from "axios";
import {
  FiSearch,
  FiChevronDown,
  FiMapPin,
  FiMail,
  FiBriefcase,
  FiUser,
} from "react-icons/fi";
import { HiOutlineArrowSmUp, HiOutlineArrowSmDown } from "react-icons/hi";
const tableHeaders = [
  {
    label: "Name",
    icon: FiUser,
  },
  {
    label: "Email",
    icon: FiMail,
  },
  {
    label: "Company",
    icon: FiBriefcase,
  },
  {
    label: "City",
    icon: FiMapPin,
  },
];
const Users = () => {
  const [users, setUsers] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState("");

  const [search, setSearch] = useState("");
  const [sortOrder, setSortOrder] = useState("asc");
  const [selectedCity, setSelectedCity] = useState("");

  const fetchUsers = async () => {
    try {
      setLoading(true);
      const response = await axios(
        "https://jsonplaceholder.typicode.com/users",
      );
      setUsers(response.data);
    } catch (err) {
      setError(err.message);
    } finally {
      setLoading(false);
    }
  };
  useEffect(() => {
    fetchUsers();
  }, []);

  const cities = [...new Set(users.map((user) => user.address.city))];

  const filteredUsers = useMemo(() => {
    let filtered = [...users];
    filtered = filtered.filter(
      (user) =>
        user.name.toLowerCase().includes(search.toLowerCase()) ||
        user.email.toLowerCase().includes(search.toLowerCase()),
    );
    if (selectedCity) {
      filtered = filtered.filter((user) => user.address.city === selectedCity);
    }
    filtered.sort((a, b) =>
      sortOrder === "asc"
        ? a.name.localeCompare(b.name)
        : b.name.localeCompare(a.name),
    );
    return filtered;
  }, [users, search, selectedCity, sortOrder]);

  if (loading) {
    return (
      <MainLayout title="User Details">
        <div className="flex flex-col items-center justify-center h-64 gap-4">
          <p className="text-sm text-gray-400 font-medium">Loading users...</p>
        </div>
      </MainLayout>
    );
  }

  if (error) {
    return (
      <MainLayout title="User Details">
        <div className="flex flex-col items-center justify-center h-64 gap-3">
          <div className="w-12 h-12 rounded-full bg-red-100 flex items-center justify-center text-red-500 text-xl">
            !
          </div>
          <p className="text-sm font-semibold text-gray-700">
            Something went wrong
          </p>
          <p className="text-xs text-red-400">{error}</p>
        </div>
      </MainLayout>
    );
  }

  return (
    <MainLayout title="Users ">
      <div className=" max-w-6xl mx-auto">
        <div className="mb-6">
          <h1 className="text-2xl font-bold text-gray-800 tracking-tight">
            User Details Table
          </h1>
          <p className="text-sm text-gray-400 mt-1">
            {filteredUsers.length} of {users.length} users
          </p>
        </div>

        <div className="flex flex-wrap gap-3 mb-5">
          <div className="relative flex-1 min-w-55">
            <FiSearch className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-400 text-sm pointer-events-none" />
            <input
              type="text"
              placeholder="Search by name or email…"
              value={search}
              onChange={(e) => setSearch(e.target.value)}
              className="w-full pl-9 pr-4 py-2.5 text-sm bg-white border border-gray-200 rounded-xl text-gray-700 placeholder-gray-400 outline-none focus:ring-2 focus:ring-violet-200 focus:border-violet-400 transition"
            />
          </div>

          <div className="relative">
            <select
              value={sortOrder}
              onChange={(e) => setSortOrder(e.target.value)}
              className="appearance-none pl-3 pr-8 py-2.5 text-sm bg-white border border-gray-200 rounded-xl text-gray-700 outline-none focus:ring-2 focus:ring-violet-200 focus:border-violet-400 transition cursor-pointer"
            >
              <option value="asc">Name A → Z</option>
              <option value="desc">Name Z → A</option>
            </select>
            {sortOrder === "asc" ? (
              <HiOutlineArrowSmUp className="absolute right-2.5 top-1/2 -translate-y-1/2 text-gray-400 pointer-events-none" />
            ) : (
              <HiOutlineArrowSmDown className="absolute right-2.5 top-1/2 -translate-y-1/2 text-gray-400 pointer-events-none" />
            )}
          </div>

          <div className="relative">
            <FiMapPin className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-400 text-sm pointer-events-none" />
            <select
              value={selectedCity}
              onChange={(e) => setSelectedCity(e.target.value)}
              className="appearance-none pl-9 pr-8 py-2.5 text-sm bg-white border border-gray-200 rounded-xl text-gray-700 outline-none focus:ring-2 focus:ring-violet-200 focus:border-violet-400 transition cursor-pointer"
            >
              <option value="">All Cities</option>
              {cities.map((city) => (
                <option key={city} value={city}>
                  {city}
                </option>
              ))}
            </select>
            <FiChevronDown className="absolute right-2.5 top-1/2 -translate-y-1/2 text-gray-400 pointer-events-none text-sm" />
          </div>
        </div>

        <div className="bg-white border border-gray-100 rounded-2xl shadow-sm overflow-hidden">
          <table className="w-full text-sm">
            <thead>
              <tr className="bg-gray-50 border-b border-gray-100">
                {tableHeaders.map((item, index) => {
                  return (
                    <th
                      key={index}
                      className="text-left px-5 py-3.5 text-xs font-semibold text-gray-400 uppercase tracking-wider"
                    >
                      <div className="flex items-center gap-1.5">
                        <item.icon className="text-xs" />
                        {item.label}
                      </div>
                    </th>
                  );
                })}
              </tr>
            </thead>

            <tbody className="divide-y divide-gray-50">
              {filteredUsers.length > 0 ? (
                filteredUsers.map((user, idx) => (
                  <tr
                    key={user.id}
                    className="hover:bg-gray-50/70 transition-colors group"
                  >
                    <td className="px-5 py-3.5">
                      <div className="flex items-center gap-3">
                        <span className="font-medium text-gray-800 group-hover:text-violet-600 ">
                          {user.name}
                        </span>
                      </div>
                    </td>

                    <td className="px-5 py-3.5 ">{user.email}</td>

                    <td className="px-5 py-3.5">{user.company.name}</td>

                    <td className="px-5 py-3.5">
                      <div className="flex items-center gap-1.5 ">
                        {user.address.city}
                      </div>
                    </td>
                  </tr>
                ))
              ) : (
                <tr>
                  <td colSpan="4" className="py-16 text-center">
                    <div className="flex flex-col items-center gap-2">
                      <p className="text-sm font-medium text-gray-400">
                        No users found
                      </p>
                    </div>
                  </td>
                </tr>
              )}
            </tbody>
          </table>
        </div>
      </div>
    </MainLayout>
  );
};

export default Users;
