-- MySQL dump 10.13  Distrib 5.5.24, for Win64 (x86)
--
-- Host: localhost    Database: iddb
-- ------------------------------------------------------
-- Server version	5.5.24

/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40101 SET NAMES utf8 */;
/*!40103 SET @OLD_TIME_ZONE=@@TIME_ZONE */;
/*!40103 SET TIME_ZONE='+00:00' */;
/*!40014 SET @OLD_UNIQUE_CHECKS=@@UNIQUE_CHECKS, UNIQUE_CHECKS=0 */;
/*!40014 SET @OLD_FOREIGN_KEY_CHECKS=@@FOREIGN_KEY_CHECKS, FOREIGN_KEY_CHECKS=0 */;
/*!40101 SET @OLD_SQL_MODE=@@SQL_MODE, SQL_MODE='NO_AUTO_VALUE_ON_ZERO' */;
/*!40111 SET @OLD_SQL_NOTES=@@SQL_NOTES, SQL_NOTES=0 */;

--
-- Table structure for table `idcarddetails`
--

DROP TABLE IF EXISTS `idcarddetails`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!40101 SET character_set_client = utf8 */;
CREATE TABLE `idcarddetails` (
  `id` int(11) NOT NULL AUTO_INCREMENT,
  `companyname` varchar(255) DEFAULT NULL,
  `dob` varchar(255) DEFAULT NULL,
  `empid` varchar(255) DEFAULT NULL,
  `address` varchar(255) DEFAULT NULL,
  `bloodgroup` varchar(255) DEFAULT NULL,
  `size` varchar(255) DEFAULT NULL,
  `issueddate` varchar(255) DEFAULT NULL,
  `name` varchar(255) DEFAULT NULL,
  `mobilenumber` varchar(255) DEFAULT NULL,
  `userimage` varchar(255) DEFAULT NULL,
  UNIQUE KEY `id` (`id`)
) ENGINE=InnoDB AUTO_INCREMENT=18 DEFAULT CHARSET=latin1;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `idcarddetails`
--

LOCK TABLES `idcarddetails` WRITE;
/*!40000 ALTER TABLE `idcarddetails` DISABLE KEYS */;
INSERT INTO `idcarddetails` VALUES (1,'adf','2017-11-07','adfa','asd','adf',' 3.370 x 2.125 in (85.60 x 53.98 mm)','2017-11-14','ad','adfad',NULL),(2,'adf','2017-11-07','asfasd','asd','adf',' 3.370 x 2.125 in (85.60 x 53.98 mm)','2017-11-14','ad','adfad',NULL),(3,'','','asd','','','','','asdf','',NULL),(4,'sdasd','','asdf','dfa','fasd','','','asdf','fasdf',NULL),(5,'adf','2017-11-07','adf','asdf','adsf',' 3.370 x 2.125 in (85.60 x 53.98 mm)','2017-11-14','afad','adf',''),(6,'adf','2017-11-06','df','adfasdf','asdf',' 3.370 x 2.125 in (85.60 x 53.98 mm)','2017-11-06','df','asdfasdf',''),(7,'adfa','2017-11-15','adf','adf','dfasd',' 3.370 x 2.125 in (85.60 x 53.98 mm)','2017-11-01','adsf','fads',''),(8,'','','adfad','','','','2017-11-07','adfa','',''),(9,'','','','','','','','','',''),(10,'','','d','','','','','adfa','',''),(11,'dad','','asdfa','asdfada','adsfad',' 3.370 x 2.125 in (85.60 x 53.98 mm)','2017-11-08','da','',''),(12,'','','1','','','','','1','',''),(13,'adf','2017-11-07','adfas','adfa','adfad',' 3.370 x 2.125 in (85.60 x 53.98 mm)','2017-11-08','adfa','adsf',NULL),(14,'adf','2017-11-07','adfas','adfa','adfad',' 3.370 x 2.125 in (85.60 x 53.98 mm)','2017-11-08','','adsf',NULL),(15,'adf','2017-11-07','adfas','adfa','adfad',' 3.370 x 2.125 in (85.60 x 53.98 mm)','2017-11-08','a33333','adsf',NULL),(16,'adf','','adad','adfa','adf',' 3.370 x 2.125 in (85.60 x 53.98 mm)','','ada','adf',NULL),(17,'1','','111','11','1','','','1','1','C:\\fakepath\\Jellyfish.jpg');
/*!40000 ALTER TABLE `idcarddetails` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `idusers`
--

DROP TABLE IF EXISTS `idusers`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!40101 SET character_set_client = utf8 */;
CREATE TABLE `idusers` (
  `profile_id` int(5) NOT NULL AUTO_INCREMENT,
  `username` varchar(200) NOT NULL,
  `email` varchar(100) NOT NULL,
  `password` varchar(255) DEFAULT NULL,
  `cpassword` varchar(255) DEFAULT NULL,
  `mobilenumber` varchar(255) DEFAULT NULL,
  `address` varchar(255) DEFAULT NULL,
  `role` varchar(255) DEFAULT NULL,
  PRIMARY KEY (`profile_id`)
) ENGINE=InnoDB AUTO_INCREMENT=14 DEFAULT CHARSET=latin1;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `idusers`
--

LOCK TABLES `idusers` WRITE;
/*!40000 ALTER TABLE `idusers` DISABLE KEYS */;
INSERT INTO `idusers` VALUES (1,'ramu','ramu@c2n.in','ramu12345','ramu12345','9988774455','Earth,Universe.','User'),(2,'RodJohnson','rod@hibernate.com','rod123','rod123','8899774455','Penchalakona','User'),(3,'GavinKing','Gavin@hibernate.com','gavin1234','gavin1234','7788994455','Kakinada','Deliver'),(4,'JamesGosling','gosling@java.com','12345','12345','887455998','java','User'),(5,'sdfgsf','sfgsd','sfdg','sdfg','sdfg','sdgsrfg','User'),(6,'fg','adf','df','adf','asdf','adf','User'),(7,'fsgsd','sfgs','sfgsfg','sfgsd','fsd','fgfds','User'),(8,'adfa','adsf','adf','adsf','adf','adf','User'),(9,'dfsadf','gfsd','cfg','adfg','adf','adf','User'),(10,'admin','admin@office.com','admin','admin','9999999999','office','admin'),(11,'dafasdfasdfa','adfaa','adfasasd','adfafasdfasdf','asdfadfasdfasdf','dfasdfasd','Deliver'),(12,'venky','venkyp@venky.com','venky12345','venky12345','9874562145','Univerceq','User'),(13,'kvrao','kv@gmail.com','12345678','12345678','8179919865','india','User');
/*!40000 ALTER TABLE `idusers` ENABLE KEYS */;
UNLOCK TABLES;
/*!40103 SET TIME_ZONE=@OLD_TIME_ZONE */;

/*!40101 SET SQL_MODE=@OLD_SQL_MODE */;
/*!40014 SET FOREIGN_KEY_CHECKS=@OLD_FOREIGN_KEY_CHECKS */;
/*!40014 SET UNIQUE_CHECKS=@OLD_UNIQUE_CHECKS */;
/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
/*!40111 SET SQL_NOTES=@OLD_SQL_NOTES */;

-- Dump completed on 2017-11-28 17:26:11
