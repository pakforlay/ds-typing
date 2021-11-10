const puppeteer = require('puppeteer');
const {types} = require("./types");

// list all the words here, will pick them randomly, doesn't matter how many!
const words = [
    "hey",
    "hello",
    "sket",
    "LFG",
    "keep spirit",
    "manggattt",
    "seret bgt expnya euy",
    "jangan lupa ngopi om",
    "I LOVE THE VIBES IN THIS SPACE",
    "BURN BURN BURN",
    "good project.",
    "Come on guys,", 
    "don't miss it.",
    "Great project and congratulations to the whole team for their efforts and commitment.", 
    "Thanks for giving this opportunity. Let's go and create history in the future.",
    "A good project and a strong team in a predictable and transparent road map",
    "planned and projected.", 
    "I think in the near future we will see an unprecedented growth of this project.",
    "For sure This Projects seem really good in the future, Yooo joinn guys lesgoo",
    "Specially Thanks sir. For sharing a great project.",
    "I Hope This project Future is Bright More Success & Go To The Moon",
    "This is a really great and excellent project.", 
    "Thank you for the opportunity.", 
    "I hope this project will continue to progress and succesful join now guys",
]
let logCount = 0;

const BASE_URL = 'https://discord.com';
// change this & enter the channel url
const discord = {
    browser: null,
    page: null,

    initialize: async () => {

        discord.browser = await puppeteer.launch({
            headless: false,
            defaultViewport: null,
            args: [
                '--start-maximized'
            ]
        });

        discord.page = await discord.browser.newPage();
        console.debug('Membuka website Discord')
    },

    /**
     * username and password
     * @param {string} username
     * @param {string} password
     * @return {Promise<void>}
     */

    login: async (username, password) => {

        await discord.page.goto(BASE_URL, {
            waitUntil: 'networkidle2'
        })

        let loginButton = await discord.page.$x('//a[contains(., "Login")]');
        await discord.page.waitFor(5000)
        /* Click on login url button */
        await loginButton[1].click();

        await discord.page.waitForNavigation({
            waitUntil: 'networkidle2'
        })

        await discord.page.waitFor(100);

        /* username and password */

        await discord.page.type('input[name="email"]', username, {
            delay: 100
        });

        await discord.page.type('input[name="password"]', password, {
            delay: 110
        });
        console.debug('Login Discord')
        /* clicking on login button */

        loginButton = await discord.page.$x('//div[contains(text(), "Login")]');
        await loginButton[0].click();

        await discord.page.waitFor(10000);
        await discord.page.waitFor('//div[contains(text(), "Friends")]')

    },


    /**
     * Enter server id and channel urk
     * @param { string } serverID
     * @param { string } channelID
     * @param { number } delay
     * @return {Promise<void>}
     */
    
    likeChannelProcess: async (serverID, channelID, delay= 1) => {
            types('string', serverID);
            types('string', channelID);
            const CHANNELS_URL = `https://discord.com/channels/${serverID}/${channelID}`

            await discord.page.goto(CHANNELS_URL, {

            });
            await discord.page.waitFor(10000);

            async function initalStart () {
                await discord.page.type('span[data-slate-object="text"]', "Goo goo goo", "sket skettt", {
                    delay: 30
                });

                await discord.page.keyboard.press('Enter')

                console.debug('Memulai Auto Typing ' + new Date() )

            }

            await initalStart();


            async function randomWord () {
                const random = words[Math.floor(Math.random() * words.length)]
                await discord.page.type('span[data-slate-object="text"]', random, {
                    delay: 30
                });

                await discord.page.keyboard.press('Enter')

                logCount++

                // this logs the time the message was sent at and the total message count
                console.debug('Message sent: ' + random + ' , at: ' + new Date() + ', Pesan ke : ' + logCount )
            }

            // change the first number for minutes
            // 3 * 60 * 1000 = 180000ms === 3 minutes
            setInterval(randomWord, delay * 30 * 1000)

    }
}

module.exports = discord;
