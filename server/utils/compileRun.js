const { c, cpp, node, python, java } = require('compile-run');

const compileRun = (code, language) => {
    let output = "";
    switch (language) {
        case "c":
            c.runSource(code).then((result) => { output = result; console.log(result) }).catch((err) => { output = err })
            break;
            
        case "cpp":
            cpp.runSource(code).then((result) => { output = result; console.log(result) }).catch((err) => { output = err })
            break;
            
        case "node":
            node.runSource(code).then((result) => { output = result; console.log(result) }).catch((err) => { output = err })
            break;
            
        case "python":
            python.runSource(code).then((result) => { output = result; console.log(result) }).catch((err) => { output = err })
            break;
            
        case "java":
            java.runSource(code).then((result) => { output = result; console.log(result) }).catch((err) => { output = err })
            break;

        default:
            return "UNSUPPORTED LANGUAGE"
            break;
    }
    return output;
}
module.exports = compileRun;