import * as React from 'react';
import Svg, {Path} from 'react-native-svg';

function Eye(props) {
  return (
    <Svg
      width={24}
      height={24}
      viewBox="0 0 24 24"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      {...props}>
      <Path d="M12 15a3 3 0 100-6 3 3 0 000 6z" fill="#96989A" />
      <Path
        d="M23.008 11.184c-1.24-1.918-2.85-3.547-4.653-4.712-1.996-1.29-4.199-1.972-6.37-1.972-1.994 0-3.954.57-5.826 1.693-1.91 1.145-3.639 2.818-5.141 4.972a1.496 1.496 0 00-.03 1.666c1.238 1.937 2.83 3.569 4.607 4.718 1.999 1.295 4.15 1.951 6.39 1.951 2.189 0 4.396-.676 6.383-1.956 1.803-1.16 3.41-2.796 4.645-4.73a1.51 1.51 0 00-.005-1.63zM12 16.5a4.5 4.5 0 110-9 4.5 4.5 0 010 9z"
        fill="#96989A"
      />
    </Svg>
  );
}

export default Eye;
