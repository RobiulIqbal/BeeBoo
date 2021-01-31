import {
  TigaApa,
  TigaYa,
  TigaBaju,
  TigaHaus,
  TigaHello,
  TigaMandi,
  TigaTolong,
  TigaRumah,
  TigaLapar,
  TigaLuka,
  TigaMendengarkan,
  TigaPagi,
  TigaMalam,
  TigaKeluar,
  TigaTidur,
  TigaToilet,
  TigaNo,
} from '../../../../assets/Images/General';

const data = [
  {
    title: 'Membantu',
    voice: 'Membantu',
    image: TigaTolong,
    content: [
      {image: TigaTolong, title: 'Apakah kamu bisa membantu saya?'},
      {image: TigaTolong, title: 'Apakah ada yang bisa saya bantu?'},
    ],
  },
  {
    title: 'Lapar',
    voice: 'Lapar',
    image: TigaLapar,
    content: [
      {image: TigaLapar, title: 'Saya Lapar!'},
      {image: TigaLapar, title: 'Apakah Kamu Lapar?'},
      {image: TigaLapar, title: 'Bisakah Kamu Menyiapkan Makanan Untuk Saya'},
    ],
  },
  {
    title: 'Haus',
    voice: 'Haus',
    image: TigaHaus,
    content: [
      {image: TigaHaus, title: 'Saya haus!'},
      {image: TigaHaus, title: 'Apakah kamu haus?'},
      {image: TigaHaus, title: 'Bisakah kamu memberikan saya air?'},
      {image: TigaHaus, title: 'Saya ingin sesuatu untuk di minum!'},
    ],
  },
  {
    title: 'Toilet',
    voice: 'Toilet',
    image: TigaToilet,
    content: [
      {
        image: TigaToilet,
        title: 'Saya perlu pergi ke toilet!',
      },
      {
        image: TigaToilet,
        title: 'Bisakah kamu membawa saya ke toilet',
      },
      {
        image: TigaToilet,
        title: 'Saya ingin buang air besar',
      },
      {
        image: TigaToilet,
        title: 'Saya ingin buang air kecil',
      },
    ],
  },
  {
    title: 'Apa',
    voice: 'Apa',
    image: TigaApa,
    content: [
      {image: TigaApa, title: 'Apa maksudmu?'},
      {image: TigaApa, title: 'Apa artinya itu?'},
    ],
  },
  {
    title: 'Ya',
    voice: 'Ya',
    image: TigaYa,
    content: [
      {
        image: TigaYa,
        title: 'Ya!',
      },
      {
        image: TigaYa,
        title: 'Oke',
      },
      {
        image: TigaYa,
        title: 'Saya setuju!',
      },
      {
        image: TigaYa,
        title: 'Benar',
      },
    ],
  },
  {
    title: 'No',
    voice: 'No',
    image: TigaNo,
    content: [
      {
        image: TigaNo,
        title: 'Tidak!',
      },
      {
        image: TigaNo,
        title: 'Negatif',
      },
      {
        image: TigaNo,
        title: 'Saya tidak setuju!',
      },
      {
        image: TigaNo,
        title: 'Salah',
      },
    ],
  },
  {
    title: 'Hallo',
    voice: 'Hallo',
    image: TigaHello,
    content: [{image: TigaHello, title: 'Bagaimana Kabarmu?'}],
  },
  {
    title: 'Tidur',
    voice: 'Tidur',
    image: TigaTidur,
    content: [
      {image: TigaTidur, title: 'Saya butuh tidur'},
      {image: TigaTidur, title: 'Saya ingin tidur'},
    ],
  },
  {
    title: 'Mandi',
    voice: 'Mandi',
    image: TigaMandi,
    content: [
      {image: TigaMandi, title: 'Saya ingin mandi'},
      {image: TigaMandi, title: 'Tolong bantu saya mengambil showwer'},
    ],
  },
  {
    title: 'Pagi',
    voice: 'Pagi',
    image: TigaPagi,
    content: [
      {image: TigaPagi, title: 'Selamat pagi'},
      {image: TigaPagi, title: 'Di pagi hari'},
    ],
  },
  {
    title: 'Mendengarkan',
    voice: 'Mendengarkan',
    image: TigaMendengarkan,
    content: [
      {image: TigaMendengarkan, title: 'Dengarkan Saya'},
      {image: TigaMendengarkan, title: 'Saya Menyimak Apa Yang Anda Katakan'},
    ],
  },
  {
    title: 'Keluar',
    voice: 'Keluar',
    image: TigaKeluar,
    content: [
      {image: TigaKeluar, title: 'Saya ingin pergi keluar'},
      {image: TigaKeluar, title: 'Bisakah kamu membawa saya pergi keluar?'},
    ],
  },
  {
    title: 'Pakaian',
    voice: 'Pakaian',
    image: TigaBaju,
    content: [
      {
        image: TigaBaju,
        title: 'Memakai pakaian',
      },
      {
        image: TigaBaju,
        title: 'Pakaianku kotor',
      },
      {
        image: TigaBaju,
        title: 'Bisakah kamu memberikan pakaian untuk saya pakai?',
      },
      {
        image: TigaBaju,
        title: 'Bisakah kamu membantu saya memakai pakaian?',
      },
    ],
  },
  {
    title: 'Rumah',
    voice: 'Rumah',
    image: TigaRumah,
    content: [
      {image: TigaRumah, title: 'Saya ingin pulang ke rumah'},
      {image: TigaRumah, title: 'Saya cinta rumah saya'},
    ],
  },
  {
    title: 'Luka',
    voice: 'Luka',
    image: TigaLuka,
    content: [
      {
        image: TigaLuka,
        title: 'Saya melukai diri saya',
      },
      {
        image: TigaLuka,
        title: 'Saya butuh perban',
      },
      {
        image: TigaLuka,
        title: 'Ini sakit',
      },
    ],
  },
  {
    title: 'Malam',
    voice: 'Malam',
    image: TigaMalam,
    content: [
      {image: TigaMalam, title: 'Selamat malam'},
      {image: TigaMalam, title: 'Di malam hari'},
    ],
  },
];

export default data;
