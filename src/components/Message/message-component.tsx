export default function HoveredMessage(props: { message: string }) {
  const { message } = props;
  return (
    <p className="scrollbar overflow-auto mx-auto text-cut bg-black w-96 h-44 bg-opacity-80 font-mono text-lg text-clip text-gray-300 shadow-xl border-dotted border-gray-900 rounded-xl">
      {message}
    </p>
  );
}
