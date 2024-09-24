import { c, cpp, node, python, java } from 'compile-run';

const compileRun = async (code, language) => {
    let outputPromise;

    if (language === "c") {
        outputPromise = c.runSource(code);
    } else if (language === "cpp") {
        outputPromise = cpp.runSource(code);
    } else if (language === "javascript") {
        outputPromise = node.runSource(code);
    } else if (language === "python") {
        outputPromise = python.runSource(code);
    } else if (language === "java") {
        outputPromise = java.runSource(code);
    } else {
        return Promise.reject(new Error("Unsupported language"));
    }

    // Return the promise directly
    try {
        const result = await outputPromise;
        return result;
    } catch (err) {
        return err;
    }
};

export default compileRun;