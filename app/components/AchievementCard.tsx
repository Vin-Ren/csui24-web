interface AchievementCardProps {
  name: string;
  title: string;
  description: string;
  date?: string;
  category?: string;
}

export function AchievementCard({
  name,
  title,
  description,
  date,
  category,
}: AchievementCardProps) {
  return (
    <div className="bg-white rounded-lg shadow-lg overflow-hidden hover:shadow-xl transition-shadow duration-300">
      <div className="p-6">
        <div className="w-20 h-20 bg-blue-100 rounded-full flex items-center justify-center mx-auto mb-4">
          <svg
            className="w-10 h-10 text-blue-600"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M5 3v4M3 5h4M6 17v4m-2-2h4m5-16l2.286 6.857L21 12l-5.714 2.143L13 21l-2.286-6.857L5 12l5.714-2.143L13 3z"
            />
          </svg>
        </div>
        <h3 className="text-xl font-semibold text-center mb-2">{name}</h3>
        <p className="text-gray-600 text-center mb-2">{title}</p>
        {category && (
          <span className="inline-block bg-blue-100 text-blue-800 text-xs px-2 py-1 rounded-full mb-3">
            {category}
          </span>
        )}
        <p className="text-gray-500 text-sm text-center mb-2">{description}</p>
        {date && <p className="text-gray-400 text-xs text-center">{date}</p>}
      </div>
    </div>
  );
}
