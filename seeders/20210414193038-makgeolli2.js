'use strict';
const { brewery } = require('../models');

module.exports = {
  up: async (queryInterface, Sequelize) => {
    const breweryId = await brewery.findAll({
      attributes: ['id']
    })

    return await queryInterface.bulkInsert('makgeollis', [{
      brewery_id: breweryId[1].id,
      name: '포천일동막걸리',
      area: "경기도 포천",
      content: 6,
      explain: "고급스러운 색상, 밸런스, 달달함, 요거트 풍미의 피니쉬 그리고 벨벳과 같은 부드러운 질감과 목넘김",
      material: "정제수, 쌀 5.71%, 밀가루3.43%, 입국3.43%,찹쌀 1,71%,효모,정제효소제,아스파탐,아세설팔캄륨",
      likes: 2,
      views: 2,
      image: "https://s3.ap-northeast-2.amazonaws.com/jumo.ml/NewPhoto/%E1%84%91%E1%85%A9%E1%84%8E%E1%85%A5%E1%86%AB%E1%84%8B%E1%85%B5%E1%86%AF%E1%84%83%E1%85%A9%E1%86%BC%E1%84%86%E1%85%A1%E1%86%A8%E1%84%80%E1%85%A5%E1%86%AF%E1%84%85%E1%85%B5.jpg"
    },
    {
      brewery_id: breweryId[2].id,
      name: '이동쌀먹걸리',
      area: "경기도 포천",
      content: 6,
      explain: "이동 주조의 막걸리들은 전통적인 방법으로 발효를 시키고 있다. 항아리를 이용하여 발효 시키고 있는 막걸리들은 쌀과 밀의 황금 비율을 통해서 깔금함과 막걸리 특유의 묵직함이 조화를 이루고 있다.",
      material: "정제수, 백미 7.55%, 소맥분 6.78%, 종국, 정제효소, 아스파탐, 젖산, 효모",
      likes: 3,
      views: 3,
      image: "https://s3.ap-northeast-2.amazonaws.com/jumo.ml/NewPhoto/%E1%84%8B%E1%85%B5%E1%84%83%E1%85%A9%E1%86%BC%E1%84%8A%E1%85%A1%E1%86%AF%E1%84%86%E1%85%A1%E1%86%A8%E1%84%80%E1%85%A5%E1%86%AF%E1%84%85%E1%85%B5.jpg"
    },
    {
      brewery_id: breweryId[3].id,
      name: '설악쌀막걸리',
      area: "강원도 고성",
      content: 6,
      explain: "국내유일 해양심층수로 만들어낸 막걸리",
      material: "정제수,쌀(국내산)7.8%,쌀(수입산)4.7%,국",
      likes: 4,
      views: 4,
      image: "https://s3.ap-northeast-2.amazonaws.com/jumo.ml/NewPhoto/%E1%84%89%E1%85%A5%E1%86%AF%E1%84%8B%E1%85%A1%E1%86%A8%E1%84%8A%E1%85%A1%E1%86%AF%E1%84%86%E1%85%A1%E1%86%A8%E1%84%80%E1%85%A5%E1%86%AF%E1%84%85%E1%85%B5.jpg"
    },
    {
      brewery_id: breweryId[4].id,
      name: '장수생막걸리',
      area: "서울",
      content: 6,
      explain: "장수(長壽) 생막걸리는 효모균이 그대로 살아있습니다. 백미를 사용해 장기저온숙성 방식으로 만들어져 영양이 풍부하고 자연발효에 의한 탄산과 어울려 감칠맛과 청량감이 일품입니다. 또한 고품격 전통 막걸리의 대명사로서 트림과 숙취도 거의 없어 오랜시간 동안 사랑을 받고 있습니다.",
      material: "백미 90%, 이소말토올리고당 10%",
      likes: 5,
      views: 5,
      image: "https://s3.ap-northeast-2.amazonaws.com/jumo.ml/NewPhoto/%E1%84%8C%E1%85%A1%E1%86%BC%E1%84%89%E1%85%AE%E1%84%89%E1%85%A2%E1%86%BC%E1%84%86%E1%85%A1%E1%86%A8%E1%84%80%E1%85%A5%E1%86%AF%E1%84%85%E1%85%B5+copy.jpg"
    },
    {
      brewery_id: breweryId[6].id,
      name: '가평잣막걸리',
      area: "경기도 가평",
      content: 6,
      explain: "막 걸러냈다’라는 말에서 유래한 이름 탓인지, 막걸리는 자칫 잘못하면 쉽게 발효시켜 막 내어놓는 술처럼 느껴질 수도 있다, 하지만 전통주를 만드는 모든 과정에는 항상 명인들의 손길이 닿아 있고 한순간도 정성을 빼놓는 일이 없다.",
      material: "쌀11.5%,밀가루2.7%,잣0.15%",
      likes: 6,
      views: 6,
      image: "https://s3.ap-northeast-2.amazonaws.com/jumo.ml/NewPhoto/%E1%84%80%E1%85%A1%E1%84%91%E1%85%A7%E1%86%BC%E1%84%8C%E1%85%A1%E1%86%BA%E1%84%86%E1%85%A1%E1%86%A8%E1%84%80%E1%85%A5%E1%86%AF%E1%84%85%E1%85%B5.jpg"
    },
    {
      brewery_id: breweryId[7].id,
      name: '송이동동주',
      area: "강원도양양군",
      content: 6,
      explain: "왠지 사회적으로 귀한 분만 이 술로 접대를 해야 할 듯하지만, 오늘만큼은 특별하게 내 가족과 함께 이 '송이 동동주'와 좋은 음식으로, 세상에서 제일 소중하며 편안한 가족의 존재에 감사하는 시간을 가져보는 것을 추천하고 싶다",
      material: "국내산 백미와 자연산 송이",
      likes: 7,
      views: 7,
      image: "https://s3.ap-northeast-2.amazonaws.com/jumo.ml/NewPhoto/%E1%84%89%E1%85%A9%E1%86%BC%E1%84%8B%E1%85%B5%E1%84%83%E1%85%A9%E1%86%BC%E1%84%83%E1%85%A9%E1%86%BC%E1%84%8C%E1%85%AE.jpg"
    },
    {
      brewery_id: breweryId[8].id,
      name: '산삼가득먹걸리',
      area: "경기도 광주시",
      content: 6,
      explain: "산삼가득 살균 막걸리 입니다. 살균 막걸리 특유의 향을 산양산삼의 은은한 향으로 없애주어 애주가들로 부터 사랑 받고있는 제품입니다. 식당, 백화점에서 극찬을 받고있는 제품입니다.",
      material: "경기미 100",
      likes: 8,
      views: 8,
      image: "https://s3.ap-northeast-2.amazonaws.com/jumo.ml/NewPhoto/%E1%84%89%E1%85%A1%E1%86%AB%E1%84%89%E1%85%A1%E1%86%B7%E1%84%80%E1%85%A1%E1%84%83%E1%85%B3%E1%86%A8%E1%84%86%E1%85%A1%E1%86%A8%E1%84%80%E1%85%A5%E1%86%AF%E1%84%85%E1%85%B5.jpg"
    },
    {
      brewery_id: breweryId[9].id,
      name: '참살이탁주',
      area: "경기도 광주",
      content: 6,
      explain: "우리나라 전통주 중 하나인 '남한산성소주', 이 술을 만드시는 분이 인간문화재인 '강석필’님이신데요. 이 분께서 대표로 계신 술도가에서 만든 탁주, [참살이 꿀막걸리]입니다.",
      material: "백미100%",
      likes: 9,
      views: 9,
      image: "https://s3.ap-northeast-2.amazonaws.com/jumo.ml/NewPhoto/%E1%84%8E%E1%85%A1%E1%86%B7%E1%84%89%E1%85%A1%E1%86%AF%E1%84%8B%E1%85%B5%E1%84%90%E1%85%A1%E1%86%A8%E1%84%8C%E1%85%AE.jpg"
    },
    {
      brewery_id: breweryId[10].id,
      name: '이천생막걸리',
      area: "경기도 이천",
      content: 7,
      explain: "내륙 중앙에 위치한 이천은 분지형 지형으로 일교차가 크고 일조량이 많아 임금님진상미로 유명한 국내제일의 쌀 생산지역이다. 이천쌀생막걸리는 100% 이천쌀을 원료로 사용하고 술덧은 물론 밑술까지 저온장기숙성하여 풍부한 영양과 탄산의 맛이 어우러져 깊은 맛과 향이 있는 막걸리이다.",
      material: "쌀100%",
      likes: 10,
      views: 10,
      image: "https://s3.ap-northeast-2.amazonaws.com/jumo.ml/NewPhoto/%E1%84%8B%E1%85%B5%E1%84%8E%E1%85%A5%E1%86%AB%E1%84%89%E1%85%A2%E1%86%BC%E1%84%86%E1%85%A1%E1%86%A8%E1%84%80%E1%85%A5%E1%86%AF%E1%84%85%E1%85%B5.jpg"
    },
    {
      brewery_id: breweryId[11].id,
      name: '덕산쌀생막걸리',
      area: "충북 진천",
      content: 6,
      explain: "3대를 걸쳐 발효실을 지켜온 술독에서 그날처럼 우리술이 익어갑니다",
      material: "쌀70%,소맥분10%,전분당10%",
      likes: 11,
      views: 11,
      image: "https://s3.ap-northeast-2.amazonaws.com/jumo.ml/NewPhoto/%E1%84%83%E1%85%A5%E1%86%A8%E1%84%89%E1%85%A1%E1%86%AB%E1%84%8A%E1%85%A1%E1%86%AF%E1%84%89%E1%85%A2%E1%86%BC%E1%84%86%E1%85%A1%E1%86%A8%E1%84%80%E1%85%A5%E1%86%AF%E1%84%85%E1%85%B5.jpg"
    },
    {
      brewery_id: breweryId[12].id,
      name: '공주알밤주',
      area: "충청남도 공주시",
      content: 6,
      explain: "효모가 살아있는 생막걸리 !! 입안가득 맴도는 감칠맛!청량감!기분업!",
      material: "쌀,밤",
      likes: 12,
      views: 12,
      image: "https://s3.ap-northeast-2.amazonaws.com/jumo.ml/NewPhoto/%E1%84%80%E1%85%A9%E1%86%BC%E1%84%8C%E1%85%AE%E1%84%8B%E1%85%A1%E1%86%AF%E1%84%87%E1%85%A1%E1%86%B7%E1%84%8C%E1%85%AE.jpg"
    },
    {
      brewery_id: breweryId[13].id,
      name: '세종생막걸리',
      area: "충청북도 청주시",
      content: 6,
      explain: "자연탄산 발생으로 청량감과 감칠맛이 뛰어나고 목 넘김이 좋음",
      material: "소맥분, 종국(조제종국), 효모분말, 멥쌀백미(수입산), 팽화미분(수입산), 물엿(전분당), 조효소제, 젖산, 아스파탐, 삭카린나트륨, 이소말토올리고당, 정제수",
      likes: 13,
      views: 13,
      image: "https://s3.ap-northeast-2.amazonaws.com/jumo.ml/NewPhoto/%E1%84%89%E1%85%A6%E1%84%8C%E1%85%A9%E1%86%BC%E1%84%89%E1%85%A2%E1%86%BC%E1%84%86%E1%85%A1%E1%86%A8%E1%84%80%E1%85%A5%E1%86%AF%E1%84%85%E1%85%B5.jpg"
    },
    {
      brewery_id: breweryId[14].id,
      name: '울릉도호박막걸리',
      area: "경상북도울릉군",
      content: 6,
      explain: "청정 울릉도 추산용출수로 빚은 프리미엄 웰빙 호박 막걸리",
      material: "쌀, 입국, 호박분말",
      likes: 14,
      views: 14,
      image: "https://s3.ap-northeast-2.amazonaws.com/jumo.ml/NewPhoto/%E1%84%8B%E1%85%AE%E1%86%AF%E1%84%85%E1%85%B3%E1%86%BC%E1%84%83%E1%85%A9%E1%84%92%E1%85%A9%E1%84%87%E1%85%A1%E1%86%A8%E1%84%86%E1%85%A1%E1%86%A8%E1%84%80%E1%85%A5%E1%86%AF%E1%84%85%E1%85%B5.jpg"
    },
    {
      brewery_id: breweryId[15].id,
      name: '운봉생막걸리',
      area: "전라북도 남원",
      content: 6,
      explain: "30년의 전통과 2대째 이어온 자존심으로 지리산에서 제일 높은곳에 위치한 제조장으로써 지리산의 맑은 물과 신선함이 살아있고 구름이 쉬어가는 운봉골의 부드러운 맛을 느낄 수 있는 막걸리이다.",
      material: "쌀100%",
      likes: 15,
      views: 15,
      image: "https://s3.ap-northeast-2.amazonaws.com/jumo.ml/NewPhoto/%E1%84%8B%E1%85%AE%E1%86%AB%E1%84%87%E1%85%A9%E1%86%BC%E1%84%89%E1%85%A2%E1%86%BC%E1%84%86%E1%85%A1%E1%86%A8%E1%84%80%E1%85%A5%E1%86%AF%E1%84%85%E1%85%B5.jpg"
    },
    {
      brewery_id: breweryId[16].id,
      name: '제주오매기술',
      area: "제주도",
      content: 6,
      explain: "오메기란 차조를 일컫는 제주도의 방언이라고 합니다",
      material: "백미, 입국, 차조",
      likes: 16,
      views: 16,
      image: "https://s3.ap-northeast-2.amazonaws.com/jumo.ml/NewPhoto/%E1%84%8C%E1%85%A6%E1%84%8C%E1%85%AE%E1%84%8B%E1%85%A9%E1%84%86%E1%85%A2%E1%84%80%E1%85%B5%E1%84%89%E1%85%AE%E1%86%AF.jpg"
    },
    {
      brewery_id: breweryId[17].id,
      name: '이화백주',
      area: "경남 양산",
      content: 6,
      explain: "서로 마실수록 이롭다’ 라는 뜻을 담은 이화백주. 아스파담이 없다.",
      material: "금개구리쌀, 삽량주쌀,천성산의 물",
      likes: 17,
      views: 17,
      image: "https://s3.ap-northeast-2.amazonaws.com/jumo.ml/NewPhoto/%E1%84%8B%E1%85%B5%E1%84%92%E1%85%AA%E1%84%87%E1%85%A2%E1%86%A8%E1%84%8C%E1%85%AE.jpg"
    },
    {
      brewery_id: breweryId[18].id,
      name: '고구마막걸리',
      area: "전라남도 해남군",
      content: 6,
      explain: "해남의 특산물인 고구마와 옥천면의 대한민국 최고 1등쌀인 한눈에 반한쌀을 이용, 전통발효식초인 고구마 막걸리 식초를 만든다. 술맛이 좋아, 인근 대도시인 광주나 목포에서 인기가 높다.",
      material: "쌀,고구마",
      likes: 18,
      views: 18,
      image: "https://s3.ap-northeast-2.amazonaws.com/jumo.ml/NewPhoto/%E1%84%80%E1%85%A9%E1%84%80%E1%85%AE%E1%84%86%E1%85%A1%E1%84%86%E1%85%A1%E1%86%A8%E1%84%80%E1%85%A5%E1%86%AF%E1%84%85%E1%85%B5.jpg"
    },
    {
      brewery_id: breweryId[19].id,
      name: '여수생막걸리',
      area: "전라남도 여수",
      content: 6,
      explain: "80년 전통 3대를 이어온 막걸리",
      material: "정제수, 쌀, 밀가루, 밀, 우유",
      likes: 19,
      views: 19,
      image: "https://s3.ap-northeast-2.amazonaws.com/jumo.ml/NewPhoto/%E1%84%8B%E1%85%A7%E1%84%89%E1%85%AE%E1%84%89%E1%85%A2%E1%86%BC%E1%84%86%E1%85%A1%E1%86%A8%E1%84%80%E1%85%A5%E1%86%AF%E1%84%85%E1%85%B5.jpg"
    },
    {
      brewery_id: breweryId[20].id,
      name: '곡성생막걸리',
      area: "전라남도 곡성군",
      content: 6,
      explain: "영화 ‘곡성’촬영지로 유명한 곡성의 막걸리",
      material: "쌀14.5%",
      likes: 20,
      views: 20,
      image: "https://s3.ap-northeast-2.amazonaws.com/jumo.ml/NewPhoto/%E1%84%80%E1%85%A9%E1%86%A8%E1%84%89%E1%85%A5%E1%86%BC%E1%84%89%E1%85%A2%E1%86%BC%E1%84%86%E1%85%A1%E1%86%A8%E1%84%80%E1%85%A5%E1%86%AF%E1%84%85%E1%85%B5.jpg"
    },
    {
      brewery_id: breweryId[21].id,
      name: '해창막걸리',
      area: "전라남도 해남군",
      content: 6,
      explain: "막걸리 계의 ‘롤스로이스. 개당 11만원",
      material: "찹쌀15.3%",
      likes: 21,
      views: 21,
      image: "https://s3.ap-northeast-2.amazonaws.com/jumo.ml/NewPhoto/%E1%84%92%E1%85%A2%E1%84%8E%E1%85%A1%E1%86%BC%E1%84%86%E1%85%A1%E1%86%A8%E1%84%80%E1%85%A5%E1%86%AF%E1%84%85%E1%85%B5.jpg"
    },
    {
      brewery_id: breweryId[22].id,
      name: '안동회곡막걸리',
      area: "경상북도 안동",
      content: 6,
      explain: "3대째 가업을 이어가며 100% 순 우리 쌀에 낙동강 청정상류 맑은 물로 정성을 더하여 빚은 회곡양조장. 1920년대에 시작하여 현재 2대 김숙자 할머니가 54년째 술을 정성으로 빚고 있으며 3대째인 권용복대표가 비법을 전수받아 전통을 계승하고 있다. 누룩을 띄운 뒤 물을 섞어 효모와 효소를 배양하고 여기에 고두밥을 넣어 1주일 동안 저온에서 완전히 숙성시켜 뒤끝 없는 깔끔한 맛이 특징이다",
      material: "쌀, 입국, 밀",
      likes: 22,
      views: 22,
      image: "https://s3.ap-northeast-2.amazonaws.com/jumo.ml/NewPhoto/%E1%84%8B%E1%85%A1%E1%86%AB%E1%84%83%E1%85%A9%E1%86%BC%E1%84%92%E1%85%AA%E1%84%80%E1%85%A9%E1%86%A8%E1%84%86%E1%85%A1%E1%86%A8%E1%84%80%E1%85%A5%E1%86%AF%E1%84%85%E1%85%B5.jpg"
    },
    {
      brewery_id: breweryId[23].id,
      name: '대전부르스막걸리',
      area: "대전광역시",
      content: 6,
      explain: "4년전 대전부르스를 처음 출시해 유통을 시작했으나 이번에 유성구 구암동에 공장과 연구실을 마련해 본격적인 자체 양산체제를 갖췄다. 대전부르스는 기계 사용을 최소화하고 수가공 위주의 정통방식으로 생산하는 것이 특징.",
      material: "누룩, 쌀",
      likes: 23,
      views: 23,
      image: "https://s3.ap-northeast-2.amazonaws.com/jumo.ml/NewPhoto/%E1%84%83%E1%85%A2%E1%84%8C%E1%85%A5%E1%86%AB%E1%84%87%E1%85%AE%E1%84%85%E1%85%B3%E1%84%89%E1%85%B3%E1%84%86%E1%85%A1%E1%86%A8%E1%84%80%E1%85%A5%E1%86%AF%E1%84%85%E1%85%B5.jpg"
    },
    {
      brewery_id: breweryId[24].id,
      name: '국순당막걸리',
      area: "서울",
      content: 6,
      explain: "국내 최대 규모의 막걸리",
      material: "쌀%",
      likes: 24,
      views: 24,
      image: "https://s3.ap-northeast-2.amazonaws.com/jumo.ml/NewPhoto/%E1%84%80%E1%85%AE%E1%86%A8%E1%84%89%E1%85%AE%E1%86%AB%E1%84%83%E1%85%A1%E1%86%BC.jpg"
    },
    ]);

  },

  down: async (queryInterface, Sequelize) => {
    return await queryInterface.bulkDelete('makgeollis', null, {});
  }
};
