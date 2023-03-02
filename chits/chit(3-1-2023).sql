-- phpMyAdmin SQL Dump
-- version 5.2.0
-- https://www.phpmyadmin.net/
--
-- Host: 127.0.0.1
-- Generation Time: Jan 03, 2023 at 06:38 PM
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
-- Table structure for table `addagent`
--

CREATE TABLE `addagent` (
  `ag_id` int(11) NOT NULL,
  `ag_name` varchar(500) NOT NULL,
  `ag_dob` date NOT NULL,
  `ag_age` int(11) NOT NULL,
  `ag_gender` varchar(500) NOT NULL,
  `ag_primary_number` varchar(500) NOT NULL,
  `ag_secondary_number` varchar(500) NOT NULL,
  `ag_education_qualification` varchar(500) NOT NULL,
  `ag_pan_number` varchar(500) NOT NULL,
  `ag_aadhaar_number` varchar(500) NOT NULL,
  `ag_martial_status` varchar(500) NOT NULL,
  `ag_permanant_address` varchar(500) NOT NULL,
  `ag_father_name` varchar(500) NOT NULL,
  `ag_father_phoneno` varchar(500) NOT NULL,
  `ag_father_adhar` varchar(500) NOT NULL,
  `ag_father_permanent_address` varchar(500) NOT NULL,
  `ag_mother_name` varchar(500) NOT NULL,
  `ag_mother_phoneno` varchar(500) NOT NULL,
  `ag_mother_adhar` varchar(500) NOT NULL,
  `ag_mother_permanent_address` varchar(500) NOT NULL,
  `ag_company_name` varchar(500) NOT NULL,
  `ag_company_phoneno` varchar(500) NOT NULL,
  `ag_company_email` varchar(500) NOT NULL,
  `ag_company_address` varchar(500) NOT NULL,
  `ag_ref_name_1` varchar(500) NOT NULL,
  `ag_ref_adhar_1` varchar(500) NOT NULL,
  `ag_ref_permanent_address_1` varchar(500) NOT NULL,
  `ag_ref_name_2` varchar(500) NOT NULL,
  `ag_ref_phoneno_2` varchar(500) NOT NULL,
  `ag_ref_adhar_2` varchar(500) NOT NULL,
  `ag_ref_permanent_address_2` varchar(500) NOT NULL,
  `ag_date_of_joining` date NOT NULL,
  `ag_documents_provided` varchar(500) NOT NULL,
  `ag_log` datetime NOT NULL DEFAULT current_timestamp()
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

--
-- Dumping data for table `addagent`
--

INSERT INTO `addagent` (`ag_id`, `ag_name`, `ag_dob`, `ag_age`, `ag_gender`, `ag_primary_number`, `ag_secondary_number`, `ag_education_qualification`, `ag_pan_number`, `ag_aadhaar_number`, `ag_martial_status`, `ag_permanant_address`, `ag_father_name`, `ag_father_phoneno`, `ag_father_adhar`, `ag_father_permanent_address`, `ag_mother_name`, `ag_mother_phoneno`, `ag_mother_adhar`, `ag_mother_permanent_address`, `ag_company_name`, `ag_company_phoneno`, `ag_company_email`, `ag_company_address`, `ag_ref_name_1`, `ag_ref_adhar_1`, `ag_ref_permanent_address_1`, `ag_ref_name_2`, `ag_ref_phoneno_2`, `ag_ref_adhar_2`, `ag_ref_permanent_address_2`, `ag_date_of_joining`, `ag_documents_provided`, `ag_log`) VALUES
(1, 'test', '2022-10-18', 21, 'Male', '7894561230', '9874561230', 'bsc', '78945612301234', '85201479630123', 'Single', 'test123\nxyz', 'test', '8520147963', '45678912300321', '123car street\nxyz', 'test', '9630258741', '7410258963', '123car street\nxyz', 'xyzcompany', '7789456123', 'xyz@gmail.com', '123xyz,rnpuram,coimbatore-45', 'ron', '96300258741123', 'abc12,tnagar,coimbatore-16', 'rohit', '7778894561', '78910002365489', 'no.17vknagar,ramnagar,coimbatore-14', '2022-10-12', '10th', '2022-10-18 05:20:40');

-- --------------------------------------------------------

--
-- Table structure for table `addchits`
--

CREATE TABLE `addchits` (
  `ac_id` int(11) NOT NULL,
  `ac_customer_id` varchar(500) NOT NULL,
  `ac_name` varchar(500) NOT NULL,
  `ac_phone` varchar(500) NOT NULL,
  `ac_chit_scheme` varchar(500) NOT NULL,
  `ac_chit_value` varchar(500) NOT NULL,
  `ac_max_installment_1` int(250) NOT NULL,
  `ac_chit_no_1` int(11) NOT NULL,
  `ac_chit_no_2` int(11) NOT NULL,
  `ac_chit_no_3` int(11) NOT NULL,
  `ac_chit_no_4` int(11) NOT NULL,
  `ac_chit_no_5` int(11) NOT NULL,
  `ac_chit_no_6` int(11) NOT NULL,
  `ac_chit_no_7` int(11) NOT NULL,
  `ac_chit_no_8` int(11) NOT NULL,
  `ac_chit_no_9` int(11) NOT NULL,
  `ac_chit_no_10` int(11) NOT NULL,
  `ac_chit_no_11` int(11) NOT NULL,
  `ac_chit_no_12` int(11) NOT NULL,
  `ac_chit_no_13` int(11) NOT NULL,
  `ac_chit_no_14` int(11) NOT NULL,
  `ac_chit_no_15` int(11) NOT NULL,
  `ac_chit_no_16` int(11) NOT NULL,
  `ac_chit_no_17` int(11) NOT NULL,
  `ac_chit_no_18` int(11) NOT NULL,
  `ac_chit_no_19` int(11) NOT NULL,
  `ac_chit_no_20` int(11) NOT NULL,
  `ac_chit_no_21` int(11) NOT NULL,
  `ac_max_installment_2` int(250) NOT NULL,
  `ac_max_installment_3` int(250) NOT NULL,
  `ac_max_installment_4` int(250) NOT NULL,
  `ac_max_installment_5` int(250) NOT NULL,
  `ac_max_installment_6` int(250) NOT NULL,
  `ac_max_installment_7` int(250) NOT NULL,
  `ac_max_installment_8` int(250) NOT NULL,
  `ac_max_installment_9` int(250) NOT NULL,
  `ac_max_installment_10` int(250) NOT NULL,
  `ac_max_installment_11` int(250) NOT NULL,
  `ac_max_installment_12` int(250) NOT NULL,
  `ac_max_installment_13` int(250) NOT NULL,
  `ac_max_installment_14` int(250) NOT NULL,
  `ac_max_installment_15` int(250) NOT NULL,
  `ac_max_installment_16` int(250) NOT NULL,
  `ac_max_installment_17` int(250) NOT NULL,
  `ac_max_installment_18` int(250) NOT NULL,
  `ac_max_installment_19` int(250) NOT NULL,
  `ac_max_installment_20` int(250) NOT NULL,
  `ac_max_installment_21` int(250) NOT NULL,
  `ac_no_of_members` varchar(500) NOT NULL,
  `ac_no_of_installment` varchar(500) NOT NULL,
  `ac_date_of_joining` date DEFAULT NULL,
  `ac_first_payment` varchar(500) NOT NULL,
  `ac_log` datetime NOT NULL DEFAULT current_timestamp()
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

--
-- Dumping data for table `addchits`
--

INSERT INTO `addchits` (`ac_id`, `ac_customer_id`, `ac_name`, `ac_phone`, `ac_chit_scheme`, `ac_chit_value`, `ac_max_installment_1`, `ac_chit_no_1`, `ac_chit_no_2`, `ac_chit_no_3`, `ac_chit_no_4`, `ac_chit_no_5`, `ac_chit_no_6`, `ac_chit_no_7`, `ac_chit_no_8`, `ac_chit_no_9`, `ac_chit_no_10`, `ac_chit_no_11`, `ac_chit_no_12`, `ac_chit_no_13`, `ac_chit_no_14`, `ac_chit_no_15`, `ac_chit_no_16`, `ac_chit_no_17`, `ac_chit_no_18`, `ac_chit_no_19`, `ac_chit_no_20`, `ac_chit_no_21`, `ac_max_installment_2`, `ac_max_installment_3`, `ac_max_installment_4`, `ac_max_installment_5`, `ac_max_installment_6`, `ac_max_installment_7`, `ac_max_installment_8`, `ac_max_installment_9`, `ac_max_installment_10`, `ac_max_installment_11`, `ac_max_installment_12`, `ac_max_installment_13`, `ac_max_installment_14`, `ac_max_installment_15`, `ac_max_installment_16`, `ac_max_installment_17`, `ac_max_installment_18`, `ac_max_installment_19`, `ac_max_installment_20`, `ac_max_installment_21`, `ac_no_of_members`, `ac_no_of_installment`, `ac_date_of_joining`, `ac_first_payment`, `ac_log`) VALUES
(1, 'SSMC-2210286', 'kane', '7894561230', 'value saver pro', '100000', 2500, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20, 21, 1875, 1900, 1925, 1950, 1975, 2000, 2025, 2050, 2075, 2100, 2125, 2150, 2175, 2200, 2225, 2260, 2275, 2300, 2400, 2500, '10', '21', '2022-11-16', '2500', '2022-11-16 06:52:05'),
(2, 'SSMC-22109153', 'Rajeshkumar', '9600924292', 'quick saver pro', '50000', 5000, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 3600, 3650, 3700, 3750, 3800, 3900, 4000, 4100, 4500, 5000, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, '11', '11', '2022-11-16', '5000', '2022-11-16 06:52:43'),
(3, 'SSMC-22104478', 'reena', '9994412345', 'value saver pro', '100000', 2500, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20, 21, 1875, 1900, 1925, 1950, 1975, 2000, 2025, 2050, 2075, 2100, 2125, 2150, 2175, 2200, 2225, 2260, 2275, 2300, 2400, 2500, '10', '21', '2022-11-16', '2500', '2022-11-16 06:53:12'),
(4, 'SSMC-22107337', 'test', '9874561230', 'quick saver pro', '50000', 5000, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 3600, 3650, 3700, 3750, 3800, 3900, 4000, 4100, 4500, 5000, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, '10', '11', '2022-11-16', '5000', '2022-11-16 06:53:40'),
(37, 'SSMC-22121807', 'dhoni ms', '7418529631', 'value of one', '7000', 7000, 1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, '1', '1', '2023-01-02', '', '2023-01-02 12:10:01'),
(38, 'SSMC-22115218', 'rohan', '7894561231', 'value of ten', '60000', 1000, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1500, 2000, 2500, 3000, 3500, 4000, 4500, 5000, 5500, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, '10', '10', '2023-01-02', '', '2023-01-03 01:25:03'),
(39, 'SSMC-23019882', 'raina', '8794561230', 'value of two', '20000', 10000, 1, 2, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 10000, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, '2', '2', '2023-01-03', '', '2023-01-03 01:57:12');

-- --------------------------------------------------------

--
-- Table structure for table `chit_group`
--

CREATE TABLE `chit_group` (
  `cg_id` int(11) NOT NULL,
  `cg_group_name` varchar(100) NOT NULL,
  `cg_chit_scheme_id` varchar(100) NOT NULL,
  `cg_chit_month` varchar(100) NOT NULL,
  `cg_chit_value_id` varchar(100) NOT NULL,
  `cg_max_installment_1` varchar(100) NOT NULL,
  `cg_chit_no_1` int(11) NOT NULL,
  `cg_chit_no_2` int(11) NOT NULL,
  `cg_chit_no_3` int(11) NOT NULL,
  `cg_chit_no_4` int(11) NOT NULL,
  `cg_chit_no_5` int(11) NOT NULL,
  `cg_chit_no_6` int(11) NOT NULL,
  `cg_chit_no_7` int(11) NOT NULL,
  `cg_chit_no_8` int(11) NOT NULL,
  `cg_chit_no_9` int(11) NOT NULL,
  `cg_chit_no_10` int(11) NOT NULL,
  `cg_chit_no_11` int(11) NOT NULL,
  `cg_chit_no_12` int(11) NOT NULL,
  `cg_chit_no_13` int(11) NOT NULL,
  `cg_chit_no_14` int(11) NOT NULL,
  `cg_chit_no_15` int(11) NOT NULL,
  `cg_chit_no_16` int(11) NOT NULL,
  `cg_chit_no_17` int(11) NOT NULL,
  `cg_chit_no_18` int(11) NOT NULL,
  `cg_chit_no_19` int(11) NOT NULL,
  `cg_chit_no_20` int(11) NOT NULL,
  `cg_chit_no_21` int(11) NOT NULL,
  `cg_chit_no_22` int(11) NOT NULL,
  `cg_chit_no_23` int(11) NOT NULL,
  `cg_chit_no_24` int(11) NOT NULL,
  `cg_chit_no_25` int(11) NOT NULL,
  `cg_chit_no_26` int(11) NOT NULL,
  `cg_chit_no_27` int(11) NOT NULL,
  `cg_chit_no_28` int(11) NOT NULL,
  `cg_chit_no_29` int(11) NOT NULL,
  `cg_chit_no_30` int(11) NOT NULL,
  `cg_chit_no_31` int(11) NOT NULL,
  `cg_chit_no_32` int(11) NOT NULL,
  `cg_chit_no_33` int(11) NOT NULL,
  `cg_chit_no_34` int(11) NOT NULL,
  `cg_chit_no_35` int(11) NOT NULL,
  `cg_chit_no_36` int(11) NOT NULL,
  `cg_chit_no_37` int(11) NOT NULL,
  `cg_chit_no_38` int(11) NOT NULL,
  `cg_chit_no_39` int(11) NOT NULL,
  `cg_chit_no_40` int(11) NOT NULL,
  `cg_chit_no_41` int(11) NOT NULL,
  `cg_chit_no_42` int(11) NOT NULL,
  `cg_chit_no_43` int(11) NOT NULL,
  `cg_chit_no_44` int(11) NOT NULL,
  `cg_chit_no_45` int(11) NOT NULL,
  `cg_chit_no_46` int(11) NOT NULL,
  `cg_chit_no_47` int(11) NOT NULL,
  `cg_chit_no_48` int(11) NOT NULL,
  `cg_chit_no_49` int(11) NOT NULL,
  `cg_chit_no_50` int(11) NOT NULL,
  `cg_max_installment_2` varchar(100) NOT NULL,
  `cg_max_installment_3` varchar(100) NOT NULL,
  `cg_max_installment_4` varchar(100) NOT NULL,
  `cg_max_installment_5` varchar(100) NOT NULL,
  `cg_max_installment_6` varchar(100) NOT NULL,
  `cg_max_installment_7` varchar(100) NOT NULL,
  `cg_max_installment_8` varchar(100) NOT NULL,
  `cg_max_installment_9` varchar(100) NOT NULL,
  `cg_max_installment_10` varchar(100) NOT NULL,
  `cg_max_installment_11` varchar(100) NOT NULL,
  `cg_max_installment_12` varchar(100) NOT NULL,
  `cg_max_installment_13` varchar(100) NOT NULL,
  `cg_max_installment_14` varchar(100) NOT NULL,
  `cg_max_installment_15` varchar(100) NOT NULL,
  `cg_max_installment_16` varchar(100) NOT NULL,
  `cg_max_installment_17` varchar(100) NOT NULL,
  `cg_max_installment_18` varchar(100) NOT NULL,
  `cg_max_installment_19` varchar(100) NOT NULL,
  `cg_max_installment_20` varchar(100) NOT NULL,
  `cg_max_installment_21` varchar(100) NOT NULL,
  `cg_max_installment_22` varchar(100) NOT NULL,
  `cg_max_installment_23` varchar(100) NOT NULL,
  `cg_max_installment_24` varchar(100) NOT NULL,
  `cg_max_installment_25` varchar(100) NOT NULL,
  `cg_max_installment_26` varchar(100) NOT NULL,
  `cg_max_installment_27` varchar(100) NOT NULL,
  `cg_max_installment_28` varchar(100) NOT NULL,
  `cg_max_installment_29` varchar(100) NOT NULL,
  `cg_max_installment_30` varchar(100) NOT NULL,
  `cg_max_installment_31` varchar(100) NOT NULL,
  `cg_max_installment_32` varchar(100) NOT NULL,
  `cg_max_installment_33` varchar(100) NOT NULL,
  `cg_max_installment_34` varchar(100) NOT NULL,
  `cg_max_installment_35` varchar(100) NOT NULL,
  `cg_max_installment_36` varchar(100) NOT NULL,
  `cg_max_installment_37` varchar(100) NOT NULL,
  `cg_max_installment_38` varchar(100) NOT NULL,
  `cg_max_installment_39` varchar(100) NOT NULL,
  `cg_max_installment_40` varchar(100) NOT NULL,
  `cg_max_installment_41` varchar(100) NOT NULL,
  `cg_max_installment_42` varchar(100) NOT NULL,
  `cg_max_installment_43` varchar(100) NOT NULL,
  `cg_max_installment_44` varchar(100) NOT NULL,
  `cg_max_installment_45` varchar(100) NOT NULL,
  `cg_max_installment_46` varchar(100) NOT NULL,
  `cg_max_installment_47` varchar(100) NOT NULL,
  `cg_max_installment_48` varchar(100) NOT NULL,
  `cg_max_installment_49` varchar(100) NOT NULL,
  `cg_max_installment_50` varchar(100) NOT NULL,
  `cg_log` datetime NOT NULL DEFAULT current_timestamp()
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

--
-- Dumping data for table `chit_group`
--

INSERT INTO `chit_group` (`cg_id`, `cg_group_name`, `cg_chit_scheme_id`, `cg_chit_month`, `cg_chit_value_id`, `cg_max_installment_1`, `cg_chit_no_1`, `cg_chit_no_2`, `cg_chit_no_3`, `cg_chit_no_4`, `cg_chit_no_5`, `cg_chit_no_6`, `cg_chit_no_7`, `cg_chit_no_8`, `cg_chit_no_9`, `cg_chit_no_10`, `cg_chit_no_11`, `cg_chit_no_12`, `cg_chit_no_13`, `cg_chit_no_14`, `cg_chit_no_15`, `cg_chit_no_16`, `cg_chit_no_17`, `cg_chit_no_18`, `cg_chit_no_19`, `cg_chit_no_20`, `cg_chit_no_21`, `cg_chit_no_22`, `cg_chit_no_23`, `cg_chit_no_24`, `cg_chit_no_25`, `cg_chit_no_26`, `cg_chit_no_27`, `cg_chit_no_28`, `cg_chit_no_29`, `cg_chit_no_30`, `cg_chit_no_31`, `cg_chit_no_32`, `cg_chit_no_33`, `cg_chit_no_34`, `cg_chit_no_35`, `cg_chit_no_36`, `cg_chit_no_37`, `cg_chit_no_38`, `cg_chit_no_39`, `cg_chit_no_40`, `cg_chit_no_41`, `cg_chit_no_42`, `cg_chit_no_43`, `cg_chit_no_44`, `cg_chit_no_45`, `cg_chit_no_46`, `cg_chit_no_47`, `cg_chit_no_48`, `cg_chit_no_49`, `cg_chit_no_50`, `cg_max_installment_2`, `cg_max_installment_3`, `cg_max_installment_4`, `cg_max_installment_5`, `cg_max_installment_6`, `cg_max_installment_7`, `cg_max_installment_8`, `cg_max_installment_9`, `cg_max_installment_10`, `cg_max_installment_11`, `cg_max_installment_12`, `cg_max_installment_13`, `cg_max_installment_14`, `cg_max_installment_15`, `cg_max_installment_16`, `cg_max_installment_17`, `cg_max_installment_18`, `cg_max_installment_19`, `cg_max_installment_20`, `cg_max_installment_21`, `cg_max_installment_22`, `cg_max_installment_23`, `cg_max_installment_24`, `cg_max_installment_25`, `cg_max_installment_26`, `cg_max_installment_27`, `cg_max_installment_28`, `cg_max_installment_29`, `cg_max_installment_30`, `cg_max_installment_31`, `cg_max_installment_32`, `cg_max_installment_33`, `cg_max_installment_34`, `cg_max_installment_35`, `cg_max_installment_36`, `cg_max_installment_37`, `cg_max_installment_38`, `cg_max_installment_39`, `cg_max_installment_40`, `cg_max_installment_41`, `cg_max_installment_42`, `cg_max_installment_43`, `cg_max_installment_44`, `cg_max_installment_45`, `cg_max_installment_46`, `cg_max_installment_47`, `cg_max_installment_48`, `cg_max_installment_49`, `cg_max_installment_50`, `cg_log`) VALUES
(1, 'A', 'quick saver pro', '', '50000', '5000', 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, '3600', '3650', '3700', '3750', '3800', '3900', '4000', '4100', '4500', '5000', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '2022-11-15 06:49:52'),
(10, 'B', 'value of one', '1', '7000', '7000', 1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '2023-01-02 06:02:49'),
(11, 'C', 'value of ten', '10', '60000', '1000', 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, '1500', '2000', '2500', '3000', '3500', '4000', '4500', '5000', '5500', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '2023-01-02 07:55:49'),
(12, 'D', 'value of two', '2', '20000', '10000', 1, 2, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, '10000', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '2023-01-03 01:52:51');

-- --------------------------------------------------------

--
-- Table structure for table `chit_scheme`
--

CREATE TABLE `chit_scheme` (
  `cs_id` int(11) NOT NULL,
  `cs_chit_scheme` varchar(500) NOT NULL,
  `cs_chit_month` varchar(500) NOT NULL,
  `cs_log` datetime NOT NULL DEFAULT current_timestamp()
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

--
-- Dumping data for table `chit_scheme`
--

INSERT INTO `chit_scheme` (`cs_id`, `cs_chit_scheme`, `cs_chit_month`, `cs_log`) VALUES
(1, 'quick saver pro', '11', '2022-11-07 05:31:42'),
(2, 'value saver pro', '21', '2022-11-07 05:31:58'),
(6, 'value of one', '1', '2023-01-02 06:00:05'),
(7, 'value of ten', '10', '2023-01-02 07:53:59'),
(8, 'value of two', '2', '2023-01-03 01:52:10');

-- --------------------------------------------------------

--
-- Table structure for table `chit_value`
--

CREATE TABLE `chit_value` (
  `cv_id` int(11) NOT NULL,
  `cv_chit_value` varchar(500) NOT NULL,
  `cv_log` datetime NOT NULL DEFAULT current_timestamp()
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

--
-- Dumping data for table `chit_value`
--

INSERT INTO `chit_value` (`cv_id`, `cv_chit_value`, `cv_log`) VALUES
(1, '50000', '2022-11-07 05:30:33'),
(2, '100000', '2022-11-07 05:30:57'),
(3, '10000', '2022-11-28 01:21:14'),
(4, '7000', '2023-01-02 05:58:16'),
(5, '60000', '2023-01-02 07:53:43'),
(6, '20000', '2023-01-03 01:51:42');

-- --------------------------------------------------------

--
-- Table structure for table `collections`
--

CREATE TABLE `collections` (
  `col_id` int(11) NOT NULL,
  `col_customer_id` varchar(500) NOT NULL,
  `col_name` varchar(500) NOT NULL,
  `col_phone` varchar(500) NOT NULL,
  `col_chit_scheme` varchar(500) NOT NULL,
  `col_chit_value` varchar(500) NOT NULL,
  `col_chit_installment` varchar(500) NOT NULL,
  `col_chit_no` varchar(250) NOT NULL,
  `col_max_installment` varchar(250) NOT NULL,
  `col_first_payment` varchar(500) NOT NULL,
  `col_payable_amount` varchar(500) NOT NULL,
  `col_new_payable_amount` varchar(500) NOT NULL,
  `col_outstanding` varchar(500) NOT NULL DEFAULT '',
  `col_status` varchar(250) NOT NULL,
  `col_date` date NOT NULL,
  `col_log` datetime NOT NULL DEFAULT current_timestamp()
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

--
-- Dumping data for table `collections`
--

INSERT INTO `collections` (`col_id`, `col_customer_id`, `col_name`, `col_phone`, `col_chit_scheme`, `col_chit_value`, `col_chit_installment`, `col_chit_no`, `col_max_installment`, `col_first_payment`, `col_payable_amount`, `col_new_payable_amount`, `col_outstanding`, `col_status`, `col_date`, `col_log`) VALUES
(1, 'SSMC-2210286', 'kane', '7894561230', 'value saver pro', '100000', '21', '2', '1875', '2500', '1875', '', '0', 'completed', '2023-01-03', '2023-01-03 11:44:23');

-- --------------------------------------------------------

--
-- Table structure for table `maxinstallment`
--

CREATE TABLE `maxinstallment` (
  `max_id` int(11) NOT NULL,
  `max_no_of_installment` int(11) NOT NULL,
  `max_installment` varchar(500) NOT NULL,
  `max_log` datetime NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

-- --------------------------------------------------------

--
-- Table structure for table `newcustomers`
--

CREATE TABLE `newcustomers` (
  `nc_id` int(11) NOT NULL,
  `nc_customer_id` varchar(500) NOT NULL,
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
  `nc_id_proof_no` int(11) NOT NULL,
  `nc_father_name` varchar(250) NOT NULL,
  `nc_father_adhar` int(11) NOT NULL,
  `nc_father_phoneno` varchar(250) NOT NULL,
  `nc_mother_name` varchar(250) NOT NULL,
  `nc_mother_adhar` int(11) NOT NULL,
  `nc_martial_status` varchar(250) NOT NULL,
  `nc_spouse_name` varchar(250) NOT NULL,
  `nc_spouse_adhar` int(11) NOT NULL,
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

INSERT INTO `newcustomers` (`nc_id`, `nc_customer_id`, `nc_name`, `nc_phone`, `nc_dob`, `nc_gender`, `nc_present_address`, `nc_present_city`, `nc_present_state`, `nc_present_pincode`, `nc_permanent_address`, `nc_permanent_city`, `nc_permanent_state`, `nc_permanent_pincode`, `nc_id_proof`, `nc_id_proof_no`, `nc_father_name`, `nc_father_adhar`, `nc_father_phoneno`, `nc_mother_name`, `nc_mother_adhar`, `nc_martial_status`, `nc_spouse_name`, `nc_spouse_adhar`, `nc_spouse_phoneno`, `nc_reference_name_1`, `nc_reference_phone_1`, `nc_reference_name_2`, `nc_reference_phone_2`, `nc_nominee_name`, `nc_nominee_phone`, `nc_nominee_relationship`, `nc_profile_photo`, `nc_log`) VALUES
(1, 'SSMC-22107337', 'test', '9874561230', '2022-10-19', 'Male', 'Xyz123,rkpudur', 'Coimbatore', 'Tamilnadu', '641045', 'No.12carstreet,tnagar', 'Coimbatore', 'Tamailnadu', '641042', 'Adhar', 2147483647, 'Test', 2147483647, '7410258963', 'Test', 2147483647, 'Single', '', 0, '', 'Test', '7778880000', 'Test1', '9997771234', 'Test', '9874561210', 'Friend', 'IMG_IUD1tdYnAyoqpS0b.png', '2022-10-19 00:46:26'),
(2, 'SSMC-22104478', 'reena', '9994412345', '2022-10-20', 'Female', 'No.3 Annaroad', 'Coimbatore', 'Tamilnadu', '641045', 'No.3 Annaroad', 'Coimbatore', 'Tamilnadu', '641045', 'Adhar', 2147483647, 'David', 2147483647, '9630258741', 'Julie', 2147483647, 'Married', 'Test', 2147483647, '8887771230', 'Ron', '7788994455', 'Rohit', '7841023659', 'Henry', '7410258963', 'Friend', 'IMG_PTnMLVrFpk58wKHU.png', '2022-10-19 00:51:52'),
(3, 'SSMC-22109153', 'Rajeshkumar', '9600924292', '1989-11-08', 'Male', 'Kulathur, Karur', 'Karur', 'TamilNadu', '641008', '', '', '', '', 'Adhar', 2147483647, '', 0, '', '', 0, 'Married', 'Revathi', 2147483647, '', '', '', '', '', 'Baggiyaraj', '8220966766', 'Friend', 'Noimg.png', '2022-10-19 05:39:09'),
(4, 'SSMC-2210286', 'kane', '7894561230', '2022-10-26', 'Male', 'Test', 'Coimbatore', 'Tamilnadu', '641045', 'Test', 'Coimbatore', 'Tamilnadu', '641045', 'Adhar', 2147483647, 'Test', 0, '7410258963', 'Test', 2147483647, 'Single', '', 0, '', 'Test', '9874561230', 'Test1', '8794561230', 'Tester', '7569841230', 'Friend', 'IMG_SjFKOEsHnuerdJVx.png', '2022-10-26 05:27:43'),
(5, 'SSMC-22115218', 'rohan', '7894561231', '2022-11-25', 'Male', 'Test', 'Coimbatore', 'Tamilnadu', '641045', 'Test', 'Coimbatore', 'Tamilnadu', '641045', 'Adhar', 2147483647, 'Test', 0, '1234569870', 'Test', 0, 'Single', '', 0, '', 'Test', '8520147963', 'Test', '753951460', 'Test', '9630258741', 'Test', 'IMG_aTqtNd7ASwmGhzHD.png', '2022-11-24 06:42:36'),
(7, 'SSMC-22121807', 'dhoni ms', '7418529631', '2022-12-14', 'Male', '12345 Abcd', 'Coimbatore', 'Tamil Nadu', '645170', '', '', '', '', 'Adhar', 2147483647, 'Sachin', 2147483647, '7418596320', 'Ganga', 2147483647, 'Single', '', 0, '', 'Test', '6547891230', 'Test', '9638527410', 'Test', '8529637410', 'Test', 'IMG_4WwnKEmIkv2YdQtG.png', '2022-12-12 05:25:15'),
(8, 'SSMC-23019882', 'raina', '8794561230', '2023-01-03', 'Male', 'Test', 'Coimbatore', 'Tamilnadu', '641045', '', '', '', '', 'Adhar', 2147483647, 'Test', 2147483647, '8974561230', 'Test', 2147483647, 'Single', '', 0, '', 'Test', '8520369741', 'Test', '9632587410', 'Test1', '7532148960', 'Friend', 'IMG_8VfjUnTPaKXIZ4qJ.png', '2023-01-03 01:56:39');

-- --------------------------------------------------------

--
-- Table structure for table `quicksavepro_fiftythousand`
--

CREATE TABLE `quicksavepro_fiftythousand` (
  `qft_id` int(11) NOT NULL,
  `qft_chit_no` int(11) NOT NULL,
  `qft_chit_value` int(100) NOT NULL,
  `qft_max_installment` int(100) NOT NULL,
  `qft_log` datetime NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

--
-- Dumping data for table `quicksavepro_fiftythousand`
--

INSERT INTO `quicksavepro_fiftythousand` (`qft_id`, `qft_chit_no`, `qft_chit_value`, `qft_max_installment`, `qft_log`) VALUES
(1, 1, 10000, 3600, '2022-11-04 05:17:46'),
(2, 2, 10000, 3650, '2022-11-04 05:17:46'),
(3, 3, 10000, 3700, '2022-11-04 05:20:31'),
(4, 4, 10000, 3750, '2022-11-04 05:20:31'),
(5, 5, 10000, 3800, '2022-11-04 05:22:57'),
(6, 6, 10000, 3900, '2022-11-04 05:22:57'),
(7, 7, 10000, 4000, '2022-11-04 16:24:16'),
(8, 8, 10000, 4100, '2022-11-04 16:24:16'),
(9, 9, 2500, 7000, '2022-11-05 10:39:44'),
(10, 10, 2500, 7100, '2022-11-05 10:39:44');

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
(3, 'Admin', 'admin@admin.com', '468d508f7e7a46f72ce2b6d57b397328cc35ea4de4e54e07350e5144f7ea229d7169607de7843a746e58ea7288ea05a57e196ab81e0149ced34a21e70a93d284jq8TTd9NPWwGgajmICE/OBSnCs+NgMu0U+6Si+LQSds=', '2022-10-18 09:57:31');

-- --------------------------------------------------------

--
-- Table structure for table `valuesavepro_fivelakhs`
--

CREATE TABLE `valuesavepro_fivelakhs` (
  `val_id` int(11) NOT NULL,
  `val_chit_no` int(11) NOT NULL,
  `val_chit_value` int(100) NOT NULL,
  `val_max_installment` int(100) NOT NULL,
  `val_log` datetime NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

--
-- Dumping data for table `valuesavepro_fivelakhs`
--

INSERT INTO `valuesavepro_fivelakhs` (`val_id`, `val_chit_no`, `val_chit_value`, `val_max_installment`, `val_log`) VALUES
(1, 1, 2500, 1875, '2022-11-05 14:57:51'),
(2, 2, 2500, 1900, '2022-11-05 14:57:51'),
(3, 3, 2500, 1925, '2022-11-05 14:58:56'),
(4, 4, 2500, 1950, '2022-11-05 14:58:56'),
(5, 5, 2500, 2000, '2022-11-05 14:59:24');

--
-- Indexes for dumped tables
--

--
-- Indexes for table `addagent`
--
ALTER TABLE `addagent`
  ADD PRIMARY KEY (`ag_id`);

--
-- Indexes for table `addchits`
--
ALTER TABLE `addchits`
  ADD PRIMARY KEY (`ac_id`);

--
-- Indexes for table `chit_group`
--
ALTER TABLE `chit_group`
  ADD PRIMARY KEY (`cg_id`);

--
-- Indexes for table `chit_scheme`
--
ALTER TABLE `chit_scheme`
  ADD PRIMARY KEY (`cs_id`);

--
-- Indexes for table `chit_value`
--
ALTER TABLE `chit_value`
  ADD PRIMARY KEY (`cv_id`);

--
-- Indexes for table `collections`
--
ALTER TABLE `collections`
  ADD PRIMARY KEY (`col_id`);

--
-- Indexes for table `maxinstallment`
--
ALTER TABLE `maxinstallment`
  ADD PRIMARY KEY (`max_id`);

--
-- Indexes for table `newcustomers`
--
ALTER TABLE `newcustomers`
  ADD PRIMARY KEY (`nc_id`);

--
-- Indexes for table `quicksavepro_fiftythousand`
--
ALTER TABLE `quicksavepro_fiftythousand`
  ADD PRIMARY KEY (`qft_id`);

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
-- Indexes for table `valuesavepro_fivelakhs`
--
ALTER TABLE `valuesavepro_fivelakhs`
  ADD PRIMARY KEY (`val_id`);

--
-- AUTO_INCREMENT for dumped tables
--

--
-- AUTO_INCREMENT for table `addagent`
--
ALTER TABLE `addagent`
  MODIFY `ag_id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=2;

--
-- AUTO_INCREMENT for table `addchits`
--
ALTER TABLE `addchits`
  MODIFY `ac_id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=40;

--
-- AUTO_INCREMENT for table `chit_group`
--
ALTER TABLE `chit_group`
  MODIFY `cg_id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=13;

--
-- AUTO_INCREMENT for table `chit_scheme`
--
ALTER TABLE `chit_scheme`
  MODIFY `cs_id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=9;

--
-- AUTO_INCREMENT for table `chit_value`
--
ALTER TABLE `chit_value`
  MODIFY `cv_id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=7;

--
-- AUTO_INCREMENT for table `collections`
--
ALTER TABLE `collections`
  MODIFY `col_id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=8;

--
-- AUTO_INCREMENT for table `maxinstallment`
--
ALTER TABLE `maxinstallment`
  MODIFY `max_id` int(11) NOT NULL AUTO_INCREMENT;

--
-- AUTO_INCREMENT for table `newcustomers`
--
ALTER TABLE `newcustomers`
  MODIFY `nc_id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=9;

--
-- AUTO_INCREMENT for table `quicksavepro_fiftythousand`
--
ALTER TABLE `quicksavepro_fiftythousand`
  MODIFY `qft_id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=11;

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

--
-- AUTO_INCREMENT for table `valuesavepro_fivelakhs`
--
ALTER TABLE `valuesavepro_fivelakhs`
  MODIFY `val_id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=6;
COMMIT;

/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
