interface FilmCardProps {
  title: string;
  director: string;
  releaseDate: string;
  episodeId: number;
}

export default function FilmCard({
  title,
  director,
  releaseDate,
  episodeId,
}: FilmCardProps) {
  return (
    <div className="bg-black border border-white/20 rounded-lg p-6 hover:scale-105 transition-transform duration-200">
      <h3 className="text-xl font-semibold text-yellow-400 mb-3">{title}</h3>
      <div className="space-y-2 text-white/70">
        <p>Episode: {episodeId}</p>
        <p>Director: {director}</p>
        <p>Release Date: {new Date(releaseDate).toLocaleDateString("es-AR")}</p>
      </div>
    </div>
  );
}
