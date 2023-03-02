-- phpMyAdmin SQL Dump
-- version 5.2.0
-- https://www.phpmyadmin.net/
--
-- Host: 127.0.0.1
-- Generation Time: Oct 15, 2022 at 05:46 AM
-- Server version: 10.4.24-MariaDB
-- PHP Version: 7.4.29

SET SQL_MODE = "NO_AUTO_VALUE_ON_ZERO";
START TRANSACTION;
SET time_zone = "+00:00";


/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40101 SET NAMES utf8mb4 */;

--
-- Database: `chit`
--

-- --------------------------------------------------------

--
-- Table structure for table `addchits`
--

CREATE TABLE `addchits` (
  `ac_id` int(11) NOT NULL,
  `ac_chit_scheme` varchar(500) NOT NULL,
  `ac_chit_value` varchar(500) NOT NULL,
  `ac_no_of_members` varchar(500) NOT NULL,
  `ac_no_of_installment` varchar(500) NOT NULL,
  `ac_log` datetime NOT NULL DEFAULT current_timestamp()
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

--
-- Dumping data for table `addchits`
--

INSERT INTO `addchits` (`ac_id`, `ac_chit_scheme`, `ac_chit_value`, `ac_no_of_members`, `ac_no_of_installment`, `ac_log`) VALUES
(1, '11', '', '5', '11', '2022-10-13 03:53:49'),
(2, '11', '50000', '2', '', '2022-10-13 05:10:42'),
(3, '21', '50000', '4', '', '2022-10-13 06:17:14'),
(4, '21', '50000', '7', '', '2022-10-14 03:10:20'),
(5, '21', '50000', '10', '', '2022-10-14 03:37:55'),
(6, '11', '100000', '20', '', '2022-10-14 03:41:15');

-- --------------------------------------------------------

--
-- Table structure for table `newcustomers`
--

CREATE TABLE `newcustomers` (
  `nc_id` int(11) NOT NULL,
  `nc_name` varchar(250) NOT NULL,
  `nc_phone` varchar(250) NOT NULL,
  `nc_dob` date NOT NULL,
  `nc_gender` varchar(250) NOT NULL,
  `nc_present_address` varchar(250) NOT NULL,
  `nc_present_city` varchar(250) NOT NULL,
  `nc_present_state` varchar(250) NOT NULL,
  `nc_present_pincode` varchar(250) NOT NULL,
  `nc_permanent_address` varchar(250) NOT NULL,
  `nc_permanent_city` varchar(250) NOT NULL,
  `nc_permanent_state` varchar(250) NOT NULL,
  `nc_permanent_pincode` varchar(250) NOT NULL,
  `nc_id_proof` varchar(250) NOT NULL,
  `nc_id_proof_no` int(100) NOT NULL,
  `nc_father_name` varchar(250) NOT NULL,
  `nc_father_adhar` int(100) NOT NULL,
  `nc_father_phoneno` varchar(250) NOT NULL,
  `nc_mother_name` varchar(250) NOT NULL,
  `nc_mother_adhar` int(100) NOT NULL,
  `nc_martial_status` varchar(250) NOT NULL,
  `nc_spouse_name` varchar(250) NOT NULL,
  `nc_spouse_adhar` int(100) NOT NULL,
  `nc_spouse_phoneno` varchar(250) NOT NULL,
  `nc_reference_name_1` varchar(250) NOT NULL,
  `nc_reference_phone_1` varchar(250) NOT NULL,
  `nc_reference_name_2` varchar(250) NOT NULL,
  `nc_reference_phone_2` varchar(250) NOT NULL,
  `nc_nominee_name` varchar(250) NOT NULL,
  `nc_nominee_phone` varchar(250) NOT NULL,
  `nc_nominee_relationship` varchar(250) NOT NULL,
  `nc_profile_photo` varchar(500) CHARACTER SET latin1 NOT NULL DEFAULT 'noimg.png ',
  `nc_log` datetime NOT NULL DEFAULT current_timestamp()
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

--
-- Dumping data for table `newcustomers`
--

INSERT INTO `newcustomers` (`nc_id`, `nc_name`, `nc_phone`, `nc_dob`, `nc_gender`, `nc_present_address`, `nc_present_city`, `nc_present_state`, `nc_present_pincode`, `nc_permanent_address`, `nc_permanent_city`, `nc_permanent_state`, `nc_permanent_pincode`, `nc_id_proof`, `nc_id_proof_no`, `nc_father_name`, `nc_father_adhar`, `nc_father_phoneno`, `nc_mother_name`, `nc_mother_adhar`, `nc_martial_status`, `nc_spouse_name`, `nc_spouse_adhar`, `nc_spouse_phoneno`, `nc_reference_name_1`, `nc_reference_phone_1`, `nc_reference_name_2`, `nc_reference_phone_2`, `nc_nominee_name`, `nc_nominee_phone`, `nc_nominee_relationship`, `nc_profile_photo`, `nc_log`) VALUES
(1, 'test1', '7418529630', '2022-10-14', 'Male', 'Test1', 'Test1', 'Test', '6478910', 'Test1', 'Test1', 'Test1', '647810', 'Adhar', 2147483647, 'Test1', 0, '7894561230', 'Test1', 2147483647, 'Single', '', 0, '', 'Test1', '7894561230', 'Test1', '8963254710', 'Test1', '753951480', 'Test1', 'IMG_RgKjF80t9PMx6ksl.png', '2022-10-14 03:00:22'),
(2, 'test', '7894561230', '2022-10-14', 'Male', 'Test', 'Test', 'Test', 'Test', 'Test', 'Test', 'Test', 'Test', 'Adhar', 2147483647, 'Test', 0, '78945612303654', 'Test', 0, 'Single', '', 0, '', 'Test', '8529637410', 'Test', '7410398526', 'Test', '9638527410', 'Test', 'IMG_gDm0kyTwflBAJz4E.png', '2022-10-14 03:03:47');

-- --------------------------------------------------------

--
-- Table structure for table `translations`
--

CREATE TABLE `translations` (
  `trx_id` int(11) NOT NULL,
  `trx_key` varchar(500) CHARACTER SET latin1 NOT NULL,
  `trx_en` varchar(500) CHARACTER SET latin1 NOT NULL,
  `trx_es` varchar(500) CHARACTER SET latin1 NOT NULL,
  `trx_ln1` varchar(500) CHARACTER SET latin1 NOT NULL,
  `trx_ln2` varchar(500) CHARACTER SET latin1 NOT NULL,
  `trx_ln3` varchar(500) CHARACTER SET latin1 NOT NULL,
  `trx_ln4` int(11) NOT NULL,
  `trx_log` datetime NOT NULL DEFAULT current_timestamp()
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

--
-- Dumping data for table `translations`
--

INSERT INTO `translations` (`trx_id`, `trx_key`, `trx_en`, `trx_es`, `trx_ln1`, `trx_ln2`, `trx_ln3`, `trx_ln4`, `trx_log`) VALUES
(1, 'dashboard', 'dashboard', '??????????', '', '', '', 0, '2022-10-14 05:54:23'),
(2, 'newcustomers', 'newcustomers', '????? ????????????????', '', '', '', 0, '2022-10-14 05:54:23'),
(3, 'users', 'users', '????????', '', '', '', 0, '2022-10-14 05:54:23'),
(4, 'test', 'test', '?????', '', '', '', 0, '2022-10-14 05:54:23'),
(5, 'test1', 'test1', '?????1', '', '', '', 0, '2022-10-14 05:54:23'),
(6, 'test2', 'test2', '?????2', '', '', '', 0, '2022-10-14 05:54:23'),
(7, 'test3', 'test3', '?????3', '', '', '', 0, '2022-10-14 05:54:23'),
(8, 'test4', 'test4', '?????4', '', '', '', 0, '2022-10-14 05:54:23'),
(9, 'test5', 'test5', '?????5', '', '', '', 0, '2022-10-14 06:12:37'),
(10, 'test6', 'test6', '?????6', '', '', '', 0, '2022-10-14 06:14:20');

-- --------------------------------------------------------

--
-- Table structure for table `users`
--

CREATE TABLE `users` (
  `user_id` int(11) NOT NULL,
  `user_name` varchar(250) NOT NULL,
  `user_email` varchar(250) NOT NULL,
  `user_password` varchar(250) NOT NULL,
  `user_log` datetime NOT NULL DEFAULT current_timestamp()
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

--
-- Dumping data for table `users`
--

INSERT INTO `users` (`user_id`, `user_name`, `user_email`, `user_password`, `user_log`) VALUES
(2, 'Ram', 'ram@gmail.com', '4e1377fbebf485672f59cb76243518b13f08763498e63f3ec0a71b5bba918e64b4cb8387ba866152fa9ff0ec2323dae08ea7d24d346a2f7427f575af10e69bc1/PytJ+jmfxFpjMzoBqUbz7lflJYlOxqV7j/wmkqZ2Eg=', '2022-10-12 05:20:34'),
(3, 'Admin', 'admin@admin.com', '468d508f7e7a46f72ce2b6d57b397328cc35ea4de4e54e07350e5144f7ea229d7169607de7843a746e58ea7288ea05a57e196ab81e0149ced34a21e70a93d284jq8TTd9NPWwGgajmICE/OBSnCs+NgMu0U+6Si+LQSds=', '2022-10-12 05:20:58');

--
-- Indexes for dumped tables
--

--
-- Indexes for table `addchits`
--
ALTER TABLE `addchits`
  ADD PRIMARY KEY (`ac_id`);

--
-- Indexes for table `newcustomers`
--
ALTER TABLE `newcustomers`
  ADD PRIMARY KEY (`nc_id`);

--
-- Indexes for table `translations`
--
ALTER TABLE `translations`
  ADD PRIMARY KEY (`trx_id`);

--
-- Indexes for table `users`
--
ALTER TABLE `users`
  ADD PRIMARY KEY (`user_id`);

--
-- AUTO_INCREMENT for dumped tables
--

--
-- AUTO_INCREMENT for table `addchits`
--
ALTER TABLE `addchits`
  MODIFY `ac_id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=7;

--
-- AUTO_INCREMENT for table `newcustomers`
--
ALTER TABLE `newcustomers`
  MODIFY `nc_id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=3;

--
-- AUTO_INCREMENT for table `translations`
--
ALTER TABLE `translations`
  MODIFY `trx_id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=11;

--
-- AUTO_INCREMENT for table `users`
--
ALTER TABLE `users`
  MODIFY `user_id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=4;
COMMIT;

/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
