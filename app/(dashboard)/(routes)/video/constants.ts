import * as z from 'zod'

export const formSchema = z.object({
    prompt: z.string().min(1, {
        message: "Prompt is required"
    }),
    angle: z.number()
})

// {
//     "data": "https://replicate.delivery/pbxt/Tgfb6LdKSdUbWqN2DBbiq7VTfA4EkIdvUt1eyGq8mkq5vHpiA/out.mp4",
//     "status": 200,
//     "statusText": "OK",
//     "headers": {
//         "connection": "close",
//         "content-type": "application/json",
//         "date": "Sat, 29 Jul 2023 03:48:13 GMT",
//         "keep-alive": "timeout=5",
//         "transfer-encoding": "chunked",
//         "vary": "RSC, Next-Router-State-Tree, Next-Router-Prefetch, Accept-Encoding"
//     },
//     "config": {
//         "transitional": {
//             "silentJSONParsing": true,
//             "forcedJSONParsing": true,
//             "clarifyTimeoutError": false
//         },
//         "adapter": [
//             "xhr",
//             "http"
//         ],
//         "transformRequest": [
//             null
//         ],
//         "transformResponse": [
//             null
//         ],
//         "timeout": 0,
//         "xsrfCookieName": "XSRF-TOKEN",
//         "xsrfHeaderName": "X-XSRF-TOKEN",
//         "maxContentLength": -1,
//         "maxBodyLength": -1,
//         "env": {},
//         "headers": {
//             "Accept": "application/json, text/plain, */*",
//             "Content-Type": "application/json"
//         },
//         "method": "post",
//         "url": "/api/video",
//         "data": "{\"prompt\":\"a cat in the middle of the woods\",\"angle\":0}"
//     },
//     "request": {}
// }