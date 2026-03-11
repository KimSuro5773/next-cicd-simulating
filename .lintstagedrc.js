import { relative } from "path";

const buildEslintCommand = (filenames) =>
  `eslint --fix ${filenames.map((f) => `"${relative(process.cwd(), f)}"`).join(" ")}`;

const config = {
  "*.{js,jsx,ts,tsx}": [
    "prettier --write", // 변경된 파일만 포맷
    buildEslintCommand, // 변경된 파일만 lint
  ],
  "*.{css,md,json}": [
    "prettier --write", // 기타 파일 포맷
  ],
};

export default config;
