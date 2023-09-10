function Loading() {
  return (
    <>
      <div className="inset-0 bg-sky-400 dark:bg-gray-900 fixed flex w-full h-full items-center justify-center duration-300 transition-opacity" style={{ zIndex: "6000" }}>
        <div className="flex-col">
          <div className="w-24 h-24">
            <div id="page">
              <div id="container">
                <div id="ring"></div>
                <div id="ring"></div>
                <div id="ring"></div>
                <div id="ring"></div>
                <div id="h3">loading</div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default Loading;
