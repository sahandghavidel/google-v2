export default function Footer() {
  return (
    <footer className="absolute bottom-0 p-6 left-[50%] translate-x-[-50%] whitespace-nowrap text-gray-600 text-sm ">
      <p>Copyright &copy; {new Date().getFullYear()} Sahand Ghavidel</p>
    </footer>
  );
}
