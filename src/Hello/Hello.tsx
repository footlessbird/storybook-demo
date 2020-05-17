import React from "react";
import PropTypes from "prop-types";

type HelloProps = {
  /** 보여주고 싶은 이름 */
  name: string;
  /** 이 값을 'true'로 설정하면 h1 태그로 렌더링 됩니다 */
  big?: boolean;
  /** hello 버튼을 누를 때 호출할 함수 */
  onHello?: () => void;
  /** bye 버튼을 누를 때 호출할 함수 */
  onBye?: () => void;
};

// 컴포넌트 코드 바로 위에 /** */ 주석으로 설명을 추가할 수 있습니다.
/**
 * '안녕하세요' 라고 보여주고 싶을 때 'Hello' 컴포넌트를 사용하세요.
 *
 * - `big` 값을 `true`로 설정하면 **크게** 나타납니다.
 * - `onHello` 와 `onBye` props로 설정하여 버튼이 클릭됐을 때 호출 할 함수를 지정할 수 있습니다
 */

function Hello({ name, big, onHello, onBye }: HelloProps) {
  return (
    <div>
      {big ? <h1>안녕하세요, {name}</h1> : <p>안녕하세요, {name}</p>}
      <button onClick={onHello}>Hello</button>
      <button onClick={onBye}>Bye</button>
    </div>
  );
}

Hello.defaultProps = {
  big: false,
};

export default Hello;
