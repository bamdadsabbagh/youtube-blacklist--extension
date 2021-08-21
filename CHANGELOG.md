# 1.0.0 (2021-08-21)


### Bug Fixes

* **assets:** icons with right YouTube color ([6d48520](https://github.com/bamdadsabbagh/youtube-blacklist--extension/commit/6d48520e7516022b60ff04e06b082248d04d60fa))
* **parseAjaxDataNext:** add short-circuit eval ([dddc948](https://github.com/bamdadsabbagh/youtube-blacklist--extension/commit/dddc94871b895965a64bcf0ea441162a77466927))
* **parsers:** add optional chaining for arrays ([116b806](https://github.com/bamdadsabbagh/youtube-blacklist--extension/commit/116b806b5b45d6ca5052602c5b3336869c76836c))
* **parsers:** add optional chaining for arrays ([2f7156f](https://github.com/bamdadsabbagh/youtube-blacklist--extension/commit/2f7156f0a81579a0483af96c939dcb5264d96fb0))
* **webpack:** add assets copy to config ([be1b613](https://github.com/bamdadsabbagh/youtube-blacklist--extension/commit/be1b613cf4c36ce0372e98a9f663b30755e5034e))
* add short circuit eval for parsers ([ca9965b](https://github.com/bamdadsabbagh/youtube-blacklist--extension/commit/ca9965b061b0ad6a305c94d55835fef99cd9a03c))
* **purgePage:** add `currentPage` argument ([c626209](https://github.com/bamdadsabbagh/youtube-blacklist--extension/commit/c6262097ce6c5b99d53c75f42c9e8e346bb12c7e))
* **state:** ensure `channelsByVideo` has been initialized before comparison ([90f02a9](https://github.com/bamdadsabbagh/youtube-blacklist--extension/commit/90f02a9f6caf0fa6f96543987a1044d4e7269c25))


### Features

* add icons ([23a3deb](https://github.com/bamdadsabbagh/youtube-blacklist--extension/commit/23a3debb07ee3f4fb97502be332796bcbc6d2062))
* **parseAjaxDataBrowse:** add `continuationItems` case ([f95c0b8](https://github.com/bamdadsabbagh/youtube-blacklist--extension/commit/f95c0b89754f7a686543ad03ee68d9718287c6a7))
* **parseAjaxDataNext:** add new parsing case ([028df35](https://github.com/bamdadsabbagh/youtube-blacklist--extension/commit/028df355677b10458596b8477a374a7bc9de5aba))
* **parseAjaxDataSearch:** add secondary contents from continuationItems + optional chaining for arrays ([015ae00](https://github.com/bamdadsabbagh/youtube-blacklist--extension/commit/015ae00e7dfd1c01c4da9e08e0b19ca084e16ae3))
* **popup:** add relative sizes to styles + disable `textarea` resize ([82d9717](https://github.com/bamdadsabbagh/youtube-blacklist--extension/commit/82d9717b99f721496da630389e4d263bc0743851))
* add `channelByVideo` to state + various improvements ([2c04869](https://github.com/bamdadsabbagh/youtube-blacklist--extension/commit/2c048695dc9829f8c93c053665fa041a07064296))
* add `popup` + add dynamic blacklist in browser storage + add close button to thumbnails + ([1f00624](https://github.com/bamdadsabbagh/youtube-blacklist--extension/commit/1f00624c2954e4eff1d74003a4c7557014426e9c))
* add ajax parsers + clean various dead code + homogenize selectors in parsers preparing for code re-use ([64451df](https://github.com/bamdadsabbagh/youtube-blacklist--extension/commit/64451df40b8c085d545404eb0c2090ce0397dbd1))
* add parser for `endScreenVideoRenderer` ([cdc772a](https://github.com/bamdadsabbagh/youtube-blacklist--extension/commit/cdc772adc0647c6bcf31c07340fbea7bf8d06817))
* **parseAjaxDataNext:** add `continuationItems` case ([7e30a33](https://github.com/bamdadsabbagh/youtube-blacklist--extension/commit/7e30a33aaab57ad6285a25f20defaefcb47e9ec3))
* add close button to thumbnails ([7c8a4b5](https://github.com/bamdadsabbagh/youtube-blacklist--extension/commit/7c8a4b516df4dea2ad519069b76da873c19d7015))
* add reload page logic to refresh static props (for lack of a better solution) ([29330e7](https://github.com/bamdadsabbagh/youtube-blacklist--extension/commit/29330e7bc3b09a1c74b2c6e9a2e43f7bcf721321))
* add static data parser /results page + extract close button code ([b7b742d](https://github.com/bamdadsabbagh/youtube-blacklist--extension/commit/b7b742dea5b668126ac715b804bcc436ba7eb49f))
* add static parser for YouTube home page + better code re-use + various ([f7c96ca](https://github.com/bamdadsabbagh/youtube-blacklist--extension/commit/f7c96ca7392a1956b2b84a7787625e20ff522b61))
* implement fetch interceptor with rewrite-fetch.js ([48e9513](https://github.com/bamdadsabbagh/youtube-blacklist--extension/commit/48e9513cba1017cc0ec7a36f1a93ffc0b583008a))
* static parsing, close buttons, static blacklisting is now covered ([c85d665](https://github.com/bamdadsabbagh/youtube-blacklist--extension/commit/c85d665eddede172a9b413a24558a864ab5a9ebf))
* **defineData:** add case when user is logged in (data structure is different) ([19134f9](https://github.com/bamdadsabbagh/youtube-blacklist--extension/commit/19134f9e01764db3ea420d14bda8e12612a31156))
* init ([4b2697e](https://github.com/bamdadsabbagh/youtube-blacklist--extension/commit/4b2697e0376504da58dc98fcd77945db2be51d7b))
* wip ([598f32d](https://github.com/bamdadsabbagh/youtube-blacklist--extension/commit/598f32de6d2478ff8c2f603435ddbca63feff7f2))
* work in progress ([779093a](https://github.com/bamdadsabbagh/youtube-blacklist--extension/commit/779093a66cfb5b2e763c777eb22bacfbd40c5451))


### Performance Improvements

* **parseAjaxData:** add more debugging console output ([fe174f5](https://github.com/bamdadsabbagh/youtube-blacklist--extension/commit/fe174f5a21c7a918d653ec68a14f0ea4f1708810))
* add existing data check before appending + add debugging console outputs ([475ffef](https://github.com/bamdadsabbagh/youtube-blacklist--extension/commit/475ffef55a6696d4686b6643770bdce3a0a3cb1b))
* better debugging console output ([03a2d2d](https://github.com/bamdadsabbagh/youtube-blacklist--extension/commit/03a2d2d2ddef6d6f1cc8385ea9770ef4bb1d34ac))
* rename `parseAjaxDataHome` to `parseAjaxDataBrowse` ([3acf72b](https://github.com/bamdadsabbagh/youtube-blacklist--extension/commit/3acf72b76112c6fa0ba9b946c371b4c7f61e693f))
* **appendCloseButtons:** get elements depending on `currentPage` ([9b6fa14](https://github.com/bamdadsabbagh/youtube-blacklist--extension/commit/9b6fa14b28fe36fe2cce2f27e361b95994295ff8))
* **appendCloseButtons:** improve wording ([30ae45e](https://github.com/bamdadsabbagh/youtube-blacklist--extension/commit/30ae45ec7ea9fd4b3d38a5c136aeaa62580abc72))
* **deps:** update to latest ([731a905](https://github.com/bamdadsabbagh/youtube-blacklist--extension/commit/731a9053807abe1d65de2cd7d92980a9c0438ae9))
* **deps:** upgrade webpack to latest ([d48fbab](https://github.com/bamdadsabbagh/youtube-blacklist--extension/commit/d48fbab97a48a6cdab65c8ca638ba066261fb175))
* **detects:** extract page detects to their own files ([bfb686f](https://github.com/bamdadsabbagh/youtube-blacklist--extension/commit/bfb686f12cd9f2a81d7a30a25df9ccf7cf9a7389))
* **executeOnHrefChange:** replace `interval` options with `INTERVAL` constant ([ca51128](https://github.com/bamdadsabbagh/youtube-blacklist--extension/commit/ca51128f792f617964a7ea10961aac60b1dadbae))
* **getVideoElements:** fetch elements conditionally based on `currentPage` ([56c370b](https://github.com/bamdadsabbagh/youtube-blacklist--extension/commit/56c370b02a316624c26c00ede14ceb3a11297aef))
* **injectContentPages:** simplify injection for specific pages ([0daf1b8](https://github.com/bamdadsabbagh/youtube-blacklist--extension/commit/0daf1b8242e50d9bfa27a8d2fea60ad7ab4e2771))
* **interceptFetch:** remove todo (which was caused by an uncaught error within `parseAjaxDataSearch`) ([6c2c559](https://github.com/bamdadsabbagh/youtube-blacklist--extension/commit/6c2c55914c7111e7477e319fe2767a86777a4284))
* **Pages:** rename setters for actions and injects ([0f49d1c](https://github.com/bamdadsabbagh/youtube-blacklist--extension/commit/0f49d1ca6145da77306caa0af525b65a27422668))
* **parseAjaxData:** remove repetitions ([3802cf0](https://github.com/bamdadsabbagh/youtube-blacklist--extension/commit/3802cf03619866c951c87000c92819a5f7ecd29f))
* **state:** remove state `channelByVideo` ([4713e11](https://github.com/bamdadsabbagh/youtube-blacklist--extension/commit/4713e1139c2bfded244a2ed6cd2b83549f197381))
* add `RETRY` global delay ([36f5dde](https://github.com/bamdadsabbagh/youtube-blacklist--extension/commit/36f5ddea034b31f2250204e410c09908ff5c0df3))
* add comments for ajax parser (match endpoints and client routes) ([e0d1943](https://github.com/bamdadsabbagh/youtube-blacklist--extension/commit/e0d19435ae9deb94389c15c5fa38be6a94681202))
* debugging log ([24dd4e4](https://github.com/bamdadsabbagh/youtube-blacklist--extension/commit/24dd4e4bdfa67f0b6ed83fff7df8816f733c1f90))
* extract shelfRenderer parser to its own file ([895ce45](https://github.com/bamdadsabbagh/youtube-blacklist--extension/commit/895ce45b7d55ce326f7b567c35d796729a1dd0e4))
* remove unused files ([aea07b4](https://github.com/bamdadsabbagh/youtube-blacklist--extension/commit/aea07b487d80e3f6592b736aaa63c7814bcc65ef))
* rename `execute-on-*` to `on-new-*` ([ad37e66](https://github.com/bamdadsabbagh/youtube-blacklist--extension/commit/ad37e66b32199df4d23d3177217281fe87a9928f))
* small QoL ([8a8b15c](https://github.com/bamdadsabbagh/youtube-blacklist--extension/commit/8a8b15c47f994673db108ede62b020452ef1c141))
* **state:** add `currentPage` to state ([6ba96ba](https://github.com/bamdadsabbagh/youtube-blacklist--extension/commit/6ba96bafd52dd64951f33eb0f3e1800e6d20f261))
* rename `parse-data` to `define-data` ([a48b462](https://github.com/bamdadsabbagh/youtube-blacklist--extension/commit/a48b4624f52ab521cede882ffea5ae55ed2ee2d2))
* rename `rewriteFetch` to `interceptFetch` ([f085d04](https://github.com/bamdadsabbagh/youtube-blacklist--extension/commit/f085d04fbef460521c11a43b49b09a9fe8b498ec))
* rename parsers and setters ([08f3556](https://github.com/bamdadsabbagh/youtube-blacklist--extension/commit/08f35565fe876f787807d8d4555356392c5cdf6d))
* **parseYoutubeDataAjax:** add dummy console.log while work in progress ([4b633a4](https://github.com/bamdadsabbagh/youtube-blacklist--extension/commit/4b633a452b45ca104f9ab71b2a743a89c4650cf0))