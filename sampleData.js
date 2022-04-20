export const cardsData = [
  {
    cardId: '00001',
    cardTitle: '醤油',
    background: {
      // icon: 0 image: 1
      type: '1',
      icon: '',
      image: '../media/sample.jpg',
    },
    isProductHas: true,
    category: '調味料',
    option: {
      description: 'ヤマサの醤油がいい。なければキッコーマン',
      buyingLocations: [
        '成城石井',
        'ヨーカドー',
        'コンビニ',
      ],
      isPrivate: true,
      tags: [
        'セール中のみ購入',
        '国産',
      ],
    },
  },
  {
    cardId: '00002',
    cardTitle: 'トイレットペーパー',
    background: {
      type: '1',
      icon: '',
      image: '../media/sample-2.jpg',
    },
    isProductHas: true,
    category: '衛生用品',
    option: {
      description: 'ダブルロールは高いから、シングルロールが良い',
      buyingLocations: [
        'ドラッグストア',
        'カインズ',
      ],
      isPrivate: true,
      tags: [
        'エコ',
      ],
    },
  },
  {
    cardId: '00003',
    cardTitle: 'ドッグフード',
    background: {
      type: '1',
      icon: '',
      image: '../media/sample-3.jpg',
    },
    isProductHas: true,
    category: 'ペット用品',
    option: {
      description: '',
      buyingLocations: [
        'カインズ',
      ],
      isPrivate: true,
      tags: [
        '国産',
      ],
    },
  },
];
