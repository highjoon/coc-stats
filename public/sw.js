if(!self.define){let e,s={};const a=(a,i)=>(a=new URL(a+".js",i).href,s[a]||new Promise((s=>{if("document"in self){const e=document.createElement("script");e.src=a,e.onload=s,document.head.appendChild(e)}else e=a,importScripts(a),s()})).then((()=>{let e=s[a];if(!e)throw new Error(`Module ${a} didn’t register its module`);return e})));self.define=(i,o)=>{const r=e||("document"in self?document.currentScript.src:"")||location.href;if(s[r])return;let c={};const n=e=>a(e,r),t={module:{uri:r},exports:c,require:n};s[r]=Promise.all(i.map((e=>t[e]||n(e)))).then((e=>(o(...e),c)))}}define(["./workbox-588899ac"],(function(e){"use strict";importScripts(),self.skipWaiting(),e.clientsClaim(),e.precacheAndRoute([{url:"/_next/static/0wIo6CvdztZRmimzC0r-A/_buildManifest.js",revision:"6f681b33d96e6ef1a4fbdee227e719ed"},{url:"/_next/static/0wIo6CvdztZRmimzC0r-A/_ssgManifest.js",revision:"b6652df95db52feb4daf4eca35380933"},{url:"/_next/static/chunks/346.15e9840728c4d999.js",revision:"15e9840728c4d999"},{url:"/_next/static/chunks/518.7fa905c40e4caed2.js",revision:"7fa905c40e4caed2"},{url:"/_next/static/chunks/676.c9c2f42ccdf72ea6.js",revision:"c9c2f42ccdf72ea6"},{url:"/_next/static/chunks/721.3e4aab0d8a27201c.js",revision:"3e4aab0d8a27201c"},{url:"/_next/static/chunks/framework-7751730b10fa0f74.js",revision:"7751730b10fa0f74"},{url:"/_next/static/chunks/main-2c2faca760eb3444.js",revision:"2c2faca760eb3444"},{url:"/_next/static/chunks/pages/404-caf06e1ba9f15fc0.js",revision:"caf06e1ba9f15fc0"},{url:"/_next/static/chunks/pages/_app-f045bf1853ebb728.js",revision:"f045bf1853ebb728"},{url:"/_next/static/chunks/pages/_error-e4f561a102d9bb14.js",revision:"e4f561a102d9bb14"},{url:"/_next/static/chunks/pages/clans/%5Btag%5D-6f04c08d15bd84a9.js",revision:"6f04c08d15bd84a9"},{url:"/_next/static/chunks/pages/index-e31f9ca7e22ec4e3.js",revision:"e31f9ca7e22ec4e3"},{url:"/_next/static/chunks/pages/players/%5Btag%5D-bc66ceaf0da58575.js",revision:"bc66ceaf0da58575"},{url:"/_next/static/chunks/pages/rankings/%5B...slug%5D-e5b887499a9c433e.js",revision:"e5b887499a9c433e"},{url:"/_next/static/chunks/polyfills-c67a75d1b6f99dc8.js",revision:"837c0df77fd5009c9e46d446188ecfd0"},{url:"/_next/static/chunks/webpack-4eaa81a0849f5bed.js",revision:"4eaa81a0849f5bed"},{url:"/_next/static/css/fd1005c0b59efcfa.css",revision:"fd1005c0b59efcfa"},{url:"/assets/icons/apple-touch-icon-114x114.png",revision:"bceae3299aed9b397c95fa42c5dcae34"},{url:"/assets/icons/apple-touch-icon-120x120.png",revision:"f931a6903d9d4bf488d71691b863e4a3"},{url:"/assets/icons/apple-touch-icon-144x144.png",revision:"69a3d0729a0813358fef9937d04c6e0d"},{url:"/assets/icons/apple-touch-icon-152x152.png",revision:"243183c377a3df6447d999d8d2d724c8"},{url:"/assets/icons/apple-touch-icon-57x57.png",revision:"2cebd8038f2ceab2cf811d67c11c5a61"},{url:"/assets/icons/apple-touch-icon-60x60.png",revision:"cf05288e9a777b869e03abd7f64294d1"},{url:"/assets/icons/apple-touch-icon-72x72.png",revision:"295baba692bdd6018ffd514bcdf9d917"},{url:"/assets/icons/apple-touch-icon-76x76.png",revision:"d99587faeae25c179280550bffa057b9"},{url:"/assets/icons/favicon-128.png",revision:"579826d9c509f0f31d590d924bdb8537"},{url:"/assets/icons/favicon-16x16.png",revision:"2128672d565ce672af8e85d82e79ee36"},{url:"/assets/icons/favicon-196x196.png",revision:"7fc0572fcbadb1cca90d83b2b918b608"},{url:"/assets/icons/favicon-32x32.png",revision:"e95fae46241879320787f65376a14914"},{url:"/assets/icons/favicon-96x96.png",revision:"7075094eb3113f0d12733040d27e1539"},{url:"/assets/icons/favicon.ico",revision:"33c96644fe572631c06e2ac73a5c2ccb"},{url:"/assets/icons/logo.webp",revision:"e8c7792aeee42c02e5e82ae95791fc46"},{url:"/assets/icons/mstile-144x144.png",revision:"69a3d0729a0813358fef9937d04c6e0d"},{url:"/assets/icons/mstile-150x150.png",revision:"943b3105fe54ff69b5e986204a7204aa"},{url:"/assets/icons/mstile-310x150.png",revision:"08eb9d163d65b5324d4e122a67f2e3f0"},{url:"/assets/icons/mstile-310x310.png",revision:"ae0da9761c3bedc8e3bed6c4c6a4c999"},{url:"/assets/icons/mstile-70x70.png",revision:"579826d9c509f0f31d590d924bdb8537"},{url:"/assets/images/logo/headerLogo.webp",revision:"c8589440c22efc4108b4346e071c5dea"},{url:"/assets/images/logo/titleLogo.webp",revision:"0e97ffd91bf95ed6cd0d09e7a98c8855"},{url:"/assets/images/notFound.png",revision:"af4c1ceb6a9bf491e829d201ea2a02a5"},{url:"/assets/images/spells/BatSpell.webp",revision:"72f0b6e9fe64e815819bb7daf664d75f"},{url:"/assets/images/spells/CloneSpell.webp",revision:"15317b4d2ee2c8071124d827fe34723f"},{url:"/assets/images/spells/EarthquakeSpell.webp",revision:"866b5d38f9bf8598656a8d285b20ff93"},{url:"/assets/images/spells/FreezeSpell.webp",revision:"5c48ffd9dc06d3853c8842c63235de42"},{url:"/assets/images/spells/HasteSpell.webp",revision:"9de8b46cb9acf372564b59e66d0637c3"},{url:"/assets/images/spells/HealingSpell.webp",revision:"33727bb7d16c6922962ab5c133d8b8e7"},{url:"/assets/images/spells/InvisibilitySpell.webp",revision:"0ff30fb02215d8ac302bf7ac5a5ea3a6"},{url:"/assets/images/spells/JumpSpell.webp",revision:"7aa2c90e2a447832de898863dd8cce64"},{url:"/assets/images/spells/LightningSpell.webp",revision:"21b8d3397e50d6c26d228d446cd8a492"},{url:"/assets/images/spells/PoisonSpell.webp",revision:"eaae86d9895ab6e302d838b2213d4331"},{url:"/assets/images/spells/RageSpell.webp",revision:"85fe6c028345791db7c8a33962ad7b27"},{url:"/assets/images/spells/RecallSpell.webp",revision:"21e3f7b56bdaed1c050c7160c5e7c5f6"},{url:"/assets/images/spells/SkeletonSpell.webp",revision:"edca91ab4191da91aaf4ba93eec2915b"},{url:"/assets/images/troops/builderBase/BabyDragon.webp",revision:"6c8812a1864d4399cdd44c441d593ba6"},{url:"/assets/images/troops/builderBase/BetaMinion.webp",revision:"76c4e062199f205853a6451860d2716b"},{url:"/assets/images/troops/builderBase/Bomber.webp",revision:"15e7ca8f7c9a7f7f5581051d9fa961ef"},{url:"/assets/images/troops/builderBase/BoxerGiant.webp",revision:"22a69b4ab0b533c0fb1d3b8a1a37f938"},{url:"/assets/images/troops/builderBase/CannonCart.webp",revision:"9b6a934705e68ea8b3a953570e721e23"},{url:"/assets/images/troops/builderBase/DropShip.webp",revision:"ced227075ebf71deadb0fc7eaef39144"},{url:"/assets/images/troops/builderBase/HogGlider.webp",revision:"7cdc8d1ac3a501691b43eca4211267d4"},{url:"/assets/images/troops/builderBase/NightWitch.webp",revision:"5d904e6373aeb18e0b07a5869b43019a"},{url:"/assets/images/troops/builderBase/RagedBarbarian.webp",revision:"8849b04d76835dd4fdf2ed138b756e68"},{url:"/assets/images/troops/builderBase/SneakyArcher.webp",revision:"759c9adaf770d44478064d87431fb396"},{url:"/assets/images/troops/builderBase/SuperPEKKA.webp",revision:"4df9477bfec0822f2e3467459ec45fa5"},{url:"/assets/images/troops/heroes/ArcherQueen.webp",revision:"817238c584763d7d027be7dcbea951fb"},{url:"/assets/images/troops/heroes/BarbarianKing.webp",revision:"b5a57e210597c2475eb997761a585c2f"},{url:"/assets/images/troops/heroes/BattleMachine.webp",revision:"e2a04df07870f2dd90a67e13deb990e8"},{url:"/assets/images/troops/heroes/GrandWarden.webp",revision:"ba2f156fe85abd2d17a8592fc5dfb174"},{url:"/assets/images/troops/heroes/RoyalChampion.webp",revision:"1ead33040748b5827aea101b50babd79"},{url:"/assets/images/troops/home/Archer.webp",revision:"e1ae5b95d35e170bc8efcbd8bd6ec7ac"},{url:"/assets/images/troops/home/BabyDragon.webp",revision:"9f78a4735668c1bb0d08da9ec68a8a0e"},{url:"/assets/images/troops/home/Balloon.webp",revision:"a618adf2b990bd53959c7c9257ef8b84"},{url:"/assets/images/troops/home/Barbarian.webp",revision:"a72ce704e4930a8c9bdb9592c2d50285"},{url:"/assets/images/troops/home/BattleBlimp.webp",revision:"7955f04d4ddce364d038b3dbda2e68f8"},{url:"/assets/images/troops/home/BattleDrill.webp",revision:"b12c8132da45aacaad00a1baf020837e"},{url:"/assets/images/troops/home/Bowler.webp",revision:"bdbaa96756874dd2d28427b2cc9b1d99"},{url:"/assets/images/troops/home/Diggy.webp",revision:"d1a6ac307401d1e38aa3e8ca17d0a2fa"},{url:"/assets/images/troops/home/Dragon.webp",revision:"74066849ab29925dc7440d8740a8b3a9"},{url:"/assets/images/troops/home/DragonRider.webp",revision:"3edb04dad603aa4cfe30e764a42d09f6"},{url:"/assets/images/troops/home/ElectroDragon.webp",revision:"2361788c13ccc3c6eb4e9a6561380db9"},{url:"/assets/images/troops/home/ElectroOwl.webp",revision:"5b9d18e592258a7dad232537c53ba2ae"},{url:"/assets/images/troops/home/ElectroTitan.webp",revision:"4e4922530f9f6a6d7f515b652b24366a"},{url:"/assets/images/troops/home/FlameFlinger.webp",revision:"a78cac19f20f03eacc1f04da206664f1"},{url:"/assets/images/troops/home/Frosty.webp",revision:"875102fa5c0d7c973823a53c9645f217"},{url:"/assets/images/troops/home/Giant.webp",revision:"6446e478ed91e328ad9f3c808a8ce72f"},{url:"/assets/images/troops/home/Goblin.webp",revision:"0ca5dfb0adae5915a7cd7862fa84c914"},{url:"/assets/images/troops/home/Golem.webp",revision:"395c385d2871b156c05ee4daff3819c4"},{url:"/assets/images/troops/home/Headhunter.webp",revision:"ab04a6bfe6bfd54033edb1bca9395a13"},{url:"/assets/images/troops/home/Healer.webp",revision:"f529bf404a8013018b5043e3d7da6f6e"},{url:"/assets/images/troops/home/HogRider.webp",revision:"7cbceb7fed32c9f65fcd7bfdd1e15e3d"},{url:"/assets/images/troops/home/IceGolem.webp",revision:"de0055a80b5840620d77ddde89c5178f"},{url:"/assets/images/troops/home/IceHound.webp",revision:"7f7c9bcdf1c1b0744fade78957dbe116"},{url:"/assets/images/troops/home/InfernoDragon.webp",revision:"8898796cbad44a26dafee70e7bcbfdf8"},{url:"/assets/images/troops/home/LASSI.webp",revision:"e5236912aa2472af05fb9bea4e571227"},{url:"/assets/images/troops/home/LavaHound.webp",revision:"6864bba5941e6aa4b4a82925775741eb"},{url:"/assets/images/troops/home/LogLauncher.webp",revision:"ea451a5d83aed4f32b7dbaa571e759d7"},{url:"/assets/images/troops/home/MightyYak.webp",revision:"b7be86b2330929660f62a79c37d4f9f3"},{url:"/assets/images/troops/home/Miner.webp",revision:"58f763400f674e14f0e386225736b88e"},{url:"/assets/images/troops/home/Minion.webp",revision:"4940c4ab30df074c7b07567b3fdc4093"},{url:"/assets/images/troops/home/PEKKA.webp",revision:"d5e10f22d4704158fe6240cda284c909"},{url:"/assets/images/troops/home/Phoenix.webp",revision:"cd8d4200b1e4cbd0746a23e254adca52"},{url:"/assets/images/troops/home/PoisonLizard.webp",revision:"86366db03dae1c0323aa7f3cace05375"},{url:"/assets/images/troops/home/RocketBalloon.webp",revision:"5810a91c63bcf11fd06154a0e22300c2"},{url:"/assets/images/troops/home/SiegeBarracks.webp",revision:"be8086bcaa80c6a971a3790083a9181a"},{url:"/assets/images/troops/home/SneakyGoblin.webp",revision:"a84685939b00c3910a921bee398e4580"},{url:"/assets/images/troops/home/StoneSlammer.webp",revision:"034477104c5b78dfc17681fdb561ca40"},{url:"/assets/images/troops/home/SuperArcher.webp",revision:"78543a74efde7113afec013e5fc86a81"},{url:"/assets/images/troops/home/SuperBarbarian.webp",revision:"e017c8f466c7ff464ef3650bd087050d"},{url:"/assets/images/troops/home/SuperBowler.webp",revision:"bbc10c7bed9e0e2f050fefba866a07a0"},{url:"/assets/images/troops/home/SuperDragon.webp",revision:"d000a435bc7e573aa503b338d41e940b"},{url:"/assets/images/troops/home/SuperGiant.webp",revision:"a652cdcef5587007e444a1b51e840a60"},{url:"/assets/images/troops/home/SuperMinion.webp",revision:"7612f3ff5e2cb0fbbc4bcc15e81678ad"},{url:"/assets/images/troops/home/SuperValkyrie.webp",revision:"6206b4b3b0e88e55ff686f4e7c1ee8b5"},{url:"/assets/images/troops/home/SuperWallBreaker.webp",revision:"40553c8b96a7d2ed1c84e0de2593da25"},{url:"/assets/images/troops/home/SuperWitch.webp",revision:"43aa3a0a8870a5fb5308ceb3b4661d0a"},{url:"/assets/images/troops/home/SuperWizard.webp",revision:"d27a62c9cae82eb523a87b2562f3d395"},{url:"/assets/images/troops/home/Unicorn.webp",revision:"4d3fd9fa08fcf46acd1d848820b734a5"},{url:"/assets/images/troops/home/Valkyrie.webp",revision:"6228ce68c9b69c415cba18d99ffcf873"},{url:"/assets/images/troops/home/WallBreaker.webp",revision:"b07e91135b7672e6185eb5d9bd15be94"},{url:"/assets/images/troops/home/WallWrecker.webp",revision:"e27a2d8057b90b75415f4e1998b06de6"},{url:"/assets/images/troops/home/Witch.webp",revision:"ff8ffc34d44716bf4e0c90173fead28a"},{url:"/assets/images/troops/home/Wizard.webp",revision:"85422dd5bd119398c9c71fd3de286095"},{url:"/assets/images/troops/home/Yeti.webp",revision:"a69f606948b7abd25c4f96635d0488ce"},{url:"/manifest.json",revision:"91a7b4be3e8390994b3db14031e39d53"}],{ignoreURLParametersMatching:[]}),e.cleanupOutdatedCaches(),e.registerRoute("/",new e.NetworkFirst({cacheName:"start-url",plugins:[{cacheWillUpdate:async({request:e,response:s,event:a,state:i})=>s&&"opaqueredirect"===s.type?new Response(s.body,{status:200,statusText:"OK",headers:s.headers}):s}]}),"GET"),e.registerRoute(/^https:\/\/fonts\.(?:gstatic)\.com\/.*/i,new e.CacheFirst({cacheName:"google-fonts-webfonts",plugins:[new e.ExpirationPlugin({maxEntries:4,maxAgeSeconds:31536e3})]}),"GET"),e.registerRoute(/^https:\/\/fonts\.(?:googleapis)\.com\/.*/i,new e.StaleWhileRevalidate({cacheName:"google-fonts-stylesheets",plugins:[new e.ExpirationPlugin({maxEntries:4,maxAgeSeconds:604800})]}),"GET"),e.registerRoute(/\.(?:eot|otf|ttc|ttf|woff|woff2|font.css)$/i,new e.StaleWhileRevalidate({cacheName:"static-font-assets",plugins:[new e.ExpirationPlugin({maxEntries:4,maxAgeSeconds:604800})]}),"GET"),e.registerRoute(/\.(?:jpg|jpeg|gif|png|svg|ico|webp)$/i,new e.StaleWhileRevalidate({cacheName:"static-image-assets",plugins:[new e.ExpirationPlugin({maxEntries:64,maxAgeSeconds:86400})]}),"GET"),e.registerRoute(/\/_next\/image\?url=.+$/i,new e.StaleWhileRevalidate({cacheName:"next-image",plugins:[new e.ExpirationPlugin({maxEntries:64,maxAgeSeconds:86400})]}),"GET"),e.registerRoute(/\.(?:mp3|wav|ogg)$/i,new e.CacheFirst({cacheName:"static-audio-assets",plugins:[new e.RangeRequestsPlugin,new e.ExpirationPlugin({maxEntries:32,maxAgeSeconds:86400})]}),"GET"),e.registerRoute(/\.(?:mp4)$/i,new e.CacheFirst({cacheName:"static-video-assets",plugins:[new e.RangeRequestsPlugin,new e.ExpirationPlugin({maxEntries:32,maxAgeSeconds:86400})]}),"GET"),e.registerRoute(/\.(?:js)$/i,new e.StaleWhileRevalidate({cacheName:"static-js-assets",plugins:[new e.ExpirationPlugin({maxEntries:32,maxAgeSeconds:86400})]}),"GET"),e.registerRoute(/\.(?:css|less)$/i,new e.StaleWhileRevalidate({cacheName:"static-style-assets",plugins:[new e.ExpirationPlugin({maxEntries:32,maxAgeSeconds:86400})]}),"GET"),e.registerRoute(/\/_next\/data\/.+\/.+\.json$/i,new e.StaleWhileRevalidate({cacheName:"next-data",plugins:[new e.ExpirationPlugin({maxEntries:32,maxAgeSeconds:86400})]}),"GET"),e.registerRoute(/\.(?:json|xml|csv)$/i,new e.NetworkFirst({cacheName:"static-data-assets",plugins:[new e.ExpirationPlugin({maxEntries:32,maxAgeSeconds:86400})]}),"GET"),e.registerRoute((({url:e})=>{if(!(self.origin===e.origin))return!1;const s=e.pathname;return!s.startsWith("/api/auth/")&&!!s.startsWith("/api/")}),new e.NetworkFirst({cacheName:"apis",networkTimeoutSeconds:10,plugins:[new e.ExpirationPlugin({maxEntries:16,maxAgeSeconds:86400})]}),"GET"),e.registerRoute((({url:e})=>{if(!(self.origin===e.origin))return!1;return!e.pathname.startsWith("/api/")}),new e.NetworkFirst({cacheName:"others",networkTimeoutSeconds:10,plugins:[new e.ExpirationPlugin({maxEntries:32,maxAgeSeconds:86400})]}),"GET"),e.registerRoute((({url:e})=>!(self.origin===e.origin)),new e.NetworkFirst({cacheName:"cross-origin",networkTimeoutSeconds:10,plugins:[new e.ExpirationPlugin({maxEntries:32,maxAgeSeconds:3600})]}),"GET")}));
