document.addEventListener('DOMContentLoaded', function() {
    const darkModeToggle = document.getElementById('darkModeToggle');
    const body = document.body;

    // Cek apakah dark mode sudah aktif saat halaman dimuat
    const isDarkMode = localStorage.getItem('darkMode') === 'enabled';

    // Aktifkan atau nonaktifkan dark mode sesuai status terakhir
    if (isDarkMode) {
        enableDarkMode();
    }

    // Fungsi untuk mengaktifkan dark mode
    function enableDarkMode() {
        body.classList.add('dark-mode');
        darkModeToggle.innerHTML = '<i id="sun" class="fas fa-sun"></i>'; // Mengubah ikon tombol menjadi matahari
        localStorage.setItem('darkMode', 'enabled');
    }

    // Fungsi untuk menonaktifkan dark mode
    function disableDarkMode() {
        body.classList.remove('dark-mode');
        darkModeToggle.innerHTML = '<i id="moon" class="fas fa-moon"></i>'; // Mengubah ikon tombol menjadi bulan
        localStorage.setItem('darkMode', null);
    }

    // Toggle dark mode ketika tombol ditekan
    darkModeToggle.addEventListener('click', () => {
        if (localStorage.getItem('darkMode') === 'enabled') {
            disableDarkMode();
        } else {
            enableDarkMode();
        }
    });

    // Menggunakan 'submit' event pada form untuk menangani pengiriman pesan
    document.getElementById('contactForm').addEventListener('submit', function(event) {
        event.preventDefault(); // Prevent form submission
  
        // Get form data
        const formData = new FormData(event.target);
  
        // Construct message
        let message = 'Name: ' + formData.get('name') + '\n';
        message += 'Email: ' + formData.get('email') + '\n';
        message += 'Message: ' + formData.get('message');
  
        // Display message using alert
        alert(message);
    });
});

const educationInfo = [
    {
        type: 'School',
        name: 'SD Negeri 004 Biduk-Biduk',
        graduationYear: 2016
    },
    {
        type: 'School',
        name: 'SMP Negeri 7 Biduk-Biduk',
        graduationYear: 2019
    },
    {
        type: 'School',
        name: 'SMA Negeri 8 Berau',
        graduationYear: 2022
    },
    {
        type: 'University',
        name: 'Universitas Mulawarman',
        faculty: 'Fakultas Teknik',
        studyProgram: 'Program Studi Sistem Informasi',
        enrollmentYear: 2022
    }
];

