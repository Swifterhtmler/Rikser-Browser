const expect = function(val) {
    return {
        toBe: function(sval) {
            if (val === sval) {
                return true;
            } else {
                throw new Error("Not Equal");
            }
        },
        notToBe: function(tval) {
            if (val !== tval) {
                return true;
            } else {
                throw new Error("Equal");
            }
        }
    };
};

console.log(expect(5).toBe(5))