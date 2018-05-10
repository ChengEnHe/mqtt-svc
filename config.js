var config = {};

config.port = 8001;

//Authentication
config.auth = false;

//Base Url
config.baseurl = '/v1/';

//Mysql Database
config.database = 'cloudb';
config.dbHost = 'localhost';
config.test_dbHost = '210.242.93.31';
config.username = 'admin';
config.password = 'gemtek1234';
// config.username = 'root';
// config.password = '12345678';
config.table_prefix = 'api_';
config.dbPort = 3306;
//Key
config.tokenKey = 'gemtektoken';
config.generalKey = 'gemtek';
//Zone
config.timezone = 'Asia/Taipei';
//Debug
config.debug = true;
config.isLocalDB = true;
//Server
config.server = 'http://localhost:'+ config.port + '/';
//MQTT
config.mqttPort = 1883;
//Add device info default status
config.defaultStatus = 3;
module.exports = config;