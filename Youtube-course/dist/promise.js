"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
function callMeFirst() {
    return new Promise((resolved) => {
        setTimeout(() => {
            resolved({
                name: "java",
                age: 25,
            });
        }, 2000);
    });
}
callMeFirst().then((data) => {
    console.log(data);
});
//# sourceMappingURL=promise.js.map