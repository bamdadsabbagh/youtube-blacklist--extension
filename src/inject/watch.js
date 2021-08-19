import { isWatch } from '../utils/detect-page'
import { parseYoutubeDataStaticWatch } from '../utils/parse-youtube-data-static-watch'
import { CHANNELS_BY_VIDEO_ID, INTERVAL } from '../utils/constants'
import { appendData } from '../utils/append-data'

(() => {

    setInterval (() => {

        if (!isWatch (window.location.href)) return

        const data = parseYoutubeDataStaticWatch ()

        appendData ({
            data,
            'id': CHANNELS_BY_VIDEO_ID,
            'expand': true,
        })

    }, INTERVAL)

}) ()