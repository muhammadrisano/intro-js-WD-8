const users = [
    {
        nama: 'risano',
        email: 'risano@mgail.com',
        jender: 'laki-laki',
        age: 17,
        isMerried: false,
    },
    {
        nama: 'budi',
        emial: 'budi@gmail.com',
        jender: 'laki-laki',
        age: 18,
        isMerried: true
    },
    {
        nama: 'ani',
        email: 'ani@gmail.com',
        jender: 'perempuan',
        age: 19,
        isMerried: false,
    }
]

const biodataSaya = {
    nama: 'risano akbar',
    email: 'risano@gmail.com',
    hobby: ['ngoding', 'joging', 'swimming'],
    riwayatPendidikan: [
        {
            namaSekolah: 'sd 01 bla bla',
            tingkat: 'SD',
            tahun: 2010
        },
        {
            namaSekolah: 'SMP 02 bla bla',
            tingkat: 'SMP',
            tahun: 2017
        }
    ],
    anggotaKeluarga: {
        kakak: 'budi',
        adik: 'susi'
    }
}
console.log(biodataSaya.riwayatPendidikan[0].namaSekolah)