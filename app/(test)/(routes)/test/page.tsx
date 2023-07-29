import React from 'react'
import { NextApiHandler } from 'next'
import puppeteer from 'puppeteer';
import Image from 'next/image';

const handler: NextApiHandler = async (req, res) => {
    const { url } = req.query;

    const browser = await puppeteer.launch();
    const page = await browser.newPage();
    await page.goto(url as string);

    const screenshot = await page.screenshot();

    await browser.close();

    res.setHeader("Content-Type", "image/png");
    res.setHeader("Cache-Control", 'public, max-age=3600');
    res.end(screenshot)
}

interface Props {
    url: string
}

const page = () => {

    const thumbnailUrl = `/api/thumbnail?url=${encodeURIComponent('https://omni-ai.vercel.app')}`;

  return (
    <div>
        <Image 
            src={thumbnailUrl}
            height={100}
            width={100}
            alt='screenshot'
        />
    </div>
  )
}

export default page