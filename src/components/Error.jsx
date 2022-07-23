export default function Error({ children }) {
  return (
    <div className="bg-red-800 text-white text-center text-sm lg:text-sm p-3 uppercase font-bold mb-3 rounded-md">
      {children}
    </div>
  );
}
