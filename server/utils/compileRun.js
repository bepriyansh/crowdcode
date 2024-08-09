const { c, cpp, node, python, java } = require('compile-run');

const compileRun = (code, language) => {
    let outputPromise;

    if (language == "c") {
        outputPromise = c.runSource(code);
    } else if (language == "cpp") {
        outputPromise = cpp.runSource(code);
    } else if (language == "javascript") {
        outputPromise = node.runSource(code);
    } else if (language == "python") {
        outputPromise = python.runSource(code);
    } else if (language == "java") {
        outputPromise = java.runSource(code);
    }

    // Return the promise directly
    return outputPromise.then((result) => {
        return result;
    }).catch((err) => {
        return err;
    });
};

module.exports = compileRun;
