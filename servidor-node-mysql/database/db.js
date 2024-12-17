import { Sequelize } from 'sequelize';
import MyConfig from './config.js';

// Option 3: Passing parameters separately (other dialects)
const db = new Sequelize(
    MyConfig.mysql.database,
    MyConfig.mysql.user, 
    MyConfig.mysql.password, {
    host: MyConfig.mysql.host,
    dialect: 'mysql', /* one of 'mysql' | 'postgres' | 'sqlite' | 'mariadb' | 'mssql' | 'db2' | 'snowflake' | 'oracle' */
    pool: {
        max: 5,
        idle: 30000,
        acquire: 60000,
    },
});

export default db;