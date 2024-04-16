export const breakpoints = [
  640 /* Small devices (portrait tablets and large phones, 640px and up) */,
  768 /* Medium devices (landscape tablets, 768px and up) */,
  1024 /* Large devices (laptops/desktops, 1024px and up) */,
  1680 /* Extra large devices (large laptops and desktops, 1280px and up) */,
];

export const mq = breakpoints.map((bp) => `@media (min-width: ${bp}px)`);
