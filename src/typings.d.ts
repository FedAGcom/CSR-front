declare module '*.svg' {
  import React = require('react');
  export const ReactComponent: React.SFC<React.SVGProps<SVGSVGElement>>;
  const src: string;
  export default src;
}
declare module '*.png' {
  const url: string;
  export default url;
}
declare module '*.mp3';
declare module 'js-cookie';
