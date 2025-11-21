export default function ServiceCard({ icon, title, description, features, link = "#contact" }) {
  return (
    <div className="bg-white p-8 rounded-lg shadow-lg hover:shadow-xl transition border border-gray-100">
      <div className="text-blue-600 mb-4">{icon}</div>
      <h3 className="text-xl font-bold text-gray-900 mb-3">{title}</h3>
      <p className="text-gray-600 mb-4">{description}</p>
      {features && (
        <ul className="space-y-2 mb-4">
          {features.map((feature, idx) => (
            <li key={idx} className="flex items-center text-gray-700">
              <span className="w-2 h-2 bg-blue-600 rounded-full mr-3"></span>
              {feature}
            </li>
          ))}
        </ul>
      )}
      {/* <a href={link} className="text-blue-600 font-semibold hover:text-blue-700 flex items-center">
        Learn More <ChevronRight className="w-4 h-4 ml-1" />
      </a> */}
    </div>
  );
}