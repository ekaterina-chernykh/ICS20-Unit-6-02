// Copyright (c) 2022 Ekaterina All rights reserved
//
// Created by: Ekaterina
// Created on: Oct 2022
// This file contains the JS functions for index.html

"use strict"

/**
 * Check servie worker.
 */
if (navigator.serviceWorker) {
  navigator.serviceWorker.register("/ICS20-Unit-6-02/sw.js", {
    scope: "/ICS20-Unit-6-02/",
  })
}

/**
 * This function displays an alert.
 */
function myButtonClickedCookie() {
  if (localStorage.hits) {
    localStorage.hits++
  } else {
    localStorage.hits = 1
  }

  document.getElementById("amount-of-cookies").innerHTML =
    "Your cookie count is: " + localStorage.hits
}
