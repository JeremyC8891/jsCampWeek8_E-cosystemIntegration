// ========================================
// API 設定
// ========================================

// 載入環境變數
require('dotenv').config({ path: '.env' });

// API 設定（從 .env 讀取）
const API_PATH = process.env.API_PATH;
const BASE_URL = process.env.BASE_URL;
const ADMIN_TOKEN = process.env.ADMIN_TOKEN;

module.exports = {
  API_PATH,
  BASE_URL,
  ADMIN_TOKEN
};
