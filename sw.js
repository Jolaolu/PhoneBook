/*

importScripts('https://cdn.onesignal.com/sdks/OneSignalSDK.js');
importScripts('https://myroutes.io/serviceWorker.js');




'use strict';
let cacheName = 'initial-cache-v1';

//Files to save in cache
let files = [
    /*'./css/styles.scss',
    './css/slideout.css',
    './css/materialize.css',
    'https://fonts.googleapis.com/css?family=Roboto:300,400,500,700"', //caching 3rd party content
    './img/icon_mobile.png',
    './manifester.json',
    './img/background.jpg',
    './img/android.png',
    './img/instructions/selectapp.png',
    './img/sidebar.jpg',
];

//Adding `install` event listener
self.addEventListener('install', function (event) {
    event.waitUntil(
        caches.open(cacheName)
        .then(function (cache) {
            //[] of files to cache & if any of the file not present `addAll` will fail
            return cache.addAll(files)
                .then(function () {
                    return self.skipWaiting(); //To forces the waiting service worker to become the active service worker
                })
                .catch(function (error) {})
        })
    );
});

/*
  FETCH EVENT: triggered for every request made by index page, after install.
*/

/*
self.addEventListener('fetch', function (event) {});

/*
  ACTIVATE EVENT: triggered once after registering, also used to clean up caches.
*/

//Adding `activate` event listener
/*self.addEventListener('activate', function (event) {
    // console.info('Event: Activate');

    //Active Service Worker to set itself as the active on current client and all other active clients.
    return self.clients.claim();
});

//






















*/