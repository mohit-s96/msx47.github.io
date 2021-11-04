import React, { useEffect, useState } from "react";

function TransitionHOC(props) {
  const [text, setText] = useState([]);
  useEffect(() => {
    let arr = props.text
      .split("")
      .map((x) =>
        x === " "
          ? { char: x, class: "bend pad-space" }
          : { char: x, class: "bend" }
      );
    setText(arr);
    let count = 0;
    setTimeout(() => {
      const id = setInterval(() => {
        const x = props.iref.current.children;
        // console.log(x);
        x[count].className =
          x[count].textContent === " " ? "fade pad-space" : "fade";
        count++;
        count === arr.length && clearInterval(id);
      }, 100);
    }, 4000);
    // eslint-disable-next-line
  }, []);
  return props.render({
    text: text,
    ref: props.iref,
    ui: () =>
      text.length
        ? text.map((x) => (
            <span key={Math.floor(Math.random() * 10000)} className={x.class}>
              {x.char}
            </span>
          ))
        : null,
  });
}

export default TransitionHOC;
