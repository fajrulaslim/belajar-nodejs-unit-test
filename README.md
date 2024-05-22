npm i jest --save-dev

untuk menjalankan unit test jest, node_modules/.bin/jest
ganti script "test": "jest" di package.json
npm run test

agar berjalan runtime, gunakan npx (node package runner)
npx jest

configurasi jest ada 2 macam
1. di package.json tambahkan:
"jest": {
    "transform": {
      "^.+\\.[t|j]sx?$": "babel-jest"
    }
  },

2. dengan npx jest --init, otomatis membuat jest.config.mjs

npx jest --help
npx jest --runTestsByPath test/sum.test.js
npx jest --testNamePattern "test sum function 2"