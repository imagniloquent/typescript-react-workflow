module.exports = {
    transform: {
        "^.+\\.ts?$": "ts-jest",
        "^.+\\.tsx?$": "ts-jest",
    },
    testRegex: "(/__tests__/.*|(\\.|/)(test|spec))\\.(jsx?|tsx?)$",
    moduleFileExtensions: ["ts", "tsx", "js", "jsx", "json", "node"],
    setupFiles: ["<rootDir>/setupTests.ts"],
    moduleNameMapper: {
        "^.+\\.(css|less|scss)$": "identity-obj-proxy",
    },
};
