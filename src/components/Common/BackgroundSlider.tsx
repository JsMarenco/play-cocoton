import { useEffect, useState } from "react";

const BackgroundSlider = () => {
  const [index, setIndex] = useState(1);

  useEffect(() => {
    const interval = setInterval(() => {
      setIndex((prev) => (prev % 9) + 1);
    }, 3000);

    return () => clearInterval(interval);
  }, []);

  return (
    <>
      <div
        className="background-moving fixed inset-0 -z-20"
        style={{
          backgroundImage: `url('/assets/backgrounds/bg_${index}.png')`,
          backgroundSize: "cover",
          backgroundPosition: "center",
          filter: "blur(5px)",
          transition: "background-image 1s ease-in-out",
        }}
      ></div>

      <div className="fixed inset-0 -z-10 bg-black/70"></div>
    </>
  );
};

export default BackgroundSlider;
