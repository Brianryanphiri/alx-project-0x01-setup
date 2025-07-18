import { UserProps } from "@/interfaces";

const UserCard: React.FC<UserProps> = ({
  name,
  username,
  email,
  address,
  phone,
  website,
  company,
}) => {
  return (
    <div className="max-w-xl mx-auto my-6 p-6 bg-white rounded-lg shadow-lg hover:shadow-xl transition-shadow duration-300">
      <h2 className="text-2xl font-bold text-gray-800">{name}</h2>
      <p className="text-gray-600 mb-1">@{username}</p>
      <p className="text-sm text-gray-500">{email}</p>
      <p className="text-sm text-gray-500">📍 {address.city}, {address.street}</p>
      <p className="text-sm text-gray-500">📞 {phone}</p>
      <p className="text-sm text-gray-500">🌐 {website}</p>
      <p className="mt-2 text-sm text-gray-700">
        <span className="font-semibold">{company.name}</span> — "{company.catchPhrase}"
      </p>
    </div>
  );
};

export default UserCard;
