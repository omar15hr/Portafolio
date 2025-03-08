function Footer() {
  return (
    <footer>
      <div className="flex flex-col gap-2 items-center justify-center py-8">
        <span className="ml-1 text-[#0083C4] dark:text-neutral-100">Hecho por Omar Hernández</span>
        <span className="text-xs text-neutral-800 dark:text-neutral-200">
          Inspirado en 
          <span
            className="ml-1 text-neutral-950 dark:text-neutral-100"
          >
            José Ramon Montes
          </span>
        </span>
      </div>
    </footer>
  );
}

export default Footer;
