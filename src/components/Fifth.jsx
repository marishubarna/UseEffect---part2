import { useRef } from "preact/hooks";
import React from "preact/compat";

const FocusInput = () => {
  const inputRef = useRef(null);

  const handelFocus = () => {
    inputRef.current.focus();
    inputRef.current.value = "";
  };

  return (
    <div>
      <input type="text" ref={inputRef} placeholder="Текст" />
      <button onClick={handelFocus}>Focus</button>
    </div>
  );
};

export default FocusInput;

// import React, { useRef } from "react";

// const FocusInput = () => {
//   // Створюємо реф для інпуту
//   const inputRef = useRef(null);

//   // Функція для встановлення фокусу та очищення поля
//   const handleFocus = () => {
//     inputRef.current.focus(); // Встановлює фокус на інпут
//     inputRef.current.value = ""; // Очищає поле після фокусування
//   };

//   return (
//     <div>
//       <input type="text" ref={inputRef} placeholder="Введіть текст" />
//       <button onClick={handleFocus}>Focus</button>
//     </div>
//   );
// };

// export default FocusInput;
