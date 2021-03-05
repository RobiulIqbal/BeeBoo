import {
  NamTeacher,
  NamBook,
  NamNote,
  NamPencil,
  NamBlack,
  NamLesson,
  NamQuiet,
  NamMath,
  NamLiter,
  NamQuest,
  NamHomework,
  NamUnder,
} from '../../../../assets/Images/School';

const data = [
  {
    title: 'Guru',
    voice: 'Guru',
    image: NamTeacher,
    content: [
      {image: NamTeacher, title: 'Saya Menyukai Guru'},
      {image: NamTeacher, title: 'Saya Ingin Bertemu Guru'},
    ],
  },
  {
    title: 'Buku',
    voice: 'Buku',
    image: NamBook,
    content: [
      {
        image: NamBook,
        title: 'Saya sedang membaca buku saya',
      },
      {
        image: NamBook,
        title: 'Apakah kamu bisa mengembalikan buku saya?',
      },
    ],
  },
  {
    title: 'Buku catatan',
    voice: 'Buku Catatan',
    image: NamNote,
    content: [
      {
        image: NamNote,
        title: 'Saya sedang mencatat di buku catatan saya',
      },
      {
        image: NamNote,
        title: 'Apakah kamu bisa mengembalikan buku catatan saya?',
      },
    ],
  },
  {
    title: 'Pensil',
    voice: 'pensil',
    image: NamPencil,
    content: [
      {
        image: NamPencil,
        title: 'Saya menulis menggunakan pensil saya',
      },
      {
        image: NamPencil,
        title: 'Apakah kamu bisa mengembalikan pensil saya?',
      },
    ],
  },
  {
    title: 'Papan tulis',
    voice: 'Papan tulis',
    image: NamBlack,
    content: [
      {
        image: NamBlack,
        title: 'Bersihkan Papan Tulis!',
      },
      {
        image: NamBlack,
        title: 'Tulis di Papan Tulis',
      },
      {
        image: NamBlack,
        title: 'Saya Menulis di papan tulis',
      },
    ],
  },
  {
    title: 'Pelajaran',
    voice: 'Pelajaran',
    image: NamLesson,
    content: [
      {
        image: NamLesson,
        title: 'Saya Suka Pelajaran Ini',
      },
      {
        image: NamLesson,
        title: 'Saya sulit Memahami Pelajaran itu!',
      },
    ],
  },
  {
    title: 'Diam',
    voice: 'Diam',
    image: NamQuiet,
    content: [
      {
        image: NamQuiet,
        title: 'Saya harus diam saat pelajaran',
      },
      {
        image: NamQuiet,
        title: 'Kamu harus diam saat pelajaran',
      },
    ],
  },
  {
    title: 'Matematika',
    voice: 'Matematika',
    image: NamMath,
    content: [
      {
        image: NamMath,
        title: 'Saya suka matematika',
      },
      {
        image: NamMath,
        title: 'Saya ingin mempelajari matematika',
      },
    ],
  },
  {
    title: 'Pelajaran bahasa',
    voice: 'Pelajaran bahasa',
    image: NamLiter,
    content: [
      {
        image: NamLiter,
        title: 'Saya suka pelajaran bahasa',
      },
      {
        image: NamLiter,
        title: 'Saya ingin mempelajari bahasa',
      },
    ],
  },
  {
    title: 'Pertanyaan',
    voice: 'Pertanyaan',
    image: NamQuest,
    content: [
      {
        image: NamQuest,
        title: 'Saya punya sebuah pertanyaan',
      },
      {
        image: NamQuest,
        title: 'Apakah saya boleh bertanya?',
      },
    ],
  },
  {
    title: 'Mengerti',
    voice: 'Mengerti',
    image: NamUnder,
    content: [
      {
        image: NamUnder,
        title: 'Saya tidak mengerti',
      },
      {
        image: NamUnder,
        title: 'Apakah kamu bisa menjelaskan itu?',
      },
    ],
  },
  {
    title: 'Pekerjaan rumah',
    voice: 'Pekerjaan rumah',
    image: NamHomework,
    content: [
      {
        image: NamHomework,
        title: 'Saya harus mengerjakan pekerjaan rumah saya',
      },
      {
        image: NamHomework,
        title: 'Apakah kamu bisa membantu pekerjaan rumah saya?',
      },
    ],
  },
];

export default data;
