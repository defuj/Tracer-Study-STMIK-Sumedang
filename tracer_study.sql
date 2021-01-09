-- phpMyAdmin SQL Dump
-- version 5.0.2
-- https://www.phpmyadmin.net/
--
-- Host: 127.0.0.1
-- Waktu pembuatan: 09 Jan 2021 pada 09.17
-- Versi server: 10.4.14-MariaDB
-- Versi PHP: 7.2.33

SET SQL_MODE = "NO_AUTO_VALUE_ON_ZERO";
START TRANSACTION;
SET time_zone = "+00:00";


/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40101 SET NAMES utf8mb4 */;

--
-- Database: `tracer_study`
--

-- --------------------------------------------------------

--
-- Struktur dari tabel `admin`
--

CREATE TABLE `admin` (
  `id` bigint(20) UNSIGNED NOT NULL,
  `nama_admin` varchar(255) COLLATE utf8mb4_unicode_ci NOT NULL,
  `username` varchar(255) COLLATE utf8mb4_unicode_ci NOT NULL,
  `password` varchar(255) COLLATE utf8mb4_unicode_ci NOT NULL,
  `remember_token` varchar(100) COLLATE utf8mb4_unicode_ci DEFAULT NULL,
  `created_at` timestamp NULL DEFAULT NULL,
  `updated_at` timestamp NULL DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

--
-- Dumping data untuk tabel `admin`
--

INSERT INTO `admin` (`id`, `nama_admin`, `username`, `password`, `remember_token`, `created_at`, `updated_at`) VALUES
(1, 'Moh Ihsan Budiman', 'ihsan', '$2y$10$ZJEQ9/peGBeWTmJ.HHF6L.ZViBpTQ9qR4CNTzg1zpu74JMiD43aXK', NULL, '2020-11-01 01:46:44', '2020-11-01 01:46:44');

-- --------------------------------------------------------

--
-- Struktur dari tabel `alumni`
--

CREATE TABLE `alumni` (
  `id` bigint(20) UNSIGNED NOT NULL,
  `nim` varchar(255) COLLATE utf8mb4_unicode_ci NOT NULL,
  `password` varchar(255) COLLATE utf8mb4_unicode_ci NOT NULL,
  `nama` varchar(255) COLLATE utf8mb4_unicode_ci NOT NULL,
  `tahun_lulus` varchar(4) COLLATE utf8mb4_unicode_ci DEFAULT NULL,
  `alamat` varchar(255) COLLATE utf8mb4_unicode_ci DEFAULT NULL,
  `no_hp` varchar(255) COLLATE utf8mb4_unicode_ci DEFAULT NULL,
  `email` varchar(255) COLLATE utf8mb4_unicode_ci DEFAULT NULL,
  `tanggal_lahir` date DEFAULT NULL,
  `tempat_kerja` varchar(255) COLLATE utf8mb4_unicode_ci DEFAULT NULL,
  `alamat_tempat_kerja` varchar(255) COLLATE utf8mb4_unicode_ci DEFAULT NULL,
  `created_at` timestamp NULL DEFAULT NULL,
  `updated_at` timestamp NULL DEFAULT NULL,
  `kuesioner` int(1) NOT NULL DEFAULT 0
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

--
-- Dumping data untuk tabel `alumni`
--

INSERT INTO `alumni` (`id`, `nim`, `password`, `nama`, `tahun_lulus`, `alamat`, `no_hp`, `email`, `tanggal_lahir`, `tempat_kerja`, `alamat_tempat_kerja`, `created_at`, `updated_at`, `kuesioner`) VALUES
(13, 'A2.1700068', '$2y$10$lIKRCRmU/6POT5liqXZOxe.w6/GotEAJNTr/bw84FDfU3Sulx9OrK', 'Moh Ihsan Budiman', '2021', 'sumedang', '0888888', 'ihsan@gmail.com', '1999-08-20', '-', '-', '2020-12-31 16:21:14', '2020-12-31 16:21:14', 1);

-- --------------------------------------------------------

--
-- Stand-in struktur untuk tampilan `alumni2020`
-- (Lihat di bawah untuk tampilan aktual)
--
CREATE TABLE `alumni2020` (
`id` bigint(20) unsigned
,`nim` varchar(255)
,`password` varchar(255)
,`nama` varchar(255)
,`tahun_lulus` varchar(4)
,`alamat` varchar(255)
,`no_hp` varchar(255)
,`email` varchar(255)
,`tanggal_lahir` date
,`tempat_kerja` varchar(255)
,`alamat_tempat_kerja` varchar(255)
,`created_at` timestamp
,`updated_at` timestamp
,`kuesioner` int(1)
);

-- --------------------------------------------------------

--
-- Struktur dari tabel `cek_alumni`
--

CREATE TABLE `cek_alumni` (
  `id` int(11) NOT NULL,
  `nim` varchar(10) NOT NULL,
  `nama` varchar(50) NOT NULL,
  `tahun_lulus` year(4) NOT NULL,
  `tanggal_lahir` date NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

--
-- Dumping data untuk tabel `cek_alumni`
--

INSERT INTO `cek_alumni` (`id`, `nim`, `nama`, `tahun_lulus`, `tanggal_lahir`) VALUES
(3, 'A2.1600068', 'Raditya Dika', 2020, '2020-11-18'),
(4, 'A2.1500047', 'Raffi Ahmad', 2019, '2020-11-11'),
(5, 'A2.1600070', 'Doni Ahmad Munir', 2020, '2020-11-19'),
(6, 'A2.1500012', 'Donald Trump', 2019, '2020-11-02'),
(7, 'A2.1600012', 'Aliza Kumar', 2020, '2020-11-25'),
(8, 'A2.1500036', 'Dadan Didin', 2019, '2020-08-17'),
(9, 'A2.1700068', 'Moh Ihsan Budiman', 2021, '1999-08-20');

-- --------------------------------------------------------

--
-- Stand-in struktur untuk tampilan `data_responden`
-- (Lihat di bawah untuk tampilan aktual)
--
CREATE TABLE `data_responden` (
`pertanyaan_id` bigint(20) unsigned
,`detail_id` bigint(20) unsigned
,`tipe_pertanyaan` varchar(255)
,`pertanyaan` varchar(255)
,`nama_opsi` varchar(255)
,`Count(jawaban.jawaban)` bigint(21)
,`STS` decimal(22,0)
,`TS` decimal(22,0)
,`S` decimal(22,0)
,`SS` decimal(22,0)
);

-- --------------------------------------------------------

--
-- Struktur dari tabel `detail_pertanyaan`
--

CREATE TABLE `detail_pertanyaan` (
  `id` bigint(20) UNSIGNED NOT NULL,
  `id_pertanyaan` varchar(255) COLLATE utf8mb4_unicode_ci NOT NULL,
  `nama_opsi` varchar(255) COLLATE utf8mb4_unicode_ci NOT NULL,
  `created_at` timestamp NULL DEFAULT NULL,
  `updated_at` timestamp NULL DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

--
-- Dumping data untuk tabel `detail_pertanyaan`
--

INSERT INTO `detail_pertanyaan` (`id`, `id_pertanyaan`, `nama_opsi`, `created_at`, `updated_at`) VALUES
(92, '77', 'opsi 1', NULL, NULL),
(93, '77', 'opsi 2', NULL, NULL),
(94, '78', 'opsi 1 multi choice', NULL, NULL),
(95, '78', 'opsi 2 multi choice', NULL, NULL),
(96, '80', 'ini opsi 1 skala likert', NULL, NULL),
(97, '80', 'ini opsi 2 skala likert', NULL, NULL);

-- --------------------------------------------------------

--
-- Struktur dari tabel `dummy`
--

CREATE TABLE `dummy` (
  `id` bigint(20) UNSIGNED NOT NULL,
  `title` varchar(255) COLLATE utf8mb4_unicode_ci NOT NULL,
  `created_at` timestamp NULL DEFAULT NULL,
  `updated_at` timestamp NULL DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

--
-- Dumping data untuk tabel `dummy`
--

INSERT INTO `dummy` (`id`, `title`, `created_at`, `updated_at`) VALUES
(1, '1123123', NULL, NULL),
(2, '123', NULL, NULL),
(3, '11', NULL, NULL),
(4, '234', NULL, NULL),
(5, '22223423', NULL, NULL),
(6, '23443134342', NULL, NULL),
(7, '3431431243421', NULL, NULL);

-- --------------------------------------------------------

--
-- Struktur dari tabel `failed_jobs`
--

CREATE TABLE `failed_jobs` (
  `id` bigint(20) UNSIGNED NOT NULL,
  `connection` text COLLATE utf8mb4_unicode_ci NOT NULL,
  `queue` text COLLATE utf8mb4_unicode_ci NOT NULL,
  `payload` longtext COLLATE utf8mb4_unicode_ci NOT NULL,
  `exception` longtext COLLATE utf8mb4_unicode_ci NOT NULL,
  `failed_at` timestamp NOT NULL DEFAULT current_timestamp()
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

-- --------------------------------------------------------

--
-- Struktur dari tabel `jawaban`
--

CREATE TABLE `jawaban` (
  `id` bigint(20) UNSIGNED NOT NULL,
  `id_pertanyaan` varchar(255) COLLATE utf8mb4_unicode_ci NOT NULL,
  `id_detail` varchar(255) COLLATE utf8mb4_unicode_ci NOT NULL,
  `id_alumni` varchar(255) COLLATE utf8mb4_unicode_ci NOT NULL,
  `jawaban` varchar(255) COLLATE utf8mb4_unicode_ci NOT NULL,
  `created_at` timestamp NULL DEFAULT NULL,
  `updated_at` timestamp NULL DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

--
-- Dumping data untuk tabel `jawaban`
--

INSERT INTO `jawaban` (`id`, `id_pertanyaan`, `id_detail`, `id_alumni`, `jawaban`, `created_at`, `updated_at`) VALUES
(198, '77', '93', '13', 'opsi 2', NULL, NULL),
(199, '79', '0', '13', 'ihsan', NULL, NULL),
(200, '78', '94', '13', 'opsi 1 multi choice', NULL, NULL),
(201, '78', '95', '13', 'opsi 2 multi choice', NULL, NULL),
(202, '80', '96', '13', '4', NULL, NULL),
(203, '80', '97', '13', '4', NULL, NULL);

-- --------------------------------------------------------

--
-- Struktur dari tabel `migrations`
--

CREATE TABLE `migrations` (
  `id` int(10) UNSIGNED NOT NULL,
  `migration` varchar(255) COLLATE utf8mb4_unicode_ci NOT NULL,
  `batch` int(11) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

--
-- Dumping data untuk tabel `migrations`
--

INSERT INTO `migrations` (`id`, `migration`, `batch`) VALUES
(20, '2014_10_12_100000_create_password_resets_table', 1),
(21, '2019_08_19_000000_create_failed_jobs_table', 1),
(22, '2020_10_18_014129_create_admin_table', 1),
(23, '2020_10_27_085904_create_dummy_table', 1),
(24, '2020_11_01_012137_create_pertanyaan_table', 1),
(25, '2020_11_01_014745_create_jawaban_table', 1),
(26, '2020_11_01_064328_create_detail_pertanyaan_table', 1),
(27, '2020_11_01_082534_create_tipe_pertanyaan_table', 1),
(28, '2020_11_01_083456_create_alumni_table', 1),
(29, '2020_11_01_083703_create_temp_jawaban_table', 1);

-- --------------------------------------------------------

--
-- Struktur dari tabel `password_resets`
--

CREATE TABLE `password_resets` (
  `email` varchar(255) COLLATE utf8mb4_unicode_ci NOT NULL,
  `token` varchar(255) COLLATE utf8mb4_unicode_ci NOT NULL,
  `created_at` timestamp NULL DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

-- --------------------------------------------------------

--
-- Struktur dari tabel `pertanyaan`
--

CREATE TABLE `pertanyaan` (
  `id` bigint(20) UNSIGNED NOT NULL,
  `tipe_pertanyaan` varchar(255) COLLATE utf8mb4_unicode_ci NOT NULL,
  `pertanyaan` varchar(255) COLLATE utf8mb4_unicode_ci NOT NULL,
  `required` varchar(255) COLLATE utf8mb4_unicode_ci NOT NULL,
  `created_at` timestamp NULL DEFAULT NULL,
  `updated_at` timestamp NULL DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

--
-- Dumping data untuk tabel `pertanyaan`
--

INSERT INTO `pertanyaan` (`id`, `tipe_pertanyaan`, `pertanyaan`, `required`, `created_at`, `updated_at`) VALUES
(77, 'Single Choice', 'ini pertanyaan Single Choice', '1', '2020-12-31 16:17:34', '2020-12-31 16:17:34'),
(78, 'Multi Choice', 'ini pertanyaan multi choice', '0', '2020-12-31 16:18:15', '2020-12-31 16:18:15'),
(79, 'Essay', 'ini pertanyaan essay', '1', '2020-12-31 16:18:47', '2020-12-31 16:18:47'),
(80, 'Skala Likert', 'ini pertanyaan skala likert', '1', '2020-12-31 16:19:16', '2020-12-31 16:19:16'),
(81, 'Single Choice', 'ihsan', '1', '2020-12-31 16:27:42', '2020-12-31 16:27:42');

-- --------------------------------------------------------

--
-- Struktur dari tabel `temp_jawaban`
--

CREATE TABLE `temp_jawaban` (
  `id` bigint(20) UNSIGNED NOT NULL,
  `id_pertanyaan` varchar(255) COLLATE utf8mb4_unicode_ci NOT NULL,
  `id_detail` varchar(255) COLLATE utf8mb4_unicode_ci NOT NULL,
  `id_alumni` varchar(255) COLLATE utf8mb4_unicode_ci NOT NULL,
  `jawaban` varchar(255) COLLATE utf8mb4_unicode_ci NOT NULL,
  `created_at` timestamp NULL DEFAULT NULL,
  `updated_at` timestamp NULL DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

-- --------------------------------------------------------

--
-- Struktur dari tabel `tipe_pertanyaan`
--

CREATE TABLE `tipe_pertanyaan` (
  `id` bigint(20) UNSIGNED NOT NULL,
  `tipe_pertanyaan` varchar(255) COLLATE utf8mb4_unicode_ci NOT NULL,
  `created_at` timestamp NULL DEFAULT NULL,
  `updated_at` timestamp NULL DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

-- --------------------------------------------------------

--
-- Struktur untuk view `alumni2020`
--
DROP TABLE IF EXISTS `alumni2020`;

CREATE ALGORITHM=UNDEFINED DEFINER=`root`@`localhost` SQL SECURITY DEFINER VIEW `alumni2020`  AS  select `alumni`.`id` AS `id`,`alumni`.`nim` AS `nim`,`alumni`.`password` AS `password`,`alumni`.`nama` AS `nama`,`alumni`.`tahun_lulus` AS `tahun_lulus`,`alumni`.`alamat` AS `alamat`,`alumni`.`no_hp` AS `no_hp`,`alumni`.`email` AS `email`,`alumni`.`tanggal_lahir` AS `tanggal_lahir`,`alumni`.`tempat_kerja` AS `tempat_kerja`,`alumni`.`alamat_tempat_kerja` AS `alamat_tempat_kerja`,`alumni`.`created_at` AS `created_at`,`alumni`.`updated_at` AS `updated_at`,`alumni`.`kuesioner` AS `kuesioner` from `alumni` where `alumni`.`tahun_lulus` = '2020' ;

-- --------------------------------------------------------

--
-- Struktur untuk view `data_responden`
--
DROP TABLE IF EXISTS `data_responden`;

CREATE ALGORITHM=UNDEFINED DEFINER=`root`@`localhost` SQL SECURITY DEFINER VIEW `data_responden`  AS  select `pertanyaan`.`id` AS `pertanyaan_id`,`detail_pertanyaan`.`id` AS `detail_id`,`pertanyaan`.`tipe_pertanyaan` AS `tipe_pertanyaan`,`pertanyaan`.`pertanyaan` AS `pertanyaan`,`detail_pertanyaan`.`nama_opsi` AS `nama_opsi`,count(`jawaban`.`jawaban`) AS `Count(jawaban.jawaban)`,sum(case when `jawaban`.`jawaban` = 1 then 1 else 0 end) AS `STS`,sum(case when `jawaban`.`jawaban` = 2 then 1 else 0 end) AS `TS`,sum(case when `jawaban`.`jawaban` = 3 then 1 else 0 end) AS `S`,sum(case when `jawaban`.`jawaban` = 4 then 1 else 0 end) AS `SS` from (((`pertanyaan` join `detail_pertanyaan` on(`pertanyaan`.`id` = `detail_pertanyaan`.`id_pertanyaan`)) left join `jawaban` on(`jawaban`.`id_pertanyaan` = `pertanyaan`.`id` and `jawaban`.`id_detail` = `detail_pertanyaan`.`id`)) join `alumni` on(`jawaban`.`id_alumni` = `alumni`.`id`)) where `alumni`.`tahun_lulus` = 2021 group by `detail_pertanyaan`.`id` ;

--
-- Indexes for dumped tables
--

--
-- Indeks untuk tabel `admin`
--
ALTER TABLE `admin`
  ADD PRIMARY KEY (`id`),
  ADD UNIQUE KEY `admin_username_unique` (`username`);

--
-- Indeks untuk tabel `alumni`
--
ALTER TABLE `alumni`
  ADD PRIMARY KEY (`id`),
  ADD UNIQUE KEY `alumni_nim_unique` (`nim`);

--
-- Indeks untuk tabel `cek_alumni`
--
ALTER TABLE `cek_alumni`
  ADD PRIMARY KEY (`id`);

--
-- Indeks untuk tabel `detail_pertanyaan`
--
ALTER TABLE `detail_pertanyaan`
  ADD PRIMARY KEY (`id`);

--
-- Indeks untuk tabel `dummy`
--
ALTER TABLE `dummy`
  ADD PRIMARY KEY (`id`);

--
-- Indeks untuk tabel `failed_jobs`
--
ALTER TABLE `failed_jobs`
  ADD PRIMARY KEY (`id`);

--
-- Indeks untuk tabel `jawaban`
--
ALTER TABLE `jawaban`
  ADD PRIMARY KEY (`id`);

--
-- Indeks untuk tabel `migrations`
--
ALTER TABLE `migrations`
  ADD PRIMARY KEY (`id`);

--
-- Indeks untuk tabel `password_resets`
--
ALTER TABLE `password_resets`
  ADD KEY `password_resets_email_index` (`email`);

--
-- Indeks untuk tabel `pertanyaan`
--
ALTER TABLE `pertanyaan`
  ADD PRIMARY KEY (`id`);

--
-- Indeks untuk tabel `temp_jawaban`
--
ALTER TABLE `temp_jawaban`
  ADD PRIMARY KEY (`id`);

--
-- Indeks untuk tabel `tipe_pertanyaan`
--
ALTER TABLE `tipe_pertanyaan`
  ADD PRIMARY KEY (`id`);

--
-- AUTO_INCREMENT untuk tabel yang dibuang
--

--
-- AUTO_INCREMENT untuk tabel `admin`
--
ALTER TABLE `admin`
  MODIFY `id` bigint(20) UNSIGNED NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=2;

--
-- AUTO_INCREMENT untuk tabel `alumni`
--
ALTER TABLE `alumni`
  MODIFY `id` bigint(20) UNSIGNED NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=14;

--
-- AUTO_INCREMENT untuk tabel `cek_alumni`
--
ALTER TABLE `cek_alumni`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=10;

--
-- AUTO_INCREMENT untuk tabel `detail_pertanyaan`
--
ALTER TABLE `detail_pertanyaan`
  MODIFY `id` bigint(20) UNSIGNED NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=98;

--
-- AUTO_INCREMENT untuk tabel `dummy`
--
ALTER TABLE `dummy`
  MODIFY `id` bigint(20) UNSIGNED NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=8;

--
-- AUTO_INCREMENT untuk tabel `failed_jobs`
--
ALTER TABLE `failed_jobs`
  MODIFY `id` bigint(20) UNSIGNED NOT NULL AUTO_INCREMENT;

--
-- AUTO_INCREMENT untuk tabel `jawaban`
--
ALTER TABLE `jawaban`
  MODIFY `id` bigint(20) UNSIGNED NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=204;

--
-- AUTO_INCREMENT untuk tabel `migrations`
--
ALTER TABLE `migrations`
  MODIFY `id` int(10) UNSIGNED NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=30;

--
-- AUTO_INCREMENT untuk tabel `pertanyaan`
--
ALTER TABLE `pertanyaan`
  MODIFY `id` bigint(20) UNSIGNED NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=82;

--
-- AUTO_INCREMENT untuk tabel `temp_jawaban`
--
ALTER TABLE `temp_jawaban`
  MODIFY `id` bigint(20) UNSIGNED NOT NULL AUTO_INCREMENT;

--
-- AUTO_INCREMENT untuk tabel `tipe_pertanyaan`
--
ALTER TABLE `tipe_pertanyaan`
  MODIFY `id` bigint(20) UNSIGNED NOT NULL AUTO_INCREMENT;
COMMIT;

/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
