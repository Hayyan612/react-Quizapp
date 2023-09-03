import './App.css';
import Quiz from './components/Quiz'
import './App.css'

function App() {
  return (
    <>
      <Quiz/>
    </>
  )
}

// function changeColor(button) {
//   button.classList.add("correct");
//   setTimeout(() => {
//     button.classList.remove("correct");
//   }, 500);
// }

// const optionButtons = document.querySelectorAll(".option-btn");

// for (const button of optionButtons) {
//   button.addEventListener("click", () => {
//     if (button.classList.contains("checked")) {
//       if (button.dataset.correct === "true") {
//         changeColor(button);
//       } else {
//         changeColor(button, "red");
//       }
//     }
//   });
// }


export default App;
