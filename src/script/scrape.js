import axios from 'axios';
import cheerio from 'cheerio';

const MOZILLA_USERAGENT_HEADER = {
  'User-Agent': 'Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/108.0.0.0 Safari/537.36',
};

export default async function check(one, two) {
  try {
    const { data } = await axios.get('https://www.google.com', {
      headers: {
        ...MOZILLA_USERAGENT_HEADER,
      },
    });

    const $ = cheerio.load(data);
    const btnVal = $('.gNO89b').attr('value');

    console.log('result', btnVal);
  } catch (err) {
    console.error('err', err);
  }
}
