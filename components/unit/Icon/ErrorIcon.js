import * as React from 'react';
import Svg, {Path} from 'react-native-svg';

function ErrorIcon(props) {
  return (
    <Svg
      width={16}
      height={16}
      viewBox="0 0 16 16"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      {...props}>
      <Path
        d="M9.05.435c-.58-.58-1.52-.58-2.1 0L.436 6.95c-.58.58-.58 1.519 0 2.098l6.516 6.516c.58.58 1.519.58 2.098 0l6.516-6.516c.58-.58.58-1.519 0-2.098L9.05.435zM8 4c.535 0 .954.462.9.995l-.35 3.507a.552.552 0 01-1.1 0L7.1 4.995A.905.905 0 018 4zm.002 6a1 1 0 110 2 1 1 0 010-2z"
        fill="#C90039"
        strokeWidth={2}
      />
    </Svg>
  );
}

export default ErrorIcon;
