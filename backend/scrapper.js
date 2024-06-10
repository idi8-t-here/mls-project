// scraper.js
const axios = require('axios');
const cheerio = require('cheerio');
const fs = require('fs');

const baseUrl = 'https://ethiopiarealty.com/real-estate-apartment-for-sale/';

async function scrapePage(url) {
  try {
    const response = await axios.get(url);
    const html = response.data;
    const $ = cheerio.load(html);

    const scrapedData = [];

    $('.item-body').each((index, element) => {
      const title = $(element).find('h2').text().trim();
      const status = $(element).find('.labels-wrap a').text().trim();
      const address = $(element).find('address').text().trim();
      const price = $(element).find('.item-price-wrap li').text().trim();
      const bedrooms = $(element).find('.item-amenities .h-beds span').text().trim();
      const square = $(element).find('.item-amenities .h-baths span').text().trim();
      const bathrooms = $(element).find('.item-amenities .h-area span').text().trim();
      const image = $(element).find('img').attr('src');

      const scrapedAt = new Date().toISOString();

      const articleData = { title, status, price, bedrooms, square, bathrooms, scrapedAt, address, image };
      scrapedData.push(articleData);
    });

    return scrapedData;
  } catch (error) {
    console.error('Error scraping page:', error);
    return [];
  }
}

function readPreviousData(jsonFilePath) {
  try {
    const data = fs.readFileSync(jsonFilePath, 'utf8');
    return JSON.parse(data);
  } catch (error) {
    console.error('Error reading previous data:', error);
    return [];
  }
}

function writeChangedData(changedData, jsonFilePath) {
  try {
    fs.writeFileSync(jsonFilePath, JSON.stringify(changedData, null, 2));
    console.log(`Changed data saved to ${jsonFilePath}`);
  } catch (error) {
    console.error('Error writing changed data:', error);
  }
}

function compareData(newScrapedData, previousData) {
  const changedData = [];
  newScrapedData.forEach(newItem => {
    const matchingItem = previousData.find(item =>
      item.title === newItem.title &&
      item.status === newItem.status &&
      item.address === newItem.address &&
      item.price === newItem.price &&
      item.bedrooms === newItem.bedrooms &&
      item.square === newItem.square &&
      item.bathrooms === newItem.bathrooms
    );
    if (matchingItem && matchingItem.price !== newItem.price) {
      const changeInfo = {
        previousInfo: matchingItem,
        currentInfo: newItem
      };
      changedData.push({ ...newItem, changeInfo });
    }
  });
  return changedData;
}

async function scrapePages(startPage, endPage) {
  try {
    const allScrapedData = [];
    for (let page = startPage; page <= endPage; page++) {
      const url = `${baseUrl}${page}`;
      const scrapedData = await scrapePage(url);
      allScrapedData.push(...scrapedData);
    }

    return allScrapedData;
  } catch (error) {
    console.error('Error scraping pages:', error);
    return [];
  }
}

function writeScrapedData(scrapedData, jsonFilePath) {
  try {
    fs.writeFileSync(jsonFilePath, JSON.stringify(scrapedData, null, 2));
    console.log(`Scraped data saved to ${jsonFilePath}`);
  } catch (error) {
    console.error('Error writing scraped data:', error);
  }
}

module.exports = { scrapeWebsite: async function() {
  const previousDataFilePath = 'scraped_data.json';
  const previousData = readPreviousData(previousDataFilePath);

  const startPage = 1; 
  const endPage = 30;   
  let scrapedData;
  try {
    scrapedData = await scrapePages(startPage, endPage);
  } catch (error) {
    console.error('Error:', error);
  }
  const changedData = compareData(scrapedData, previousData);

  if (changedData.length > 0) {
    const changedDataFilePath = 'changed_data.json';
    writeChangedData(changedData, changedDataFilePath);
    writeScrapedData(scrapedData, previousDataFilePath);
    return "changes detected"
  } else {
    writeScrapedData(scrapedData, previousDataFilePath);
    console.log('No changes detected.');
    return "NO Changes"
  }
}};
