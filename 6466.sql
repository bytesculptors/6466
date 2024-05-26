-- phpMyAdmin SQL Dump
-- version 5.2.1
-- https://www.phpmyadmin.net/
--
-- Host: 127.0.0.1
-- Generation Time: May 13, 2023 at 11:24 AM
-- Server version: 10.4.28-MariaDB
-- PHP Version: 8.0.28

SET SQL_MODE = "NO_AUTO_VALUE_ON_ZERO";
START TRANSACTION;
SET time_zone = "+00:00";


/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40101 SET NAMES utf8mb4 */;

--
-- Database: `6466`
--

-- --------------------------------------------------------

--
-- Table structure for table `bookings`
--

CREATE TABLE `bookings` (
  `booking_id` int(11) NOT NULL,
  `user_id` int(11) NOT NULL,
  `car_id` int(11) NOT NULL,
  `start_date` date NOT NULL,
  `end_date` date NOT NULL,
  `total_price` decimal(10,2) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

--
-- Dumping data for table `bookings`
--

INSERT INTO `bookings` (`booking_id`, `user_id`, `car_id`, `start_date`, `end_date`, `total_price`) VALUES
(1, 4, 2, '2023-05-12', '2023-05-16', 1500000.00),
(2, 5, 2, '2023-03-01', '2023-03-20', 5000000.00);

-- --------------------------------------------------------

--
-- Table structure for table `cars`
--

CREATE TABLE `cars` (
  `car_id` int(11) NOT NULL,
  `brand` varchar(255) NOT NULL,
  `model` varchar(255) NOT NULL,
  `year` int(11) NOT NULL,
  `tranmission` varchar(255) NOT NULL,
  `num_seats` int(11) NOT NULL,
  `fuel_type` varchar(255) NOT NULL,
  `price_per_day` decimal(10,2) NOT NULL,
  `image` varchar(255) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

--
-- Dumping data for table `cars`
--

INSERT INTO `cars` (`car_id`, `brand`, `model`, `year`, `tranmission`, `num_seats`, `fuel_type`, `price_per_day`, `image`) VALUES
(1, 'SUZUKI', 'XL7', 2017, 'auto', 7, 'coal', 500000.00, 'https://n1-pstg.mioto.vn/cho_thue_xe_o_to_tu_lai_thue_xe_du_lich_hanoi/suzuki_xl7_2022/p/g/2023/00/27/15/mSWDtEUyPH-61PMTHIKj_w.jpg'),
(2, 'KIA', 'SORENTO', 2017, 'auto', 4, 'coal', 550000.00, 'https://n1-pstg.mioto.vn/cho_thue_xe_o_to_tu_lai_thue_xe_du_lich_hanoi/kia_sorento_2020/p/g/2021/01/24/19/tUBZB2Pq9T_ZdHiulAbW7g.jpg'),
(3, 'KIA MORNING', 'SI', 2014, 'auto', 4, 'Xăng', 650000.00, 'https://n1-pstg.mioto.vn/cho_thue_xe_o_to_tu_lai_thue_xe_du_lich_hanoi/kia_morning_si_2010/p/g/2023/03/21/11/zxLn56l_C2cAl14Zq09JLA.jpg'),
(4, 'TOYOTA INNOVA', 'G', 2016, 'auto', 7, 'Xăng', 700000.00, 'https://n1-pstg.mioto.vn/cho_thue_xe_o_to_tu_lai_thue_xe_du_lich_hanoi/toyota_innova_g_2016/p/g/2022/05/01/11/9Dwk8fcQY04e5YC0G1Ixjg.jpg'),
(5, 'HONDA', 'CITY', 2013, 'auto', 4, 'Xăng', 450000.00, 'https://n1-pstg.mioto.vn/cho_thue_xe_o_to_tu_lai_thue_xe_du_lich_hanoi/honda_city_2017/p/g/2023/03/21/10/eChM8qIFMgO-Wg9DTNe4eQ.jpg'),
(6, 'HUYNDAI', 'GRAND I10', 2018, 'auto', 4, 'Xăng', 600000.00, 'https://n1-pstg.mioto.vn/cho_thue_xe_o_to_tu_lai_thue_xe_du_lich_hanoi/hyundai_grand_i10_2014/p/g/2023/02/27/16/GmkeNuTyB2bkaJ8Ne_FrvA.jpg'),
(7, 'FORD RANGER', 'XLS', 2019, 'auto', 4, 'Xăng', 800000.00, 'https://n1-pstg.mioto.vn/cho_thue_xe_o_to_tu_lai_thue_xe_du_lich_hanoi/ford_ranger_xls_2017/p/g/2023/03/20/11/RXnD_Ospz4YFX0Al7-Dk-w.jpg'),
(8, 'MERCEDES', 'C250', 2019, 'auto', 4, 'Xăng', 1200000.00, 'https://n1-pstg.mioto.vn/cho_thue_xe_o_to_tu_lai_thue_xe_du_lich_hanoi/mercedes_c250_2018/p/g/2021/04/18/14/4HJcGq4Ieb1xGHpll08SPg.jpg'),
(9, 'HONDA', 'CITY', 2017, 'auto', 7, 'Xăng', 6500000.00, 'https://n1-pstg.mioto.vn/cho_thue_xe_o_to_tu_lai_thue_xe_du_lich_hanoi/honda_city_2017/p/g/2023/03/15/00/k5wtIIauxaVRiVq4f4rzIw.jpg'),
(10, 'KIA', 'FORTE', 2017, 'auto', 4, 'Xăng', 5000000.00, 'https://n1-pstg.mioto.vn/cho_thue_xe_o_to_tu_lai_thue_xe_du_lich_hanoi/kia_forte_2011/p/g/2023/02/03/15/LttZ9Heko9fbVIxBCGzLeg.jpg');

-- --------------------------------------------------------

--
-- Table structure for table `user`
--

CREATE TABLE `user` (
  `user_id` int(11) NOT NULL,
  `user_name` varchar(255) NOT NULL,
  `pass_word` varchar(255) NOT NULL,
  `user_email` varchar(255) NOT NULL,
  `full_name` varchar(255) NOT NULL,
  `phone_number` varchar(255) NOT NULL,
  `citizenID` varchar(255) NOT NULL,
  `address` varchar(255) NOT NULL,
  `access` varchar(11) NOT NULL,
  `user_images` varchar(2550) DEFAULT NULL,
  `date_of_birth` date DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

--
-- Dumping data for table `user`
--

INSERT INTO `user` (`user_id`, `user_name`, `pass_word`, `user_email`, `full_name`, `phone_number`, `citizenID`, `address`, `access`, `user_images`, `date_of_birth`) VALUES
(1, 'admin', '123456', 'admin@gmail.com', 'admin', '0986753241', '123456789', '144 Xuân Thủy', 'admin', 'https://images.pexels.com/photos/2754200/pexels-photo-2754200.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500', NULL),
(2, 'user1', '123456789', 'user1@gmail.com', '', '', '', '', 'user', NULL, NULL),
(4, 'Yamini Gowda', '123456', 'yamini_gowda@home.com', 'Yamini Gowda', '(+91) 979839999', '123456789', 'Kisan Warle Est, Nr Dahanukar Wadi Bunder Pakhadi Rd, Kandivali, Alwar', 'user', 'https://images.pexels.com/photos/2754200/pexels-photo-2754200.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500', '2015-07-15'),
(5, 'Ramesh Sharma', '123456', 'Ramesh_Sharma@home.com', 'Ramesh Sharma', '(+91) 943536386', '123456789', '302, Bhaskar Mansion, 2nd Flr Avenue Road, Avenue Road, Kerala', 'user', 'https://drive.google.com/file/d/1Q84i3Hgrziz2zoxifvf6rnXrANTon2Ya/view?usp=sharing', '2020-12-18'),
(6, 'Aaradhya Anand', '123456', 'Aaradhya_Anand@home.com', 'Aaradhya Anand', '(+91) 932124295', '123456789', 'E/7 Bhavna Society, Ajwa Road, Opp Mahavir Hall, Ajwa Road, Jannu and Kashmir', 'user', 'https://drive.google.com/file/d/1UohnKCkXcerJue_zDLF7cxUOfSe7sH7S/view?usp=sharing', NULL);

--
-- Indexes for dumped tables
--

--
-- Indexes for table `bookings`
--
ALTER TABLE `bookings`
  ADD PRIMARY KEY (`booking_id`),
  ADD KEY `car_id_frg` (`car_id`),
  ADD KEY `user_id_frg` (`user_id`);

--
-- Indexes for table `cars`
--
ALTER TABLE `cars`
  ADD PRIMARY KEY (`car_id`);

--
-- Indexes for table `user`
--
ALTER TABLE `user`
  ADD PRIMARY KEY (`user_id`);

--
-- AUTO_INCREMENT for dumped tables
--

--
-- AUTO_INCREMENT for table `bookings`
--
ALTER TABLE `bookings`
  MODIFY `booking_id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=3;

--
-- AUTO_INCREMENT for table `cars`
--
ALTER TABLE `cars`
  MODIFY `car_id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=14;

--
-- AUTO_INCREMENT for table `user`
--
ALTER TABLE `user`
  MODIFY `user_id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=7;

--
-- Constraints for dumped tables
--

--
-- Constraints for table `bookings`
--
ALTER TABLE `bookings`
  ADD CONSTRAINT `car_id_frg` FOREIGN KEY (`car_id`) REFERENCES `cars` (`car_id`),
  ADD CONSTRAINT `user_id_frg` FOREIGN KEY (`user_id`) REFERENCES `user` (`user_id`);
COMMIT;

/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
