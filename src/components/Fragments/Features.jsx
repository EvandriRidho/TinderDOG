let Features = () => {
  return (
    <div className="mt-24 mb-12">
      <div className="flex flex-col space-y-8  sm:space-y-0 sm:flex-row sm:justify-between px-4 sm:px-10">
        {/* Sebelah kiri */}
        <div className="flex items-start">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            height="30"
            fill="currentColor"
            className="bi bi-check2-circle mr-3 rounded-lg bg-slate-400"
            viewBox="0 0 16 16"
          >
            <path d="M2.5 8a5.5 5.5 0 0 1 8.25-4.764.5.5 0 0 0 .5-.866A6.5 6.5 0 1 0 14.5 8a.5.5 0 0 0-1 0 5.5 5.5 0 1 1-11 0z" />
            <path d="M15.354 3.354a.5.5 0 0 0-.708-.708L8 9.293 5.354 6.646a.5.5 0 1 0-.708.708l3 3a.5.5 0 0 0 .708 0l7-7z" />
          </svg>
          <div className="flex flex-col">
            <h3 className="text-lg font-semibold">Easy to use</h3>
            <p className="text-sm">
              So easy to use, even your dog could do it.
            </p>
          </div>
        </div>
        {/* Sebelah Tengah */}
        <div className="flex items-start">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            height="30"
            fill="currentColor"
            className="bi bi-check2-circle mr-3 rounded-lg bg-slate-400"
            viewBox="0 0 16 16"
          >
            <path d="M2.5 8a5.5 5.5 0 0 1 8.25-4.764.5.5 0 0 0 .5-.866A6.5 6.5 0 1 0 14.5 8a.5.5 0 0 0-1 0 5.5 5.5 0 1 1-11 0z" />
            <path d="M15.354 3.354a.5.5 0 0 0-.708-.708L8 9.293 5.354 6.646a.5.5 0 1 0-.708.708l3 3a.5.5 0 0 0 .708 0l7-7z" />
          </svg>
          <div className="flex flex-col">
            <h3 className="text-lg font-semibold">Easy to use</h3>
            <p className="text-sm">
              So easy to use, even your dog could do it.
            </p>
          </div>
        </div>
        {/* Sebelah Kanan */}
        <div className="flex items-start">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            height="30"
            fill="currentColor"
            className="bi bi-check2-circle mr-3 rounded-lg bg-slate-400"
            viewBox="0 0 16 16"
          >
            <path d="M2.5 8a5.5 5.5 0 0 1 8.25-4.764.5.5 0 0 0 .5-.866A6.5 6.5 0 1 0 14.5 8a.5.5 0 0 0-1 0 5.5 5.5 0 1 1-11 0z" />
            <path d="M15.354 3.354a.5.5 0 0 0-.708-.708L8 9.293 5.354 6.646a.5.5 0 1 0-.708.708l3 3a.5.5 0 0 0 .708 0l7-7z" />
          </svg>
          <div className="flex flex-col">
            <h3 className="text-lg font-semibold">Easy to use</h3>
            <p className="text-sm">
              So easy to use, even your dog could do it.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Features;
