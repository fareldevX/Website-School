function LoadingSpinner({ size = "md" }) {
  const loadingSize = {
    sm: "w-8 h-8",
    md: "w-12 h-12",
    xl: "w-18 h-18",
  };

  const fontSize = {
    sm: "text-xs",
    md: "text-sm font-medium",
    xl: "text-base font-bold",
  };

  return (
    <div className="flex flex-col items-center justify-center gap-6 p-12">
      <div
        className={`${loadingSize[size]} border-4 border-orange-500 border-t-transparent rounded-full animate-spin`}
      ></div>
      <p
        className={`${fontSize[size]} text-gray-500 dark:text-dark-text-muted transition-colors`}
      >
        Memuat Halaman...
      </p>
    </div>
  );
}

export default LoadingSpinner;
