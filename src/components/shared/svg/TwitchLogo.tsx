import { FC, SVGProps } from 'react';

export const TwitchLogo: FC<SVGProps<SVGSVGElement>> = (props) => {
  return (
    <svg
      xmlns='http://www.w3.org/2000/svg'
      x='0px'
      y='0px'
      viewBox='0 0 512 512'
      xmlSpace='preserve'
      preserveAspectRatio='xMidYMid'
      {...props}>
      <rect xmlns="http://www.w3.org/2000/svg" width="512" height="512" rx="15%" fill="#6441a4"/>
      <path xmlns="http://www.w3.org/2000/svg" d="m115 101-22 56v228h78v42h44l41-42h63l85-85v-199zm260 185-48 48h-78l-42 42v-42h-65v-204h233zm-48-100v85h-30v-85zm-78 0v85h-29v-85z" fill="#fff">
      </path>
    </svg>
  );
};
