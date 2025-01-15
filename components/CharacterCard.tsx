interface CharacterCardProps {
  name: string;
  uid: string;
}

export default function CharacterCard({ name, uid }: CharacterCardProps) {
  return (
    <div className="bg-black border border-white/20 rounded-lg p-6 hover:scale-105 transition-transform duration-200">
      <h3 className="text-xl font-semibold text-yellow-400 mb-3">{name}</h3>
      <div className="space-y-2 text-white/70">
        <p>UID: {uid}</p>
      </div>
    </div>
  );
}
