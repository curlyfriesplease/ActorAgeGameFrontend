// This great fire animation is courtesy of the excellent Jon Kantner
// https://codepen.io/jkantner

import './style.scss';

export const Fire = () => {
  const parts = 50;
  const particles = Array.from({ length: parts }, (_, i) => (
    <div key={i} className="particle z-0" />
  ));

  return (
    <div
      className="
      fire
      absolute
      inset-0
      flex
      items-center
      justify-center
      z-0
      w-[50%]
      h-[50%]
      opacity-80
  "
    >
      {particles}
    </div>
  );
};
