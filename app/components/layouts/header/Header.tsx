import Link from 'next/link';
import React from 'react';
// import { Button } from "@/components/ui/button"

const Header = () => {
  return (
    <div className="divide-y border-gray-200 dark:border-gray-800 border-b">
      <div className="px-4 py-3 md:py-6 lg:px-6">
        <div className="flex flex-col md:flex-row md:items-center md:justify-between">
          <div className="flex items-center justify-between">
            <Link href="/" className="text-2xl font-bold tracking-tighter">
              Rover Ticket
            </Link>
            {/* <Button variant="outline" className="md:hidden">
              Menu
            </Button> */}
          </div>
          <nav className="hidden md:flex items-center space-x-6 text-sm mt-4 md:mt-0">
            <Link
              className="font-medium text-gray-500 transition-colors hover:text-gray-900 dark:text-gray-400 dark:hover:text-gray-50"
              href="/"
            >
              Home
            </Link>
            <Link
              className="font-medium text-gray-500 transition-colors hover:text-gray-900 dark:text-gray-400 dark:hover:text-gray-50"
              href="/about"
            >
              About
            </Link>
            <Link
              className="bg-black py-2 px-4 text-white rounded-md font-medium hover:bg-gray-800 transition-colors"
              href="/bbs-posts/create"
            >
              Create Post
            </Link>
            <Link
              className="bg-white border border-black py-2 px-4 text-black rounded-md font-medium"
              href="/bbs-posts/create"
            >
              Sign In
            </Link>
          </nav>
        </div>
      </div>
    </div>
  );
};

export default Header;
