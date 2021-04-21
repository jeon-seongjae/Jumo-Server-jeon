'use strict';

module.exports = {
  up: async (queryInterface, Sequelize) => {

    return await queryInterface.bulkInsert('makgeollis', [{
      brewery_id: null,
      name: '대강소백산 생막걸리',
      area: "충청북도 단양군",
      content: 6,
      explain: "노무현 전 대통령이 앉은 자리에서 여섯 잔을 잇따라 마셨다는 일화로 유명한 막걸리. 청와대 만찬용으로 쓰이기도 했다. 상쾌하면서도 구수한 곡식 향이 좋다. 전통 옹기에서 발효시킨다.",
      material: "쌀, 밀",
      likes: 1,
      views: 1,
      image: "https://s3.ap-northeast-2.amazonaws.com/jumo.ml/NewPhoto/%EB%8C%80%EA%B0%95%EC%86%8C%EB%B0%B1%EC%82%B0+%EC%83%9D%EB%A7%89%EA%B1%B8%EB%A6%AC.jpg"
    },
    {
      brewery_id: null,
      name: '금정산성 먹걸리',
      area: "부산광역시 동래구",
      content: 8,
      explain: "제조 공정에서 전통 양조 방식을 그대로 따라 만든 발효주로 우리나라 많은 막걸리 중에서 유일하게 향토민속주로 지정되어 있는 대한민국 민속주 1호 막걸리입니다.",
      material: "백미, 밀누룩, 정제수, 아스파탐",
      likes: 1,
      views: 1,
      image: "https://s3.ap-northeast-2.amazonaws.com/jumo.ml/NewPhoto/%EA%B8%88%EC%A0%95%EC%82%B0%EC%84%B1%EB%A7%89%EA%B1%B8%EB%A6%AC.jpg"
    },
    {
      brewery_id: null,
      name: '배다리 생막걸리',
      area: "경기도 고양",
      content: 7,
      explain: "박정희 대통령이 14년간 청와대에서 마시고, 김정일 위원장에게도 보내졌다는 막걸리. 풍부한 탄산과 목넘김이 좋고 약간 시콤한 맛도 있어 물리지 않는 맛도 있다는 평.",
      material: "쌀, 밀",
      likes: 1,
      views: 1,
      image: "https://s3.ap-northeast-2.amazonaws.com/jumo.ml/NewPhoto/%EB%B0%B0%EB%8B%A4%EB%A6%AC%EC%83%9D%EB%A7%89%EA%B1%B8%EB%A6%AC.jpg"
    },
    {
      brewery_id: null,
      name: '부자 생술',
      area: "경기도 화성",
      content: 6,
      explain: "전통주 업체인 배혜정 누룩도가에서 만든 막걸리. 감초 등 한약재를 첨가해 단맛을 보탰다. 부드럽고 깔끔하다.",
      material: "백미 90%, 이소말토올리고당 10%",
      likes: 1,
      views: 1,
      image: "https://s3.ap-northeast-2.amazonaws.com/jumo.ml/NewPhoto/%EB%B6%80%EC%9E%90+%EC%83%9D%EC%88%A0.jpg"
    },
    {
      brewery_id: null,
      name: '불로 막걸리',
      area: "대구광역시 동구",
      content: 6,
      explain: "자체 배양한 효모를 사용하여 막걸리를 빚는다. 초록 병에 담긴 쌀막걸리는 상쾌하고 가벼운 현대적인 맛을 추구한다.",
      material: "쌀11.5%,밀가루2.7%,잣0.15%",
      likes: 1,
      views: 1,
      image: "https://s3.ap-northeast-2.amazonaws.com/jumo.ml/NewPhoto/%EB%B6%88%EB%A1%9C%EB%A7%89%EA%B1%B8%EB%A6%AC.jpg"
    },
    {
      brewery_id: null,
      name: '지평 생막걸리',
      area: "경기도 양평군",
      content: 5,
      explain: "깔끔함과 부드러움, 은은한 단맛이 어우러진 쌀막걸리로 지평의 대표 제품.",
      material: "국내산 백미와 자연산 송이",
      likes: 1,
      views: 1,
      image: "https://s3.ap-northeast-2.amazonaws.com/jumo.ml/NewPhoto/%EC%A7%80%ED%8F%89%EC%83%9D%EB%A7%89%EA%B1%B8%EB%A6%AC.jpg"
    },
    {
      brewery_id: null,
      name: '해창 12',
      area: "전라남도 해남군",
      content: 12,
      explain: "찹쌀의 감칠맛과 멥쌀의 센맛이 잘 어울어진 막걸리로 인위적이지 않은 원재료의 단맛이 있지만 강하지 않고 산미가 적당해 어떤 음식과도 잘 어울릴 수 있는 막걸리다.",
      material: "햅쌀, 찹쌀",
      likes: 1,
      views: 1,
      image: "https://s3.ap-northeast-2.amazonaws.com/jumo.ml/NewPhoto/%ED%95%B4%EC%B0%BD12.jpeg"
    },
    {
      brewery_id: null,
      name: '영탁 생막걸리',
      area: "경북 예천군",
      content: 6,
      explain: "봉황이 마셨다는 전설이 내려올 만큼 그 귀한 맛을 술로 빚은 프리미엄 막걸리",
      material: "백미, 누룩",
      likes: 1,
      views: 1,
      image: "https://s3.ap-northeast-2.amazonaws.com/jumo.ml/NewPhoto/%EC%98%81%ED%83%81%EC%83%9D%EB%A7%89%EA%B1%B8%EB%A6%AC.jpg"
    },
    {
      brewery_id: null,
      name: '백련 생막걸리',
      area: "충청남도 당진시",
      content: 7,
      explain: "백련 잎을 발효 과정에 첨가하여 술맛이 담백하면서도 두툼해졌다. 철저한 온도 관리를 통해서 한정 생산하는데, 꽃향이 느껴지고 맛이 은근하여 여운이 길게 남는다.",
      material: "백미, 정제수, 물엿, 과당, 누룩, 백련잎, 누룩",
      likes: 1,
      views: 1,
      image: "https://s3.ap-northeast-2.amazonaws.com/jumo.ml/NewPhoto/%EB%B0%B1%EB%A0%A8%EC%83%9D%EB%A7%89%EA%B1%B8%EB%A6%AC.jpg"
    },
    {
      brewery_id: null,
      name: '대박 막걸리',
      area: "강원도 횡성군",
      content: 6,
      explain: "대박은 생쌀 발효법으로 빚는다. 술맛에서 쌀음료다운 부드러움과 구수함이 느껴지는데, 과일향이 돌기도 하고 치즈향이 돌기도 한다.",
      material: "쌀100%",
      likes: 1,
      views: 1,
      image: "https://s3.ap-northeast-2.amazonaws.com/jumo.ml/NewPhoto/%EB%8C%80%EB%B0%95%EB%A7%89%EA%B1%B8%EB%A6%AC.jpg"
    },
    {
      brewery_id: null,
      name: '심술 6',
      area: "경기도 포천시",
      content: 6,
      explain: "부드럽고 달콤한 캐주얼 막걸리.",
      material: "쌀",
      likes: 1,
      views: 1,
      image: "https://s3.ap-northeast-2.amazonaws.com/jumo.ml/NewPhoto/%EC%8B%AC%EC%88%A06.jpeg"
    },
    {
      brewery_id: null,
      name: '김포 막걸리',
      area: "경기도 김포시",
      content: 6,
      explain: "우리 몸에 좋은 효모균이 그대로 살아 있으며 자연 발효에 의한 탄산과 어우러져 전통탁주에서 느껴지는 감칠맛, 청량감이 뛰어난 제품이다.",
      material: "쌀, 누룩, 정제수",
      likes: 1,
      views: 1,
      image: "https://s3.ap-northeast-2.amazonaws.com/jumo.ml/NewPhoto/%EA%B9%80%ED%8F%AC%EB%A7%89%EA%B1%B8%EB%A6%AC.jpg"
    },
    {
      brewery_id: null,
      name: '미생 막걸리',
      area: "경기도 김포시",
      content: 6,
      explain: "우리 몸에 좋은 효모균이 그대로 살아 있으며 자연 발효에 의한 탄산과 어우러져 전통탁주에서 느껴지는 감칠맛, 청량감이 뛰어난 제품이다.",
      material: "쌀, 누룩, 정제수",
      likes: 1,
      views: 1,
      image: "https://s3.ap-northeast-2.amazonaws.com/jumo.ml/NewPhoto/%EB%AF%B8%EC%83%9D%EB%A7%89%EA%B1%B8%EB%A6%AC.jpg"
    },
    {
      brewery_id: null,
      name: '안성마춤 생막걸리',
      area: "경기도 안성시",
      content: 6,
      explain: "안성마춤쌀을 가까로운 조정기술로 도정하였고 지하 150m를 사용하여 빚은 정통 막걸리이다.",
      material: "쌀, 누룩, 정제수, 효모, 젖산",
      likes: 1,
      views: 1,
      image: "https://s3.ap-northeast-2.amazonaws.com/jumo.ml/NewPhoto/%EC%95%88%EC%84%B1%EB%A7%88%EC%B6%A4%EC%83%9D%EB%A7%89%EA%B1%B8%EB%A6%AC.jpg"
    },
    {
      brewery_id: null,
      name: '줄포 생막걸리',
      area: "전북 부안군",
      content: 6,
      explain: "우리 몸에 좋은 효모균이 그대로 살아 있으며 자연 발효에 의한 탄산과 어우러져 전통탁주에서 느껴지는 감칠맛, 청량감이 뛰어난 제품이다.",
      material: "쌀, 종국정제수, 누룩, 효모, 아스파탐",
      likes: 1,
      views: 1,
      image: "https://s3.ap-northeast-2.amazonaws.com/jumo.ml/NewPhoto/%EC%A4%84%ED%8F%AC%EC%83%9D%EB%A7%89%EA%B1%B8%EB%A6%AC.jpg"
    },
    {
      brewery_id: null,
      name: '인천 생 소정주',
      area: "인천광역시 부평구",
      content: 6,
      explain: "생 소성주는 숙성시간과 담금 횟수를 늘려 부드럽고 톡 쏘는 탄산의 상쾌한 청량감이 느껴지며, 특유의 감칠맛이 매력적이다.",
      material: "쌀, 팽화미, 효모, 아스파탐",
      likes: 1,
      views: 1,
      image: "https://s3.ap-northeast-2.amazonaws.com/jumo.ml/NewPhoto/%EC%9D%B8%EC%B2%9C%EC%83%9D%EC%86%8C%EC%A0%95%EC%A3%BC.jpg"
    },
    {
      brewery_id: null,
      name: '삼양춘 생탁주',
      area: "인천광역시 부평군",
      content: 12.5,
      explain: "삼양춘(三釀春)은 세 번 빚어 맛과 향이 뛰어난 최고급 발효주의 의미를 가지고 있다.",
      material: "강화섬쌀, 전통누룩, 정제수",
      likes: 1,
      views: 1,
      image: "https://s3.ap-northeast-2.amazonaws.com/jumo.ml/NewPhoto/%EC%82%BC%EC%96%91%EC%B6%98%EC%83%9D%ED%83%81%EC%A3%BC.jpg"
    },
    {
      brewery_id: null,
      name: '산막 생유 막걸리',
      area: "대전시 대덕구",
      content: 6,
      explain: "산막 생유 막걸리'는 국내산 쌀(맵쌀, 찹살)과 밀을 이용하고 150미터 암반수에 황토지장수 빚어 저온숙성을 거친 전통적인 막걸리이다.",
      material: "쌀, 소맥분, 종국, 효모",
      likes: 1,
      views: 1,
      image: "https://s3.ap-northeast-2.amazonaws.com/jumo.ml/NewPhoto/%EC%82%B0%EB%A7%89+%EC%83%9D%EC%9C%A0+%EB%A7%89%EA%B1%B8%EB%A6%AC.jpeg"
    },
    {
      brewery_id: null,
      name: '까메오 막걸리',
      area: "강원도 동해시",
      content: 6,
      explain: "까메오 막걸리는 국내산 쌀을 원료로, 지장수의 미네랄이 풍부하게 함유되어 있는 것이 특징이다.",
      material: "쌀, 과당, 누룩, 효모, 정제수",
      likes: 1,
      views: 1,
      image: "https://s3.ap-northeast-2.amazonaws.com/jumo.ml/NewPhoto/%EA%B9%8C%EB%A9%94%EC%98%A4+%EB%A7%89%EA%B1%B8%EB%A6%AC.jpeg"
    },
    {
      brewery_id: null,
      name: '도문대작 생막걸리',
      area: "강원도 강릉시",
      content: 10,
      explain: "튀지 않고 은은하게 올라오는 곡물 발효향이 좋고, 단맛이 적고 적절한 산미가 입 안의 느낌을 매우 깔끔하게 만들어 준다",
      material: "강릉 쌀, 갯방풍나물, 누룩, 정제수",
      likes: 1,
      views: 1,
      image: "https://s3.ap-northeast-2.amazonaws.com/jumo.ml/NewPhoto/%EB%8F%84%EB%AC%B8%EB%8C%80%EC%9E%91+%EC%83%9D%EB%A7%89%EA%B1%B8%EB%A6%AC.jpg"
    },
    {
      brewery_id: null,
      name: '지장수 생막걸리',
      area: "강원도 동해시",
      content: 6,
      explain: "단맛과 신맛의 균형이 잘 이루어진 일반적인 막걸리 맛이지만 입 안에 남는 연한 쓴맛이 음식과의 조화를 잘 맞출 수 있는 술이다.",
      material: "지장수, 쌀, 효모, 누룩, 과당",
      likes: 1,
      views: 1,
      image: "https://s3.ap-northeast-2.amazonaws.com/jumo.ml/NewPhoto/%EC%A7%80%EC%9E%A5%EC%88%98+%EC%83%9D%EB%A7%89%EA%B1%B8%EB%A6%AC.jpeg"
    },
    {
      brewery_id: null,
      name: '시인의 마을',
      area: "충북 옥천군",
      content: 10,
      explain: "'시인의 마을 우리쌀 막걸리'는 단맛을 내는 인공첨가제를 사용하지 않으면서도 전통적인 지역 막걸리의 맛을 복원한 맛으로 옥천 지역을 넘어 많은 곳에서 막걸리 애호가의 입맛을 사로잡고 있다.",
      material: "정제수, 누룩, 쌀",
      likes: 1,
      views: 1,
      image: "https://s3.ap-northeast-2.amazonaws.com/jumo.ml/NewPhoto/%EC%8B%9C%EC%9D%B8%EC%9D%98+%EB%A7%88%EC%9D%84.jpg"
    }
    ]);

  },

  down: async (queryInterface, Sequelize) => {
    // return await queryInterface.bulkDelete('makgeollis', null, {});
  }
};