-- phpMyAdmin SQL Dump
-- version 4.9.4
-- https://www.phpmyadmin.net/
--
-- Host: localhost:3306
-- Generation Time: Feb 28, 2021 at 12:24 PM
-- Server version: 5.7.23-23
-- PHP Version: 7.3.6

SET SQL_MODE = "NO_AUTO_VALUE_ON_ZERO";
SET AUTOCOMMIT = 0;
START TRANSACTION;
SET time_zone = "+00:00";


/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40101 SET NAMES utf8mb4 */;

--
-- Database: `u701366769_myfoodking`
--

-- --------------------------------------------------------

--
-- Table structure for table `address`
--

CREATE TABLE `address` (
  `id` int(11) NOT NULL,
  `uid` int(11) NOT NULL,
  `address` text NOT NULL,
  `house` varchar(255) NOT NULL,
  `landmark` varchar(255) NOT NULL,
  `lat` text NOT NULL,
  `lng` text NOT NULL,
  `title` varchar(255) NOT NULL,
  `pincode` text NOT NULL,
  `extra_field` text
) ENGINE=InnoDB DEFAULT CHARSET=utf8;

-- --------------------------------------------------------

--
-- Table structure for table `banners`
--

CREATE TABLE `banners` (
  `id` int(11) NOT NULL,
  `banner` text NOT NULL,
  `value` text NOT NULL,
  `type` tinyint(4) NOT NULL,
  `message` text NOT NULL,
  `status` tinyint(4) NOT NULL,
  `extra_field` text
) ENGINE=InnoDB DEFAULT CHARSET=utf8;

-- --------------------------------------------------------

--
-- Table structure for table `blogs`
--

CREATE TABLE `blogs` (
  `id` int(11) NOT NULL,
  `title` text NOT NULL,
  `cover` text NOT NULL,
  `content` text NOT NULL,
  `published` date NOT NULL,
  `status` tinyint(4) NOT NULL,
  `extra_field` text
) ENGINE=InnoDB DEFAULT CHARSET=utf8;

-- --------------------------------------------------------

--
-- Table structure for table `categories`
--

CREATE TABLE `categories` (
  `id` int(11) NOT NULL,
  `name` text NOT NULL,
  `restId` int(11) NOT NULL,
  `status` tinyint(4) NOT NULL,
  `extra_field` text
) ENGINE=InnoDB DEFAULT CHARSET=utf8;

-- --------------------------------------------------------

--
-- Table structure for table `chat_message`
--

CREATE TABLE `chat_message` (
  `id` int(11) NOT NULL,
  `room_id` text NOT NULL,
  `uid` text NOT NULL,
  `from_id` int(11) NOT NULL,
  `message` text NOT NULL,
  `message_type` varchar(20) NOT NULL,
  `status` tinyint(1) NOT NULL,
  `timestamp` timestamp NOT NULL DEFAULT CURRENT_TIMESTAMP ON UPDATE CURRENT_TIMESTAMP,
  `extra_field` text
) ENGINE=InnoDB DEFAULT CHARSET=utf8;

-- --------------------------------------------------------

--
-- Table structure for table `cities`
--

CREATE TABLE `cities` (
  `id` int(11) NOT NULL,
  `lat` text NOT NULL,
  `lng` text NOT NULL,
  `name` text NOT NULL,
  `status` tinyint(4) NOT NULL,
  `extra_field` text
) ENGINE=InnoDB DEFAULT CHARSET=utf8;

-- --------------------------------------------------------

--
-- Table structure for table `contacts`
--

CREATE TABLE `contacts` (
  `id` int(11) NOT NULL,
  `name` varchar(200) NOT NULL,
  `email` varchar(200) NOT NULL,
  `message` text NOT NULL,
  `date` date NOT NULL,
  `status` tinyint(4) NOT NULL,
  `extra_field` text
) ENGINE=InnoDB DEFAULT CHARSET=utf8;

-- --------------------------------------------------------

--
-- Table structure for table `drivers`
--

CREATE TABLE `drivers` (
  `id` int(11) NOT NULL,
  `first_name` varchar(255) NOT NULL,
  `last_name` varchar(255) NOT NULL,
  `email` text NOT NULL,
  `password` text NOT NULL,
  `gender` tinyint(4) NOT NULL COMMENT '1-male/0-female/2-others',
  `city` int(11) NOT NULL,
  `address` text NOT NULL,
  `lat` text NOT NULL,
  `lng` text NOT NULL,
  `country_code` text NOT NULL,
  `mobile` varchar(200) NOT NULL,
  `status` tinyint(4) NOT NULL,
  `cover` text NOT NULL,
  `current` varchar(255) NOT NULL DEFAULT 'active',
  `others` text NOT NULL,
  `date` date NOT NULL,
  `fcm_token` text NOT NULL,
  `extra_field` text
) ENGINE=MyISAM DEFAULT CHARSET=latin1;

-- --------------------------------------------------------

--
-- Table structure for table `favourite`
--

CREATE TABLE `favourite` (
  `id` int(11) NOT NULL,
  `uid` int(11) NOT NULL,
  `ids` text NOT NULL,
  `extra_field` text
) ENGINE=InnoDB DEFAULT CHARSET=latin1;

-- --------------------------------------------------------

--
-- Table structure for table `foods`
--

CREATE TABLE `foods` (
  `id` int(11) NOT NULL,
  `restId` int(11) NOT NULL,
  `cid` int(11) NOT NULL,
  `cover` text NOT NULL,
  `details` text NOT NULL,
  `price` double(10,2) NOT NULL,
  `rating` tinyint(1) NOT NULL,
  `veg` tinyint(4) NOT NULL,
  `name` text NOT NULL,
  `variations` text NOT NULL,
  `size` tinyint(4) NOT NULL,
  `status` tinyint(4) NOT NULL,
  `extra_field` text
) ENGINE=InnoDB DEFAULT CHARSET=utf8;

-- --------------------------------------------------------

--
-- Table structure for table `general`
--

CREATE TABLE `general` (
  `id` int(11) NOT NULL,
  `mobile` text NOT NULL,
  `email` text NOT NULL,
  `address` text NOT NULL,
  `city` text NOT NULL,
  `state` text NOT NULL,
  `zip` text NOT NULL,
  `country` text NOT NULL,
  `min` float(10,2) NOT NULL,
  `free` float(10,2) NOT NULL,
  `tax` float(10,2) NOT NULL,
  `shipping` text NOT NULL,
  `shippingPrice` float(10,2) NOT NULL,
  `allowDistance` float(10,2) NOT NULL,
  `facebook` text NOT NULL,
  `instagram` text NOT NULL,
  `twitter` text NOT NULL,
  `google_playstore` text NOT NULL,
  `apple_appstore` text NOT NULL,
  `web_footer` text NOT NULL,
  `extra_field` text
) ENGINE=InnoDB DEFAULT CHARSET=utf8;

--
-- Dumping data for table `general`
--

INSERT INTO `general` (`id`, `mobile`, `email`, `address`, `city`, `state`, `zip`, `country`, `min`, `free`, `tax`, `shipping`, `shippingPrice`, `allowDistance`, `facebook`, `instagram`, `twitter`, `google_playstore`, `apple_appstore`, `web_footer`, `extra_field`) VALUES
(1, '9426585554', 'rahuljograna007@gmail.com', 'Near Havamahal motor garage palitana', 'Palitana', 'Gujarat', '364270', 'India', 150.00, 300.00, 21.00, 'km', 7.00, 21.00, 'https://codecanyon.net/user/initappz/portfolio', 'https://codecanyon.net/user/initappz/portfolio', 'https://codecanyon.net/user/initappz/portfolio', 'https://codecanyon.net/user/initappz/portfolio', 'https://codecanyon.net/user/initappz/portfolio', 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Ipsa earum ad iusto sit repudiandae magni inventore mollitia fugit, velit ipsum eum optio officia ipsam unde saepe accusantium illum magnam ullam!', NULL);

-- --------------------------------------------------------

--
-- Table structure for table `lang`
--

CREATE TABLE `lang` (
  `id` int(11) NOT NULL,
  `name` text NOT NULL,
  `cover` text NOT NULL,
  `file` text NOT NULL,
  `is_default` tinyint(4) NOT NULL,
  `positions` tinyint(4) NOT NULL,
  `status` tinyint(4) NOT NULL,
  `extra_field` text
) ENGINE=MyISAM DEFAULT CHARSET=latin1;

-- --------------------------------------------------------

--
-- Table structure for table `logs`
--

CREATE TABLE `logs` (
  `id` int(11) NOT NULL,
  `url` text NOT NULL,
  `agent` text NOT NULL,
  `datetime` text NOT NULL,
  `extra_field` text
) ENGINE=InnoDB DEFAULT CHARSET=utf8;

-- --------------------------------------------------------

--
-- Table structure for table `manage`
--

CREATE TABLE `manage` (
  `id` int(11) NOT NULL,
  `app_close` tinyint(4) NOT NULL,
  `message` text NOT NULL,
  `date_time` text NOT NULL,
  `extra_field` text
) ENGINE=MyISAM DEFAULT CHARSET=latin1;

--
-- Dumping data for table `manage`
--

INSERT INTO `manage` (`id`, `app_close`, `message`, `date_time`, `extra_field`) VALUES
(1, 1, '', '2020-09-16 12:39:20', NULL);

-- --------------------------------------------------------

--
-- Table structure for table `markers`
--

CREATE TABLE `markers` (
  `id` int(11) NOT NULL,
  `name` varchar(60) NOT NULL,
  `address` varchar(80) NOT NULL,
  `lat` float(10,6) NOT NULL,
  `lng` float(10,6) NOT NULL,
  `extra_field` text
) ENGINE=MyISAM DEFAULT CHARSET=utf8;

-- --------------------------------------------------------

--
-- Table structure for table `offers`
--

CREATE TABLE `offers` (
  `id` int(11) NOT NULL,
  `available` text NOT NULL,
  `code` text NOT NULL,
  `details` text NOT NULL,
  `discount` int(20) NOT NULL,
  `expire` date NOT NULL,
  `min` text NOT NULL,
  `type` varchar(255) NOT NULL,
  `upto` text NOT NULL,
  `status` tinyint(4) NOT NULL,
  `extra_field` text
) ENGINE=InnoDB DEFAULT CHARSET=utf8;

-- --------------------------------------------------------

--
-- Table structure for table `orders`
--

CREATE TABLE `orders` (
  `id` int(11) NOT NULL,
  `address` text NOT NULL,
  `applied_coupon` tinyint(4) NOT NULL,
  `coupon_id` int(11) NOT NULL,
  `did` int(11) NOT NULL,
  `delivery_charge` double(10,2) NOT NULL,
  `discount` double(10,2) NOT NULL,
  `grand_total` double(10,2) NOT NULL,
  `orders` text NOT NULL,
  `paid` varchar(200) NOT NULL,
  `pay_method` text NOT NULL,
  `restId` int(11) NOT NULL,
  `serviceTax` double(10,2) NOT NULL,
  `status` varchar(200) NOT NULL,
  `time` datetime NOT NULL,
  `total` double(10,2) NOT NULL,
  `uid` int(11) NOT NULL,
  `notes` text NOT NULL,
  `extra_field` text
) ENGINE=InnoDB DEFAULT CHARSET=utf8;

-- --------------------------------------------------------

--
-- Table structure for table `otp`
--

CREATE TABLE `otp` (
  `id` int(11) NOT NULL,
  `otp` varchar(20) NOT NULL,
  `email` varchar(100) NOT NULL,
  `status` int(11) NOT NULL,
  `extra_field` text
) ENGINE=MyISAM DEFAULT CHARSET=latin1;

-- --------------------------------------------------------

--
-- Table structure for table `pages`
--

CREATE TABLE `pages` (
  `id` int(11) NOT NULL,
  `name` text NOT NULL,
  `content` text NOT NULL,
  `status` tinyint(4) NOT NULL,
  `extra_field` text
) ENGINE=MyISAM DEFAULT CHARSET=latin1;

--
-- Dumping data for table `pages`
--

INSERT INTO `pages` (`id`, `name`, `content`, `status`, `extra_field`) VALUES
(1, 'About Us', '<h2><strong>About us</strong></h2>\n\n<p>A foodie is a person who has an ardent or refined interest in food&nbsp;and who eats food not only out of hunger but due to their interest or hobby and is passionate about food. The terms &quot;gastronome&quot; and &quot;gourmet&quot; define the same thing, i.e. a person who enjoys food for pleasure.</p>\n\n<p>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry&#39;s standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.</p>\n\n<p>It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. The point of using Lorem Ipsum is that it has a more-or-less normal distribution of letters, as opposed to using &#39;Content here, content here&#39;, making it look like readable English. Many desktop publishing packages and web page editors now use Lorem Ipsum as their default model text, and a search for &#39;lorem ipsum&#39; will uncover many web sites still in their infancy. Various versions have evolved over the years, sometimes by accident, sometimes on purpose (injected humour and the like).</p>\n\n<p>&nbsp;</p>\n', 1, NULL),
(2, 'Privacy', '<h1>Privacy Policy for initappz</h1>\n\n<p>At Groceryee, accessible from https://initappz.com, one of our main priorities is the privacy of our visitors. This Privacy Policy document contains types of information that is collected and recorded by Groceryee and how we use it.</p>\n\n<p>If you have additional questions or require more information about our Privacy Policy, do not hesitate to contact us.</p>\n\n<p>This Privacy Policy applies only to our online activities and is valid for visitors to our website with regards to the information that they shared and/or collect in Groceryee. This policy is not applicable to any information collected offline or via channels other than this website.</p>\n\n<h2>Consent</h2>\n\n<p>By using our website, you hereby consent to our Privacy Policy and agree to its terms.</p>\n\n<h2>Information we collect</h2>\n\n<p>The personal information that you are asked to provide, and the reasons why you are asked to provide it, will be made clear to you at the point we ask you to provide your personal information.</p>\n\n<p>If you contact us directly, we may receive additional information about you such as your name, email address, phone number, the contents of the message and/or attachments you may send us, and any other information you may choose to provide.</p>\n\n<p>When you register for an Account, we may ask for your contact information, including items such as name, company name, address, email address, and telephone number.</p>\n\n<h2>How we use your information</h2>\n\n<p>We use the information we collect in various ways, including to:</p>\n\n<ul>\n	<li>Provide, operate, and maintain our webste</li>\n	<li>Improve, personalize, and expand our webste</li>\n	<li>Understand and analyze how you use our webste</li>\n	<li>Develop new products, services, features, and functionality</li>\n	<li>Communicate with you, either directly or through one of our partners, including for customer service, to provide you with updates and other information relating to the webste, and for marketing and promotional purposes</li>\n	<li>Send you emails</li>\n	<li>Find and prevent fraud</li>\n</ul>\n\n<h2>Log Files</h2>\n\n<p>Groceryee follows a standard procedure of using log files. These files log visitors when they visit websites. All hosting companies do this and a part of hosting services&#39; analytics. The information collected by log files include internet protocol (IP) addresses, browser type, Internet Service Provider (ISP), date and time stamp, referring/exit pages, and possibly the number of clicks. These are not linked to any information that is personally identifiable. The purpose of the information is for analyzing trends, administering the site, tracking users&#39; movement on the website, and gathering demographic information. Our Privacy Policy was created with the help of the&nbsp;<a href=\"https://www.privacypolicygenerator.info/\">Privacy Policy Generator</a>&nbsp;and the&nbsp;<a href=\"https://www.privacypolicyonline.com/privacy-policy-generator/\">Online Privacy Policy Generator</a>.</p>\n\n<h2>Cookies and Web Beacons</h2>\n\n<p>Like any other website, Groceryee uses &#39;cookies&#39;. These cookies are used to store information including visitors&#39; preferences, and the pages on the website that the visitor accessed or visited. The information is used to optimize the users&#39; experience by customizing our web page content based on visitors&#39; browser type and/or other information.</p>\n\n<p>For more general information on cookies, please read&nbsp;<a href=\"https://www.cookieconsent.com/what-are-cookies/\">&quot;What Are Cookies&quot;</a>.</p>\n\n<h2>Advertising Partners Privacy Policies</h2>\n\n<p>You may consult this list to find the Privacy Policy for each of the advertising partners of Groceryee.</p>\n\n<p>Third-party ad servers or ad networks uses technologies like cookies, JavaScript, or Web Beacons that are used in their respective advertisements and links that appear on Groceryee, which are sent directly to users&#39; browser. They automatically receive your IP address when this occurs. These technologies are used to measure the effectiveness of their advertising campaigns and/or to personalize the advertising content that you see on websites that you visit.</p>\n\n<p>Note that Groceryee has no access to or control over these cookies that are used by third-party advertisers.</p>\n\n<h2>Third Party Privacy Policies</h2>\n\n<p>Groceryee&#39;s Privacy Policy does not apply to other advertisers or websites. Thus, we are advising you to consult the respective Privacy Policies of these third-party ad servers for more detailed information. It may include their practices and instructions about how to opt-out of certain options.</p>\n\n<p>You can choose to disable cookies through your individual browser options. To know more detailed information about cookie management with specific web browsers, it can be found at the browsers&#39; respective websites.</p>\n\n<h2>CCPA Privacy Rights (Do Not Sell My Personal Information)</h2>\n\n<p>Under the CCPA, among other rights, California consumers have the right to:</p>\n\n<p>Request that a business that collects a consumer&#39;s personal data disclose the categories and specific pieces of personal data that a business has collected about consumers.</p>\n\n<p>Request that a business delete any personal data about the consumer that a business has collected.</p>\n\n<p>Request that a business that sells a consumer&#39;s personal data, not sell the consumer&#39;s personal data.</p>\n\n<p>If you make a request, we have one month to respond to you. If you would like to exercise any of these rights, please contact us.</p>\n\n<h2>GDPR Data Protection Rights</h2>\n\n<p>We would like to make sure you are fully aware of all of your data protection rights. Every user is entitled to the following:</p>\n\n<p>The right to access &acirc;&euro;&ldquo; You have the right to request copies of your personal data. We may charge you a small fee for this service.</p>\n\n<p>The right to rectification &acirc;&euro;&ldquo; You have the right to request that we correct any information you believe is inaccurate. You also have the right to request that we complete the information you believe is incomplete.</p>\n\n<p>The right to erasure &acirc;&euro;&ldquo; You have the right to request that we erase your personal data, under certain conditions.</p>\n\n<p>The right to restrict processing &acirc;&euro;&ldquo; You have the right to request that we restrict the processing of your personal data, under certain conditions.</p>\n\n<p>The right to object to processing &acirc;&euro;&ldquo; You have the right to object to our processing of your personal data, under certain conditions.</p>\n\n<p>The right to data portability &acirc;&euro;&ldquo; You have the right to request that we transfer the data that we have collected to another organization, or directly to you, under certain conditions.</p>\n\n<p>If you make a request, we have one month to respond to you. If you would like to exercise any of these rights, please contact us.</p>\n\n<h2>Children&#39;s Information</h2>\n\n<p>Another part of our priority is adding protection for children while using the internet. We encourage parents and guardians to observe, participate in, and/or monitor and guide their online activity.</p>\n\n<p>Groceryee does not knowingly collect any Personal Identifiable Information from children under the age of 13. If you think that your child provided this kind of information on our website, we strongly encourage you to contact us immediately and we will do our best efforts to promptly remove such information from our records.</p>\n', 1, NULL),
(3, 'Terms & Conditions', '<p>&lt;h2&gt;&lt;strong&gt;Terms and Conditions&lt;/strong&gt;&lt;/h2&gt;</p>\n\n<p>&lt;p&gt;Welcome to Initappz!&lt;/p&gt;</p>\n\n<p>&lt;p&gt;These terms and conditions outline the rules and regulations for the use of Groceryee&#39;s Website, located at https//initappz.com.&lt;/p&gt;</p>\n\n<p>&lt;p&gt;By accessing this website we assume you accept these terms and conditions. Do not continue to use Initappz if you do not agree to take all of the terms and conditions stated on this page.&lt;/p&gt;</p>\n\n<p>&lt;p&gt;The following terminology applies to these Terms and Conditions, Privacy Statement and Disclaimer Notice and all Agreements: &quot;Client&quot;, &quot;You&quot; and &quot;Your&quot; refers to you, the person log on this website and compliant to the Company&rsquo;s terms and conditions. &quot;The Company&quot;, &quot;Ourselves&quot;, &quot;We&quot;, &quot;Our&quot; and &quot;Us&quot;, refers to our Company. &quot;Party&quot;, &quot;Parties&quot;, or &quot;Us&quot;, refers to both the Client and ourselves. All terms refer to the offer, acceptance and consideration of payment necessary to undertake the process of our assistance to the Client in the most appropriate manner for the express purpose of meeting the Client&rsquo;s needs in respect of provision of the Company&rsquo;s stated services, in accordance with and subject to, prevailing law of Netherlands. Any use of the above terminology or other words in the singular, plural, capitalization and/or he/she or they, are taken as interchangeable and therefore as referring to same.&lt;/p&gt;</p>\n\n<p>&lt;h3&gt;&lt;strong&gt;Cookies&lt;/strong&gt;&lt;/h3&gt;</p>\n\n<p>&lt;p&gt;We employ the use of cookies. By accessing Initappz, you agreed to use cookies in agreement with the Groceryee&#39;s Privacy Policy. &lt;/p&gt;</p>\n\n<p>&lt;p&gt;Most interactive websites use cookies to let us retrieve the user&rsquo;s details for each visit. Cookies are used by our website to enable the functionality of certain areas to make it easier for people visiting our website. Some of our affiliate/advertising partners may also use cookies.&lt;/p&gt;</p>\n\n<p>&lt;h3&gt;&lt;strong&gt;License&lt;/strong&gt;&lt;/h3&gt;</p>\n\n<p>&lt;p&gt;Unless otherwise stated, Groceryee and/or its licensors own the intellectual property rights for all material on Initappz. All intellectual property rights are reserved. You may access this from Initappz for your own personal use subjected to restrictions set in these terms and conditions.&lt;/p&gt;</p>\n\n<p>&lt;p&gt;You must not:&lt;/p&gt;<br />\n&lt;ul&gt;<br />\n&nbsp; &nbsp; &lt;li&gt;Republish material from Initappz&lt;/li&gt;<br />\n&nbsp; &nbsp; &lt;li&gt;Sell, rent or sub-license material from Initappz&lt;/li&gt;<br />\n&nbsp; &nbsp; &lt;li&gt;Reproduce, duplicate or copy material from Initappz&lt;/li&gt;<br />\n&nbsp; &nbsp; &lt;li&gt;Redistribute content from Initappz&lt;/li&gt;<br />\n&lt;/ul&gt;</p>\n\n<p>&lt;p&gt;This Agreement shall begin on the date hereof. Our Terms and Conditions were created with the help of the &lt;a href=&quot;https://www.termsandconditionsgenerator.com&quot;&gt;Terms And Conditions Generator&lt;/a&gt; and the &lt;a href=&quot;https://www.generateprivacypolicy.com&quot;&gt;Privacy Policy Generator&lt;/a&gt;.&lt;/p&gt;</p>\n\n<p>&lt;p&gt;Parts of this website offer an opportunity for users to post and exchange opinions and information in certain areas of the website. Groceryee does not filter, edit, publish or review Comments prior to their presence on the website. Comments do not reflect the views and opinions of Groceryee,its agents and/or affiliates. Comments reflect the views and opinions of the person who post their views and opinions. To the extent permitted by applicable laws, Groceryee shall not be liable for the Comments or for any liability, damages or expenses caused and/or suffered as a result of any use of and/or posting of and/or appearance of the Comments on this website.&lt;/p&gt;</p>\n\n<p>&lt;p&gt;Groceryee reserves the right to monitor all Comments and to remove any Comments which can be considered inappropriate, offensive or causes breach of these Terms and Conditions.&lt;/p&gt;</p>\n\n<p>&lt;p&gt;You warrant and represent that:&lt;/p&gt;</p>\n\n<p>&lt;ul&gt;<br />\n&nbsp; &nbsp; &lt;li&gt;You are entitled to post the Comments on our website and have all necessary licenses and consents to do so;&lt;/li&gt;<br />\n&nbsp; &nbsp; &lt;li&gt;The Comments do not invade any intellectual property right, including without limitation copyright, patent or trademark of any third party;&lt;/li&gt;<br />\n&nbsp; &nbsp; &lt;li&gt;The Comments do not contain any defamatory, libelous, offensive, indecent or otherwise unlawful material which is an invasion of privacy&lt;/li&gt;<br />\n&nbsp; &nbsp; &lt;li&gt;The Comments will not be used to solicit or promote business or custom or present commercial activities or unlawful activity.&lt;/li&gt;<br />\n&lt;/ul&gt;</p>\n\n<p>&lt;p&gt;You hereby grant Groceryee a non-exclusive license to use, reproduce, edit and authorize others to use, reproduce and edit any of your Comments in any and all forms, formats or media.&lt;/p&gt;</p>\n\n<p>&lt;h3&gt;&lt;strong&gt;Hyperlinking to our Content&lt;/strong&gt;&lt;/h3&gt;</p>\n\n<p>&lt;p&gt;The following organizations may link to our Website without prior written approval:&lt;/p&gt;</p>\n\n<p>&lt;ul&gt;<br />\n&nbsp; &nbsp; &lt;li&gt;Government agencies;&lt;/li&gt;<br />\n&nbsp; &nbsp; &lt;li&gt;Search engines;&lt;/li&gt;<br />\n&nbsp; &nbsp; &lt;li&gt;News organizations;&lt;/li&gt;<br />\n&nbsp; &nbsp; &lt;li&gt;Online directory distributors may link to our Website in the same manner as they hyperlink to the Websites of other listed businesses; and&lt;/li&gt;<br />\n&nbsp; &nbsp; &lt;li&gt;System wide Accredited Businesses except soliciting non-profit organizations, charity shopping malls, and charity fundraising groups which may not hyperlink to our Web site.&lt;/li&gt;<br />\n&lt;/ul&gt;</p>\n\n<p>&lt;p&gt;These organizations may link to our home page, to publications or to other Website information so long as the link: (a) is not in any way deceptive; (b) does not falsely imply sponsorship, endorsement or approval of the linking party and its products and/or services; and (c) fits within the context of the linking party&rsquo;s site.&lt;/p&gt;</p>\n\n<p>&lt;p&gt;We may consider and approve other link requests from the following types of organizations:&lt;/p&gt;</p>\n\n<p>&lt;ul&gt;<br />\n&nbsp; &nbsp; &lt;li&gt;commonly-known consumer and/or business information sources;&lt;/li&gt;<br />\n&nbsp; &nbsp; &lt;li&gt;dot.com community sites;&lt;/li&gt;<br />\n&nbsp; &nbsp; &lt;li&gt;associations or other groups representing charities;&lt;/li&gt;<br />\n&nbsp; &nbsp; &lt;li&gt;online directory distributors;&lt;/li&gt;<br />\n&nbsp; &nbsp; &lt;li&gt;internet portals;&lt;/li&gt;<br />\n&nbsp; &nbsp; &lt;li&gt;accounting, law and consulting firms; and&lt;/li&gt;<br />\n&nbsp; &nbsp; &lt;li&gt;educational institutions and trade associations.&lt;/li&gt;<br />\n&lt;/ul&gt;</p>\n\n<p>&lt;p&gt;We will approve link requests from these organizations if we decide that: (a) the link would not make us look unfavorably to ourselves or to our accredited businesses; (b) the organization does not have any negative records with us; (c) the benefit to us from the visibility of the hyperlink compensates the absence of Groceryee; and (d) the link is in the context of general resource information.&lt;/p&gt;</p>\n\n<p>&lt;p&gt;These organizations may link to our home page so long as the link: (a) is not in any way deceptive; (b) does not falsely imply sponsorship, endorsement or approval of the linking party and its products or services; and (c) fits within the context of the linking party&rsquo;s site.&lt;/p&gt;</p>\n\n<p>&lt;p&gt;If you are one of the organizations listed in paragraph 2 above and are interested in linking to our website, you must inform us by sending an e-mail to Groceryee. Please include your name, your organization name, contact information as well as the URL of your site, a list of any URLs from which you intend to link to our Website, and a list of the URLs on our site to which you would like to link. Wait 2-3 weeks for a response.&lt;/p&gt;</p>\n\n<p>&lt;p&gt;Approved organizations may hyperlink to our Website as follows:&lt;/p&gt;</p>\n\n<p>&lt;ul&gt;<br />\n&nbsp; &nbsp; &lt;li&gt;By use of our corporate name; or&lt;/li&gt;<br />\n&nbsp; &nbsp; &lt;li&gt;By use of the uniform resource locator being linked to; or&lt;/li&gt;<br />\n&nbsp; &nbsp; &lt;li&gt;By use of any other description of our Website being linked to that makes sense within the context and format of content on the linking party&rsquo;s site.&lt;/li&gt;<br />\n&lt;/ul&gt;</p>\n\n<p>&lt;p&gt;No use of Groceryee&#39;s logo or other artwork will be allowed for linking absent a trademark license agreement.&lt;/p&gt;</p>\n\n<p>&lt;h3&gt;&lt;strong&gt;iFrames&lt;/strong&gt;&lt;/h3&gt;</p>\n\n<p>&lt;p&gt;Without prior approval and written permission, you may not create frames around our Webpages that alter in any way the visual presentation or appearance of our Website.&lt;/p&gt;</p>\n\n<p>&lt;h3&gt;&lt;strong&gt;Content Liability&lt;/strong&gt;&lt;/h3&gt;</p>\n\n<p>&lt;p&gt;We shall not be hold responsible for any content that appears on your Website. You agree to protect and defend us against all claims that is rising on your Website. No link(s) should appear on any Website that may be interpreted as libelous, obscene or criminal, or which infringes, otherwise violates, or advocates the infringement or other violation of, any third party rights.&lt;/p&gt;</p>\n\n<p>&lt;h3&gt;&lt;strong&gt;Your Privacy&lt;/strong&gt;&lt;/h3&gt;</p>\n\n<p>&lt;p&gt;Please read Privacy Policy&lt;/p&gt;</p>\n\n<p>&lt;h3&gt;&lt;strong&gt;Reservation of Rights&lt;/strong&gt;&lt;/h3&gt;</p>\n\n<p>&lt;p&gt;We reserve the right to request that you remove all links or any particular link to our Website. You approve to immediately remove all links to our Website upon request. We also reserve the right to amen these terms and conditions and it&rsquo;s linking policy at any time. By continuously linking to our Website, you agree to be bound to and follow these linking terms and conditions.&lt;/p&gt;</p>\n\n<p>&lt;h3&gt;&lt;strong&gt;Removal of links from our website&lt;/strong&gt;&lt;/h3&gt;</p>\n\n<p>&lt;p&gt;If you find any link on our Website that is offensive for any reason, you are free to contact and inform us any moment. We will consider requests to remove links but we are not obligated to or so or to respond to you directly.&lt;/p&gt;</p>\n\n<p>&lt;p&gt;We do not ensure that the information on this website is correct, we do not warrant its completeness or accuracy; nor do we promise to ensure that the website remains available or that the material on the website is kept up to date.&lt;/p&gt;</p>\n\n<p>&lt;h3&gt;&lt;strong&gt;Disclaimer&lt;/strong&gt;&lt;/h3&gt;</p>\n\n<p>&lt;p&gt;To the maximum extent permitted by applicable law, we exclude all representations, warranties and conditions relating to our website and the use of this website. Nothing in this disclaimer will:&lt;/p&gt;</p>\n\n<p>&lt;ul&gt;<br />\n&nbsp; &nbsp; &lt;li&gt;limit or exclude our or your liability for death or personal injury;&lt;/li&gt;<br />\n&nbsp; &nbsp; &lt;li&gt;limit or exclude our or your liability for fraud or fraudulent misrepresentation;&lt;/li&gt;<br />\n&nbsp; &nbsp; &lt;li&gt;limit any of our or your liabilities in any way that is not permitted under applicable law; or&lt;/li&gt;<br />\n&nbsp; &nbsp; &lt;li&gt;exclude any of our or your liabilities that may not be excluded under applicable law.&lt;/li&gt;<br />\n&lt;/ul&gt;</p>\n\n<p>&lt;p&gt;The limitations and prohibitions of liability set in this Section and elsewhere in this disclaimer: (a) are subject to the preceding paragraph; and (b) govern all liabilities arising under the disclaimer, including liabilities arising in contract, in tort and for breach of statutory duty.&lt;/p&gt;</p>\n\n<p>&lt;p&gt;As long as the website and the information and services on the website are provided free of charge, we will not be liable for any loss or damage of any nature.&lt;/p&gt;</p>\n', 1, NULL),
(4, 'Refund Policy', '<pre>\nRefund policy We&#39;re so convinced you&#39;ll absolutely love our products,\nthat we&#39;re willing to offer a 60 day risk-free money back guarantee.\nIf you are not satisfied with the product for any reason you can get a refund within 60 days of making a purchase.\nContacting us If you have any questions about our refund policy, please contact us. \nThis document was last updated on September 11, 2020\n</pre>\n', 1, NULL),
(5, 'Frequently Asked Questions', '<p><strong>Q: How should I format my tutorial proposal submission?</strong></p>\n\n<p>A: Each tutorial submission must present its course information through the SC submissions website, where a form will collect basic information (the tutorial&rsquo;s title, length, presenter information, and keywords). A sample form is available at the submissions website. Further details about the proposal, such as goals, targeted audience, and outline, should be written in a PDF and uploaded as an attachment to the submission form. The format for the PDF is documented in the How to Submit section of the submissions website. Submitters are particularly encouraged to include a draft of their full tutorial presentation in the Sample of Visual Material section of the submission form.</p>\n\n<p><strong>Q: Can I make changes to my tutorial materials after I have submitted them?</strong></p>\n\n<p>A: Tutorial presenters are generally expected to use the material submitted, with no changes. Minor extensions may be granted to enable a presenter to include more timely material, or to comply with conditions beyond the presenter&rsquo;s control (e.g., new decisions adopted by standards bodies). In such cases, the submitted material should be as close to a final version as possible, and clearly indicate where changes are anticipated. Also, the deadline for the submission of the material is only one week before the tutorial, so no major updates are expected.<br />\nChanges requested because a presenter had insufficient time to prepare and submit their materials cannot be accommodated.</p>\n\n<p><strong>Q: What are the expectations of tutorial presentations at the conference?</strong></p>\n\n<p>A: SC Tutorials are some of the most popular sessions at the conference, attracting several thousand participants. Tutorial abstracts must clearly present what lessons can be learned, and tutorial presenters are expected to deliver professional presentations and to treat tutorial attendees with respect. Each tutorial will be evaluated in detail by attendees after the session, and these evaluations will play a crucial role in the evaluation of future-year tutorial submissions.</p>\n\n<p><strong>Q: Q: Is the peer-review process double-blind?</strong></p>\n\n<p>A: No. Reviewers have access to the names of tutorial submitters. While Tutorials Committee members are named on the SC19 Planning Committee page, the names of the individuals reviewing each proposal are not made available to the authors.</p>\n\n<p><strong>Q: What are the guidelines for conflicts of interest (COI)?</strong></p>\n\n<p>A: A potential conflict of interest occurs when a person is involved in making a decision that:</p>\n\n<ol>\n	<li>\n	<p>Could result in that person, a close associate of that person, or that person&rsquo;s company or institution receiving significant financial gain, such as a contract or grant.</p>\n	</li>\n	<li>\n	<p>Could result in that person, or a close associate of that person, receiving significant professional recognition, such as an award or the selection of a paper, work, exhibit, or other type of submitted presentation.</p>\n	</li>\n</ol>\n\n<p>Authors and Tutorials Committee members will be given the opportunity to list any potential COIs during the submissions and review processes, respectively. The Tutorials Committee Chair will make every effort to avoid assignments that have a potential COI.</p>\n\n<p>According to the SC Conference you have a conflict of interest with:</p>\n\n<ul>\n	<li>Your PhD advisors, post-doctoral advisors, PhD students, and post-doctoral advisees forever;</li>\n	<li>Family relations by blood or marriage, or equivalent (e.g., a partner);</li>\n	<li>People with whom you collaborated in the past five years. Collaborators include: co-authors on an accepted/rejected/pending research paper; co-PIs on an accepted/pending grant; those who fund your research; researchers whom you fund; or researchers with whom you are actively collaborating;</li>\n	<li>Close personal friends or others with whom you believe a conflict of interest exists;</li>\n	<li>People who were employed by, or a student at, your primary institution(s) in the past five years, or people who are active candidates for employment at your primary institution(s).</li>\n</ul>\n\n<p>Note that &ldquo;service&rdquo; collaborations, such as writing a DOE, NSF, or DARPA report, or serving on a program committee, or serving on the editorial board of a journal do not inherently create a COI.</p>\n\n<p><strong>Q: What rooms and audio/video infrastructure are provided to each tutorial?</strong></p>\n\n<p>A: Tutorials are assigned either a classroom or theater room equipped with standard AV facilities (projector, microphone and podium, wireless lapel microphone or wireless handheld microphone, and projection screen).</p>\n\n<p><strong>Q: Will tutorials&rsquo; material be provided in a USB?</strong></p>\n\n<p>A: No. Tutorials&rsquo; materials will be available for download in a password protected repository.</p>\n', 1, NULL),
(6, 'Help', '<p><strong>Q: How should I format my tutorial proposal submission?</strong></p>\n\n<p>A: Each tutorial submission must present its course information through the SC submissions website, where a form will collect basic information (the tutorial&rsquo;s title, length, presenter information, and keywords). A sample form is available at the submissions website. Further details about the proposal, such as goals, targeted audience, and outline, should be written in a PDF and uploaded as an attachment to the submission form. The format for the PDF is documented in the How to Submit section of the submissions website. Submitters are particularly encouraged to include a draft of their full tutorial presentation in the Sample of Visual Material section of the submission form.</p>\n\n<p><strong>Q: Can I make changes to my tutorial materials after I have submitted them?</strong></p>\n\n<p>A: Tutorial presenters are generally expected to use the material submitted, with no changes. Minor extensions may be granted to enable a presenter to include more timely material, or to comply with conditions beyond the presenter&rsquo;s control (e.g., new decisions adopted by standards bodies). In such cases, the submitted material should be as close to a final version as possible, and clearly indicate where changes are anticipated. Also, the deadline for the submission of the material is only one week before the tutorial, so no major updates are expected.<br />\nChanges requested because a presenter had insufficient time to prepare and submit their materials cannot be accommodated.</p>\n\n<p><strong>Q: What are the expectations of tutorial presentations at the conference?</strong></p>\n\n<p>A: SC Tutorials are some of the most popular sessions at the conference, attracting several thousand participants. Tutorial abstracts must clearly present what lessons can be learned, and tutorial presenters are expected to deliver professional presentations and to treat tutorial attendees with respect. Each tutorial will be evaluated in detail by attendees after the session, and these evaluations will play a crucial role in the evaluation of future-year tutorial submissions.</p>\n\n<p><strong>Q: Q: Is the peer-review process double-blind?</strong></p>\n\n<p>A: No. Reviewers have access to the names of tutorial submitters. While Tutorials Committee members are named on the SC19 Planning Committee page, the names of the individuals reviewing each proposal are not made available to the authors.</p>\n\n<p><strong>Q: What are the guidelines for conflicts of interest (COI)?</strong></p>\n\n<p>A: A potential conflict of interest occurs when a person is involved in making a decision that:</p>\n\n<ol>\n	<li>\n	<p>Could result in that person, a close associate of that person, or that person&rsquo;s company or institution receiving significant financial gain, such as a contract or grant.</p>\n	</li>\n	<li>\n	<p>Could result in that person, or a close associate of that person, receiving significant professional recognition, such as an award or the selection of a paper, work, exhibit, or other type of submitted presentation.</p>\n	</li>\n</ol>\n\n<p>Authors and Tutorials Committee members will be given the opportunity to list any potential COIs during the submissions and review processes, respectively. The Tutorials Committee Chair will make every effort to avoid assignments that have a potential COI.</p>\n\n<p>According to the SC Conference you have a conflict of interest with:</p>\n\n<ul>\n	<li>Your PhD advisors, post-doctoral advisors, PhD students, and post-doctoral advisees forever;</li>\n	<li>Family relations by blood or marriage, or equivalent (e.g., a partner);</li>\n	<li>People with whom you collaborated in the past five years. Collaborators include: co-authors on an accepted/rejected/pending research paper; co-PIs on an accepted/pending grant; those who fund your research; researchers whom you fund; or researchers with whom you are actively collaborating;</li>\n	<li>Close personal friends or others with whom you believe a conflict of interest exists;</li>\n	<li>People who were employed by, or a student at, your primary institution(s) in the past five years, or people who are active candidates for employment at your primary institution(s).</li>\n</ul>\n\n<p>Note that &ldquo;service&rdquo; collaborations, such as writing a DOE, NSF, or DARPA report, or serving on a program committee, or serving on the editorial board of a journal do not inherently create a COI.</p>\n\n<p><strong>Q: What rooms and audio/video infrastructure are provided to each tutorial?</strong></p>\n\n<p>A: Tutorials are assigned either a classroom or theater room equipped with standard AV facilities (projector, microphone and podium, wireless lapel microphone or wireless handheld microphone, and projection screen).</p>\n\n<p><strong>Q: Will tutorials&rsquo; material be provided in a USB?</strong></p>\n\n<p>A: No. Tutorials&rsquo; materials will be available for download in a password protected repository.</p>\n', 1, NULL),
(7, 'Legal Mentions', '<h1>Privacy Policy for initappz</h1>\r\n\r\n<p>At Groceryee, accessible from https://initappz.com, one of our main priorities is the privacy of our visitors. This Privacy Policy document contains types of information that is collected and recorded by Groceryee and how we use it.</p>\r\n\r\n<p>If you have additional questions or require more information about our Privacy Policy, do not hesitate to contact us.</p>\r\n\r\n<p>This Privacy Policy applies only to our online activities and is valid for visitors to our website with regards to the information that they shared and/or collect in Groceryee. This policy is not applicable to any information collected offline or via channels other than this website.</p>\r\n\r\n<h2>Consent</h2>\r\n\r\n<p>By using our website, you hereby consent to our Privacy Policy and agree to its terms.</p>\r\n\r\n<h2>Information we collect</h2>\r\n\r\n<p>The personal information that you are asked to provide, and the reasons why you are asked to provide it, will be made clear to you at the point we ask you to provide your personal information.</p>\r\n\r\n<p>If you contact us directly, we may receive additional information about you such as your name, email address, phone number, the contents of the message and/or attachments you may send us, and any other information you may choose to provide.</p>\r\n\r\n<p>When you register for an Account, we may ask for your contact information, including items such as name, company name, address, email address, and telephone number.</p>\r\n\r\n<h2>How we use your information</h2>\r\n\r\n<p>We use the information we collect in various ways, including to:</p>\r\n\r\n<ul>\r\n	<li>Provide, operate, and maintain our webste</li>\r\n	<li>Improve, personalize, and expand our webste</li>\r\n	<li>Understand and analyze how you use our webste</li>\r\n	<li>Develop new products, services, features, and functionality</li>\r\n	<li>Communicate with you, either directly or through one of our partners, including for customer service, to provide you with updates and other information relating to the webste, and for marketing and promotional purposes</li>\r\n	<li>Send you emails</li>\r\n	<li>Find and prevent fraud</li>\r\n</ul>\r\n\r\n<h2>Log Files</h2>\r\n\r\n<p>Groceryee follows a standard procedure of using log files. These files log visitors when they visit websites. All hosting companies do this and a part of hosting services&#39; analytics. The information collected by log files include internet protocol (IP) addresses, browser type, Internet Service Provider (ISP), date and time stamp, referring/exit pages, and possibly the number of clicks. These are not linked to any information that is personally identifiable. The purpose of the information is for analyzing trends, administering the site, tracking users&#39; movement on the website, and gathering demographic information. Our Privacy Policy was created with the help of the&nbsp;<a href=\"https://www.privacypolicygenerator.info/\">Privacy Policy Generator</a>&nbsp;and the&nbsp;<a href=\"https://www.privacypolicyonline.com/privacy-policy-generator/\">Online Privacy Policy Generator</a>.</p>\r\n\r\n<h2>Cookies and Web Beacons</h2>\r\n\r\n<p>Like any other website, Groceryee uses &#39;cookies&#39;. These cookies are used to store information including visitors&#39; preferences, and the pages on the website that the visitor accessed or visited. The information is used to optimize the users&#39; experience by customizing our web page content based on visitors&#39; browser type and/or other information.</p>\r\n\r\n<p>For more general information on cookies, please read&nbsp;<a href=\"https://www.cookieconsent.com/what-are-cookies/\">&quot;What Are Cookies&quot;</a>.</p>\r\n\r\n<h2>Advertising Partners Privacy Policies</h2>\r\n\r\n<p>You may consult this list to find the Privacy Policy for each of the advertising partners of Groceryee.</p>\r\n\r\n<p>Third-party ad servers or ad networks uses technologies like cookies, JavaScript, or Web Beacons that are used in their respective advertisements and links that appear on Groceryee, which are sent directly to users&#39; browser. They automatically receive your IP address when this occurs. These technologies are used to measure the effectiveness of their advertising campaigns and/or to personalize the advertising content that you see on websites that you visit.</p>\r\n\r\n<p>Note that Groceryee has no access to or control over these cookies that are used by third-party advertisers.</p>\r\n\r\n<h2>Third Party Privacy Policies</h2>\r\n\r\n<p>Groceryee&#39;s Privacy Policy does not apply to other advertisers or websites. Thus, we are advising you to consult the respective Privacy Policies of these third-party ad servers for more detailed information. It may include their practices and instructions about how to opt-out of certain options.</p>\r\n\r\n<p>You can choose to disable cookies through your individual browser options. To know more detailed information about cookie management with specific web browsers, it can be found at the browsers&#39; respective websites.</p>\r\n\r\n<h2>CCPA Privacy Rights (Do Not Sell My Personal Information)</h2>\r\n\r\n<p>Under the CCPA, among other rights, California consumers have the right to:</p>\r\n\r\n<p>Request that a business that collects a consumer&#39;s personal data disclose the categories and specific pieces of personal data that a business has collected about consumers.</p>\r\n\r\n<p>Request that a business delete any personal data about the consumer that a business has collected.</p>\r\n\r\n<p>Request that a business that sells a consumer&#39;s personal data, not sell the consumer&#39;s personal data.</p>\r\n\r\n<p>If you make a request, we have one month to respond to you. If you would like to exercise any of these rights, please contact us.</p>\r\n\r\n<h2>GDPR Data Protection Rights</h2>\r\n\r\n<p>We would like to make sure you are fully aware of all of your data protection rights. Every user is entitled to the following:</p>\r\n\r\n<p>The right to access &acirc;&euro;&ldquo; You have the right to request copies of your personal data. We may charge you a small fee for this service.</p>\r\n\r\n<p>The right to rectification &acirc;&euro;&ldquo; You have the right to request that we correct any information you believe is inaccurate. You also have the right to request that we complete the information you believe is incomplete.</p>\r\n\r\n<p>The right to erasure &acirc;&euro;&ldquo; You have the right to request that we erase your personal data, under certain conditions.</p>\r\n\r\n<p>The right to restrict processing &acirc;&euro;&ldquo; You have the right to request that we restrict the processing of your personal data, under certain conditions.</p>\r\n\r\n<p>The right to object to processing &acirc;&euro;&ldquo; You have the right to object to our processing of your personal data, under certain conditions.</p>\r\n\r\n<p>The right to data portability &acirc;&euro;&ldquo; You have the right to request that we transfer the data that we have collected to another organization, or directly to you, under certain conditions.</p>\r\n\r\n<p>If you make a request, we have one month to respond to you. If you would like to exercise any of these rights, please contact us.</p>\r\n\r\n<h2>Children&#39;s Information</h2>\r\n\r\n<p>Another part of our priority is adding protection for children while using the internet. We encourage parents and guardians to observe, participate in, and/or monitor and guide their online activity.</p>\r\n\r\n<p>Groceryee does not knowingly collect any Personal Identifiable Information from children under the age of 13. If you think that your child provided this kind of information on our website, we strongly encourage you to contact us immediately and we will do our best efforts to promptly remove such information from our records.</p>\r\n', 1, NULL),
(8, 'Cookies', '<h1>Cookies Policy</h1>\r\n<p>Last updated: December 22, 2020</p>\r\n<p>This Cookies Policy explains what Cookies are and how We use them. You should read this policy so You can understand what type of cookies We use, or the information We collect using Cookies and how that information is used. This Cookies Policy has been created with the help of the <a href=\"https://www.termsfeed.com/cookies-policy-generator/\" target=\"_blank\">Cookies Policy Generator</a>.</p>\r\n<p>Cookies do not typically contain any information that personally identifies a user, but personal information that we store about You may be linked to the information stored in and obtained from Cookies. For further information on how We use, store and keep your personal data secure, see our Privacy Policy.</p>\r\n<p>We do not store sensitive personal information, such as mailing addresses, account passwords, etc. in the Cookies We use.</p>\r\n<h1>Interpretation and Definitions</h1>\r\n<h2>Interpretation</h2>\r\n<p>The words of which the initial letter is capitalized have meanings defined under the following conditions. The following definitions shall have the same meaning regardless of whether they appear in singular or in plural.</p>\r\n<h2>Definitions</h2>\r\n<p>For the purposes of this Cookies Policy:</p>\r\n<ul>\r\n<li><strong>Company</strong> (referred to as either &quot;the Company&quot;, &quot;We&quot;, &quot;Us&quot; or &quot;Our&quot; in this Cookies Policy) refers to Foodies.</li>\r\n<li><strong>Cookies</strong> means small files that are placed on Your computer, mobile device or any other device by a website, containing details of your browsing history on that website among its many uses.</li>\r\n<li><strong>Website</strong> refers to Foodies, accessible from <a href=\"http://foodies-web.initstore.net/\" rel=\"external nofollow noopener\" target=\"_blank\">http://foodies-web.initstore.net/</a></li>\r\n<li><strong>You</strong> means the individual accessing or using the Website, or a company, or any legal entity on behalf of which such individual is accessing or using the Website, as applicable.</li>\r\n</ul>\r\n<h1>The use of the Cookies</h1>\r\n<h2>Type of Cookies We Use</h2>\r\n<p>Cookies can be &quot;Persistent&quot; or &quot;Session&quot; Cookies. Persistent Cookies remain on your personal computer or mobile device when You go offline, while Session Cookies are deleted as soon as You close your web browser.</p>\r\n<p>We use both session and persistent Cookies for the purposes set out below:</p>\r\n<ul>\r\n<li>\r\n<p><strong>Necessary / Essential Cookies</strong></p>\r\n<p>Type: Session Cookies</p>\r\n<p>Administered by: Us</p>\r\n<p>Purpose: These Cookies are essential to provide You with services available through the Website and to enable You to use some of its features. They help to authenticate users and prevent fraudulent use of user accounts. Without these Cookies, the services that You have asked for cannot be provided, and We only use these Cookies to provide You with those services.</p>\r\n</li>\r\n<li>\r\n<p><strong>Functionality Cookies</strong></p>\r\n<p>Type: Persistent Cookies</p>\r\n<p>Administered by: Us</p>\r\n<p>Purpose: These Cookies allow us to remember choices You make when You use the Website, such as remembering your login details or language preference. The purpose of these Cookies is to provide You with a more personal experience and to avoid You having to re-enter your preferences every time You use the Website.</p>\r\n</li>\r\n</ul>\r\n<h2>Your Choices Regarding Cookies</h2>\r\n<p>If You prefer to avoid the use of Cookies on the Website, first You must disable the use of Cookies in your browser and then delete the Cookies saved in your browser associated with this website. You may use this option for preventing the use of Cookies at any time.</p>\r\n<p>If You do not accept Our Cookies, You may experience some inconvenience in your use of the Website and some features may not function properly.</p>\r\n<p>If You\'d like to delete Cookies or instruct your web browser to delete or refuse Cookies, please visit the help pages of your web browser.</p>\r\n<ul>\r\n<li>\r\n<p>For the Chrome web browser, please visit this page from Google: <a href=\"https://support.google.com/accounts/answer/32050\" rel=\"external nofollow noopener\" target=\"_blank\">https://support.google.com/accounts/answer/32050</a></p>\r\n</li>\r\n<li>\r\n<p>For the Internet Explorer web browser, please visit this page from Microsoft: <a href=\"http://support.microsoft.com/kb/278835\" rel=\"external nofollow noopener\" target=\"_blank\">http://support.microsoft.com/kb/278835</a></p>\r\n</li>\r\n<li>\r\n<p>For the Firefox web browser, please visit this page from Mozilla: <a href=\"https://support.mozilla.org/en-US/kb/delete-cookies-remove-info-websites-stored\" rel=\"external nofollow noopener\" target=\"_blank\">https://support.mozilla.org/en-US/kb/delete-cookies-remove-info-websites-stored</a></p>\r\n</li>\r\n<li>\r\n<p>For the Safari web browser, please visit this page from Apple: <a href=\"https://support.apple.com/guide/safari/manage-cookies-and-website-data-sfri11471/mac\" rel=\"external nofollow noopener\" target=\"_blank\">https://support.apple.com/guide/safari/manage-cookies-and-website-data-sfri11471/mac</a></p>\r\n</li>\r\n</ul>\r\n<p>For any other web browser, please visit your web browser\'s official web pages.</p>\r\n<h2>More Information about Cookies</h2>\r\n<p>You can learn more about cookies here: <a href=\"https://www.termsfeed.com/blog/cookies/\" target=\"_blank\">All About Cookies by TermsFeed</a>.</p>\r\n<h2>Contact Us</h2>\r\n<p>If you have any questions about this Cookies Policy, You can contact us:</p>\r\n<ul>\r\n<li>\r\n<p>By email: info@initappz.com</p>\r\n</li>\r\n<li>\r\n<p>By visiting this page on our website: <a href=\"https://initappz.com\" rel=\"external nofollow noopener\" target=\"_blank\">https://initappz.com</a></p>\r\n</li>\r\n<li>\r\n<p>By phone number: 9426585554</p>\r\n</li>\r\n<li>\r\n<p>By mail: NEAR HAVAMAHEL MOTOR GARAGE STAFF QUARTER</p>\r\n</li>\r\n</ul>', 1, NULL);

-- --------------------------------------------------------

--
-- Table structure for table `payments`
--

CREATE TABLE `payments` (
  `id` int(11) NOT NULL,
  `name` text NOT NULL,
  `env` tinyint(4) NOT NULL,
  `creds` text NOT NULL,
  `status` tinyint(4) NOT NULL,
  `extra_field` text
) ENGINE=InnoDB DEFAULT CHARSET=utf8;

--
-- Dumping data for table `payments`
--

INSERT INTO `payments` (`id`, `name`, `env`, `creds`, `status`, `extra_field`) VALUES
(1, 'Stripe', 1, '{\"test\":\"test\",\"live\":\"test\",\"code\":\"INR\"}', 1, NULL),
(2, 'COD', 1, 'cod', 1, NULL),
(3, 'PayPal', 0, '{\"test\":\"test-TsYGTtCjFg\",\"live\":\"test-TsYGTtCjFg\",\"code\":\"USD\"}', 1, NULL),
(4, 'RazorPay', 1, '{\"test\":\"test\",\"live\":\"test\",\"code\":\"INR\"}', 1, NULL),
(5, 'PayTM', 0, '{\"id\":\"test\",\"key\":\"test\",\"code\":\"INR\"}', 1, NULL),
(6, 'InstaMojo', 0, '{\"key\":\"test\",\"token\":\"test\",\"code\":\"INR\"}', 1, NULL),
(7, 'PayStack', 1, '{\"sk\":\"test\",\"pk\":\"test\",\"code\":\"NGN\"}', 1, NULL),
(8, 'Flutterwave', 1, '{\"pk\":\"FLWPUBK_TEST-test-X\",\"code\":\"NGN\"}', 1, NULL);

-- --------------------------------------------------------

--
-- Table structure for table `popup`
--

CREATE TABLE `popup` (
  `id` int(11) NOT NULL,
  `shown` tinyint(4) NOT NULL,
  `message` text NOT NULL,
  `date_time` text NOT NULL,
  `extra_field` text
) ENGINE=InnoDB DEFAULT CHARSET=latin1;

--
-- Dumping data for table `popup`
--

INSERT INTO `popup` (`id`, `shown`, `message`, `date_time`, `extra_field`) VALUES
(1, 1, 'Get upto 30% off on fruits and free delivery over 100$ purchase', '2020-09-03 10:16:84', NULL);

-- --------------------------------------------------------

--
-- Table structure for table `rating`
--

CREATE TABLE `rating` (
  `id` int(11) NOT NULL,
  `uid` int(11) NOT NULL,
  `pid` int(11) NOT NULL,
  `did` int(11) NOT NULL,
  `sid` int(11) NOT NULL,
  `rate` int(11) NOT NULL,
  `msg` text NOT NULL,
  `way` text NOT NULL,
  `status` tinyint(4) NOT NULL,
  `timestamp` date NOT NULL,
  `extra_field` text
) ENGINE=InnoDB DEFAULT CHARSET=latin1;

-- --------------------------------------------------------

--
-- Table structure for table `reviews`
--

CREATE TABLE `reviews` (
  `id` int(11) NOT NULL,
  `cover` text NOT NULL,
  `descriptions` text NOT NULL,
  `rate` int(11) NOT NULL,
  `restId` int(11) NOT NULL,
  `uid` int(11) NOT NULL,
  `extra_field` text
) ENGINE=InnoDB DEFAULT CHARSET=utf8;

-- --------------------------------------------------------

--
-- Table structure for table `settings`
--

CREATE TABLE `settings` (
  `id` int(11) NOT NULL,
  `currencySymbol` text NOT NULL,
  `currencySide` varchar(20) NOT NULL,
  `appDirection` varchar(20) NOT NULL,
  `logo` text NOT NULL,
  `twillo` tinyint(4) NOT NULL,
  `creds` text NOT NULL,
  `delivery` tinyint(4) NOT NULL,
  `home_ui` tinyint(4) NOT NULL,
  `reset_pwd` tinyint(4) NOT NULL DEFAULT '0',
  `user_login` tinyint(4) NOT NULL,
  `store_login` tinyint(4) NOT NULL,
  `driver_login` tinyint(4) NOT NULL,
  `web_login` int(11) NOT NULL,
  `driver_assignments` tinyint(4) NOT NULL,
  `extra_field` text
) ENGINE=InnoDB DEFAULT CHARSET=utf8;

--
-- Dumping data for table `settings`
--

INSERT INTO `settings` (`id`, `currencySymbol`, `currencySide`, `appDirection`, `logo`, `twillo`, `creds`, `delivery`, `home_ui`, `reset_pwd`, `user_login`, `store_login`, `driver_login`, `web_login`, `driver_assignments`, `extra_field`) VALUES
(1, '$', 'left', 'ltr', 'icon.png', 1, '{\"sid\":\"test\",\"token\":\"test\",\"from\":\"trest\"}', 0, 1, 0, 0, 0, 0, 0, 0, NULL);

-- --------------------------------------------------------

--
-- Table structure for table `store`
--

CREATE TABLE `store` (
  `id` int(11) NOT NULL,
  `uid` int(11) NOT NULL,
  `name` varchar(255) NOT NULL,
  `mobile` varchar(255) NOT NULL,
  `lat` text NOT NULL,
  `lng` text NOT NULL,
  `verified` tinyint(4) NOT NULL,
  `address` text NOT NULL,
  `descriptions` text NOT NULL,
  `images` text NOT NULL,
  `cover` text NOT NULL,
  `status` tinyint(4) NOT NULL,
  `commission` double NOT NULL DEFAULT '5',
  `open_time` time NOT NULL,
  `close_time` time NOT NULL,
  `isClosed` tinyint(4) NOT NULL,
  `certificate_url` varchar(255) NOT NULL,
  `certificate_type` varchar(255) NOT NULL,
  `rating` float NOT NULL,
  `total_rating` int(11) NOT NULL,
  `cid` int(11) NOT NULL,
  `cusine` text NOT NULL,
  `time` text NOT NULL,
  `dish` text NOT NULL,
  `extra_field` text
) ENGINE=InnoDB DEFAULT CHARSET=utf8;

-- --------------------------------------------------------

--
-- Table structure for table `users`
--

CREATE TABLE `users` (
  `id` int(11) NOT NULL,
  `first_name` varchar(255) NOT NULL,
  `last_name` varchar(255) NOT NULL,
  `email` varchar(255) NOT NULL,
  `password` varchar(255) NOT NULL,
  `gender` tinyint(4) NOT NULL COMMENT '1-male/0-female/2-others',
  `type` text NOT NULL,
  `status` tinyint(4) NOT NULL,
  `lat` text NOT NULL,
  `lng` text NOT NULL,
  `cover` varchar(255) NOT NULL,
  `country_code` text NOT NULL,
  `mobile` varchar(200) NOT NULL,
  `verified` tinyint(4) NOT NULL,
  `fcm_token` varchar(255) NOT NULL,
  `others` text NOT NULL,
  `date` date NOT NULL,
  `stripe_key` text NOT NULL,
  `extra_field` text
) ENGINE=InnoDB DEFAULT CHARSET=utf8;

--
-- Indexes for dumped tables
--

--
-- Indexes for table `address`
--
ALTER TABLE `address`
  ADD PRIMARY KEY (`id`);

--
-- Indexes for table `banners`
--
ALTER TABLE `banners`
  ADD PRIMARY KEY (`id`);

--
-- Indexes for table `blogs`
--
ALTER TABLE `blogs`
  ADD PRIMARY KEY (`id`);

--
-- Indexes for table `categories`
--
ALTER TABLE `categories`
  ADD PRIMARY KEY (`id`);

--
-- Indexes for table `chat_message`
--
ALTER TABLE `chat_message`
  ADD PRIMARY KEY (`id`),
  ADD KEY `reciver_id` (`from_id`);

--
-- Indexes for table `cities`
--
ALTER TABLE `cities`
  ADD PRIMARY KEY (`id`);

--
-- Indexes for table `contacts`
--
ALTER TABLE `contacts`
  ADD PRIMARY KEY (`id`);

--
-- Indexes for table `drivers`
--
ALTER TABLE `drivers`
  ADD PRIMARY KEY (`id`);

--
-- Indexes for table `favourite`
--
ALTER TABLE `favourite`
  ADD PRIMARY KEY (`id`);

--
-- Indexes for table `foods`
--
ALTER TABLE `foods`
  ADD PRIMARY KEY (`id`);

--
-- Indexes for table `general`
--
ALTER TABLE `general`
  ADD PRIMARY KEY (`id`);

--
-- Indexes for table `lang`
--
ALTER TABLE `lang`
  ADD PRIMARY KEY (`id`);

--
-- Indexes for table `logs`
--
ALTER TABLE `logs`
  ADD PRIMARY KEY (`id`);

--
-- Indexes for table `manage`
--
ALTER TABLE `manage`
  ADD PRIMARY KEY (`id`);

--
-- Indexes for table `markers`
--
ALTER TABLE `markers`
  ADD PRIMARY KEY (`id`);

--
-- Indexes for table `offers`
--
ALTER TABLE `offers`
  ADD PRIMARY KEY (`id`);

--
-- Indexes for table `orders`
--
ALTER TABLE `orders`
  ADD PRIMARY KEY (`id`);

--
-- Indexes for table `otp`
--
ALTER TABLE `otp`
  ADD PRIMARY KEY (`id`);

--
-- Indexes for table `pages`
--
ALTER TABLE `pages`
  ADD PRIMARY KEY (`id`);

--
-- Indexes for table `payments`
--
ALTER TABLE `payments`
  ADD PRIMARY KEY (`id`);

--
-- Indexes for table `popup`
--
ALTER TABLE `popup`
  ADD PRIMARY KEY (`id`);

--
-- Indexes for table `rating`
--
ALTER TABLE `rating`
  ADD PRIMARY KEY (`id`);

--
-- Indexes for table `reviews`
--
ALTER TABLE `reviews`
  ADD PRIMARY KEY (`id`);

--
-- Indexes for table `settings`
--
ALTER TABLE `settings`
  ADD PRIMARY KEY (`id`);

--
-- Indexes for table `store`
--
ALTER TABLE `store`
  ADD PRIMARY KEY (`id`);

--
-- Indexes for table `users`
--
ALTER TABLE `users`
  ADD PRIMARY KEY (`id`);

--
-- AUTO_INCREMENT for dumped tables
--

--
-- AUTO_INCREMENT for table `address`
--
ALTER TABLE `address`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT;

--
-- AUTO_INCREMENT for table `banners`
--
ALTER TABLE `banners`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT;

--
-- AUTO_INCREMENT for table `blogs`
--
ALTER TABLE `blogs`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT;

--
-- AUTO_INCREMENT for table `categories`
--
ALTER TABLE `categories`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT;

--
-- AUTO_INCREMENT for table `chat_message`
--
ALTER TABLE `chat_message`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT;

--
-- AUTO_INCREMENT for table `cities`
--
ALTER TABLE `cities`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT;

--
-- AUTO_INCREMENT for table `contacts`
--
ALTER TABLE `contacts`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT;

--
-- AUTO_INCREMENT for table `drivers`
--
ALTER TABLE `drivers`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT;

--
-- AUTO_INCREMENT for table `favourite`
--
ALTER TABLE `favourite`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT;

--
-- AUTO_INCREMENT for table `foods`
--
ALTER TABLE `foods`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT;

--
-- AUTO_INCREMENT for table `general`
--
ALTER TABLE `general`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=2;

--
-- AUTO_INCREMENT for table `lang`
--
ALTER TABLE `lang`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT;

--
-- AUTO_INCREMENT for table `logs`
--
ALTER TABLE `logs`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT;

--
-- AUTO_INCREMENT for table `manage`
--
ALTER TABLE `manage`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=2;

--
-- AUTO_INCREMENT for table `markers`
--
ALTER TABLE `markers`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT;

--
-- AUTO_INCREMENT for table `offers`
--
ALTER TABLE `offers`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT;

--
-- AUTO_INCREMENT for table `orders`
--
ALTER TABLE `orders`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT;

--
-- AUTO_INCREMENT for table `otp`
--
ALTER TABLE `otp`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT;

--
-- AUTO_INCREMENT for table `pages`
--
ALTER TABLE `pages`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=9;

--
-- AUTO_INCREMENT for table `payments`
--
ALTER TABLE `payments`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=9;

--
-- AUTO_INCREMENT for table `popup`
--
ALTER TABLE `popup`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=2;

--
-- AUTO_INCREMENT for table `rating`
--
ALTER TABLE `rating`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT;

--
-- AUTO_INCREMENT for table `reviews`
--
ALTER TABLE `reviews`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT;

--
-- AUTO_INCREMENT for table `settings`
--
ALTER TABLE `settings`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=2;

--
-- AUTO_INCREMENT for table `store`
--
ALTER TABLE `store`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT;

--
-- AUTO_INCREMENT for table `users`
--
ALTER TABLE `users`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT;
COMMIT;

/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
