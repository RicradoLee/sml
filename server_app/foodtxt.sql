SET NAMES UTF8;
DROP DATABASE IF EXISTS foodtxt;
CREATE DATABASE foodtxt CHARSET=UTF8;
USE foodtxt;
#个人中心表
CREATE TABLE personal_center(
	pid TINYINT PRIMARY KEY AUTO_INCREMENT, 
	pname VARCHAR(12),
	pwd VARCHAR(16),
	pemail VARCHAR(16),
	phone CHAR(11),
	pgender  BOOL,#1-男 0-女
	pscore INT#积分 等级 DEFAULT(0)
);
INSERT INTO personal_center VALUES
(1,'测试1','huanghua','286570570@qq.com','18519182257',NULL,127),
(2,'测试2','ceshi2','121313133@qq.com','18458024694',NULL,NULL),
(3,'测试3','ceshi3','131341424@qq.com','18072481854',NULL,NULL);

#菜单表
CREATE TABLE menu(
	mid TINYINT PRIMARY KEY AUTO_INCREMENT,
	materials VARCHAR(12),#原料
	mtitle VARCHAR(18),
	mtxt VARCHAR(10000),
	mdate DATE
);
INSERT INTO menu VALUES
(1,'测试1','测试1','测试1','1990-5-5'),
(2,'测试2','测试2','测试2','1990-5-5'),
(3,'测试3','测试3','测试3','1990-5-5');