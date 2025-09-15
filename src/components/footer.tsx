import React from "react";
import { Link, Divider } from "@heroui/react";
import { Icon } from "@iconify/react";

export const Footer: React.FC = () => {
  return (
    <footer className="bg-content3 text-foreground pt-16 pb-8">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          <div>
            <div className="flex items-center gap-2 mb-4">
              <Icon icon="lucide:flame" className="text-secondary text-2xl" />
              <p className="font-bold text-inherit text-lg">
                <span className="text-primary">Fire</span> <span className="text-secondary">Grill</span>
              </p>
            </div>
            <p className="text-foreground-500 mb-4">
              Casual venue serving up a variety of Asian dishes including vegan and vegetarian options.
            </p>
            <div className="flex gap-4">
              <Link href="#" aria-label="Facebook">
                <Icon icon="lucide:facebook" className="text-xl text-foreground-500 hover:text-primary transition-colors" />
              </Link>
              <Link href="#" aria-label="Instagram">
                <Icon icon="lucide:instagram" className="text-xl text-foreground-500 hover:text-primary transition-colors" />
              </Link>
              <Link href="#" aria-label="Twitter">
                <Icon icon="lucide:twitter" className="text-xl text-foreground-500 hover:text-primary transition-colors" />
              </Link>
              <Link href="#" aria-label="Yelp">
                <Icon icon="logos:yelp-icon" className="text-xl text-foreground-500 hover:text-primary transition-colors" />
              </Link>
            </div>
          </div>
          
          <div>
            <h3 className="font-semibold text-lg mb-4">Quick Links</h3>
            <ul className="space-y-2">
              <li>
                <Link href="#" color="foreground" className="hover:text-primary transition-colors">Home</Link>
              </li>
              <li>
                <Link href="#about" color="foreground" className="hover:text-primary transition-colors">About Us</Link>
              </li>
              <li>
                <Link href="#menu" color="foreground" className="hover:text-primary transition-colors">Menu</Link>
              </li>
              <li>
                <Link href="#gallery" color="foreground" className="hover:text-primary transition-colors">Gallery</Link>
              </li>
              <li>
                <Link href="#location" color="foreground" className="hover:text-primary transition-colors">Hours & Location</Link>
              </li>
              <li>
                <Link href="#reviews" color="foreground" className="hover:text-primary transition-colors">Reviews</Link>
              </li>
            </ul>
          </div>
          
          <div>
            <h3 className="font-semibold text-lg mb-4">Contact Us</h3>
            <ul className="space-y-3">
              <li className="flex items-start">
                <Icon icon="lucide:map-pin" className="mr-2 mt-1 text-primary" />
                <span>293 King St Apartment 1, Charleston, SC 29401</span>
              </li>
              <li className="flex items-center">
                <Icon icon="lucide:phone" className="mr-2 text-primary" />
                <span>(123) 456-7890</span>
              </li>
              <li className="flex items-center">
                <Icon icon="lucide:mail" className="mr-2 text-primary" />
                <span>info@firegrillasiafusion.com</span>
              </li>
            </ul>
          </div>
          
          <div>
            <h3 className="font-semibold text-lg mb-4">Hours</h3>
            <ul className="space-y-2">
              <li className="flex justify-between">
                <span>Monday - Saturday</span>
                <span>11 AM–10 PM</span>
              </li>
              <li className="flex justify-between">
                <span>Sunday</span>
                <span>11 AM–9:30 PM</span>
              </li>
            </ul>
            <div className="mt-4 p-3 bg-secondary/10 rounded-lg">
              <h4 className="font-medium text-secondary mb-1">Order Online</h4>
              <p className="text-sm mb-2">Available for pickup and delivery</p>
              <div className="flex gap-2">
                <Link href="#" className="text-xs bg-secondary text-white px-2 py-1 rounded-full">
                  DoorDash
                </Link>
                <Link href="#" className="text-xs bg-secondary text-white px-2 py-1 rounded-full">
                  UberEats
                </Link>
                <Link href="#" className="text-xs bg-secondary text-white px-2 py-1 rounded-full">
                  GrubHub
                </Link>
              </div>
            </div>
          </div>
        </div>
        
        <Divider className="my-8" />
        
        <div className="text-center text-sm text-foreground-500">
          <p>© {new Date().getFullYear()} Fire Grill Asian Fusion. All rights reserved.</p>
          <div className="mt-2 flex justify-center gap-4">
            <Link href="#" color="foreground" className="text-xs hover:underline">Privacy Policy</Link>
            <Link href="#" color="foreground" className="text-xs hover:underline">Terms of Service</Link>
            <Link href="#" color="foreground" className="text-xs hover:underline">Accessibility</Link>
          </div>
        </div>
      </div>
    </footer>
  );
};