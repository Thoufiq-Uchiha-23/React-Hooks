import FunctionContextComponent from "./FunctionContextComponent";
import { ThemeProvider } from "./ThemeContext";

const ContextHook = () => {
  return (
    <div>
      <ThemeProvider>
        <FunctionContextComponent />
      </ThemeProvider>
    </div>
  );
};

export default ContextHook;
