import React from "react";

function Menu() {
  return (
    <div>
      <ul class="flex flex-wrap items-center justify-center text-gray-900 dark:text-white">
        <li>
          <a href="#" class="me-4 hover:underline md:me-6 ">
            About
          </a>
        </li>
        <li>
          <a href="#" class="me-4 hover:underline md:me-6">
            Premium
          </a>
        </li>
        <li>
          <a href="#" class="me-4 hover:underline md:me-6 ">
            Campaigns
          </a>
        </li>
        <li>
          <a href="#" class="me-4 hover:underline md:me-6">
            Blog
          </a>
        </li>
        <li>
          <a href="#" class="me-4 hover:underline md:me-6">
            Affiliate Program
          </a>
        </li>
        <li>
          <a href="#" class="me-4 hover:underline md:me-6">
            FAQs
          </a>
        </li>
        <li>
          <a href="#" class="me-4 hover:underline md:me-6">
            Contact
          </a>
        </li>
      </ul>
    </div>
  );
}

export default Menu;
