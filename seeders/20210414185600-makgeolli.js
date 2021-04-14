'use strict';
const { brewery } = require('../models');

module.exports = {
  up: async (queryInterface, Sequelize) => {
    const breweryId = await brewery.findAll({
      attributes: ['id']
    })

    return await queryInterface.bulkInsert('makgeollis', [{
      brewery_id: breweryId[0].id,
      name: '초가우리쌀막걸리',
      area: "강원도 철원",
      content: 6.5,
      explain: "백화미인이라는 걸작을 만들어낸 초가의 저도수 제품이다. 누룩 특유의 꼬릿꼬릿한 탁주 냄새를 줄인 깔끔한 느낌의 살균 탁주다",
      material: "백미 100%",
      likes: 1,
      views: 1,
      image: "https://s3.ap-northeast-2.amazonaws.com/jumo.ml/NewPhoto/%E1%84%8E%E1%85%A9%E1%84%80%E1%85%A1%E1%84%8B%E1%85%AE%E1%84%85%E1%85%B5%E1%84%8A%E1%85%A1%E1%86%AF%E1%84%86%E1%85%A1%E1%86%A8%E1%84%80%E1%85%A5%E1%86%AF%E1%84%85%E1%85%B5.jpg"
    }
    ]);

  },

  down: async (queryInterface, Sequelize) => {
    return await queryInterface.bulkDelete('makgeollis', null, {});
  }
};
