function About() {
  return (
    <div className="h-screen flex flex-col items-center justify-center mx-16 text-center">
      <h1 className="text-6xl mb-4 text-white">Addis Arts</h1>
      <p className="mb-4 text-2xl font-light text-white">
        Welcome to Addis Arts, your premier destination for Ethiopian
        creativity!
      </p>
      <p className="text-lg text-gray-400">
        Version <span className="text-white">1.0.0</span>
      </p>
    </div>
  );
}

export default About;
